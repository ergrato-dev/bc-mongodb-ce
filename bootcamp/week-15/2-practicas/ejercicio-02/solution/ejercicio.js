// Semana 15: Patrones de Modelado Avanzado — Bucket y Computed
// ============================================
// EJERCICIO 02 — solution
// ============================================

// ============================================
// PASO 1: Crear primer bucket con upsert
// ============================================

db.sensor_buckets.updateOne(
  { sensorId: "sensor-A", hour: "2024-05-10T08" },
  {
    $push: {
      readings: { ts: new Date("2024-05-10T08:05:00Z"), temp: 21.3 }
    },
    $inc:  { count: 1, sumTemp: 21.3 },
    $min:  { minTemp: 21.3 },
    $max:  { maxTemp: 21.3 }
  },
  { upsert: true }
)

// Verificar que el bucket fue creado
db.sensor_buckets.findOne({ sensorId: "sensor-A", hour: "2024-05-10T08" })

// ============================================
// PASO 2: Agregar más lecturas al mismo bucket
// ============================================

const readings = [
  { ts: new Date("2024-05-10T08:10:00Z"), temp: 22.0 },
  { ts: new Date("2024-05-10T08:15:00Z"), temp: 23.5 },
  { ts: new Date("2024-05-10T08:20:00Z"), temp: 20.8 },
  { ts: new Date("2024-05-10T08:25:00Z"), temp: 24.1 }
]

readings.forEach(reading => {
  db.sensor_buckets.updateOne(
    { sensorId: "sensor-A", hour: "2024-05-10T08" },
    {
      $push: { readings: reading },
      $inc:  { count: 1, sumTemp: reading.temp },
      $min:  { minTemp: reading.temp },
      $max:  { maxTemp: reading.temp }
    },
    { upsert: true }
  )
})

// Verificar count = 5, minTemp = 20.8, maxTemp = 24.1
db.sensor_buckets.findOne(
  { sensorId: "sensor-A", hour: "2024-05-10T08" },
  { count: 1, minTemp: 1, maxTemp: 1, sumTemp: 1, _id: 0 }
)

// ============================================
// PASO 3: Insertar nueva orden y actualizar campo calculado
// ============================================

const orderAmount = Decimal128("250.00")

// a) Insertar la nueva orden
db.orders_comp.insertOne({
  orderId: "ord-999",
  customerId: "cust-01",
  amount: orderAmount,
  status: "completed",
  createdAt: new Date()
})

// b) Actualizar el campo computado en el cliente
db.customers_comp.updateOne(
  { customerId: "cust-01" },
  {
    $inc: { orderCount: 1 },
    $set: { lastOrderDate: new Date() }
  }
)

// ============================================
// PASO 4: Verificar integridad del campo calculado
// ============================================

// Suma real desde orders_comp
db.orders_comp.aggregate([
  { $match: { customerId: "cust-01", status: "completed" } },
  {
    $group: {
      _id: "$customerId",
      realTotal: { $sum: { $toDouble: "$amount" } },
      realCount: { $sum: 1 }
    }
  }
])

// Valor precomputado almacenado
db.customers_comp.findOne(
  { customerId: "cust-01" },
  { name: 1, totalRevenue: 1, orderCount: 1, _id: 0 }
)
