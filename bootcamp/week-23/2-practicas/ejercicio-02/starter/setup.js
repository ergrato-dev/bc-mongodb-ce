// Semana 23: MongoDB con Node.js
// setup.js — Colección orders para ejercicio-02
// Ejecutar con mongosh antes de correr el script Node.js

db.orders.drop()

db.orders.insertMany([
  {
    orderId: "ORD-001",
    customerId: "CUST-101",
    items: [
      { productId: "PROD-001", name: "Teclado Mecánico RGB", qty: 1, price: 89.99 },
      { productId: "PROD-003", name: "Mouse Inalámbrico", qty: 2, price: 29.99 }
    ],
    total: NumberInt(150),
    status: "pending",
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
  },
  {
    orderId: "ORD-002",
    customerId: "CUST-102",
    items: [
      { productId: "PROD-002", name: "Monitor 4K", qty: 1, price: 349.99 }
    ],
    total: NumberInt(350),
    status: "shipped",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
  },
  {
    orderId: "ORD-003",
    customerId: "CUST-103",
    items: [
      { productId: "PROD-001", name: "Teclado Mecánico RGB", qty: 2, price: 89.99 }
    ],
    total: NumberInt(180),
    status: "pending",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
  },
  {
    orderId: "ORD-004",
    customerId: "CUST-104",
    items: [
      { productId: "PROD-003", name: "Mouse Inalámbrico", qty: 3, price: 29.99 }
    ],
    total: NumberInt(90),
    status: "delivered",
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)
  },
  {
    orderId: "ORD-005",
    customerId: "CUST-105",
    items: [
      { productId: "PROD-002", name: "Monitor 4K", qty: 1, price: 349.99 },
      { productId: "PROD-001", name: "Teclado Mecánico RGB", qty: 1, price: 89.99 }
    ],
    total: NumberInt(440),
    status: "pending",
    createdAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000)
  },
  {
    orderId: "ORD-006",
    customerId: "CUST-106",
    items: [
      { productId: "PROD-003", name: "Mouse Inalámbrico", qty: 1, price: 29.99 }
    ],
    total: NumberInt(30),
    status: "shipped",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
  }
])

print("orders cargadas:", db.orders.countDocuments())
