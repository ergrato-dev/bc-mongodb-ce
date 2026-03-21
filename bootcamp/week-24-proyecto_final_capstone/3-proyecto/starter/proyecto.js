// Semana 24: Proyecto Final Capstone
// proyecto.js — Proyecto integrador
//
// Adapta los nombres de colección y campos a tu dominio asignado.
// Implementa cada TODO aplicando los conceptos de las 24 semanas.

import { MongoClient } from "mongodb"

const uri = "mongodb://bootcamp:bootcamp123@localhost:27017/bootcamp_db?authSource=admin"

// ============================================
// TODO 1: Insertar dominio completo con patrones
// ============================================
// Implementa una función que inserte las colecciones principales
// de tu dominio aplicando al menos 2 patrones de diseño.
//
// Obligatorio:
//   - Extended Reference: embebe campos del doc referenciado
//   - Computed o Bucket: según lo que aplique a tu dominio
//
// Comenta cada patrón con // ← Patrón: Nombre

async function insertarDominioCompleto() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    // TODO: implementar
    // Ejemplo de estructura esperada:
    // const items = client.db("bootcamp_db").collection("items")
    // await items.insertMany([...]) // ← Extended Reference aplicado aquí
  } finally {
    await client.close()
  }
}

// ============================================
// TODO 2: Pipeline de agregación complejo (5+ etapas)
// ============================================
// Implementa un pipeline que incluya:
//   - $match para filtrar documentos activos
//   - $lookup para unir con la colección de categorías
//   - $unwind del array del $lookup
//   - $group por categoría con $sum y $avg
//   - $sort por el valor agregado
//
// Imprime el resultado completo.

async function pipelineComplejo() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const col = client.db("bootcamp_db").collection("items")
    // TODO: implementar pipeline con $match, $lookup, $unwind, $group, $sort
  } finally {
    await client.close()
  }
}

// ============================================
// TODO 3: Transacción multi-documento
// ============================================
// Implementa una función que use withTransaction() para:
//   - Registrar una operación en item_transactions
//   - Actualizar el stock o estado del item involucrado
//   - Actualizar daily_summaries con $inc (Computed Pattern)
//
// Verifica que si se simula un error, ningún cambio persiste.

async function ejecutarTransaccion() {
  const client = new MongoClient(uri)
  await client.connect()
  const session = client.startSession()
  try {
    // TODO: implementar withTransaction()
    // Recuerda pasar { session } a todas las operaciones dentro
  } catch (err) {
    console.error("Transacción abortada:", err.message)
  } finally {
    await session.endSession()
    await client.close()
  }
}

// ============================================
// TODO 4: Crear índices estratégicos
// ============================================
// Crea los índices que cubran las queries principales de tu dominio:
//   - Índice compuesto con regla ESR para la query más frecuente
//   - Índice parcial para los documentos activos
//   - (Opcional) Índice TTL si tu dominio tiene datos con expiración
//
// Usa createIndex() y verifica con getIndexes() al final.

async function crearIndices() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const col = client.db("bootcamp_db").collection("items")
    // TODO: implementar createIndex(s)
    // Imprime col.getIndexes() al final
  } finally {
    await client.close()
  }
}

// Ejecutar el proyecto capstone
await crearIndices()
await insertarDominioCompleto()
await pipelineComplejo()
await ejecutarTransaccion()
