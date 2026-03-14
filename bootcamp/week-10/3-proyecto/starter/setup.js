// Semana 10: Aggregation Pipeline II — Acumuladores Avanzados
// setup.js — Datos de prueba genéricos para el proyecto semanal

// ============================================
// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// Ejemplos:
//   Biblioteca  → loans, members, books
//   Farmacia    → sales, pharmacists, medicines
//   Gimnasio    → sessions, trainers, members
//   Restaurante → orders, waiters, dishes
//
// TODO: Renombrar "transactions" según tu dominio
// TODO: Renombrar "agents" según tu dominio
// TODO: Ajustar los campos según las entidades de tu dominio
// ============================================

db.transactions.drop()
db.agents.drop()

// Colección principal: transacciones o eventos del dominio
db.transactions.insertMany([
  {
    item: "Service A",
    type: "type-1",
    agentId: "agent-001",
    location: "North",
    amount: NumberDecimal("850.00"),
    quantity: NumberInt(2),
    status: "completed",
    score: NumberInt(5),
    createdAt: new Date("2024-01-10")
  },
  {
    item: "Service B",
    type: "type-2",
    agentId: "agent-002",
    location: "South",
    amount: NumberDecimal("120.00"),
    quantity: NumberInt(5),
    status: "completed",
    score: NumberInt(4),
    createdAt: new Date("2024-01-15")
  },
  {
    item: "Service C",
    type: "type-1",
    agentId: "agent-001",
    location: "North",
    amount: NumberDecimal("600.00"),
    quantity: NumberInt(1),
    status: "completed",
    score: NumberInt(5),
    createdAt: new Date("2024-01-20")
  },
  {
    item: "Service D",
    type: "type-3",
    agentId: "agent-003",
    location: "East",
    amount: NumberDecimal("45.00"),
    quantity: NumberInt(10),
    status: "cancelled",
    score: NumberInt(2),
    createdAt: new Date("2024-01-25")
  },
  {
    item: "Service E",
    type: "type-2",
    agentId: "agent-002",
    location: "South",
    amount: NumberDecimal("700.00"),
    quantity: NumberInt(3),
    status: "completed",
    score: NumberInt(4),
    createdAt: new Date("2024-02-01")
  },
  {
    item: "Service F",
    type: "type-1",
    agentId: "agent-004",
    // campo "location" intencionalmente ausente para practicar $ifNull
    amount: NumberDecimal("300.00"),
    quantity: NumberInt(2),
    status: "completed",
    score: NumberInt(3),
    createdAt: new Date("2024-02-05")
  },
  {
    item: "Service A",
    type: "type-3",
    agentId: "agent-003",
    location: "West",
    amount: NumberDecimal("950.00"),
    quantity: NumberInt(1),
    status: "completed",
    score: NumberInt(5),
    createdAt: new Date("2024-02-10")
  },
  {
    item: "Service G",
    type: "type-2",
    agentId: "agent-001",
    location: "North",
    amount: NumberDecimal("200.00"),
    quantity: NumberInt(4),
    status: "cancelled",
    score: NumberInt(3),
    createdAt: new Date("2024-02-14")
  },
  {
    item: "Service H",
    type: "type-1",
    agentId: "agent-004",
    location: "East",
    amount: NumberDecimal("450.00"),
    quantity: NumberInt(2),
    status: "completed",
    score: NumberInt(4),
    createdAt: new Date("2024-02-18")
  },
  {
    item: "Service B",
    type: "type-3",
    agentId: "agent-002",
    location: "South",
    amount: NumberDecimal("80.00"),
    quantity: NumberInt(8),
    status: "completed",
    score: NumberInt(4),
    createdAt: new Date("2024-02-22")
  },
  {
    item: "Service C",
    type: "type-2",
    agentId: "agent-003",
    location: "West",
    amount: NumberDecimal("550.00"),
    quantity: NumberInt(2),
    status: "completed",
    score: NumberInt(5),
    createdAt: new Date("2024-03-01")
  },
  {
    item: "Service I",
    type: "type-1",
    agentId: "agent-001",
    location: "North",
    amount: NumberDecimal("1100.00"),
    quantity: NumberInt(1),
    status: "completed",
    score: NumberInt(5),
    createdAt: new Date("2024-03-05")
  },
  {
    item: "Service J",
    type: "type-3",
    agentId: "agent-004",
    location: "East",
    amount: NumberDecimal("35.00"),
    quantity: NumberInt(15),
    status: "completed",
    score: NumberInt(3),
    createdAt: new Date("2024-03-10")
  },
  {
    item: "Service D",
    type: "type-2",
    agentId: "agent-002",
    location: "South",
    amount: NumberDecimal("420.00"),
    quantity: NumberInt(3),
    status: "cancelled",
    score: NumberInt(2),
    createdAt: new Date("2024-03-15")
  },
  {
    item: "Service K",
    type: "type-1",
    agentId: "agent-003",
    location: "West",
    amount: NumberDecimal("780.00"),
    quantity: NumberInt(2),
    status: "completed",
    score: NumberInt(4),
    createdAt: new Date("2024-03-20")
  }
])

// Colección secundaria: agentes o responsables
db.agents.insertMany([
  { agentId: "agent-001", name: "Agent Alpha", region: "Northern Zone", isActive: true },
  { agentId: "agent-002", name: "Agent Beta", region: "Southern Zone", isActive: true },
  { agentId: "agent-003", name: "Agent Gamma", region: "Western Zone", isActive: true },
  { agentId: "agent-004", name: "Agent Delta", region: "Eastern Zone", isActive: false }
])

print("✅ Colección 'transactions' cargada con 15 documentos")
print("✅ Colección 'agents' cargada con 4 documentos")
print("   Nota: una transaction tiene campo 'location' ausente (para $ifNull)")
