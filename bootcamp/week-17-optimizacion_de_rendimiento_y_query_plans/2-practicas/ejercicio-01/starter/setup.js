// ============================================
// Semana 17 — Ejercicio 01: explain() y COLLSCAN
// setup.js — Crea colección sales_perf con datos de prueba
// ============================================

// Limpiar colección previa
db.sales_perf.drop()

// Eliminar índices explícitamente antes de insertar
// (la colección se crea sin índices excepto _id)

db.sales_perf.insertMany([
  {
    saleId: "sale-001",
    status: "completed",
    region: "north",
    amount: Decimal128("320.50"),
    customerId: "cust-101",
    productId: "prod-A",
    saleDate: new Date("2024-01-15")
  },
  {
    saleId: "sale-002",
    status: "pending",
    region: "south",
    amount: Decimal128("89.00"),
    customerId: "cust-102",
    productId: "prod-B",
    saleDate: new Date("2024-01-16")
  },
  {
    saleId: "sale-003",
    status: "completed",
    region: "north",
    amount: Decimal128("450.00"),
    customerId: "cust-103",
    productId: "prod-A",
    saleDate: new Date("2024-01-17")
  },
  {
    saleId: "sale-004",
    status: "cancelled",
    region: "east",
    amount: Decimal128("120.75"),
    customerId: "cust-104",
    productId: "prod-C",
    saleDate: new Date("2024-01-18")
  },
  {
    saleId: "sale-005",
    status: "completed",
    region: "west",
    amount: Decimal128("670.00"),
    customerId: "cust-105",
    productId: "prod-B",
    saleDate: new Date("2024-01-19")
  },
  {
    saleId: "sale-006",
    status: "pending",
    region: "north",
    amount: Decimal128("200.00"),
    customerId: "cust-106",
    productId: "prod-D",
    saleDate: new Date("2024-01-20")
  },
  {
    saleId: "sale-007",
    status: "completed",
    region: "south",
    amount: Decimal128("540.25"),
    customerId: "cust-107",
    productId: "prod-A",
    saleDate: new Date("2024-01-21")
  },
  {
    saleId: "sale-008",
    status: "completed",
    region: "north",
    amount: Decimal128("310.00"),
    customerId: "cust-108",
    productId: "prod-C",
    saleDate: new Date("2024-01-22")
  },
  {
    saleId: "sale-009",
    status: "cancelled",
    region: "west",
    amount: Decimal128("95.00"),
    customerId: "cust-109",
    productId: "prod-B",
    saleDate: new Date("2024-01-23")
  },
  {
    saleId: "sale-010",
    status: "completed",
    region: "east",
    amount: Decimal128("780.50"),
    customerId: "cust-110",
    productId: "prod-D",
    saleDate: new Date("2024-01-24")
  },
  {
    saleId: "sale-011",
    status: "completed",
    region: "north",
    amount: Decimal128("415.00"),
    customerId: "cust-111",
    productId: "prod-A",
    saleDate: new Date("2024-02-01")
  },
  {
    saleId: "sale-012",
    status: "pending",
    region: "east",
    amount: Decimal128("230.00"),
    customerId: "cust-112",
    productId: "prod-C",
    saleDate: new Date("2024-02-02")
  },
  {
    saleId: "sale-013",
    status: "completed",
    region: "south",
    amount: Decimal128("890.00"),
    customerId: "cust-113",
    productId: "prod-B",
    saleDate: new Date("2024-02-03")
  },
  {
    saleId: "sale-014",
    status: "completed",
    region: "west",
    amount: Decimal128("350.75"),
    customerId: "cust-114",
    productId: "prod-D",
    saleDate: new Date("2024-02-04")
  },
  {
    saleId: "sale-015",
    status: "cancelled",
    region: "north",
    amount: Decimal128("110.00"),
    customerId: "cust-115",
    productId: "prod-A",
    saleDate: new Date("2024-02-05")
  }
])

print("✓ Colección sales_perf creada con " + db.sales_perf.countDocuments() + " documentos")
print("✓ Índices actuales: " + JSON.stringify(db.sales_perf.getIndexes().map(i => i.name)))
