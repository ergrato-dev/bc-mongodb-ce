// Semana 02 — Ejercicio 02: Proyecciones y métodos de cursor
// solution/ejercicio.js

// ============================================
// PASO 1: Proyección de inclusión
// ============================================

db.books.find(
  {},
  { title: 1, author: 1, price: 1 }
)


// ============================================
// PASO 2: Proyección de inclusión sin _id
// ============================================

db.books.find(
  { inStock: true },
  { title: 1, price: 1, _id: 0 }
)


// ============================================
// PASO 3: Proyección de exclusión
// ============================================

db.books.find(
  {},
  { tags: 0, inStock: 0 }
)


// ============================================
// PASO 4: Ordenar con .sort()
// ============================================

db.books.find(
  {},
  { title: 1, price: 1, _id: 0 }
).sort({ price: -1 })


// ============================================
// PASO 5: Limitar con .limit()
// ============================================

db.books.find(
  {},
  { title: 1, year: 1, _id: 0 }
).sort({ year: -1 }).limit(3)


// ============================================
// PASO 6: Paginación con .skip() y .limit()
// ============================================

// Página 1
db.books.find(
  {},
  { title: 1, _id: 0 }
).sort({ title: 1 }).skip(0).limit(3)

// Página 2
db.books.find(
  {},
  { title: 1, _id: 0 }
).sort({ title: 1 }).skip(3).limit(3)
