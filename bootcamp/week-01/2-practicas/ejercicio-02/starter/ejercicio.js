// Semana 01: Ejercicio 02 — Filtros con Operadores de Comparación
// Descomenta cada sección y ejecútala en mongosh

// ============================================
// PASO 1: Filtro exacto (igualdad implícita)
// ============================================

// Obtener todos los productos de la categoría "peripherals".
// La igualdad en MongoDB no necesita operador explícito.
// Descomenta las siguientes líneas:

// db.products.find(
//   { category: "peripherals" },
//   { name: 1, category: 1, price: 1, _id: 0 }
// )


// ============================================
// PASO 2: Mayor que y menor que ($gt, $lt)
// ============================================

// Obtener productos con precio mayor a 100 y menor a 500.
// Descomenta las siguientes líneas:

// db.products.find(
//   { price: { $gt: Decimal128("100"), $lt: Decimal128("500") } },
//   { name: 1, price: 1, _id: 0 }
// )


// ============================================
// PASO 3: Incluido en lista ($in)
// ============================================

// Obtener productos cuya categoría sea "laptops" o "audio".
// Descomenta las siguientes líneas:

// db.products.find(
//   { category: { $in: ["laptops", "audio"] } },
//   { name: 1, category: 1, price: 1, _id: 0 }
// )


// ============================================
// PASO 4: Combinar filtros + cursor methods
// ============================================

// Obtener los 3 productos activos más baratos,
// mostrando solo name, price y rating, ordenados por precio.
// Descomenta las siguientes líneas:

// db.products.find(
//   { isActive: true },
//   { name: 1, price: 1, rating: 1, _id: 0 }
// ).sort({ price: 1 }).limit(3)
