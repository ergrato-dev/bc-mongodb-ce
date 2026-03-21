// Semana 11: $lookup y $unwind — Joins en MongoDB
// ejercicio.js — Práctica 02: $unwind sobre array de items + $lookup avanzado

// ============================================
// INSTRUCCIONES:
// 1. Ejecuta primero: starter/setup.js
// 2. Lee el README para entender cada paso
// 3. Descomenta cada sección para ejecutarla
// ============================================

// ============================================
// PASO 1: $unwind sobre array de items embebidos
// ============================================

// Cada pedido tiene un array "items" con varios productos.
// $unwind genera un documento por cada item del array.
// Descomenta las siguientes líneas:

// db.orders_multi.aggregate([
//   { $unwind: "$items" },
//   {
//     $project: {
//       orderId: 1,
//       customerId: 1,
//       status: 1,
//       "items.name": 1,
//       "items.qty": 1,
//       "items.price": 1,
//       _id: 0
//     }
//   }
// ])

// ============================================
// PASO 2: $unwind + $group — total de ventas por producto
// ============================================

// Después de $unwind, cada documento tiene un solo item.
// Agrupa por productId para saber el total vendido de cada producto.
// Descomenta las siguientes líneas:

// db.orders_multi.aggregate([
//   { $match: { status: "completed" } },
//   { $unwind: "$items" },
//   {
//     $group: {
//       _id: "$items.productId",
//       productName: { $first: "$items.name" },
//       totalQuantity: { $sum: "$items.qty" },
//       totalRevenue: {
//         $sum: { $multiply: [{ $toDouble: "$items.price" }, "$items.qty"] }
//       }
//     }
//   },
//   { $sort: { totalRevenue: -1 } }
// ])

// ============================================
// PASO 3: $lookup con pipeline — solo clientes activos
// ============================================

// Unir orders_multi con customers pero solo si el cliente está activo.
// Usa la forma avanzada de $lookup con pipeline interno.
// Descomenta las siguientes líneas:

// db.orders_multi.aggregate([
//   {
//     $lookup: {
//       from: "customers",
//       let: { cid: "$customerId" },
//       pipeline: [
//         {
//           $match: {
//             $expr: {
//               $and: [
//                 { $eq: ["$$cid", "$_id"] },
//                 { $eq: ["$isActive", true] }
//               ]
//             }
//           }
//         },
//         { $project: { name: 1, tier: 1, city: 1, _id: 0 } }
//       ],
//       as: "customer"
//     }
//   },
//   { $match: { customer: { $ne: [] } } },
//   { $unwind: "$customer" },
//   { $project: {
//       orderId: 1, status: 1,
//       "customer.name": 1, "customer.tier": 1, _id: 0
//   }}
// ])

// ============================================
// PASO 4: Pipeline complejo — gasto total por cliente con tier
// ============================================

// ¿Cuánto ha gastado cada cliente activo?
// Pasos: $lookup(customers) → $unwind(customer) → $unwind(items)
//        → $match(completed) → $group(customerId) → $sort
// Descomenta las siguientes líneas:

// db.orders_multi.aggregate([
//   // Unir con la colección de clientes
//   {
//     $lookup: {
//       from: "customers",
//       localField: "customerId",
//       foreignField: "_id",
//       as: "customer"
//     }
//   },
//   { $unwind: "$customer" },
//   // Solo clientes activos
//   { $match: { "customer.isActive": true, status: "completed" } },
//   // Descomponer array de items
//   { $unwind: "$items" },
//   // Agrupar por cliente
//   {
//     $group: {
//       _id: "$customerId",
//       customerName: { $first: "$customer.name" },
//       customerTier: { $first: "$customer.tier" },
//       totalOrders: { $addToSet: "$orderId" },
//       totalSpent: {
//         $sum: { $multiply: [{ $toDouble: "$items.price" }, "$items.qty"] }
//       }
//     }
//   },
//   {
//     $addFields: {
//       orderCount: { $size: "$totalOrders" }
//     }
//   },
//   { $sort: { totalSpent: -1 } },
//   { $project: { totalOrders: 0 } }
// ])
