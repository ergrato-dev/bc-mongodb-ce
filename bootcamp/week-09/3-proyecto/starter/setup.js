// Semana 09: Aggregation Pipeline I
// Proyecto — Setup de datos
// ============================================================

// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// Ejemplos:
//   Biblioteca  → books (title, genre, author, year, copiesAvailable, price)
//   Farmacia    → medicines (name, category, stock, price, expirationDate)
//   Restaurante → dishes (name, type, price, preparationTime, isAvailable)

db.records.drop()

db.records.insertMany([
  {
    name: "Record Alfa",
    type: "type-a",
    status: "active",
    value: Decimal128("350.00"),
    quantity: NumberInt(12),
    score: NumberInt(5),
    createdAt: new Date("2024-01-10"),
    isActive: true
  },
  {
    name: "Record Beta",
    type: "type-b",
    status: "active",
    value: Decimal128("180.00"),
    quantity: NumberInt(7),
    score: NumberInt(4),
    createdAt: new Date("2024-01-25"),
    isActive: true
  },
  {
    name: "Record Gamma",
    type: "type-a",
    status: "inactive",
    value: Decimal128("500.00"),
    quantity: NumberInt(0),
    score: NumberInt(3),
    createdAt: new Date("2024-02-08"),
    isActive: false
  },
  {
    name: "Record Delta",
    type: "type-c",
    status: "active",
    value: Decimal128("95.00"),
    quantity: NumberInt(20),
    score: NumberInt(4),
    createdAt: new Date("2024-02-20"),
    isActive: true
  },
  {
    name: "Record Epsilon",
    type: "type-b",
    status: "active",
    value: Decimal128("1200.00"),
    quantity: NumberInt(3),
    score: NumberInt(5),
    createdAt: new Date("2024-03-05"),
    isActive: true
  },
  {
    name: "Record Zeta",
    type: "type-a",
    status: "active",
    value: Decimal128("275.00"),
    quantity: NumberInt(9),
    score: NumberInt(5),
    createdAt: new Date("2024-03-18"),
    isActive: true
  },
  {
    name: "Record Eta",
    type: "type-c",
    status: "active",
    value: Decimal128("440.00"),
    quantity: NumberInt(6),
    score: NumberInt(3),
    createdAt: new Date("2024-04-02"),
    isActive: true
  },
  {
    name: "Record Theta",
    type: "type-b",
    status: "inactive",
    value: Decimal128("820.00"),
    quantity: NumberInt(0),
    score: NumberInt(2),
    createdAt: new Date("2024-04-15"),
    isActive: false
  },
  {
    name: "Record Iota",
    type: "type-a",
    status: "active",
    value: Decimal128("130.00"),
    quantity: NumberInt(15),
    score: NumberInt(4),
    createdAt: new Date("2024-05-01"),
    isActive: true
  },
  {
    name: "Record Kappa",
    type: "type-c",
    status: "active",
    value: Decimal128("690.00"),
    quantity: NumberInt(4),
    score: NumberInt(5),
    createdAt: new Date("2024-05-20"),
    isActive: true
  },
  {
    name: "Record Lambda",
    type: "type-b",
    status: "active",
    value: Decimal128("310.00"),
    quantity: NumberInt(8),
    score: NumberInt(4),
    createdAt: new Date("2024-06-03"),
    isActive: true
  },
  {
    name: "Record Mu",
    type: "type-a",
    status: "inactive",
    value: Decimal128("75.00"),
    quantity: NumberInt(0),
    score: NumberInt(2),
    createdAt: new Date("2024-06-18"),
    isActive: false
  },
  {
    name: "Record Nu",
    type: "type-c",
    status: "active",
    value: Decimal128("560.00"),
    quantity: NumberInt(5),
    score: NumberInt(5),
    createdAt: new Date("2024-07-07"),
    isActive: true
  },
  {
    name: "Record Xi",
    type: "type-a",
    status: "active",
    value: Decimal128("200.00"),
    quantity: NumberInt(11),
    score: NumberInt(3),
    createdAt: new Date("2024-07-22"),
    isActive: true
  },
  {
    name: "Record Omicron",
    type: "type-b",
    status: "active",
    value: Decimal128("950.00"),
    quantity: NumberInt(2),
    score: NumberInt(5),
    createdAt: new Date("2024-08-10"),
    isActive: true
  }
])

print("Records insertados:", db.records.countDocuments())
