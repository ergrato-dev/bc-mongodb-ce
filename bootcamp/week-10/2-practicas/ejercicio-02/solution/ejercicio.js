// Semana 10: Aggregation Pipeline II — Acumuladores Avanzados
// ejercicio.js — SOLUCIÓN: $addFields, $cond, $ifNull

// ============================================
// PASO 1: $addFields — enriquecer documentos con campos calculados
// ============================================

db.sales.aggregate([
  {
    $addFields: {
      totalValue: {
        $multiply: [{ $toDouble: "$amount" }, "$quantity"]
      },
      saleYear: { $year: "$saleDate" },
      saleMonth: { $month: "$saleDate" }
    }
  },
  { $limit: 5 }
])

// ============================================
// PASO 2: $cond — clasificación condicional
// ============================================

db.sales.aggregate([
  {
    $addFields: {
      tier: {
        $cond: {
          if: { $gt: [{ $toDouble: "$amount" }, 500] },
          then: "premium",
          else: "standard"
        }
      },
      statusLabel: {
        $cond: [
          { $eq: ["$status", "completed"] },
          "✅ Completada",
          "❌ Cancelada"
        ]
      }
    }
  },
  { $project: { product: 1, amount: 1, tier: 1, statusLabel: 1, _id: 0 } }
])

// ============================================
// PASO 3: $ifNull — valor por defecto para campos ausentes
// ============================================

db.sales.aggregate([
  {
    $addFields: {
      cityNormalized: { $ifNull: ["$city", "Sin asignar"] }
    }
  },
  { $project: { product: 1, city: 1, cityNormalized: 1, _id: 0 } },
  { $sort: { city: 1 } }
])

// ============================================
// PASO 4: Pipeline complejo — $addFields + $match + $group + $sort
// ============================================

db.sales.aggregate([
  // Etapa 1: enriquecer documentos
  {
    $addFields: {
      totalValue: {
        $multiply: [{ $toDouble: "$amount" }, "$quantity"]
      },
      tier: {
        $cond: {
          if: { $gt: [{ $toDouble: "$amount" }, 500] },
          then: "premium",
          else: "standard"
        }
      },
      cityNormalized: { $ifNull: ["$city", "Sin asignar"] }
    }
  },
  // Etapa 2: solo ventas completadas
  { $match: { status: "completed" } },
  // Etapa 3: agrupar por tier y ciudad
  {
    $group: {
      _id: { tier: "$tier", city: "$cityNormalized" },
      totalSales: { $sum: 1 },
      totalRevenue: { $sum: "$totalValue" },
      products: { $addToSet: "$product" }
    }
  },
  // Etapa 4: ordenar por ingresos
  { $sort: { totalRevenue: -1 } }
])
