// Semana 11: $lookup y $unwind — Joins en MongoDB
// setup.js — ejercicio-01: colecciones orders y products

db.orders.drop()
db.products.drop()

// Colección de productos (tabla maestra)
db.products.insertMany([
  {
    _id: "prod-001",
    name: "Laptop Pro",
    category: "electronics",
    price: NumberDecimal("1200.00"),
    brand: "TechBrand",
    isActive: true
  },
  {
    _id: "prod-002",
    name: "Mouse Inalámbrico",
    category: "accessories",
    price: NumberDecimal("35.00"),
    brand: "PeriphCo",
    isActive: true
  },
  {
    _id: "prod-003",
    name: "Monitor 27\"",
    category: "electronics",
    price: NumberDecimal("480.00"),
    brand: "ViewMax",
    isActive: true
  },
  {
    _id: "prod-004",
    name: "Teclado Mecánico",
    category: "accessories",
    price: NumberDecimal("95.00"),
    brand: "PeriphCo",
    isActive: true
  },
  {
    _id: "prod-005",
    name: "Silla Ergonómica",
    category: "furniture",
    price: NumberDecimal("650.00"),
    brand: "ComfortWorks",
    isActive: true
  },
  {
    _id: "prod-006",
    name: "Webcam HD",
    category: "accessories",
    price: NumberDecimal("120.00"),
    brand: "VisionTech",
    isActive: false    // producto inactivo
  }
])

// Colección de pedidos (referencia a productos por ID)
db.orders.insertMany([
  {
    orderId: "ORD-001",
    customerId: "cust-001",
    customerName: "Ana García",
    productId: "prod-001",
    quantity: NumberInt(2),
    status: "completed",
    city: "Bogotá",
    orderDate: new Date("2024-01-15")
  },
  {
    orderId: "ORD-002",
    customerId: "cust-002",
    customerName: "Carlos Ruiz",
    productId: "prod-002",
    quantity: NumberInt(5),
    status: "completed",
    city: "Medellín",
    orderDate: new Date("2024-01-18")
  },
  {
    orderId: "ORD-003",
    customerId: "cust-001",
    customerName: "Ana García",
    productId: "prod-003",
    quantity: NumberInt(1),
    status: "completed",
    city: "Bogotá",
    orderDate: new Date("2024-01-22")
  },
  {
    orderId: "ORD-004",
    customerId: "cust-003",
    customerName: "Sofía López",
    productId: "prod-005",
    quantity: NumberInt(2),
    status: "completed",
    city: "Cali",
    orderDate: new Date("2024-02-05")
  },
  {
    orderId: "ORD-005",
    customerId: "cust-002",
    customerName: "Carlos Ruiz",
    productId: "prod-004",
    quantity: NumberInt(3),
    status: "cancelled",
    city: "Medellín",
    orderDate: new Date("2024-02-10")
  },
  {
    orderId: "ORD-006",
    customerId: "cust-004",
    customerName: "Miguel Torres",
    productId: "prod-001",
    quantity: NumberInt(1),
    status: "completed",
    city: "Bogotá",
    orderDate: new Date("2024-02-14")
  },
  {
    orderId: "ORD-007",
    customerId: "cust-003",
    customerName: "Sofía López",
    productId: "prod-002",
    quantity: NumberInt(8),
    status: "completed",
    city: "Cali",
    orderDate: new Date("2024-02-20")
  },
  {
    orderId: "ORD-008",
    customerId: "cust-001",
    customerName: "Ana García",
    productId: "prod-006",
    quantity: NumberInt(1),
    status: "completed",
    city: "Bogotá",
    orderDate: new Date("2024-03-01")
  },
  {
    orderId: "ORD-009",
    customerId: "cust-004",
    customerName: "Miguel Torres",
    productId: "prod-003",
    quantity: NumberInt(2),
    status: "completed",
    city: "Cali",
    orderDate: new Date("2024-03-10")
  },
  {
    orderId: "ORD-010",
    customerId: "cust-002",
    customerName: "Carlos Ruiz",
    productId: "prod-005",
    quantity: NumberInt(1),
    status: "completed",
    city: "Medellín",
    orderDate: new Date("2024-03-15")
  }
])

// Índice en productId para optimizar $lookup
db.orders.createIndex({ productId: 1 })

print("✅ Colección 'products' cargada con 6 documentos")
print("✅ Colección 'orders' cargada con 10 documentos")
print("   Índice creado en orders.productId para optimizar $lookup")
