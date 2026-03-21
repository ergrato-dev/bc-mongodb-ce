// Semana 23: MongoDB con Node.js
// ejercicio-02 — find, insertMany, aggregate, updateMany
// Descomenta cada función según los pasos del README

import { MongoClient } from "mongodb"

const uri = "mongodb://bootcamp:bootcamp123@localhost:27017/bootcamp_db?authSource=admin"

// ============================================
// PASO 1: find() con proyección, sort y toArray
// ============================================

// Retorna todas las órdenes con status "pending",
// proyectando solo orderId y total, ordenadas de mayor a menor total.
// Descomenta las siguientes líneas:

async function paso1_findPendientes() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const col = client.db("bootcamp_db").collection("orders")

    // const ordenes = await col
    //   .find({ status: "pending" })
    //   .project({ orderId: 1, total: 1, _id: 0 })
    //   .sort({ total: -1 })
    //   .toArray()
    // console.log("Órdenes pendientes (mayor a menor):", ordenes)
  } finally {
    await client.close()
  }
}

// ============================================
// PASO 2: insertMany
// ============================================

// Inserta dos órdenes nuevas en la colección.
// Muestra los insertedIds resultantes.
// Descomenta las siguientes líneas:

async function paso2_insertMany() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const col = client.db("bootcamp_db").collection("orders")

    // const result = await col.insertMany([
    //   {
    //     orderId: "ORD-007",
    //     customerId: "CUST-107",
    //     items: [{ productId: "PROD-001", name: "Teclado Mecánico RGB", qty: 1, price: 89.99 }],
    //     total: 90,
    //     status: "pending",
    //     createdAt: new Date()
    //   },
    //   {
    //     orderId: "ORD-008",
    //     customerId: "CUST-108",
    //     items: [{ productId: "PROD-002", name: "Monitor 4K", qty: 2, price: 349.99 }],
    //     total: 700,
    //     status: "pending",
    //     createdAt: new Date()
    //   }
    // ])
    // console.log("Órdenes insertadas:", result.insertedCount)
    // console.log("IDs insertados:", result.insertedIds)
  } finally {
    await client.close()
  }
}

// ============================================
// PASO 3: aggregate — group por status
// ============================================

// Agrupa las órdenes por status, contando cuántas hay
// y sumando el total de ventas por grupo.
// Descomenta las siguientes líneas:

async function paso3_aggregate() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const col = client.db("bootcamp_db").collection("orders")

    // const pipeline = [
    //   {
    //     $group: {
    //       _id: "$status",
    //       cantidadOrdenes: { $sum: 1 },
    //       totalVentas: { $sum: "$total" }
    //     }
    //   },
    //   { $sort: { totalVentas: -1 } }
    // ]
    // const resultados = await col.aggregate(pipeline).toArray()
    // console.log("Resumen por status:", resultados)
  } finally {
    await client.close()
  }
}

// ============================================
// PASO 4: updateMany — órdenes pendientes vencidas
// ============================================

// Actualiza a status "expired" todas las órdenes
// con status "pending" cuya createdAt sea mayor a 7 días.
// Descomenta las siguientes líneas:

async function paso4_updateMany() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const col = client.db("bootcamp_db").collection("orders")

    // const hace7Dias = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    // const result = await col.updateMany(
    //   { status: "pending", createdAt: { $lt: hace7Dias } },
    //   { $set: { status: "expired" } }
    // )
    // console.log("Órdenes actualizadas a expired:", result.modifiedCount)
  } finally {
    await client.close()
  }
}

// Ejecutar todos los pasos
await paso1_findPendientes()
await paso2_insertMany()
await paso3_aggregate()
await paso4_updateMany()
