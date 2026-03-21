// Semana 09: Aggregation Pipeline I
// Ejercicio 02 — $group con acumuladores
// ============================================================

// ============================================================
// PASO 1: Contar documentos por categoría
// ============================================================

// ¿Cuántas ventas hay por categoría de producto?
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   {
//     $group: {
//       _id: "$category",
//       totalSales: { $sum: 1 }
//     }
//   },
//   { $sort: { totalSales: -1 } }
// ])

// ============================================================
// PASO 2: Sumar montos por ciudad
// ============================================================

// ¿Cuánto dinero total se generó por ciudad?
// Solo considera ventas con status "completed".
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   { $match: { status: "completed" } },
//   {
//     $group: {
//       _id: "$city",
//       totalRevenue: { $sum: { $toDouble: "$amount" } },
//       salesCount: { $sum: 1 }
//     }
//   },
//   { $sort: { totalRevenue: -1 } }
// ])

// ============================================================
// PASO 3: Promedio de rating por vendedor
// ============================================================

// ¿Cuál es el rating promedio de cada vendedor?
// Incluye también el total de ventas realizadas.
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   { $match: { status: "completed" } },
//   {
//     $group: {
//       _id: "$salesperson",
//       avgRating: { $avg: "$rating" },
//       totalSales: { $sum: 1 },
//       totalRevenue: { $sum: { $toDouble: "$amount" } }
//     }
//   },
//   { $sort: { avgRating: -1 } }
// ])

// ============================================================
// PASO 4: Total general de la colección (_id: null)
// ============================================================

// ¿Cuántas ventas completadas hay en total y cuánto suman?
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   { $match: { status: "completed" } },
//   {
//     $group: {
//       _id: null,
//       totalTransactions: { $sum: 1 },
//       grandTotal: { $sum: { $toDouble: "$amount" } },
//       avgAmount: { $avg: { $toDouble: "$amount" } },
//       maxSale: { $max: { $toDouble: "$amount" } },
//       minSale: { $min: { $toDouble: "$amount" } }
//     }
//   }
// ])
