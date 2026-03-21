// Semana 13: Índices Avanzados — Compuestos, TTL, Parciales y Únicos
// Ejercicio 01 — Setup: Índices Compuestos y Covered Queries
// ============================================================
// Colección: orders_idx
// Campos: orderId, customerId, status, city, region, amount (Decimal128), orderDate (Date)

db.orders_idx.drop()

db.orders_idx.insertMany([
  {
    orderId: "ORD-001",
    customerId: "cust-01",
    status: "completed",
    city: "Bogotá",
    region: "centro",
    amount: Decimal128("250.00"),
    orderDate: new Date("2024-01-15")
  },
  {
    orderId: "ORD-002",
    customerId: "cust-02",
    status: "pending",
    city: "Medellín",
    region: "norte",
    amount: Decimal128("80.50"),
    orderDate: new Date("2024-01-20")
  },
  {
    orderId: "ORD-003",
    customerId: "cust-01",
    status: "completed",
    city: "Bogotá",
    region: "centro",
    amount: Decimal128("430.75"),
    orderDate: new Date("2024-02-03")
  },
  {
    orderId: "ORD-004",
    customerId: "cust-03",
    status: "cancelled",
    city: "Cali",
    region: "sur",
    amount: Decimal128("120.00"),
    orderDate: new Date("2024-02-10")
  },
  {
    orderId: "ORD-005",
    customerId: "cust-02",
    status: "completed",
    city: "Medellín",
    region: "norte",
    amount: Decimal128("95.25"),
    orderDate: new Date("2024-02-18")
  },
  {
    orderId: "ORD-006",
    customerId: "cust-04",
    status: "pending",
    city: "Barranquilla",
    region: "norte",
    amount: Decimal128("310.00"),
    orderDate: new Date("2024-03-01")
  },
  {
    orderId: "ORD-007",
    customerId: "cust-01",
    status: "completed",
    city: "Bogotá",
    region: "sur",
    amount: Decimal128("55.00"),
    orderDate: new Date("2024-03-05")
  },
  {
    orderId: "ORD-008",
    customerId: "cust-03",
    status: "completed",
    city: "Cali",
    region: "centro",
    amount: Decimal128("780.00"),
    orderDate: new Date("2024-03-12")
  },
  {
    orderId: "ORD-009",
    customerId: "cust-05",
    status: "pending",
    city: "Bogotá",
    region: "norte",
    amount: Decimal128("145.50"),
    orderDate: new Date("2024-03-20")
  },
  {
    orderId: "ORD-010",
    customerId: "cust-02",
    status: "cancelled",
    city: "Medellín",
    region: "sur",
    amount: Decimal128("220.00"),
    orderDate: new Date("2024-04-02")
  },
  {
    orderId: "ORD-011",
    customerId: "cust-04",
    status: "completed",
    city: "Barranquilla",
    region: "norte",
    amount: Decimal128("630.00"),
    orderDate: new Date("2024-04-08")
  },
  {
    orderId: "ORD-012",
    customerId: "cust-01",
    status: "pending",
    city: "Bogotá",
    region: "centro",
    amount: Decimal128("175.00"),
    orderDate: new Date("2024-04-15")
  },
  {
    orderId: "ORD-013",
    customerId: "cust-05",
    status: "completed",
    city: "Medellín",
    region: "norte",
    amount: Decimal128("490.00"),
    orderDate: new Date("2024-04-22")
  },
  {
    orderId: "ORD-014",
    customerId: "cust-03",
    status: "completed",
    city: "Cali",
    region: "sur",
    amount: Decimal128("340.75"),
    orderDate: new Date("2024-05-01")
  },
  {
    orderId: "ORD-015",
    customerId: "cust-05",
    status: "cancelled",
    city: "Bogotá",
    region: "centro",
    amount: Decimal128("60.00"),
    orderDate: new Date("2024-05-10")
  }
])

print("✅ orders_idx: " + db.orders_idx.countDocuments() + " documentos insertados")
print("   Estados — completed: " + db.orders_idx.countDocuments({ status: "completed" }) +
      ", pending: " + db.orders_idx.countDocuments({ status: "pending" }) +
      ", cancelled: " + db.orders_idx.countDocuments({ status: "cancelled" }))
