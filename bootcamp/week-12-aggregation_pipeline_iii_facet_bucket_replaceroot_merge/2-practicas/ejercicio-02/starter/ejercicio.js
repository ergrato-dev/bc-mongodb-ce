// Semana 12: Aggregation Pipeline III — $replaceRoot y $merge
// ejercicio.js — Descomenta cada sección para completar el ejercicio

// ============================================
// PASO 1: $replaceRoot básico
// ============================================

// Promueve el subdocumento "customer" a raíz del documento.
// Resultado: un documento por orden con solo los campos de customer
// Descomenta las siguientes líneas:

// db.orders.aggregate([
//   { $replaceRoot: { newRoot: "$customer" } }
// ])


// ============================================
// PASO 2: $replaceRoot + $mergeObjects
// ============================================

// Promueve "customer" pero preserva orderId, status y total del original.
// Usa $mergeObjects para fusionar el subdocumento con campos adicionales.
// Descomenta las siguientes líneas:

// db.orders.aggregate([
//   {
//     $replaceRoot: {
//       newRoot: {
//         $mergeObjects: [
//           "$customer",
//           {
//             orderId: "$orderId",
//             status: "$status",
//             total: "$total"
//           }
//         ]
//       }
//     }
//   },
//   { $sort: { name: 1 } }
// ])


// ============================================
// PASO 3: $out — guardar resumen en nueva colección
// ============================================

// Calcula el resumen de órdenes completadas por ciudad
// y guárdalo en la colección "city_summary".
// ADVERTENCIA: $out ELIMINA y recrea la colección destino.
// Descomenta las siguientes líneas:

// db.orders.aggregate([
//   { $match: { status: "completed" } },
//   {
//     $group: {
//       _id: "$customer.city",
//       totalRevenue: { $sum: { $toDouble: "$total" } },
//       orderCount: { $sum: 1 },
//       customers: { $addToSet: "$customer.customerId" }
//     }
//   },
//   { $sort: { totalRevenue: -1 } },
//   { $out: "city_summary" }
// ])
// // Verificar resultado:
// db.city_summary.find()


// ============================================
// PASO 4: $merge — actualizar estadísticas mensuales
// ============================================

// Calcula el revenue real de órdenes COMPLETADAS por mes
// y fusiona con la colección "monthly_stats".
// whenMatched: "merge" → fusiona con el doc existente (ej: 2024-01 histórico)
// whenNotMatched: "insert" → inserta meses nuevos
// Descomenta las siguientes líneas:

// db.orders.aggregate([
//   { $match: { status: "completed" } },
//   {
//     $group: {
//       _id: "$month",
//       actualRevenue: { $sum: { $toDouble: "$total" } },
//       orderCount: { $sum: 1 }
//     }
//   },
//   {
//     $merge: {
//       into: "monthly_stats",
//       on: "_id",
//       whenMatched: "merge",
//       whenNotMatched: "insert"
//     }
//   }
// ])
// // Verificar resultado:
// db.monthly_stats.find()
