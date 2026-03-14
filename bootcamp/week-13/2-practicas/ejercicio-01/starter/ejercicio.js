// Semana 13: Índices Avanzados — Compuestos, TTL, Parciales y Únicos
// Ejercicio 01 — Índices Compuestos y Covered Queries
// ============================================================

// ============================================================
// PASO 1: Crear un índice compuesto simple
// ============================================================

// Un índice compuesto cubre múltiples campos.
// Útil cuando las queries filtran o sortean por más de un campo.
// Descomenta las siguientes líneas:

// // Verificar que no hay índices previos (excepto _id)
// db.orders_idx.getIndexes()

// // Crear índice compuesto en status y city
// db.orders_idx.createIndex({ status: 1, city: 1 })

// // Verificar que el índice fue creado
// db.orders_idx.getIndexes()

// // Usar el índice con una query que filtra ambos campos
// db.orders_idx.find(
//   { status: "completed", city: "Bogotá" }
// ).explain("executionStats")
// // Observa: stage: "IXSCAN" en lugar de "COLLSCAN"

// ============================================================
// PASO 2: Aplicar la Regla ESR (Equality → Sort → Range)
// ============================================================

// La regla ESR define el orden óptimo de campos en un índice compuesto:
//   E (Equality):  campos filtrados con valor exacto   → primero
//   S (Sort):      campos usados en .sort()            → segundo
//   R (Range):     campos con $gt, $lt, $gte, $lte     → último
// Descomenta las siguientes líneas:

// // Eliminar el índice anterior para comparar
// db.orders_idx.dropIndex("status_1_city_1")

// // Crear índice con regla ESR:
// //   E = status (igualdad), S = orderDate (sort), R = amount (rango)
// db.orders_idx.createIndex({
//   status: 1,
//   orderDate: 1,
//   amount: 1
// })

// // Query que aprovecha el índice ESR
// db.orders_idx.find(
//   {
//     status: "completed",
//     orderDate: { $gte: new Date("2024-02-01") }
//   }
// ).sort({ orderDate: 1 })
//  .explain("executionStats")
// // Observa: stage: "IXSCAN", keysExamined vs docsExamined

// ============================================================
// PASO 3: Covered Query — cero lecturas de disco
// ============================================================

// Una covered query ocurre cuando el índice contiene todos los campos
// que se proyectan. MongoDB responde SIN leer documentos del disco.
// Requiere: _id: 0 en la proyección.
// Descomenta las siguientes líneas:

// // Crear índice que cubra exactamente los campos a proyectar
// db.orders_idx.createIndex({ customerId: 1, status: 1, amount: 1 })

// // Covered query: proyectar solo campos del índice + _id: 0
// db.orders_idx.find(
//   { status: "completed" },
//   { customerId: 1, status: 1, amount: 1, _id: 0 }
// ).explain("executionStats")
// // Observa: totalDocsExamined: 0 — ningún documento fue leído del disco

// ============================================================
// PASO 4: Ver estadísticas de uso de índices
// ============================================================

// $indexStats muestra cuántas veces cada índice fue utilizado.
// Útil para detectar índices que nunca se usan (candidatos a eliminar).
// Descomenta las siguientes líneas:

// // Ver estadísticas de todos los índices de la colección
// db.orders_idx.aggregate([{ $indexStats: {} }])

// // Listar y eliminar el índice ESR para mantener la colección limpia
// db.orders_idx.getIndexes()
// db.orders_idx.dropIndex("status_1_orderDate_1_amount_1")
