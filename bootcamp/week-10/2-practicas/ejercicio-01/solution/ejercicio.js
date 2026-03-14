// Semana 10: Aggregation Pipeline II — Acumuladores Avanzados
// ejercicio.js — SOLUCIÓN: $first, $last, $push, $addToSet

// ============================================
// PASO 1: $first y $last — primer y último valor del grupo
// ============================================

// Obtener el primer y último producto vendido por ciudad
db.sales.aggregate([
  { $sort: { saleDate: 1 } },
  {
    $group: {
      _id: "$city",
      firstProduct: { $first: "$product" },
      lastProduct: { $last: "$product" },
      firstDate: { $first: "$saleDate" },
      lastDate: { $last: "$saleDate" }
    }
  },
  { $sort: { _id: 1 } }
])

// ============================================
// PASO 2: $push — acumular todos los valores (con duplicados)
// ============================================

// Listar todos los productos vendidos por cada vendedor
db.sales.aggregate([
  {
    $group: {
      _id: "$salesperson",
      allProducts: { $push: "$product" },
      totalTransactions: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])

// ============================================
// PASO 3: $addToSet — acumular valores únicos (sin duplicados)
// ============================================

// Obtener las categorías únicas que maneja cada vendedor
db.sales.aggregate([
  {
    $group: {
      _id: "$salesperson",
      uniqueCategories: { $addToSet: "$category" },
      citiesPresent: { $addToSet: "$city" }
    }
  },
  { $sort: { _id: 1 } }
])

// ============================================
// PASO 4: Combinando todos los acumuladores avanzados
// ============================================

// Resumen completo por ciudad
db.sales.aggregate([
  { $sort: { saleDate: 1 } },
  {
    $group: {
      _id: "$city",
      firstProduct: { $first: "$product" },
      lastProduct: { $last: "$product" },
      allProducts: { $push: "$product" },
      uniqueCategories: { $addToSet: "$category" },
      avgRating: { $avg: "$rating" },
      totalSales: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])
