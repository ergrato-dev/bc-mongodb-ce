// Semana 03: CRUD II — Operadores de Comparación
// solution/ejercicio.js — Solución completa

// ============================================
// PASO 1: Operador $eq y $ne
// ============================================

// Encontrar todos los productos de categoría "accessories"
db.products.find(
  { category: { $eq: "accessories" } },
  { name: 1, category: 1, price: 1, _id: 0 }
)

// Encontrar productos que NO sean de categoría "accessories"
db.products.find(
  { category: { $ne: "accessories" } },
  { name: 1, category: 1, _id: 0 }
)

// ============================================
// PASO 2: Operadores $gt y $lt
// ============================================

// Productos con precio mayor a 100
db.products.find(
  { price: { $gt: Decimal128("100") } },
  { name: 1, price: 1, _id: 0 }
).sort({ price: 1 })

// Productos con rating menor a 4
db.products.find(
  { rating: { $lt: 4 } },
  { name: 1, rating: 1, _id: 0 }
).sort({ rating: -1 })

// ============================================
// PASO 3: Operadores $gte y $lte — Rangos
// ============================================

// Productos con precio entre 50 y 200 (inclusive)
db.products.find(
  { price: { $gte: Decimal128("50"), $lte: Decimal128("200") } },
  { name: 1, price: 1, _id: 0 }
).sort({ price: 1 })

// Productos lanzados en 2022 o después, con rating >= 4
db.products.find(
  {
    year: { $gte: NumberInt(2022) },
    rating: { $gte: 4 }
  },
  { name: 1, year: 1, rating: 1, _id: 0 }
).sort({ year: -1 })

// ============================================
// PASO 4: Combinando múltiples campos
// ============================================

// Productos en stock, rating >= 4.2, precio menor a 200
db.products.find(
  {
    inStock: true,
    rating: { $gte: 4.2 },
    price: { $lt: Decimal128("200") }
  },
  { name: 1, price: 1, rating: 1, inStock: 1, _id: 0 }
).sort({ rating: -1 })
