// ============================================
// Semana 18 — Ejercicio 02: Schema + Document Versioning
// SOLUCIÓN
// ============================================

// ============================================
// PASO 1: Detectar coexistencia de versiones
// ============================================

db.contacts.countDocuments({ schemaVersion: { $exists: false } })
// → 2

db.contacts.countDocuments({ schemaVersion: NumberInt(2) })
// → 2

db.contacts.findOne({ schemaVersion: { $exists: false } })
db.contacts.findOne({ schemaVersion: NumberInt(2) })


// ============================================
// PASO 2: Migración lazy batch
// ============================================

db.contacts.updateMany(
  { schemaVersion: { $exists: false } },
  [
    {
      $set: {
        schemaVersion: NumberInt(2),
        phones: { $cond: [{ $ifNull: ["$phone", false] }, ["$phone"], []] },
        address: {
          street: "$address",
          city: "desconocido",
          country: "desconocido"
        },
        updatedAt: "$$NOW"
      }
    },
    { $unset: "phone" }
  ]
)

db.contacts.countDocuments({ schemaVersion: { $exists: false } })
// → 0 (todos migrados a v2)


// ============================================
// PASO 3: Document Versioning — archivar al actualizar
// ============================================

const current = db.catalog_items.findOne({ itemId: "itm-001" })

db.catalog_items_history.insertOne({
  itemId: current.itemId,
  version: current.currentVersion,
  name: current.name,
  price: current.price,
  stock: current.stock,
  archivedAt: new Date()
})

db.catalog_items.updateOne(
  { itemId: "itm-001" },
  {
    $set: { price: Decimal128("129.99"), updatedAt: new Date() },
    $inc: { currentVersion: 1 }
  }
)

const current2 = db.catalog_items.findOne({ itemId: "itm-001" })
db.catalog_items_history.insertOne({
  itemId: current2.itemId, version: current2.currentVersion,
  name: current2.name, price: current2.price,
  archivedAt: new Date()
})
db.catalog_items.updateOne(
  { itemId: "itm-001" },
  { $set: { price: Decimal128("119.99"), updatedAt: new Date() }, $inc: { currentVersion: 1 } }
)


// ============================================
// PASO 4: Consultar historial
// ============================================

db.catalog_items.findOne(
  { itemId: "itm-001" },
  { name: 1, price: 1, currentVersion: 1, _id: 0 }
)
// → { name: "Wireless Headphones Pro", price: 119.99, currentVersion: 3 }

db.catalog_items_history.find(
  { itemId: "itm-001" },
  { version: 1, price: 1, archivedAt: 1, _id: 0 }
).sort({ version: 1 })
// → versión 1: 149.99, versión 2: 129.99
