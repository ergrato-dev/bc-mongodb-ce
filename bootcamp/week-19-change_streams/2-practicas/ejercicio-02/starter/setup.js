// ============================================
// Semana 19: Change Streams — Ejercicio 02
// Setup: colección sensors y stream_tokens
// ============================================

db.sensors.drop()
db.stream_tokens.drop()

db.sensors.insertMany([
  {
    sensorId: "sen-001",
    type: "temperature",
    location: "server-room-A",
    value: 22.5,
    unit: "celsius",
    severity: "normal",
    recordedAt: new Date("2025-04-02T08:00:00Z")
  },
  {
    sensorId: "sen-002",
    type: "humidity",
    location: "server-room-A",
    value: 45.0,
    unit: "percent",
    severity: "normal",
    recordedAt: new Date("2025-04-02T08:05:00Z")
  },
  {
    sensorId: "sen-003",
    type: "temperature",
    location: "datacenter-B",
    value: 28.1,
    unit: "celsius",
    severity: "warning",
    recordedAt: new Date("2025-04-02T08:10:00Z")
  },
  {
    sensorId: "sen-004",
    type: "power",
    location: "datacenter-B",
    value: 95.0,
    unit: "percent",
    severity: "critical",
    recordedAt: new Date("2025-04-02T08:15:00Z")
  }
])

print("Setup completado: 4 documentos en sensors, stream_tokens vacía")
print("Replica set requerido para Change Streams")
