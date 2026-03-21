// Semana 16: Validación de Esquemas y Transacciones — Ejercicio 02 solution
// ============================================

// ============================================
// PASO 1: Transacción exitosa — transferencia bancaria
// ============================================

const session1 = db.getMongo().startSession()
session1.startTransaction()

try {
  const accounts = session1.getDatabase("bootcamp_db").bank_accounts

  accounts.updateOne(
    { accountId: "acc-001" },
    { $inc: { balance: Decimal128("-300.00") } },
    { session: session1 }
  )

  accounts.updateOne(
    { accountId: "acc-002" },
    { $inc: { balance: Decimal128("300.00") } },
    { session: session1 }
  )

  session1.commitTransaction()
  print("Transferencia completada.")
} catch(e) {
  session1.abortTransaction()
  print("Transferencia abortada: " + e.message)
} finally {
  session1.endSession()
}

db.bank_accounts.find(
  { accountId: { $in: ["acc-001", "acc-002"] } },
  { accountId: 1, owner: 1, balance: 1, _id: 0 }
)

// ============================================
// PASO 2: Transacción abortada — saldo insuficiente
// ============================================

const session2 = db.getMongo().startSession()
session2.startTransaction()

try {
  const accounts = session2.getDatabase("bootcamp_db").bank_accounts
  const source = accounts.findOne({ accountId: "acc-003" }, { session: session2 })

  if (parseFloat(source.balance.toString()) < 500) {
    throw new Error("Saldo insuficiente: " + source.balance)
  }

  accounts.updateOne(
    { accountId: "acc-003" },
    { $inc: { balance: Decimal128("-500.00") } },
    { session: session2 }
  )
  accounts.updateOne(
    { accountId: "acc-001" },
    { $inc: { balance: Decimal128("500.00") } },
    { session: session2 }
  )

  session2.commitTransaction()
} catch(e) {
  session2.abortTransaction()
  print("Transacción abortada: " + e.message)
} finally {
  session2.endSession()
}

// ============================================
// PASO 3: Transacción orden + decremento de stock
// ============================================

const session3 = db.getMongo().startSession()
session3.startTransaction()

try {
  const db3    = session3.getDatabase("bootcamp_db")
  const items  = db3.inventory_items
  const orders = db3.purchase_orders

  orders.insertOne({
    orderId: "po-001",
    customerId: "cust-01",
    itemId: "item-001",
    quantity: NumberInt(3),
    unitPrice: Decimal128("120.00"),
    totalAmount: Decimal128("360.00"),
    status: "confirmed",
    createdAt: new Date()
  }, { session: session3 })

  items.updateOne(
    { itemId: "item-001" },
    { $inc: { stock: -3 } },
    { session: session3 }
  )

  session3.commitTransaction()
  print("Orden creada y stock actualizado.")
} catch(e) {
  session3.abortTransaction()
  print("Transacción abortada: " + e.message)
} finally {
  session3.endSession()
}

// ============================================
// PASO 4: Verificar resultados finales
// ============================================

db.bank_accounts.find({}, { accountId: 1, owner: 1, balance: 1, _id: 0 })

db.inventory_items.findOne({ itemId: "item-001" }, { name: 1, stock: 1, _id: 0 })

db.purchase_orders.findOne({ orderId: "po-001" }, { orderId: 1, status: 1, totalAmount: 1, _id: 0 })
