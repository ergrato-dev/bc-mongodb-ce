// ============================================
// Semana 20: Time Series — Ejercicio 02
// Solución: consultas y agregaciones en sensor_readings
// ============================================

// ============================================
// PASO 1: Consultar datos por rango de fechas y sensor
// ============================================

// Todas las lecturas del 1 de abril de sen-001
db.sensor_readings.find({
  recordedAt: {
    $gte: new Date("2025-04-01T00:00:00Z"),
    $lt:  new Date("2025-04-02T00:00:00Z")
  },
  "metadata.sensorId": "sen-001"
}).sort({ recordedAt: 1 })

// Lecturas con temperatura mayor a 25°C
db.sensor_readings.find(
  { temperature: { $gt: 25 } },
  { recordedAt: 1, "metadata.sensorId": 1, temperature: 1, _id: 0 }
)


// ============================================
// PASO 2: Promedio de temperatura por hora
// ============================================

db.sensor_readings.aggregate([
  {
    $match: {
      recordedAt: {
        $gte: new Date("2025-04-01T00:00:00Z"),
        $lt:  new Date("2025-04-02T00:00:00Z")
      },
      "metadata.sensorId": "sen-001"
    }
  },
  {
    $group: {
      _id: {
        hour: { $dateToString: { format: "%Y-%m-%dT%H:00", date: "$recordedAt" } }
      },
      avgTemperature: { $avg: "$temperature" },
      maxTemperature: { $max: "$temperature" },
      minTemperature: { $min: "$temperature" },
      totalReadings: { $sum: 1 }
    }
  },
  { $sort: { "_id.hour": 1 } }
])
// Resultado esperado: 3 grupos (08:00, 09:00, 10:00) con métricas de temperatura


// ============================================
// PASO 3: Comparar sensores en el mismo período
// ============================================

db.sensor_readings.aggregate([
  {
    $match: {
      recordedAt: {
        $gte: new Date("2025-04-01T00:00:00Z"),
        $lt:  new Date("2025-04-03T00:00:00Z")
      }
    }
  },
  {
    $group: {
      _id: {
        sensor: "$metadata.sensorId",
        day: { $dateToString: { format: "%Y-%m-%d", date: "$recordedAt" } }
      },
      avgTemp: { $avg: "$temperature" },
      avgHumidity: { $avg: "$humidity" },
      readings: { $sum: 1 }
    }
  },
  { $sort: { "_id.day": 1, "_id.sensor": 1 } }
])
// Resultado: sen-001 y sen-002 para 2025-04-01 y 2025-04-02 — sen-002 siempre más frío


// ============================================
// PASO 4: Última lectura por sensor
// ============================================

db.sensor_readings.aggregate([
  { $sort: { recordedAt: -1 } },
  {
    $group: {
      _id: "$metadata.sensorId",
      lastTemperature: { $first: "$temperature" },
      lastHumidity: { $first: "$humidity" },
      lastReadingAt: { $first: "$recordedAt" },
      location: { $first: "$metadata.location" }
    }
  },
  { $sort: { _id: 1 } }
])
// Resultado: estado actual de sen-001 y sen-002 con su última lectura del 2 de abril
