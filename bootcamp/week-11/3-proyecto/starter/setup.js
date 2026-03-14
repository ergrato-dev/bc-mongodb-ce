// Semana 11: $lookup y $unwind — Joins en MongoDB
// setup.js — Datos de prueba genéricos para el proyecto semanal

// ============================================
// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// Ejemplos:
//   Biblioteca  → books + loans
//   Farmacia    → medicines + sales
//   Gimnasio    → trainers + sessions
//   Restaurante → dishes + orders
//
// TODO: Renombrar "catalog" según tu dominio
// TODO: Renombrar "transactions" según tu dominio
// TODO: Ajustar campos según las entidades de tu dominio
// ============================================

db.catalog.drop()
db.transactions.drop()

// Colección maestra: catálogo de entidades del dominio
db.catalog.insertMany([
  {
    _id: "item-001",
    name: "Category Alpha Item",
    type: "type-a",
    subtype: "premium",
    price: NumberDecimal("250.00"),
    isActive: true,
    tags: ["featured", "popular"]
  },
  {
    _id: "item-002",
    name: "Category Beta Item",
    type: "type-b",
    subtype: "standard",
    price: NumberDecimal("85.00"),
    isActive: true,
    tags: ["popular"]
  },
  {
    _id: "item-003",
    name: "Category Alpha Item 2",
    type: "type-a",
    subtype: "standard",
    price: NumberDecimal("150.00"),
    isActive: true,
    tags: ["new"]
  },
  {
    _id: "item-004",
    name: "Category Gamma Item",
    type: "type-c",
    subtype: "premium",
    price: NumberDecimal("500.00"),
    isActive: true,
    tags: ["featured"]
  },
  {
    _id: "item-005",
    name: "Category Beta Item 2",
    type: "type-b",
    subtype: "basic",
    price: NumberDecimal("40.00"),
    isActive: false   // elemento inactivo
  }
])

// Colección de transacciones: referencia a catalog por itemId
db.transactions.insertMany([
  {
    txId: "TX-001",
    agentId: "agent-01",
    agentName: "Agent Alpha",
    itemId: "item-001",
    quantity: NumberInt(3),
    status: "completed",
    region: "North",
    txDate: new Date("2024-01-12"),
    notes: "Primera transacción"
  },
  {
    txId: "TX-002",
    agentId: "agent-02",
    agentName: "Agent Beta",
    itemId: "item-002",
    quantity: NumberInt(10),
    status: "completed",
    region: "South",
    txDate: new Date("2024-01-18")
  },
  {
    txId: "TX-003",
    agentId: "agent-01",
    agentName: "Agent Alpha",
    itemId: "item-003",
    quantity: NumberInt(5),
    status: "completed",
    region: "North",
    txDate: new Date("2024-02-03")
  },
  {
    txId: "TX-004",
    agentId: "agent-03",
    agentName: "Agent Gamma",
    itemId: "item-004",
    quantity: NumberInt(1),
    status: "cancelled",
    region: "East",
    txDate: new Date("2024-02-10")
  },
  {
    txId: "TX-005",
    agentId: "agent-02",
    agentName: "Agent Beta",
    itemId: "item-001",
    quantity: NumberInt(2),
    status: "completed",
    region: "South",
    txDate: new Date("2024-02-20")
  },
  {
    txId: "TX-006",
    agentId: "agent-03",
    agentName: "Agent Gamma",
    itemId: "item-003",
    quantity: NumberInt(4),
    status: "completed",
    region: "East",
    txDate: new Date("2024-03-05")
  },
  {
    txId: "TX-007",
    agentId: "agent-01",
    agentName: "Agent Alpha",
    itemId: "item-004",
    quantity: NumberInt(2),
    status: "completed",
    region: "North",
    txDate: new Date("2024-03-15")
  },
  {
    txId: "TX-008",
    agentId: "agent-02",
    agentName: "Agent Beta",
    itemId: "item-005",
    quantity: NumberInt(8),
    status: "completed",
    region: "South",
    txDate: new Date("2024-03-20")
  }
])

// Índice en itemId para optimizar $lookup
db.transactions.createIndex({ itemId: 1 })
db.transactions.createIndex({ agentId: 1 })

print("✅ Colección 'catalog' cargada con 5 documentos")
print("✅ Colección 'transactions' cargada con 8 documentos")
print("   Índices creados en transactions.itemId y transactions.agentId")
