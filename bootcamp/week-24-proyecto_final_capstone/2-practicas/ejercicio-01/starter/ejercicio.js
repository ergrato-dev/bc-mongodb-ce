// Semana 24: Proyecto Final Capstone
// ejercicio-01 — Patrones de diseño: Extended Reference, Bucket, Computed
// Descomenta cada sección según los pasos del README

// ============================================
// PASO 1: Extended Reference — leer sin $lookup
// ============================================

// Consulta eventos con su información de sede ya embebida (Extended Reference).
// No se necesita $lookup porque venueName y venueCity están en el documento.
// Descomenta las siguientes líneas:

// db.events.find(
//   { isActive: true },
//   { title: 1, venueName: 1, venueCity: 1, startDate: 1, ticketPrice: 1, _id: 0 }
// ).sort({ startDate: 1 })

// ============================================
// PASO 2: Bucket Pattern — agregar lecturas
// ============================================

// El Bucket Pattern agrupa lecturas de sensores por hora.
// Consulta el bucket más reciente y calcula el promedio de lecturas embebidas.
// Descomenta las siguientes líneas:

// db.sensor_buckets.aggregate([
//   { $match: { sensorId: "SENSOR-TEMP-01" } },
//   { $sort: { hour: -1 } },
//   { $limit: 1 },
//   {
//     $project: {
//       sensorId: 1,
//       hour: 1,
//       count: 1,
//       avgValue: 1,
//       // Mostrar solo las últimas 3 lecturas
//       recentReadings: { $slice: ["$readings", -3] }
//     }
//   }
// ])

// ============================================
// PASO 3: Computed Pattern — leer estadísticas precalculadas
// ============================================

// Consulta las estadísticas diarias precalculadas.
// Compara el costo de calcularlas en tiempo real vs. leer el valor guardado.
// Descomenta las siguientes líneas:

// // Lectura rápida: datos ya calculados (Computed Pattern)
// db.daily_stats.find(
//   {},
//   { date: 1, totalRevenue: 1, totalEvents: 1, avgTicketPrice: 1, _id: 0 }
// ).sort({ date: -1 })

// ============================================
// PASO 4: Actualizar stats con Computed Pattern
// ============================================

// Simula registrar una venta nueva y actualizar daily_stats con $inc.
// Descomenta las siguientes líneas:

// const hoy = new Date()
// hoy.setHours(0, 0, 0, 0)
// const precioNuevoEvento = 75.00
//
// db.daily_stats.updateOne(
//   { date: hoy },
//   {
//     $inc: {
//       totalRevenue: precioNuevoEvento,
//       totalEvents: 1
//     },
//     $set: { computedAt: new Date() }
//   },
//   { upsert: true }
// )
//
// db.daily_stats.findOne({ date: hoy })
