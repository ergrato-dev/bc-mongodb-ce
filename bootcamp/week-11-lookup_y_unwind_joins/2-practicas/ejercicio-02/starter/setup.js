// Semana 11: $lookup y $unwind — Joins en MongoDB
// setup.js — ejercicio-02: colecciones customers y orders (con items array)

db.customers.drop()
db.orders_multi.drop()

// Colección de clientes
db.customers.insertMany([
  {
    _id: "cust-001",
    name: "Ana García",
    email: "ana@mail.com",
    city: "Bogotá",
    tier: "gold",
    isActive: true
  },
  {
    _id: "cust-002",
    name: "Carlos Ruiz",
    email: "carlos@mail.com",
    city: "Medellín",
    tier: "silver",
    isActive: true
  },
  {
    _id: "cust-003",
    name: "Sofía López",
    email: "sofia@mail.com",
    city: "Cali",
    tier: "gold",
    isActive: true
  },
  {
    _id: "cust-004",
    name: "Miguel Torres",
    email: "miguel@mail.com",
    city: "Bogotá",
    tier: "bronze",
    isActive: false
  }
])

// Pedidos con array de items embebidos (varios productos por pedido)
db.orders_multi.insertMany([
  {
    orderId: "ORD-M01",
    customerId: "cust-001",
    status: "completed",
    orderDate: new Date("2024-01-10"),
    items: [
      { productId: "prod-001", name: "Laptop Pro", qty: NumberInt(1), price: NumberDecimal("1200.00") },
      { productId: "prod-002", name: "Mouse", qty: NumberInt(2), price: NumberDecimal("35.00") }
    ]
  },
  {
    orderId: "ORD-M02",
    customerId: "cust-002",
    status: "completed",
    orderDate: new Date("2024-01-20"),
    items: [
      { productId: "prod-003", name: "Monitor 27\"", qty: NumberInt(1), price: NumberDecimal("480.00") }
    ]
  },
  {
    orderId: "ORD-M03",
    customerId: "cust-001",
    status: "completed",
    orderDate: new Date("2024-02-05"),
    items: [
      { productId: "prod-004", name: "Teclado", qty: NumberInt(1), price: NumberDecimal("95.00") },
      { productId: "prod-005", name: "Silla Ergonómica", qty: NumberInt(1), price: NumberDecimal("650.00") }
    ]
  },
  {
    orderId: "ORD-M04",
    customerId: "cust-003",
    status: "cancelled",
    orderDate: new Date("2024-02-14"),
    items: [
      { productId: "prod-001", name: "Laptop Pro", qty: NumberInt(2), price: NumberDecimal("1200.00") }
    ]
  },
  {
    orderId: "ORD-M05",
    customerId: "cust-002",
    status: "completed",
    orderDate: new Date("2024-03-01"),
    items: [
      { productId: "prod-002", name: "Mouse", qty: NumberInt(5), price: NumberDecimal("35.00") },
      { productId: "prod-003", name: "Monitor 27\"", qty: NumberInt(1), price: NumberDecimal("480.00") }
    ]
  },
  {
    orderId: "ORD-M06",
    customerId: "cust-003",
    status: "completed",
    orderDate: new Date("2024-03-10"),
    items: [
      { productId: "prod-005", name: "Silla Ergonómica", qty: NumberInt(1), price: NumberDecimal("650.00") }
    ]
  }
])

db.customers.createIndex({ _id: 1 })
db.orders_multi.createIndex({ customerId: 1 })

print("✅ Colección 'customers' cargada con 4 documentos")
print("✅ Colección 'orders_multi' cargada con 6 documentos (con items array)")
