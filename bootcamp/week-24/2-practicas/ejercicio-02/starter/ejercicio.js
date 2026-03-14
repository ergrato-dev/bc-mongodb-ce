// Semana 24: Proyecto Final Capstone
// ejercicio-02 — Transacciones multi-documento con Node.js
// Descomenta cada sección según los pasos del README

import { MongoClient } from "mongodb"

const uri = "mongodb://bootcamp:bootcamp123@localhost:27017/bootcamp_db?authSource=admin"

// ============================================
// PASO 1: Transferencia con withTransaction()
// ============================================

// Transfiere $200 de ACC-001 a ACC-002 en una transacción ACID.
// Si cualquier operación falla, toda la transacción se revierte.
// Descomenta las siguientes líneas:

async function paso1_transferencia() {
  const client = new MongoClient(uri)
  await client.connect()
  const session = client.startSession()
  try {
    // await session.withTransaction(async () => {
    //   const accounts = client.db("bootcamp_db").collection("accounts")
    //   const txns = client.db("bootcamp_db").collection("transactions")
    //
    //   const monto = 200
    //
    //   // Débito en origen
    //   await accounts.updateOne(
    //     { accountId: "ACC-001" },
    //     { $inc: { balance: -monto } },
    //     { session }
    //   )
    //
    //   // Crédito en destino
    //   await accounts.updateOne(
    //     { accountId: "ACC-002" },
    //     { $inc: { balance: monto } },
    //     { session }
    //   )
    //
    //   // Registro de la transacción
    //   await txns.insertOne(
    //     {
    //       from: "ACC-001",
    //       to: "ACC-002",
    //       amount: monto,
    //       type: "transfer",
    //       createdAt: new Date()
    //     },
    //     { session }
    //   )
    // })
    // console.log("Transferencia completada")
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

// Consulta los saldos finales de ambas cuentas para verificar
// que la transacción aplicó correctamente.
// Descomenta las siguientes líneas:

async function paso2_verificarSaldos() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const accounts = client.db("bootcamp_db").collection("accounts")

    // const cuentas = await accounts.find(
    //   {},
    //   { accountId: 1, owner: 1, balance: 1, _id: 0 }
    // ).toArray()
    // console.log("Saldos actuales:", cuentas)
  } finally {
    await client.close()
  }
}

// ============================================
// PASO 3: Pipeline de auditoría — historial de transacciones
// ============================================

// Consulta el historial de transacciones agrupando por tipo
// para un reporte de auditoría.
// Descomenta las siguientes líneas:

async function paso3_auditoria() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const txns = client.db("bootcamp_db").collection("transactions")

    // const resumen = await txns.aggregate([
    //   {
    //     $group: {
    //       _id: "$type",
    //       totalOperaciones: { $sum: 1 },
    //       montoTotal: { $sum: "$amount" }
    //     }
    //   },
    //   { $sort: { montoTotal: -1 } }
    // ]).toArray()
    // console.log("Auditoría:", resumen)
  } finally {
    await client.close()
  }
}

// ============================================
// PASO 4: Transacción con error simulado
// ============================================

// Simula una transacción que falla intencionalmente para
// demostrar que el rollback automático funciona.
// Descomenta las siguientes líneas:

async function paso4_rollback() {
  const client = new MongoClient(uri)
  await client.connect()
  const session = client.startSession()
  try {
    // await session.withTransaction(async () => {
    //   const accounts = client.db("bootcamp_db").collection("accounts")
    //
    //   // Primera operación: débito
    //   await accounts.updateOne(
    //     { accountId: "ACC-001" },
    //     { $inc: { balance: -9999 } },
    //     { session }
    //   )
    //
    //   // Error simulado — la transacción se revertirá
    //   throw new Error("Error simulado — rollback automático")
    // })
  } catch (err) {
    // console.log("Rollback ejecutado:", err.message)
  } finally {
    await session.endSession()
    await client.close()
  }
}

await paso1_transferencia()
await paso2_verificarSaldos()
await paso3_auditoria()
await paso4_rollback()
await paso2_verificarSaldos()
