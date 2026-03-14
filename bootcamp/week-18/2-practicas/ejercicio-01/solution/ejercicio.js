// ============================================
// Semana 18 — Ejercicio 01: Polymorphic + Attribute
// SOLUCIÓN
// ============================================

// ============================================
// PASO 1: Patrón Polymorphic — queries unificadas
// ============================================

db.vehicles.find(
  {
    isAvailable: true,
    price: { $lt: Decimal128("25000.00") }
  },
  { vehicleType: 1, make: 1, model: 1, price: 1, _id: 0 }
)

db.vehicles.find(
  { vehicleType: "truck" },
  { make: 1, model: 1, payloadTons: 1, hasColdStorage: 1, _id: 0 }
)


// ============================================
// PASO 2: Crear índice en colección polimórfica
// ============================================

db.vehicles.createIndex(
  { vehicleType: 1, price: 1 },
  { name: "vehicles_type_price" }
)

db.vehicles.createIndex(
  { payloadTons: 1 },
  { sparse: true, name: "vehicles_payload_sparse" }
)

db.vehicles.find(
  { vehicleType: "car", price: { $lt: Decimal128("25000.00") } }
).explain("executionStats")
// → stage: "IXSCAN", indexName: "vehicles_type_price"


// ============================================
// PASO 3: Patrón Attribute — índice multikey
// ============================================

db.products_attr.createIndex(
  { "attrs.k": 1, "attrs.v": 1 },
  { name: "products_attrs_kv" }
)

db.products_attr.getIndexes()
// → isMultiKey: true para el índice attrs


// ============================================
// PASO 4: Consultar atributos con $elemMatch
// ============================================

db.products_attr.find({
  attrs: { $elemMatch: { k: "waterproof", v: true } }
})

db.products_attr.find({
  $and: [
    { attrs: { $elemMatch: { k: "color", v: "red" } } },
    { attrs: { $elemMatch: { k: "size", v: "L" } } }
  ]
})

db.products_attr.find({
  attrs: { $elemMatch: { k: "waterproof", v: true } }
}).explain("executionStats")
// → stage: "IXSCAN" usando products_attrs_kv
