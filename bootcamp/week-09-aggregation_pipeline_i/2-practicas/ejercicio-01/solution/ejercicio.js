// Semana 09: Aggregation Pipeline I
// Ejercicio 01 — SOLUCIÓN

// PASO 1: $match + $project
db.sales.aggregate([
  { $match: { status: "completed" } },
  {
    $project: {
      _id: 0,
      product: 1,
      city: 1,
      amount: 1
    }
  }
])

// PASO 2: $sort + $limit
db.sales.aggregate([
  { $match: { status: "completed" } },
  { $sort: { amount: -1 } },
  { $limit: 5 },
  {
    $project: {
      _id: 0,
      product: 1,
      amount: 1,
      salesperson: 1
    }
  }
])

// PASO 3: Paginación — página 1
db.sales.aggregate([
  { $match: { status: "completed" } },
  { $sort: { saleDate: -1 } },
  { $skip: 0 },
  { $limit: 5 },
  { $project: { _id: 0, product: 1, city: 1, saleDate: 1 } }
])

// PASO 3: Paginación — página 2
db.sales.aggregate([
  { $match: { status: "completed" } },
  { $sort: { saleDate: -1 } },
  { $skip: 5 },
  { $limit: 5 },
  { $project: { _id: 0, product: 1, city: 1, saleDate: 1 } }
])

// PASO 4: Campo calculado
db.sales.aggregate([
  { $match: { status: "completed" } },
  {
    $project: {
      _id: 0,
      product: 1,
      quantity: 1,
      totalAmount: {
        $multiply: [{ $toDouble: "$amount" }, "$quantity"]
      }
    }
  },
  { $sort: { totalAmount: -1 } }
])
