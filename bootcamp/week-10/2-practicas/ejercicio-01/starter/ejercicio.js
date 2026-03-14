// Semana 10: Aggregation Pipeline II — Acumuladores Avanzados
// ejercicio.js — Práctica 01: $first, $last, $push, $addToSet

// ============================================
// INSTRUCCIONES:
// 1. Ejecuta primero: starter/setup.js
// 2. Lee el README para entender cada paso
// 3. Descomenta cada sección para ejecutarla
// ============================================

// ============================================
// PASO 1: $first y $last — primer y último valor del grupo
// ============================================

// Obtener el primer y último producto vendido por ciudad
// (ordenado por fecha de venta ascendente)
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   { $sort: { saleDate: 1 } },
//   {
//     $group: {
//       _id: "$city",
//       firstProduct: { $first: "$product" },
//       lastProduct: { $last: "$product" },
//       firstDate: { $first: "$saleDate" },
//       lastDate: { $last: "$saleDate" }
//     }
//   },
//   { $sort: { _id: 1 } }
// ])

// ============================================
// PASO 2: $push — acumular todos los valores (con duplicados)
// ============================================

// Listar todos los productos vendidos por cada vendedor
// $push incluye duplicados si el mismo producto aparece varias veces
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   {
//     $group: {
//       _id: "$salesperson",
//       allProducts: { $push: "$product" },
//       totalTransactions: { $sum: 1 }
//     }
//   },
//   { $sort: { _id: 1 } }
// ])

// ============================================
// PASO 3: $addToSet — acumular valores únicos (sin duplicados)
// ============================================

// Obtener las categorías únicas que maneja cada vendedor
// $addToSet elimina duplicados automáticamente
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   {
//     $group: {
//       _id: "$salesperson",
//       uniqueCategories: { $addToSet: "$category" },
//       citiesPresent: { $addToSet: "$city" }
//     }
//   },
//   { $sort: { _id: 1 } }
// ])

// ============================================
// PASO 4: Combinando todos los acumuladores avanzados
// ============================================

// Resumen completo por ciudad:
// - primer y último producto (por fecha), $first/$last
// - lista de todos los productos vendidos, $push
// - categorías únicas disponibles, $addToSet
// - calificación promedio, $avg
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   { $sort: { saleDate: 1 } },
//   {
//     $group: {
//       _id: "$city",
//       firstProduct: { $first: "$product" },
//       lastProduct: { $last: "$product" },
//       allProducts: { $push: "$product" },
//       uniqueCategories: { $addToSet: "$category" },
//       avgRating: { $avg: "$rating" },
//       totalSales: { $sum: 1 }
//     }
//   },
//   { $sort: { _id: 1 } }
// ])
