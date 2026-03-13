// Semana 01: Ejercicio 02 — Filtros con Operadores de Comparación
// SOLUCIÓN

// ============================================
// PASO 1: Filtro exacto (igualdad implícita)
// ============================================

// Obtener todos los productos de la categoría "peripherals".
db.products.find(
  { category: "peripherals" },
  { name: 1, category: 1, price: 1, _id: 0 }
)


// ============================================
// PASO 2: Mayor que y menor que ($gt, $lt)
// ============================================

// Obtener productos con precio mayor a 100 y menor a 500.
db.products.find(
  { price: { $gt: Decimal128("100"), $lt: Decimal128("500") } },
  { name: 1, price: 1, _id: 0 }
)


// ============================================
// PASO 3: Incluido en lista ($in)
// ============================================

// Obtener productos cuya categoría sea "laptops" o "audio".
db.products.find(
  { category: { $in: ["laptops", "audio"] } },
  { name: 1, category: 1, price: 1, _id: 0 }
)


// ============================================
// PASO 4: Combinar filtros + cursor methods
// ============================================

// Obtener los 3 productos activos más baratos,
// mostrando solo name, price y rating, ordenados por precio.
db.products.find(
  { isActive: true },
  { name: 1, price: 1, rating: 1, _id: 0 }
).sort({ price: 1 }).limit(3)
