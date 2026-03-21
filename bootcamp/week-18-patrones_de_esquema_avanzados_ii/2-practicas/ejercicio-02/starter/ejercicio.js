// ============================================
// Semana 18 — Ejercicio 02: Schema + Document Versioning
// ejercicio.js — Descomenta cada sección según el paso
// ============================================

// ============================================
// PASO 1: Schema Versioning — detectar coexistencia
// ============================================

// Consulta cuántos documentos tienen cada versión del esquema.
// Descomenta las siguientes líneas:

// db.contacts.countDocuments({ schemaVersion: { $exists: false } })
// // → 2 (documentos v1 sin schemaVersion)

// db.contacts.countDocuments({ schemaVersion: NumberInt(2) })
// // → 2 (documentos v2)

// Consulta un v1 y uno v2 para ver la diferencia:
// db.contacts.findOne({ schemaVersion: { $exists: false } })
// db.contacts.findOne({ schemaVersion: NumberInt(2) })


// ============================================
// PASO 2: Schema Versioning — migración lazy batch
// ============================================

// Migra todos los docs v1 al formato v2 usando
// aggregation pipeline update.
// Descomenta las siguientes líneas:

// db.contacts.updateMany(
//   { schemaVersion: { $exists: false } },
//   [
//     {
//       $set: {
//         schemaVersion: NumberInt(2),
//         phones: { $cond: [{ $ifNull: ["$phone", false] }, ["$phone"], []] },
//         address: {
//           street: "$address",
//           city: "desconocido",
//           country: "desconocido"
//         },
//         updatedAt: "$$NOW"
//       }
//     },
//     { $unset: "phone" }
//   ]
// )

// Verifica que ya no hay documentos v1:
// db.contacts.countDocuments({ schemaVersion: { $exists: false } })


// ============================================
// PASO 3: Document Versioning — archivar al actualizar
// ============================================

// Al cambiar el precio de "Wireless Headphones Pro",
// primero archiva la versión actual en catalog_items_history.
// Descomenta las siguientes líneas:

// const current = db.catalog_items.findOne({ itemId: "itm-001" })

// db.catalog_items_history.insertOne({
//   itemId: current.itemId,
//   version: current.currentVersion,
//   name: current.name,
//   price: current.price,
//   stock: current.stock,
//   archivedAt: new Date()
// })

// db.catalog_items.updateOne(
//   { itemId: "itm-001" },
//   {
//     $set: {
//       price: Decimal128("129.99"),
//       updatedAt: new Date()
//     },
//     $inc: { currentVersion: 1 }
//   }
// )

// Actualiza una vez más para tener 3 versiones:
// const current2 = db.catalog_items.findOne({ itemId: "itm-001" })
// db.catalog_items_history.insertOne({
//   itemId: current2.itemId, version: current2.currentVersion,
//   name: current2.name, price: current2.price,
//   archivedAt: new Date()
// })
// db.catalog_items.updateOne(
//   { itemId: "itm-001" },
//   { $set: { price: Decimal128("119.99"), updatedAt: new Date() }, $inc: { currentVersion: 1 } }
// )


// ============================================
// PASO 4: Consultar historial de versiones
// ============================================

// Ver el precio actual vs historial completo del ítem.
// Descomenta las siguientes líneas:

// db.catalog_items.findOne(
//   { itemId: "itm-001" },
//   { name: 1, price: 1, currentVersion: 1, _id: 0 }
// )

// db.catalog_items_history.find(
//   { itemId: "itm-001" },
//   { version: 1, price: 1, archivedAt: 1, _id: 0 }
// ).sort({ version: 1 })
