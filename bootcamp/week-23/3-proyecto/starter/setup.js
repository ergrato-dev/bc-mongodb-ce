// Semana 23: MongoDB con Node.js
// setup.js — Colección genérica para el proyecto semanal
// Ejecutar con mongosh antes de correr proyecto.js

// NOTA: Renombra la colección y ajusta los campos según tu dominio asignado.
// Ejemplos:
//   Biblioteca  → books, members, loans
//   Farmacia    → medicines, sales, inventory
//   Restaurante → dishes, tables, orders

db.items.drop()

db.items.insertMany([
  {
    code: "ITEM-001",
    name: "Elemento de ejemplo A",
    category: "categoria-1",
    value: Decimal128("25.50"),
    isActive: true,
    createdAt: new Date()
  },
  {
    code: "ITEM-002",
    name: "Elemento de ejemplo B",
    category: "categoria-1",
    value: Decimal128("40.00"),
    isActive: true,
    createdAt: new Date()
  },
  {
    code: "ITEM-003",
    name: "Elemento de ejemplo C",
    category: "categoria-2",
    value: Decimal128("15.75"),
    isActive: false,
    createdAt: new Date()
  }
])

print("items cargados:", db.items.countDocuments())
