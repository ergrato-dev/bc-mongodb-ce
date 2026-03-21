// Semana 24: Proyecto Final Capstone
// setup.js — Colecciones para ejercicio-02 (Transacciones + Change Streams)
// Ejecutar con mongosh antes del ejercicio Node.js

db.accounts.drop()
db.transactions.drop()

db.accounts.insertMany([
  {
    accountId: "ACC-001",
    owner: "Laura Gómez",
    balance: Decimal128("1500.00"),
    isActive: true,
    createdAt: new Date()
  },
  {
    accountId: "ACC-002",
    owner: "Carlos Pérez",
    balance: Decimal128("800.00"),
    isActive: true,
    createdAt: new Date()
  }
])

print("accounts:", db.accounts.countDocuments())
print("transactions:", db.transactions.countDocuments())
