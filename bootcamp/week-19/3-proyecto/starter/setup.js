// ============================================
// Semana 19: Change Streams — Proyecto Semanal
// Setup — Dominio ejemplo: Acuario
// ============================================
// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// Ejemplos:
//   Biblioteca  → book_loans (dueDate, renewalCount, memberId)
//   Farmacia    → inventory_items (stockQty, reorderLevel, batchId)
//   Gimnasio    → attendance_records (memberId, checkIn, alertType)
//   Restaurante → orders (tableId, status, priority)

// TODO: Renombrar la colección según tu dominio
// TODO: Ajustar los campos a tu entidad principal

db.exhibit_events.drop()
db.resume_tokens.drop()

// Colección principal — dominio Acuario
db.exhibit_events.insertMany([
  {
    eventId: "evt-001",
    exhibitId: "exh-sharks",
    type: "feeding",
    description: "Alimentación programada tiburones",
    priority: "normal",
    reportedBy: "staff-01",
    resolved: false,
    createdAt: new Date("2025-04-03T09:00:00Z")
  },
  {
    eventId: "evt-002",
    exhibitId: "exh-coral",
    type: "maintenance",
    description: "Revisión de filtros del arrecife",
    priority: "normal",
    reportedBy: "staff-02",
    resolved: false,
    createdAt: new Date("2025-04-03T10:00:00Z")
  },
  {
    eventId: "evt-003",
    exhibitId: "exh-jellyfish",
    type: "alert",
    description: "Animal desorientado detectado",
    priority: "high",
    reportedBy: "staff-01",
    resolved: false,
    createdAt: new Date("2025-04-03T11:00:00Z")
  },
  {
    eventId: "evt-004",
    exhibitId: "exh-sharks",
    type: "incident",
    description: "Fallo en bomba de agua — URGENTE",
    priority: "critical",
    reportedBy: "staff-03",
    resolved: false,
    createdAt: new Date("2025-04-03T11:30:00Z")
  },
  {
    eventId: "evt-005",
    exhibitId: "exh-otter",
    type: "feeding",
    description: "Alimentación programada nutrias",
    priority: "normal",
    reportedBy: "staff-02",
    resolved: true,
    createdAt: new Date("2025-04-03T12:00:00Z")
  }
])

print("Setup completado: 5 documentos en exhibit_events, resume_tokens vacía")
print("Recuerda adaptar los nombres de colección y campos a tu dominio asignado")
print("Replica set activo requerido para Change Streams")
