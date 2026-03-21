// ============================================
// Semana 21: Replicación y Alta Disponibilidad
// Ejercicio 02 — writeConcern y readPreference
// ============================================

// ============================================
// PASO 1: writeConcern { w: 1 } — Primary ack
// ============================================

// w:1 (default) — el Primary confirma la escritura inmediatamente
// Más rápido, pero si el Primary cae antes de replicar, el dato puede perderse
// Descomenta las siguientes líneas:

// db.shipments.insertOne(
//   {
//     shipmentId: "SHP-2001",
//     origin: "Bucaramanga",
//     destination: "Lima",
//     status: "pending",
//     weight: Decimal128("20.00"),
//     createdAt: new Date()
//   },
//   { writeConcern: { w: 1 } }
// )

// ============================================
// PASO 2: writeConcern { w: "majority" } — Durable
// ============================================

// w:"majority" — espera confirmación de la mayoría del Replica Set
// En nuestro rs0 de un solo nodo: mayoría de 1 = 1, funciona igual que w:1
// En producción con 3 nodos: necesita confirmación de al menos 2 nodos
// Descomenta las siguientes líneas:

// db.shipments.insertOne(
//   {
//     shipmentId: "SHP-2002",
//     origin: "Barranquilla",
//     destination: "São Paulo",
//     status: "pending",
//     weight: Decimal128("33.00"),
//     createdAt: new Date()
//   },
//   { writeConcern: { w: "majority" } }
// )

// ============================================
// PASO 3: readPreference "secondaryPreferred"
// ============================================

// secondaryPreferred — lee desde un Secondary si está disponible,
// si no hay Secondary disponible, cae back al Primary
// En nuestro set de un nodo: siempre leerá del Primary (sin error)
// Descomenta las siguientes líneas:

// db.shipments.find(
//   { status: "pending" },
//   { shipmentId: 1, origin: 1, destination: 1, _id: 0 }
// ).readPref("secondaryPreferred")

// ============================================
// PASO 4: writeConcern { w: 1, j: true } — Journal fsync
// ============================================

// j:true — espera que la escritura sea registrada en el journal en disco
// Garantiza durabilidad ante caída de servidor (power loss)
// Ligeramente más lento que w:1 sin journal
// Descomenta las siguientes líneas:

// db.shipments.insertOne(
//   {
//     shipmentId: "SHP-2003",
//     origin: "Cartagena",
//     destination: "Buenos Aires",
//     status: "pending",
//     weight: Decimal128("55.00"),
//     createdAt: new Date()
//   },
//   { writeConcern: { w: 1, j: true } }
// )

// Verificar que los 3 nuevos envíos fueron insertados:
// db.shipments.countDocuments({ shipmentId: /^SHP-2/ })
