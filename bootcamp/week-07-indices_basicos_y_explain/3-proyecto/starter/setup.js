// Semana 07: Índices Básicos y explain()
// Proyecto — Setup de datos de prueba
// ============================================================

// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// Renombra "assets" y ajusta los campos según tus entidades.
//
// Ejemplos:
//   Biblioteca  → books, members, loans
//   Farmacia    → medicines, sales, inventory
//   Gimnasio    → members, routines, attendance
//   Restaurante → dishes, tables, orders

// Limpia la colección antes de insertar
db.assets.drop()

// Inserta al menos 20 documentos del dominio asignado
// TODO: Reemplaza "assets" por tu colección
// TODO: Ajusta los campos según las entidades de tu dominio
db.assets.insertMany([
  {
    name: "Asset Alpha",
    category: "electronics",
    status: "active",
    quantity: NumberInt(15),
    price: Decimal128("299.99"),
    createdAt: new Date("2024-01-10"),
    isAvailable: true,
    tags: ["new", "featured"],
    location: { warehouse: "A1", shelf: NumberInt(3) }
  },
  {
    name: "Asset Beta",
    category: "furniture",
    status: "active",
    quantity: NumberInt(8),
    price: Decimal128("89.50"),
    createdAt: new Date("2024-02-05"),
    isAvailable: true,
    tags: ["sale"],
    location: { warehouse: "B2", shelf: NumberInt(1) }
  },
  {
    name: "Asset Gamma",
    category: "electronics",
    status: "inactive",
    quantity: NumberInt(0),
    price: Decimal128("549.00"),
    createdAt: new Date("2024-03-12"),
    isAvailable: false,
    tags: ["discontinued"],
    location: { warehouse: "A1", shelf: NumberInt(7) }
  },
  {
    name: "Asset Delta",
    category: "clothing",
    status: "active",
    quantity: NumberInt(30),
    price: Decimal128("45.00"),
    createdAt: new Date("2024-04-01"),
    isAvailable: true,
    tags: ["new", "sale"],
    location: { warehouse: "C3", shelf: NumberInt(2) }
  },
  {
    name: "Asset Epsilon",
    category: "furniture",
    status: "active",
    quantity: NumberInt(5),
    price: Decimal128("1200.00"),
    createdAt: new Date("2024-04-15"),
    isAvailable: true,
    tags: ["premium"],
    location: { warehouse: "B2", shelf: NumberInt(4) }
  },
  {
    name: "Asset Zeta",
    category: "electronics",
    status: "active",
    quantity: NumberInt(22),
    price: Decimal128("199.99"),
    createdAt: new Date("2024-05-03"),
    isAvailable: true,
    tags: ["featured"],
    location: { warehouse: "A1", shelf: NumberInt(1) }
  },
  {
    name: "Asset Eta",
    category: "clothing",
    status: "inactive",
    quantity: NumberInt(0),
    price: Decimal128("29.99"),
    createdAt: new Date("2024-05-20"),
    isAvailable: false,
    tags: ["discontinued", "sale"],
    location: { warehouse: "C3", shelf: NumberInt(5) }
  },
  {
    name: "Asset Theta",
    category: "tools",
    status: "active",
    quantity: NumberInt(12),
    price: Decimal128("75.00"),
    createdAt: new Date("2024-06-01"),
    isAvailable: true,
    tags: ["new"],
    location: { warehouse: "D4", shelf: NumberInt(1) }
  },
  {
    name: "Asset Iota",
    category: "tools",
    status: "active",
    quantity: NumberInt(9),
    price: Decimal128("320.00"),
    createdAt: new Date("2024-06-18"),
    isAvailable: true,
    tags: ["premium", "featured"],
    location: { warehouse: "D4", shelf: NumberInt(2) }
  },
  {
    name: "Asset Kappa",
    category: "electronics",
    status: "active",
    quantity: NumberInt(3),
    price: Decimal128("899.00"),
    createdAt: new Date("2024-07-07"),
    isAvailable: true,
    tags: ["premium"],
    location: { warehouse: "A1", shelf: NumberInt(9) }
  },
  {
    name: "Asset Lambda",
    category: "furniture",
    status: "inactive",
    quantity: NumberInt(0),
    price: Decimal128("650.50"),
    createdAt: new Date("2024-07-22"),
    isAvailable: false,
    tags: ["discontinued"],
    location: { warehouse: "B2", shelf: NumberInt(6) }
  },
  {
    name: "Asset Mu",
    category: "clothing",
    status: "active",
    quantity: NumberInt(40),
    price: Decimal128("19.99"),
    createdAt: new Date("2024-08-10"),
    isAvailable: true,
    tags: ["new", "sale", "featured"],
    location: { warehouse: "C3", shelf: NumberInt(3) }
  },
  {
    name: "Asset Nu",
    category: "tools",
    status: "active",
    quantity: NumberInt(6),
    price: Decimal128("150.00"),
    createdAt: new Date("2024-09-01"),
    isAvailable: true,
    tags: ["new"],
    location: { warehouse: "D4", shelf: NumberInt(3) }
  },
  {
    name: "Asset Xi",
    category: "electronics",
    status: "active",
    quantity: NumberInt(18),
    price: Decimal128("399.00"),
    createdAt: new Date("2024-09-15"),
    isAvailable: true,
    tags: ["featured"],
    location: { warehouse: "A1", shelf: NumberInt(4) }
  },
  {
    name: "Asset Omicron",
    category: "furniture",
    status: "active",
    quantity: NumberInt(11),
    price: Decimal128("480.00"),
    createdAt: new Date("2024-10-03"),
    isAvailable: true,
    tags: ["premium", "new"],
    location: { warehouse: "B2", shelf: NumberInt(8) }
  },
  {
    name: "Asset Pi",
    category: "clothing",
    status: "active",
    quantity: NumberInt(25),
    price: Decimal128("55.99"),
    createdAt: new Date("2024-10-20"),
    isAvailable: true,
    tags: ["sale"],
    location: { warehouse: "C3", shelf: NumberInt(7) }
  },
  {
    name: "Asset Rho",
    category: "tools",
    status: "inactive",
    quantity: NumberInt(0),
    price: Decimal128("99.00"),
    createdAt: new Date("2024-11-05"),
    isAvailable: false,
    tags: ["discontinued"],
    location: { warehouse: "D4", shelf: NumberInt(5) }
  },
  {
    name: "Asset Sigma",
    category: "electronics",
    status: "active",
    quantity: NumberInt(7),
    price: Decimal128("1499.00"),
    createdAt: new Date("2024-11-18"),
    isAvailable: true,
    tags: ["premium", "featured"],
    location: { warehouse: "A1", shelf: NumberInt(6) }
  },
  {
    name: "Asset Tau",
    category: "furniture",
    status: "active",
    quantity: NumberInt(4),
    price: Decimal128("2100.00"),
    createdAt: new Date("2024-12-01"),
    isAvailable: true,
    tags: ["premium"],
    location: { warehouse: "B2", shelf: NumberInt(2) }
  },
  {
    name: "Asset Upsilon",
    category: "clothing",
    status: "active",
    quantity: NumberInt(50),
    price: Decimal128("12.99"),
    createdAt: new Date("2024-12-15"),
    isAvailable: true,
    tags: ["sale", "new"],
    location: { warehouse: "C3", shelf: NumberInt(9) }
  }
])

// Verifica la carga
print("Documentos insertados:", db.assets.countDocuments())
