// Semana 24: Proyecto Final Capstone
// ejercicio-01 — SOLUCIÓN: Extended Reference, Bucket, Computed

// ============================================
// PASO 1: Extended Reference — leer sin $lookup
// ============================================

db.events.find(
  { isActive: true },
  { title: 1, venueName: 1, venueCity: 1, startDate: 1, ticketPrice: 1, _id: 0 }
).sort({ startDate: 1 })

// ============================================
// PASO 2: Bucket Pattern — agregar lecturas
// ============================================

db.sensor_buckets.aggregate([
  { $match: { sensorId: "SENSOR-TEMP-01" } },
  { $sort: { hour: -1 } },
  { $limit: 1 },
  {
    $project: {
      sensorId: 1,
      hour: 1,
      count: 1,
      avgValue: 1,
      recentReadings: { $slice: ["$readings", -3] }
    }
  }
])

// ============================================
// PASO 3: Computed Pattern — leer estadísticas precalculadas
// ============================================

db.daily_stats.find(
  {},
  { date: 1, totalRevenue: 1, totalEvents: 1, avgTicketPrice: 1, _id: 0 }
).sort({ date: -1 })

// ============================================
// PASO 4: Actualizar stats con Computed Pattern
// ============================================

const hoy = new Date()
hoy.setHours(0, 0, 0, 0)
const precioNuevoEvento = 75.00

db.daily_stats.updateOne(
  { date: hoy },
  {
    $inc: {
      totalRevenue: precioNuevoEvento,
      totalEvents: 1
    },
    $set: { computedAt: new Date() }
  },
  { upsert: true }
)

db.daily_stats.findOne({ date: hoy })
