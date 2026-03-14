// Semana 12: Aggregation Pipeline III — $replaceRoot y $merge
// solution/ejercicio.js — Solución completa

// ============================================
// PASO 1: $replaceRoot básico
// ============================================

db.orders.aggregate([
  { $replaceRoot: { newRoot: "$customer" } }
])


// ============================================
// PASO 2: $replaceRoot + $mergeObjects
// ============================================

db.orders.aggregate([
  {
    $replaceRoot: {
      newRoot: {
        $mergeObjects: [
          "$customer",
          {
            orderId: "$orderId",
            status: "$status",
            total: "$total"
          }
        ]
      }
    }
  },
  { $sort: { name: 1 } }
])


// ============================================
// PASO 3: $out — guardar resumen en nueva colección
// ============================================

db.orders.aggregate([
  { $match: { status: "completed" } },
  {
    $group: {
      _id: "$customer.city",
      totalRevenue: { $sum: { $toDouble: "$total" } },
      orderCount: { $sum: 1 },
      customers: { $addToSet: "$customer.customerId" }
    }
  },
  { $sort: { totalRevenue: -1 } },
  { $out: "city_summary" }
])

// Verificar resultado:
db.city_summary.find()


// ============================================
// PASO 4: $merge — actualizar estadísticas mensuales
// ============================================

db.orders.aggregate([
  { $match: { status: "completed" } },
  {
    $group: {
      _id: "$month",
      actualRevenue: { $sum: { $toDouble: "$total" } },
      orderCount: { $sum: 1 }
    }
  },
  {
    $merge: {
      into: "monthly_stats",
      on: "_id",
      whenMatched: "merge",
      whenNotMatched: "insert"
    }
  }
])

// Verificar resultado:
db.monthly_stats.find()
