// Semana 09: Aggregation Pipeline I
// Ejercicio 01 — Setup de datos: colección "sales"
// ============================================================

db.sales.drop()

db.sales.insertMany([
  {
    product: "Laptop Pro",
    category: "electronics",
    city: "Bogotá",
    salesperson: "Ana García",
    amount: Decimal128("1250.00"),
    quantity: NumberInt(2),
    status: "completed",
    rating: NumberInt(5),
    saleDate: new Date("2024-01-10")
  },
  {
    product: "Wireless Mouse",
    category: "accessories",
    city: "Medellín",
    salesperson: "Carlos Ruiz",
    amount: Decimal128("45.00"),
    quantity: NumberInt(5),
    status: "completed",
    rating: NumberInt(4),
    saleDate: new Date("2024-01-15")
  },
  {
    product: "Monitor 27\"",
    category: "electronics",
    city: "Bogotá",
    salesperson: "Ana García",
    amount: Decimal128("650.00"),
    quantity: NumberInt(1),
    status: "completed",
    rating: NumberInt(5),
    saleDate: new Date("2024-01-22")
  },
  {
    product: "Office Chair",
    category: "furniture",
    city: "Cali",
    salesperson: "Sofía López",
    amount: Decimal128("380.00"),
    quantity: NumberInt(3),
    status: "completed",
    rating: NumberInt(4),
    saleDate: new Date("2024-02-05")
  },
  {
    product: "USB-C Hub",
    category: "accessories",
    city: "Bogotá",
    salesperson: "Miguel Torres",
    amount: Decimal128("89.00"),
    quantity: NumberInt(4),
    status: "cancelled",
    rating: NumberInt(2),
    saleDate: new Date("2024-02-10")
  },
  {
    product: "Mechanical Keyboard",
    category: "electronics",
    city: "Medellín",
    salesperson: "Carlos Ruiz",
    amount: Decimal128("175.00"),
    quantity: NumberInt(2),
    status: "completed",
    rating: NumberInt(5),
    saleDate: new Date("2024-02-18")
  },
  {
    product: "Standing Desk",
    category: "furniture",
    city: "Bogotá",
    salesperson: "Ana García",
    amount: Decimal128("920.00"),
    quantity: NumberInt(1),
    status: "completed",
    rating: NumberInt(5),
    saleDate: new Date("2024-03-02")
  },
  {
    product: "Webcam HD",
    category: "electronics",
    city: "Cali",
    salesperson: "Sofía López",
    amount: Decimal128("120.00"),
    quantity: NumberInt(3),
    status: "completed",
    rating: NumberInt(3),
    saleDate: new Date("2024-03-14")
  },
  {
    product: "Headset Gaming",
    category: "accessories",
    city: "Medellín",
    salesperson: "Miguel Torres",
    amount: Decimal128("210.00"),
    quantity: NumberInt(2),
    status: "completed",
    rating: NumberInt(4),
    saleDate: new Date("2024-03-25")
  },
  {
    product: "SSD 1TB",
    category: "electronics",
    city: "Bogotá",
    salesperson: "Carlos Ruiz",
    amount: Decimal128("135.00"),
    quantity: NumberInt(6),
    status: "completed",
    rating: NumberInt(5),
    saleDate: new Date("2024-04-08")
  },
  {
    product: "Desk Lamp",
    category: "furniture",
    city: "Cali",
    salesperson: "Ana García",
    amount: Decimal128("55.00"),
    quantity: NumberInt(4),
    status: "completed",
    rating: NumberInt(4),
    saleDate: new Date("2024-04-19")
  },
  {
    product: "Laptop Pro",
    category: "electronics",
    city: "Medellín",
    salesperson: "Sofía López",
    amount: Decimal128("1250.00"),
    quantity: NumberInt(1),
    status: "completed",
    rating: NumberInt(5),
    saleDate: new Date("2024-04-30")
  },
  {
    product: "USB-C Hub",
    category: "accessories",
    city: "Bogotá",
    salesperson: "Miguel Torres",
    amount: Decimal128("89.00"),
    quantity: NumberInt(3),
    status: "completed",
    rating: NumberInt(4),
    saleDate: new Date("2024-05-12")
  },
  {
    product: "Monitor 27\"",
    category: "electronics",
    city: "Cali",
    salesperson: "Carlos Ruiz",
    amount: Decimal128("650.00"),
    quantity: NumberInt(2),
    status: "cancelled",
    rating: NumberInt(3),
    saleDate: new Date("2024-05-22")
  },
  {
    product: "Office Chair",
    category: "furniture",
    city: "Bogotá",
    salesperson: "Ana García",
    amount: Decimal128("380.00"),
    quantity: NumberInt(2),
    status: "completed",
    rating: NumberInt(4),
    saleDate: new Date("2024-06-03")
  }
])

print("Ventas insertadas:", db.sales.countDocuments())
