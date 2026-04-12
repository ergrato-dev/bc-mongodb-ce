// Semana 24: Proyecto Final Capstone
// ejercicio-02 — SOLUCIÓN: Transacciones multi-documento con Node.js

import { MongoClient } from "mongodb"

// URI de conexión — usa variable de entorno si está definida, o el valor por defecto local
// ⚠️ En producción, SIEMPRE usa process.env.MONGODB_URI (nunca hardcodees credenciales)
const uri =
  process.env.MONGODB_URI ??
  "mongodb://bootcamp:bootcamp123@localhost:27017/bootcamp_db?authSource=admin"

// ============================================
// PASO 1: Transferencia con withTransaction()
// ============================================

async function paso1_transferencia() {
  const client = new MongoClient(uri)
  await client.connect()
  const session = client.startSession()
  try {
    await session.withTransaction(async () => {
      const accounts = client.db("bootcamp_db").collection("accounts")
      const txns = client.db("bootcamp_db").collection("transactions")

      const monto = 200

      await accounts.updateOne(
        { accountId: "ACC-001" },
        { $inc: { balance: -monto } },
        { session }
      )
      await accounts.updateOne(
        { accountId: "ACC-002" },
        { $inc: { balance: monto } },
        { session }
      )
      await txns.insertOne(
        {
          from: "ACC-001",
          to: "ACC-002",
          amount: monto,
          type: "transfer",
          createdAt: new Date()
        },
        { session }
      )
    })
    console.log("Transferencia completada")
  } catch (err) {
    console.error("Transacción abortada:", err.message)
  } finally {
    await session.endSession()
    await client.close()
  }
}

// ============================================
// PASO 2: Verificar saldos después de la transacción
// ============================================

async function paso2_verificarSaldos() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const accounts = client.db("bootcamp_db").collection("accounts")
    const cuentas = await accounts.find(
      {},
      { accountId: 1, owner: 1, balance: 1, _id: 0 }
    ).toArray()
    console.log("Saldos actuales:", cuentas)
  } finally {
    await client.close()
  }
}

// ============================================
// PASO 3: Pipeline de auditoría
// ============================================

async function paso3_auditoria() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const txns = client.db("bootcamp_db").collection("transactions")
    const resumen = await txns.aggregate([
      {
        $group: {
          _id: "$type",
          totalOperaciones: { $sum: 1 },
          montoTotal: { $sum: "$amount" }
        }
      },
      { $sort: { montoTotal: -1 } }
    ]).toArray()
    console.log("Auditoría:", resumen)
  } finally {
    await client.close()
  }
}

// ============================================
// PASO 4: Transacción con error simulado (rollback)
// ============================================

async function paso4_rollback() {
  const client = new MongoClient(uri)
  await client.connect()
  const session = client.startSession()
  try {
    await session.withTransaction(async () => {
      const accounts = client.db("bootcamp_db").collection("accounts")
      await accounts.updateOne(
        { accountId: "ACC-001" },
        { $inc: { balance: -9999 } },
        { session }
      )
      throw new Error("Error simulado — rollback automático")
    })
  } catch (err) {
    console.log("Rollback ejecutado:", err.message)
  } finally {
    await session.endSession()
    await client.close()
  }
}

await paso1_transferencia()
await paso2_verificarSaldos()
await paso3_auditoria()
await paso4_rollback()
console.log("--- Saldos tras rollback (sin cambios) ---")
await paso2_verificarSaldos()
