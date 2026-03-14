// Semana 11: $lookup y $unwind — Joins en MongoDB
// ejercicio.js — Práctica 01: $lookup básico

// ============================================
// INSTRUCCIONES:
// 1. Ejecuta primero: starter/setup.js
// 2. Lee el README para entender cada paso
// 3. Descomenta cada sección para ejecutarla
// ============================================

// ============================================
// PASO 1: $lookup básico — unir orders con products
// ============================================

// Obtener cada pedido con el detalle completo del producto
// $lookup agrega el campo "productInfo" como array
// Descomenta las siguientes líneas:

// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "products",
//       localField: "productId",
//       foreignField: "_id",
//       as: "productInfo"
//     }
//   },
//   { $limit: 5 }
// ])

// ============================================
// PASO 2: $lookup + $unwind — aplanar el array resultado
// ============================================

// El resultado de $lookup es un array.
// $unwind lo convierte en un objeto para acceder a sus campos.
// Descomenta las siguientes líneas:

// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "products",
//       localField: "productId",
//       foreignField: "_id",
//       as: "productInfo"
//     }
//   },
//   { $unwind: "$productInfo" },
//   {
//     $project: {
//       orderId: 1,
//       customerName: 1,
//       quantity: 1,
//       "productInfo.name": 1,
//       "productInfo.price": 1,
//       "productInfo.category": 1,
//       _id: 0
//     }
//   }
// ])

// ============================================
// PASO 3: $lookup + $unwind + campo calculado
// ============================================

// Calcular el total de cada pedido (price × quantity)
// Necesitamos $unwind primero para acceder a productInfo.price
// Descomenta las siguientes líneas:

// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "products",
//       localField: "productId",
//       foreignField: "_id",
//       as: "productInfo"
//     }
//   },
//   { $unwind: "$productInfo" },
//   {
//     $addFields: {
//       orderTotal: {
//         $multiply: [
//           { $toDouble: "$productInfo.price" },
//           "$quantity"
//         ]
//       }
//     }
//   },
//   { $match: { status: "completed" } },
//   {
//     $project: {
//       orderId: 1,
//       customerName: 1,
//       quantity: 1,
//       "productInfo.name": 1,
//       orderTotal: 1,
//       _id: 0
//     }
//   }
// ])

// ============================================
// PASO 4: $lookup + $unwind + $group — análisis de ventas por categoría
// ============================================

// ¿Cuánto ha vendido cada categoría de producto?
// Patrón: $lookup → $unwind → $match → $group → $sort
// Descomenta las siguientes líneas:

// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "products",
//       localField: "productId",
//       foreignField: "_id",
//       as: "productInfo"
//     }
//   },
//   { $unwind: "$productInfo" },
//   { $match: { status: "completed" } },
//   {
//     $group: {
//       _id: "$productInfo.category",
//       totalOrders: { $sum: 1 },
//       totalRevenue: {
//         $sum: { $multiply: [{ $toDouble: "$productInfo.price" }, "$quantity"] }
//       },
//       productsSold: { $addToSet: "$productInfo.name" }
//     }
//   },
//   { $sort: { totalRevenue: -1 } }
// ])
