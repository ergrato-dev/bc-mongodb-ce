// ============================================
// Semana 23: MongoDB con Node.js
// Ejercicio 01 — SOLUCIÓN
// ============================================

"use strict"

const { MongoClient } = require("mongodb")

// URI de conexión — usa variable de entorno si está definida, o el valor por defecto local
// ⚠️ En producción, SIEMPRE usa process.env.MONGODB_URI (nunca hardcodees credenciales)
const uri =
  process.env.MONGODB_URI ??
  "mongodb://bootcamp:bootcamp123@localhost:27017/bootcamp_db?authSource=admin"

async function paso1_contar() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const db = client.db("bootcamp_db")
    const col = db.collection("products")
    const total = await col.countDocuments()
    console.log("PASO 1 — Total productos:", total)
  } finally {
    await client.close()
  }
}

async function paso2_findOne() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const col = client.db("bootcamp_db").collection("products")
    const producto = await col.findOne({ sku: "PROD-001" })
    console.log("PASO 2 — Producto encontrado:", producto?.name)
  } finally {
    await client.close()
  }
}

async function paso3_insertOne() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const col = client.db("bootcamp_db").collection("products")
    const result = await col.insertOne({
      sku: "PROD-005",
      name: "Auriculares Bluetooth",
      category: "audio",
      price: 79.99,
      stock: 30,
      isActive: true,
      createdAt: new Date()
    })
    console.log("PASO 3 — ID insertado:", result.insertedId)
  } finally {
    await client.close()
  }
}

async function paso4_updateDelete() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const col = client.db("bootcamp_db").collection("products")

    const updated = await col.updateOne(
      { sku: "PROD-005" },
      { $set: { price: 69.99, updatedAt: new Date() } }
    )
    console.log("PASO 4 — Modificados:", updated.modifiedCount)

    const deleted = await col.deleteOne({ sku: "PROD-004" })
    console.log("PASO 4 — Eliminados:", deleted.deletedCount)
  } finally {
    await client.close()
  }
}

async function main() {
  await paso1_contar()
  await paso2_findOne()
  await paso3_insertOne()
  await paso4_updateDelete()
}

main().catch(console.error)
