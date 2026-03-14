// Semana 12: Aggregation Pipeline III — $replaceRoot y $merge
// setup.js — Datos de prueba para ejercicio-02

db.orders.drop()
db.monthly_stats.drop()

// Colección de órdenes con subdocumento "customer" embebido
db.orders.insertMany([
  {
    orderId: "ORD-001",
    customer: {
      customerId: "cust-01",
      name: "Carlos Méndez",
      city: "Bogotá",
      tier: "gold"
    },
    items: [
      { productId: "p-01", name: "Laptop", qty: NumberInt(1), price: NumberDecimal("1299.99") },
      { productId: "p-03", name: "USB Hub", qty: NumberInt(2), price: NumberDecimal("49.99") }
    ],
    total: NumberDecimal("1399.97"),
    status: "completed",
    month: "2024-01",
    orderDate: new Date("2024-01-10")
  },
  {
    orderId: "ORD-002",
    customer: {
      customerId: "cust-02",
      name: "Laura Torres",
      city: "Medellín",
      tier: "silver"
    },
    items: [
      { productId: "p-02", name: "Headphones", qty: NumberInt(1), price: NumberDecimal("199.99") }
    ],
    total: NumberDecimal("199.99"),
    status: "completed",
    month: "2024-01",
    orderDate: new Date("2024-01-15")
  },
  {
    orderId: "ORD-003",
    customer: {
      customerId: "cust-01",
      name: "Carlos Méndez",
      city: "Bogotá",
      tier: "gold"
    },
    items: [
      { productId: "p-04", name: "Monitor 27", qty: NumberInt(1), price: NumberDecimal("549.99") }
    ],
    total: NumberDecimal("549.99"),
    status: "completed",
    month: "2024-02",
    orderDate: new Date("2024-02-03")
  },
  {
    orderId: "ORD-004",
    customer: {
      customerId: "cust-03",
      name: "Andrés Villa",
      city: "Bogotá",
      tier: "bronze"
    },
    items: [
      { productId: "p-05", name: "Keyboard", qty: NumberInt(1), price: NumberDecimal("129.99") },
      { productId: "p-06", name: "Mouse", qty: NumberInt(1), price: NumberDecimal("59.99") }
    ],
    total: NumberDecimal("189.98"),
    status: "cancelled",
    month: "2024-02",
    orderDate: new Date("2024-02-10")
  },
  {
    orderId: "ORD-005",
    customer: {
      customerId: "cust-02",
      name: "Laura Torres",
      city: "Medellín",
      tier: "silver"
    },
    items: [
      { productId: "p-01", name: "Laptop", qty: NumberInt(1), price: NumberDecimal("1299.99") }
    ],
    total: NumberDecimal("1299.99"),
    status: "completed",
    month: "2024-03",
    orderDate: new Date("2024-03-05")
  },
  {
    orderId: "ORD-006",
    customer: {
      customerId: "cust-04",
      name: "Patricia Gómez",
      city: "Cali",
      tier: "gold"
    },
    items: [
      { productId: "p-07", name: "Desk Chair", qty: NumberInt(1), price: NumberDecimal("449.00") },
      { productId: "p-08", name: "Desk Lamp", qty: NumberInt(2), price: NumberDecimal("39.99") }
    ],
    total: NumberDecimal("528.98"),
    status: "completed",
    month: "2024-03",
    orderDate: new Date("2024-03-15")
  }
])

// Colección de estadísticas mensuales existentes (para practicar $merge)
db.monthly_stats.insertMany([
  {
    _id: "2024-01",
    totalRevenue: NumberDecimal("1000.00"),
    orderCount: NumberInt(10),
    source: "historical"
  }
])

db.orders.createIndex({ status: 1, month: 1 })

print("✅ Colección 'orders' cargada con 6 documentos (subdocumento 'customer' embebido)")
print("✅ Colección 'monthly_stats' cargada con 1 documento histórico")
