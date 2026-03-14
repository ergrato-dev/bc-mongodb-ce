// Semana 12: Aggregation Pipeline III — $facet y $bucket
// solution/ejercicio.js — Solución completa

// ============================================
// PASO 1: $facet básico — dos análisis en paralelo
// ============================================

db.products.aggregate([
  { $match: { isActive: true } },
  {
    $facet: {
      byCategory: [
        { $group: { _id: "$category", count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ],
      priceStats: [
        {
          $group: {
            _id: null,
            avgPrice: { $avg: { $toDouble: "$price" } },
            minPrice: { $min: { $toDouble: "$price" } },
            maxPrice: { $max: { $toDouble: "$price" } }
          }
        }
      ]
    }
  }
])


// ============================================
// PASO 2: $facet con paginación — resultados + total
// ============================================

db.products.aggregate([
  { $match: { isActive: true } },
  {
    $facet: {
      results: [
        { $sort: { price: 1 } },
        { $limit: 5 },
        { $project: { name: 1, category: 1, price: 1, _id: 0 } }
      ],
      totalCount: [
        { $count: "total" }
      ]
    }
  }
])


// ============================================
// PASO 3: $bucket — rangos de precio manuales
// ============================================

db.products.aggregate([
  {
    $bucket: {
      groupBy: { $toDouble: "$price" },
      boundaries: [0, 50, 200, 600],
      default: "lujo",
      output: {
        count: { $sum: 1 },
        avgPrice: { $avg: { $toDouble: "$price" } },
        items: { $push: "$name" }
      }
    }
  }
])


// ============================================
// PASO 4: $bucketAuto — 4 grupos automáticos
// ============================================

db.products.aggregate([
  {
    $bucketAuto: {
      groupBy: { $toDouble: "$price" },
      buckets: 4,
      output: {
        count: { $sum: 1 },
        minPrice: { $min: { $toDouble: "$price" } },
        maxPrice: { $max: { $toDouble: "$price" } },
        avgRating: { $avg: "$rating" }
      }
    }
  }
])
