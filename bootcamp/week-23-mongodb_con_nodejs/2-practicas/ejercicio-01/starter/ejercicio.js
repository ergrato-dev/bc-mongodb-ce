// ============================================
// Semana 23: MongoDB con Node.js
// Ejercicio 01 — Conexión y CRUD básico
// ============================================
// Ejecutar: node ejercicio.js (desde bootcamp/week-23-mongodb_con_nodejs/)

"use strict"

const { MongoClient } = require("mongodb")

// URI de conexión para el entorno Docker del bootcamp
const uri =
  "mongodb://bootcamp:bootcamp123@localhost:27017/bootcamp_db?authSource=admin"

// ============================================
// PASO 1: Conexión y conteo de documentos
// ============================================

// Completa la función para conectar a MongoDB y contar documentos en 'products'
// Usa: await client.connect(), client.db(), db.collection(), collection.countDocuments()

async function paso1_contar() {
  const client = new MongoClient(uri)
  try {
    // TODO: Descomenta y completa:
    // await client.connect()
    // const db = client.db("bootcamp_db")
    // const col = db.collection("products")
    // const total = await col.countDocuments()
    // console.log("PASO 1 — Total productos:", total)
  } finally {
    // TODO: Descomenta:
    // await client.close()
  }
}

// ============================================
// PASO 2: findOne con filtro
// ============================================

// Busca el producto con sku: "PROD-001"
async function paso2_findOne() {
  const client = new MongoClient(uri)
  try {
    // TODO: Descomenta y completa:
    // await client.connect()
    // const col = client.db("bootcamp_db").collection("products")
    // const producto = await col.findOne({ sku: "PROD-001" })
    // console.log("PASO 2 — Producto encontrado:", producto?.name)
  } finally {
    // await client.close()
  }
}

// ============================================
// PASO 3: insertOne y obtener _id
// ============================================

// Inserta un nuevo producto y muestra el _id generado
async function paso3_insertOne() {
  const client = new MongoClient(uri)
  try {
    // TODO: Descomenta y completa:
    // await client.connect()
    // const col = client.db("bootcamp_db").collection("products")
    // const result = await col.insertOne({
    //   sku: "PROD-005",
    //   name: "Auriculares Bluetooth",
    //   category: "audio",
    //   price: 79.99,
    //   stock: 30,
    //   isActive: true,
    //   createdAt: new Date()
    // })
    // console.log("PASO 3 — ID insertado:", result.insertedId)
  } finally {
    // await client.close()
  }
}

// ============================================
// PASO 4: updateOne y deleteOne
// ============================================

async function paso4_updateDelete() {
  const client = new MongoClient(uri)
  try {
    // TODO: Descomenta y completa:
    // await client.connect()
    // const col = client.db("bootcamp_db").collection("products")

    // Actualiza el precio del PROD-005 recién insertado
    // const updated = await col.updateOne(
    //   { sku: "PROD-005" },
    //   { $set: { price: 69.99, updatedAt: new Date() } }
    // )
    // console.log("PASO 4 — Modificados:", updated.modifiedCount)

    // Elimina el PROD-004 (sin stock, inactivo)
    // const deleted = await col.deleteOne({ sku: "PROD-004" })
    // console.log("PASO 4 — Eliminados:", deleted.deletedCount)
  } finally {
    // await client.close()
  }
}

// Ejecutar todos los pasos en secuencia
async function main() {
  await paso1_contar()
  await paso2_findOne()
  await paso3_insertOne()
  await paso4_updateDelete()
}

main().catch(console.error)
