// Semana 23: MongoDB con Node.js
// proyecto.js — Proyecto integrador
//
// Adapta los nombres de colección y campos a tu dominio asignado.
// Implementa cada TODO usando el driver oficial de MongoDB para Node.js.

import { MongoClient } from "mongodb"

// URI de conexión — usa variable de entorno si está definida, o el valor por defecto local
// ⚠️ En producción, SIEMPRE usa process.env.MONGODB_URI (nunca hardcodees credenciales)
const uri =
  process.env.MONGODB_URI ??
  "mongodb://bootcamp:bootcamp123@localhost:27017/bootcamp_db?authSource=admin"

// ============================================
// TODO 1: Función de conexión
// ============================================
// Implementa una función que:
//   - Cree una instancia de MongoClient con el URI
//   - Llame await client.connect()
//   - Retorne { client, db } donde db = client.db("bootcamp_db")
// Úsala en todas las funciones siguientes.

async function conectar() {
  // TODO: implementar
}

// ============================================
// TODO 2: Insertar documentos
// ============================================
// Implementa una función que use insertMany() para insertar
// al menos 5 documentos de la entidad principal de tu dominio.
// - Usa campos coherentes con tu dominio (name, category, price, etc.)
// - Imprime el resultado con insertedCount e insertedIds
// - Cierra el cliente en finally

async function insertarItems() {
  // TODO: implementar
}

// ============================================
// TODO 3: Buscar con filtro, proyección y sort
// ============================================
// Implementa una función que use find() con:
//   - Un filtro significativo para tu dominio (ej: isActive: true)
//   - Una proyección con los campos más relevantes (_id: 0)
//   - .sort() por un campo numérico
//   - .toArray() para resolver el cursor
// - Imprime el array resultante

async function buscarItems() {
  // TODO: implementar
}

// ============================================
// TODO 4: Pipeline de agregación
// ============================================
// Implementa una función que use aggregate() con:
//   - $match para filtrar documentos activos o por categoría
//   - $group por una categoría con $sum:1 y $avg o $sum de un valor
//   - $sort para ordenar los resultados
//   - .toArray() para resolver el cursor
// - Imprime los resultados del pipeline

async function resumenPorGrupo() {
  // TODO: implementar
}

// Ejecutar el proyecto
await insertarItems()
await buscarItems()
await resumenPorGrupo()
