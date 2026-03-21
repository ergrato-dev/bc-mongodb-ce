// ============================================
// Semana 18 — Ejercicio 01: Polymorphic + Attribute
// ejercicio.js — Descomenta cada sección según el paso
// ============================================

// ============================================
// PASO 1: Patrón Polymorphic — queries unificadas
// ============================================

// Consulta todos los vehículos disponibles bajo $25,000,
// independientemente del tipo.
// Descomenta las siguientes líneas:

// db.vehicles.find(
//   {
//     isAvailable: true,
//     price: { $lt: Decimal128("25000.00") }
//   },
//   { vehicleType: 1, make: 1, model: 1, price: 1, _id: 0 }
// )

// Ahora filtra por tipo específico:
// db.vehicles.find(
//   { vehicleType: "truck" },
//   { make: 1, model: 1, payloadTons: 1, hasColdStorage: 1, _id: 0 }
// )


// ============================================
// PASO 2: Crear índice en colección polimórfica
// ============================================

// Crea un índice compuesto para el discriminador + precio.
// Luego uno sparse para campos exclusivos de trucks.
// Descomenta las siguientes líneas:

// db.vehicles.createIndex(
//   { vehicleType: 1, price: 1 },
//   { name: "vehicles_type_price" }
// )

// db.vehicles.createIndex(
//   { payloadTons: 1 },
//   { sparse: true, name: "vehicles_payload_sparse" }
// )

// Verifica con explain():
// db.vehicles.find(
//   { vehicleType: "car", price: { $lt: Decimal128("25000.00") } }
// ).explain("executionStats")


// ============================================
// PASO 3: Patrón Attribute — índice multikey
// ============================================

// Crea el índice sobre el array de atributos.
// Un solo índice cubre todos los atributos posibles.
// Descomenta las siguientes líneas:

// db.products_attr.createIndex(
//   { "attrs.k": 1, "attrs.v": 1 },
//   { name: "products_attrs_kv" }
// )

// Verifica que es un índice multikey:
// db.products_attr.getIndexes()


// ============================================
// PASO 4: Consultar atributos con $elemMatch
// ============================================

// Busca productos que sean waterproof = true.
// Verifica con explain() que usa el índice multikey.
// Descomenta las siguientes líneas:

// db.products_attr.find({
//   attrs: { $elemMatch: { k: "waterproof", v: true } }
// })

// Busca productos color "red" con size "L":
// db.products_attr.find({
//   $and: [
//     { attrs: { $elemMatch: { k: "color", v: "red" } } },
//     { attrs: { $elemMatch: { k: "size", v: "L" } } }
//   ]
// })

// Verificar eficiencia:
// db.products_attr.find({
//   attrs: { $elemMatch: { k: "waterproof", v: true } }
// }).explain("executionStats")
