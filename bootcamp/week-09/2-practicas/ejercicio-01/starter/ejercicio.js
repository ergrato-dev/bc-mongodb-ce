// Semana 09: Aggregation Pipeline I
// Ejercicio 01 — $match, $project, $sort, $limit, $skip
// ============================================================

// ============================================================
// PASO 1: Tu primer pipeline — $match + $project
// ============================================================

// Filtra ventas completadas y muestra solo nombre de producto,
// ciudad y monto. Excluye _id.
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   { $match: { status: "completed" } },
//   {
//     $project: {
//       _id: 0,
//       product: 1,
//       city: 1,
//       amount: 1
//     }
//   }
// ])

// ============================================================
// PASO 2: Agregar $sort y $limit
// ============================================================

// Obtén las 5 ventas completadas de mayor monto.
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   { $match: { status: "completed" } },
//   { $sort: { amount: -1 } },
//   { $limit: 5 },
//   {
//     $project: {
//       _id: 0,
//       product: 1,
//       amount: 1,
//       salesperson: 1
//     }
//   }
// ])

// ============================================================
// PASO 3: Paginación con $skip
// ============================================================

// Página 1 (primeros 5 registros):
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   { $match: { status: "completed" } },
//   { $sort: { saleDate: -1 } },
//   { $skip: 0 },
//   { $limit: 5 },
//   { $project: { _id: 0, product: 1, city: 1, saleDate: 1 } }
// ])

// Página 2 (siguientes 5 registros):
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   { $match: { status: "completed" } },
//   { $sort: { saleDate: -1 } },
//   { $skip: 5 },
//   { $limit: 5 },
//   { $project: { _id: 0, product: 1, city: 1, saleDate: 1 } }
// ])

// ============================================================
// PASO 4: Campo calculado en $project
// ============================================================

// Crea un campo "totalAmount" que sea amount * quantity,
// mostrando solo producto, cantidad y totalAmount.
// Descomenta las siguientes líneas:

// db.sales.aggregate([
//   { $match: { status: "completed" } },
//   {
//     $project: {
//       _id: 0,
//       product: 1,
//       quantity: 1,
//       totalAmount: {
//         $multiply: [{ $toDouble: "$amount" }, "$quantity"]
//       }
//     }
//   },
//   { $sort: { totalAmount: -1 } }
// ])
