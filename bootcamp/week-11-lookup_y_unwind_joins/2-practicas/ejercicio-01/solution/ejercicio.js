// Semana 11: $lookup y $unwind — Joins en MongoDB
// ejercicio.js — SOLUCIÓN: $lookup básico

// ============================================
// PASO 1: $lookup básico — unir orders con products
// ============================================

db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "productId",
      foreignField: "_id",
      as: "productInfo"
    }
  },
  { $limit: 5 }
])

// ============================================
// PASO 2: $lookup + $unwind — aplanar el array resultado
// ============================================

db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "productId",
      foreignField: "_id",
      as: "productInfo"
    }
  },
  { $unwind: "$productInfo" },
  {
    $project: {
      orderId: 1,
      customerName: 1,
      quantity: 1,
      "productInfo.name": 1,
      "productInfo.price": 1,
      "productInfo.category": 1,
      _id: 0
    }
  }
])

// ============================================
// PASO 3: $lookup + $unwind + campo calculado
// ============================================

db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "productId",
      foreignField: "_id",
      as: "productInfo"
    }
  },
  { $unwind: "$productInfo" },
  {
    $addFields: {
      orderTotal: {
        $multiply: [
          { $toDouble: "$productInfo.price" },
          "$quantity"
        ]
      }
    }
  },
  { $match: { status: "completed" } },
  {
    $project: {
      orderId: 1,
      customerName: 1,
      quantity: 1,
      "productInfo.name": 1,
      orderTotal: 1,
      _id: 0
    }
  }
])

// ============================================
// PASO 4: $lookup + $unwind + $group — análisis por categoría
// ============================================

db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "productId",
      foreignField: "_id",
      as: "productInfo"
    }
  },
  { $unwind: "$productInfo" },
  { $match: { status: "completed" } },
  {
    $group: {
      _id: "$productInfo.category",
      totalOrders: { $sum: 1 },
      totalRevenue: {
        $sum: { $multiply: [{ $toDouble: "$productInfo.price" }, "$quantity"] }
      },
      productsSold: { $addToSet: "$productInfo.name" }
    }
  },
  { $sort: { totalRevenue: -1 } }
])
