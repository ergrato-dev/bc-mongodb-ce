// ============================================
// Semana 18 — Proyecto: Patrones de Esquema Avanzados II
// setup.js — Esquema genérico adaptable al dominio
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta estas colecciones a tu dominio asignado.
// Ejemplos:
//   Biblioteca  → books, magazines, ebooks (polymorphic por tipo)
//   Farmacia    → medicines con attrs: [{k:"presentation", v:"tablet"}]
//   Gimnasio    → equipment con attrs variables por tipo de máquina
//   Restaurante → menu_items (dish/drink/dessert) + price_history

// ============================================
// TODO: Renombrar y adaptar la colección al dominio
// ============================================

db.collection_items.drop()
db.collection_items_history.drop()

// Colección polimórfica con 3 tipos de entidad
db.collection_items.insertMany([
  {
    itemType: "type-A",       // TODO: reemplazar con discriminador del dominio
    name: "Item tipo A",
    commonField: "valor",
    specificFieldA: "dato A",
    price: Decimal128("100.00"),
    isActive: true,
    attrs: [
      { k: "attribute1", v: "value1" },
      { k: "attribute2", v: true }
    ],
    currentVersion: NumberInt(1),
    updatedAt: new Date()
  },
  {
    itemType: "type-B",
    name: "Item tipo B",
    commonField: "valor",
    specificFieldB: NumberInt(42),
    price: Decimal128("200.00"),
    isActive: true,
    attrs: [
      { k: "attribute1", v: "value2" },
      { k: "attribute3", v: NumberInt(99) }
    ],
    currentVersion: NumberInt(1),
    updatedAt: new Date()
  },
  {
    itemType: "type-C",
    name: "Item tipo C",
    commonField: "valor",
    specificFieldC: false,
    price: Decimal128("50.00"),
    isActive: false,
    attrs: [
      { k: "attribute2", v: false },
      { k: "attribute4", v: "special" }
    ],
    currentVersion: NumberInt(1),
    updatedAt: new Date()
  }
])

print("✓ collection_items: " + db.collection_items.countDocuments())
