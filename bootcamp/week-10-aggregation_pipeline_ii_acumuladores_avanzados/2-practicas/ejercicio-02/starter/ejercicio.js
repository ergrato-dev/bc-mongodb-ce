// Semana 10: Aggregation Pipeline II — Acumuladores Avanzados
// ejercicio.js — Práctica 02: $addFields, $cond, $ifNull

// ============================================
// INSTRUCCIONES:
// 1. Ejecuta primero: starter/setup.js
// 2. Lee el README para entender cada paso
// 3. Descomenta cada sección para ejecutarla
// ============================================

// ============================================
// PASO 1: $addFields — enriquecer documentos con campos calculados
// ============================================

// Agregar "totalValue" (amount × quantity) y "year" (año de la venta)
// $addFields preserva todos los campos existentes del documento
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   {
//     $addFields: {
//       totalValue: {
//         $multiply: [{ $toDouble: "$amount" }, "$quantity"]
//       },
//       saleYear: { $year: "$saleDate" },
//       saleMonth: { $month: "$saleDate" }
//     }
//   },
//   { $limit: 5 }
// ])

// ============================================
// PASO 2: $cond — clasificación condicional
// ============================================

// Etiquetar cada venta como "premium" (amount > 500) o "standard"
// $cond funciona como if/then/else
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   {
//     $addFields: {
//       tier: {
//         $cond: {
//           if: { $gt: [{ $toDouble: "$amount" }, 500] },
//           then: "premium",
//           else: "standard"
//         }
//       },
//       statusLabel: {
//         $cond: [
//           { $eq: ["$status", "completed"] },
//           "✅ Completada",
//           "❌ Cancelada"
//         ]
//       }
//     }
//   },
//   { $project: { product: 1, amount: 1, tier: 1, statusLabel: 1, _id: 0 } }
// ])

// ============================================
// PASO 3: $ifNull — valor por defecto para campos ausentes
// ============================================

// Reemplazar la ciudad ausente con "Sin asignar"
// El documento insertado al final de setup.js no tiene campo "city"
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   {
//     $addFields: {
//       cityNormalized: { $ifNull: ["$city", "Sin asignar"] }
//     }
//   },
//   { $project: { product: 1, city: 1, cityNormalized: 1, _id: 0 } },
//   { $sort: { city: 1 } }
// ])

// ============================================
// PASO 4: Pipeline complejo — $addFields + $match + $group + $sort
// ============================================

// 1. Enriquecer con totalValue, tier y cityNormalized
// 2. Filtrar solo ventas completadas
// 3. Agrupar por tier y ciudad, contando ventas y sumando ingresos
// 4. Ordenar por ingresos totales descendente
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   // Etapa 1: enriquecer documentos
//   {
//     $addFields: {
//       totalValue: {
//         $multiply: [{ $toDouble: "$amount" }, "$quantity"]
//       },
//       tier: {
//         $cond: {
//           if: { $gt: [{ $toDouble: "$amount" }, 500] },
//           then: "premium",
//           else: "standard"
//         }
//       },
//       cityNormalized: { $ifNull: ["$city", "Sin asignar"] }
//     }
//   },
//   // Etapa 2: solo ventas completadas
//   { $match: { status: "completed" } },
//   // Etapa 3: agrupar por tier y ciudad
//   {
//     $group: {
//       _id: { tier: "$tier", city: "$cityNormalized" },
//       totalSales: { $sum: 1 },
//       totalRevenue: { $sum: "$totalValue" },
//       products: { $addToSet: "$product" }
//     }
//   },
//   // Etapa 4: ordenar por ingresos
//   { $sort: { totalRevenue: -1 } }
// ])
