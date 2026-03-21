// Semana 24: Proyecto Final Capstone
// setup.js — Colecciones para ejercicio-01 (Patrones de diseño)
// Ejecutar con mongosh antes de los ejercicios

// ── Dominio: Sistema de eventos y sensores ──

db.venues.drop()
db.events.drop()
db.sensor_buckets.drop()
db.daily_stats.drop()

// Colección venues (fuente para Extended Reference)
db.venues.insertMany([
  {
    _id: ObjectId("650000000000000000000001"),
    name: "Auditorio Central",
    city: "Bogotá",
    country: "Colombia",
    capacity: NumberInt(500)
  },
  {
    _id: ObjectId("650000000000000000000002"),
    name: "Sala de Conferencias Norte",
    city: "Medellín",
    country: "Colombia",
    capacity: NumberInt(150)
  }
])

// Colección events con Extended Reference (venueName, venueCity copiados)
db.events.insertMany([
  {
    title: "MongoDB Summit 2025",
    venueId: ObjectId("650000000000000000000001"),
    venueName: "Auditorio Central",
    venueCity: "Bogotá",
    startDate: new Date("2025-03-15T09:00:00Z"),
    capacity: NumberInt(500),
    ticketPrice: Decimal128("89.99"),
    isActive: true,
    createdAt: new Date()
  },
  {
    title: "Workshop Node.js Avanzado",
    venueId: ObjectId("650000000000000000000002"),
    venueName: "Sala de Conferencias Norte",
    venueCity: "Medellín",
    startDate: new Date("2025-04-20T10:00:00Z"),
    capacity: NumberInt(150),
    ticketPrice: Decimal128("45.00"),
    isActive: true,
    createdAt: new Date()
  }
])

// Colección sensor_buckets con Bucket Pattern
const bucketHour = new Date("2025-01-15T14:00:00Z")
const readings = []
for (let i = 0; i < 10; i++) {
  readings.push({
    ts: new Date(bucketHour.getTime() + i * 60000),
    value: parseFloat((22 + Math.random() * 3).toFixed(1))
  })
}

db.sensor_buckets.insertOne({
  sensorId: "SENSOR-TEMP-01",
  hour: bucketHour,
  readings: readings,
  count: NumberInt(readings.length),
  avgValue: Decimal128("23.5"),
  minValue: Decimal128("22.1"),
  maxValue: Decimal128("25.0")
})

// Colección daily_stats con Computed Pattern
db.daily_stats.insertMany([
  {
    date: new Date("2025-01-14T00:00:00Z"),
    totalRevenue: Decimal128("2340.50"),
    totalEvents: NumberInt(5),
    avgTicketPrice: Decimal128("46.81"),
    computedAt: new Date()
  },
  {
    date: new Date("2025-01-15T00:00:00Z"),
    totalRevenue: Decimal128("1890.00"),
    totalEvents: NumberInt(4),
    avgTicketPrice: Decimal128("47.25"),
    computedAt: new Date()
  }
])

print("venues:", db.venues.countDocuments())
print("events:", db.events.countDocuments())
print("sensor_buckets:", db.sensor_buckets.countDocuments())
print("daily_stats:", db.daily_stats.countDocuments())
