// ============================================
// Semana 20: Time Series — Ejercicio 02
// Setup: crear colección y datos de sensores
// ============================================

// Eliminar si ya existe
db.sensor_readings.drop()

// Crear Time Series Collection
db.createCollection("sensor_readings", {
  timeseries: {
    timeField: "recordedAt",
    metaField: "metadata",
    granularity: "seconds"
  },
  expireAfterSeconds: 7776000  // 90 días
})

// Insertar lecturas de sensores
db.sensor_readings.insertMany([
  // Sensor sen-001 — server-room-A — 1 de abril
  { recordedAt: new Date("2025-04-01T08:00:00Z"), metadata: { sensorId: "sen-001", location: "server-room-A" }, temperature: 22.1, humidity: 46.0, pressurePa: 101325 },
  { recordedAt: new Date("2025-04-01T08:00:30Z"), metadata: { sensorId: "sen-001", location: "server-room-A" }, temperature: 22.3, humidity: 45.8, pressurePa: 101320 },
  { recordedAt: new Date("2025-04-01T08:01:00Z"), metadata: { sensorId: "sen-001", location: "server-room-A" }, temperature: 22.5, humidity: 45.5, pressurePa: 101318 },
  { recordedAt: new Date("2025-04-01T09:00:00Z"), metadata: { sensorId: "sen-001", location: "server-room-A" }, temperature: 24.0, humidity: 43.0, pressurePa: 101310 },
  { recordedAt: new Date("2025-04-01T09:00:30Z"), metadata: { sensorId: "sen-001", location: "server-room-A" }, temperature: 24.5, humidity: 42.5, pressurePa: 101305 },
  { recordedAt: new Date("2025-04-01T10:00:00Z"), metadata: { sensorId: "sen-001", location: "server-room-A" }, temperature: 26.8, humidity: 40.0, pressurePa: 101300 },
  // Sensor sen-002 — datacenter-B
  { recordedAt: new Date("2025-04-01T08:00:00Z"), metadata: { sensorId: "sen-002", location: "datacenter-B" }, temperature: 18.5, humidity: 55.0, pressurePa: 101330 },
  { recordedAt: new Date("2025-04-01T08:00:30Z"), metadata: { sensorId: "sen-002", location: "datacenter-B" }, temperature: 18.7, humidity: 54.8, pressurePa: 101328 },
  { recordedAt: new Date("2025-04-01T09:00:00Z"), metadata: { sensorId: "sen-002", location: "datacenter-B" }, temperature: 20.1, humidity: 52.0, pressurePa: 101322 },
  { recordedAt: new Date("2025-04-01T10:00:00Z"), metadata: { sensorId: "sen-002", location: "datacenter-B" }, temperature: 21.3, humidity: 50.5, pressurePa: 101315 },
  // 2 de abril
  { recordedAt: new Date("2025-04-02T08:00:00Z"), metadata: { sensorId: "sen-001", location: "server-room-A" }, temperature: 23.0, humidity: 44.0, pressurePa: 101320 },
  { recordedAt: new Date("2025-04-02T09:00:00Z"), metadata: { sensorId: "sen-001", location: "server-room-A" }, temperature: 25.5, humidity: 41.5, pressurePa: 101310 },
  { recordedAt: new Date("2025-04-02T08:00:00Z"), metadata: { sensorId: "sen-002", location: "datacenter-B" }, temperature: 19.0, humidity: 53.0, pressurePa: 101325 },
  { recordedAt: new Date("2025-04-02T09:00:00Z"), metadata: { sensorId: "sen-002", location: "datacenter-B" }, temperature: 20.8, humidity: 51.0, pressurePa: 101318 }
])

print("Setup completado: 14 lecturas en sensor_readings (Time Series)")
print("Sensores: sen-001 (server-room-A) y sen-002 (datacenter-B)")
