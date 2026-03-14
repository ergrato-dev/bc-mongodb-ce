// Semana 16: Validación de Esquemas y Transacciones — Ejercicio 02
// ============================================
// SETUP — Datos de prueba para transacciones
// ============================================

db.bank_accounts.drop()
db.bank_transfers.drop()
db.inventory_items.drop()
db.purchase_orders.drop()

// Cuentas bancarias para demostrar transacciones de transferencia
db.bank_accounts.insertMany([
  {
    accountId: "acc-001",
    owner: "Laura Mendoza",
    balance: Decimal128("2500.00"),
    currency: "USD",
    isActive: true,
    createdAt: new Date("2023-01-15")
  },
  {
    accountId: "acc-002",
    owner: "Marcos Delgado",
    balance: Decimal128("800.00"),
    currency: "USD",
    isActive: true,
    createdAt: new Date("2023-03-20")
  },
  {
    accountId: "acc-003",
    owner: "Sandra Pinto",
    balance: Decimal128("150.00"),
    currency: "USD",
    isActive: true,
    createdAt: new Date("2023-06-10")
  }
])

// Inventario para demostrar transacción orden + stock
db.inventory_items.insertMany([
  {
    itemId: "item-001",
    name: "Teclado Mecánico RGB",
    price: Decimal128("120.00"),
    stock: NumberInt(25),
    reserved: NumberInt(0)
  },
  {
    itemId: "item-002",
    name: "Monitor Curvo 27\"",
    price: Decimal128("450.00"),
    stock: NumberInt(8),
    reserved: NumberInt(0)
  },
  {
    itemId: "item-003",
    name: "Mouse Inalámbrico",
    price: Decimal128("35.00"),
    stock: NumberInt(50),
    reserved: NumberInt(0)
  }
])

print("Setup semana 16 - ejercicio 02 completado.")
print("bank_accounts   : " + db.bank_accounts.countDocuments())
print("inventory_items : " + db.inventory_items.countDocuments())
