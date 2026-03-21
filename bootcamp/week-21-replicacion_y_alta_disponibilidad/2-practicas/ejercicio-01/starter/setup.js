// ============================================
// Semana 21: Replicación y Alta Disponibilidad
// Ejercicio 01 — setup.js
// ============================================

// Colección de demostración: logistics
// Registros de checkpoint de envíos (datos simples para practicar rs.status y oplog)
db.logistics.drop()

db.logistics.insertMany([
  {
    conveyorId: "conv-001",
    status: "in_transit",
    checkpoint: "Bogotá — Zona Franca",
    weight: NumberInt(45),
    recordedAt: new Date("2025-03-01T08:00:00Z")
  },
  {
    conveyorId: "conv-002",
    status: "delivered",
    checkpoint: "Medellín — Centro de Distribución",
    weight: NumberInt(12),
    recordedAt: new Date("2025-03-01T09:30:00Z")
  },
  {
    conveyorId: "conv-003",
    status: "pending",
    checkpoint: "Cali — Bodega Norte",
    weight: NumberInt(300),
    recordedAt: new Date("2025-03-01T11:00:00Z")
  },
  {
    conveyorId: "conv-001",
    status: "delivered",
    checkpoint: "Barranquilla — Terminal",
    weight: NumberInt(45),
    recordedAt: new Date("2025-03-02T07:15:00Z")
  },
  {
    conveyorId: "conv-004",
    status: "in_transit",
    checkpoint: "Bucaramanga — Punto de Control",
    weight: NumberInt(80),
    recordedAt: new Date("2025-03-02T10:45:00Z")
  }
])

print("setup.js: colección 'logistics' creada con 5 documentos")
print("Total: " + db.logistics.countDocuments() + " registros")
