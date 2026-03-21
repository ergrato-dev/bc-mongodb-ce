// Semana 09: Aggregation Pipeline I
// Ejercicio 02 — SOLUCIÓN

// PASO 1: Ventas por categoría
db.sales.aggregate([
  {
    $group: {
      _id: "$category",
      totalSales: { $sum: 1 }
    }
  },
  { $sort: { totalSales: -1 } }
])

// PASO 2: Ingresos por ciudad (solo completadas)
db.sales.aggregate([
  { $match: { status: "completed" } },
  {
    $group: {
      _id: "$city",
      totalRevenue: { $sum: { $toDouble: "$amount" } },
      salesCount: { $sum: 1 }
    }
  },
  { $sort: { totalRevenue: -1 } }
])

// PASO 3: Rating promedio por vendedor
db.sales.aggregate([
  { $match: { status: "completed" } },
  {
    $group: {
      _id: "$salesperson",
      avgRating: { $avg: "$rating" },
      totalSales: { $sum: 1 },
      totalRevenue: { $sum: { $toDouble: "$amount" } }
    }
  },
  { $sort: { avgRating: -1 } }
])

// PASO 4: Total general
db.sales.aggregate([
  { $match: { status: "completed" } },
  {
    $group: {
      _id: null,
      totalTransactions: { $sum: 1 },
      grandTotal: { $sum: { $toDouble: "$amount" } },
      avgAmount: { $avg: { $toDouble: "$amount" } },
      maxSale: { $max: { $toDouble: "$amount" } },
      minSale: { $min: { $toDouble: "$amount" } }
    }
  }
])
