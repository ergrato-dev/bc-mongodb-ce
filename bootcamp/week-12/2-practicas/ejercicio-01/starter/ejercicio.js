// Semana 12: Aggregation Pipeline III — $facet y $bucket
// ejercicio.js — Descomenta cada sección para completar el ejercicio

// ============================================
// PASO 1: $facet básico — dos análisis en paralelo
// ============================================

// Ejecuta dos sub-pipelines en paralelo:
//   byCategory: cuenta documentos por categoría
//   priceStats: calcula avg, min y max de precio (productos activos)
// Descomenta las siguientes líneas:

// db.products.aggregate([
//   { $match: { isActive: true } },
//   {
//     $facet: {
//       byCategory: [
//         { $group: { _id: "$category", count: { $sum: 1 } } },
//         { $sort: { count: -1 } }
//       ],
//       priceStats: [
//         {
//           $group: {
//             _id: null,
//             avgPrice: { $avg: { $toDouble: "$price" } },
//             minPrice: { $min: { $toDouble: "$price" } },
//             maxPrice: { $max: { $toDouble: "$price" } }
//           }
//         }
//       ]
//     }
//   }
// ])


// ============================================
// PASO 2: $facet con paginación — resultados + total
// ============================================

// Obtén en paralelo:
//   results: los 5 productos más baratos (activos), proyectando name, category, price
//   totalCount: conteo total de productos activos
// Descomenta las siguientes líneas:

// db.products.aggregate([
//   { $match: { isActive: true } },
//   {
//     $facet: {
//       results: [
//         { $sort: { price: 1 } },
//         { $limit: 5 },
//         { $project: { name: 1, category: 1, price: 1, _id: 0 } }
//       ],
//       totalCount: [
//         { $count: "total" }
//       ]
//     }
//   }
// ])


// ============================================
// PASO 3: $bucket — rangos de precio manuales
// ============================================

// Clasifica todos los productos en rangos de precio:
//   [0, 50)     → "económico"
//   [50, 200)   → "medio"
//   [200, 600)  → "premium"
//   600+        → "lujo" (default)
// Para cada bucket: count de productos y avgPrice
// Descomenta las siguientes líneas:

// db.products.aggregate([
//   {
//     $bucket: {
//       groupBy: { $toDouble: "$price" },
//       boundaries: [0, 50, 200, 600],
//       default: "lujo",
//       output: {
//         count: { $sum: 1 },
//         avgPrice: { $avg: { $toDouble: "$price" } },
//         items: { $push: "$name" }
//       }
//     }
//   }
// ])


// ============================================
// PASO 4: $bucketAuto — 4 grupos automáticos
// ============================================

// Divide los productos en 4 grupos de tamaño similar por precio.
// Para cada grupo muestra: count, minPrice, maxPrice, avgRating
// Descomenta las siguientes líneas:

// db.products.aggregate([
//   {
//     $bucketAuto: {
//       groupBy: { $toDouble: "$price" },
//       buckets: 4,
//       output: {
//         count: { $sum: 1 },
//         minPrice: { $min: { $toDouble: "$price" } },
//         maxPrice: { $max: { $toDouble: "$price" } },
//         avgRating: { $avg: "$rating" }
//       }
//     }
//   }
// ])
