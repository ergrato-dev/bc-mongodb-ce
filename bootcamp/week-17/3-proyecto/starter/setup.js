// ============================================
// Semana 17 — Proyecto: Optimización de Consultas
// setup.js — Esquema genérico adaptable al dominio
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta esta colección al dominio asignado.
// Ejemplos:
//   Biblioteca  → books (title, genre, author, stock, isAvailable)
//   Farmacia    → medicines (name, category, price, stock, requiresPrescription)
//   Gimnasio    → members (name, plan, status, region, joinDate)
//   Restaurante → orders (status, table, category, amount, createdAt)

// TODO: Renombrar la colección según tu dominio
db.catalog_perf.drop()

db.catalog_perf.insertMany([
  {
    itemId: "item-001",
    category: "type-A",
    brand: "brand-X",
    price: Decimal128("150.00"),
    stock: NumberInt(25),
    isActive: true,
    region: "north",
    createdAt: new Date("2024-01-10")
  },
  {
    itemId: "item-002",
    category: "type-B",
    brand: "brand-Y",
    price: Decimal128("89.50"),
    stock: NumberInt(12),
    isActive: true,
    region: "south",
    createdAt: new Date("2024-01-12")
  },
  {
    itemId: "item-003",
    category: "type-A",
    brand: "brand-X",
    price: Decimal128("320.00"),
    stock: NumberInt(8),
    isActive: false,
    region: "east",
    createdAt: new Date("2024-01-15")
  },
  {
    itemId: "item-004",
    category: "type-C",
    brand: "brand-Z",
    price: Decimal128("45.00"),
    stock: NumberInt(50),
    isActive: true,
    region: "north",
    createdAt: new Date("2024-01-18")
  },
  {
    itemId: "item-005",
    category: "type-B",
    brand: "brand-X",
    price: Decimal128("275.00"),
    stock: NumberInt(5),
    isActive: true,
    region: "west",
    createdAt: new Date("2024-01-20")
  },
  {
    itemId: "item-006",
    category: "type-A",
    brand: "brand-Y",
    price: Decimal128("410.00"),
    stock: NumberInt(3),
    isActive: true,
    region: "north",
    createdAt: new Date("2024-02-01")
  },
  {
    itemId: "item-007",
    category: "type-C",
    brand: "brand-Z",
    price: Decimal128("60.00"),
    stock: NumberInt(40),
    isActive: false,
    region: "south",
    createdAt: new Date("2024-02-05")
  },
  {
    itemId: "item-008",
    category: "type-B",
    brand: "brand-X",
    price: Decimal128("195.00"),
    stock: NumberInt(18),
    isActive: true,
    region: "east",
    createdAt: new Date("2024-02-08")
  }
])

print("✓ catalog_perf creado con " + db.catalog_perf.countDocuments() + " documentos")
