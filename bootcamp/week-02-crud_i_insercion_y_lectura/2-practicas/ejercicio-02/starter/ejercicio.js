// Semana 02 — Ejercicio 02: Proyecciones y métodos de cursor
// starter/ejercicio.js — Descomenta cada sección para practicar

// ============================================
// PASO 1: Proyección de inclusión
// ============================================

// Incluir solo title, author y price (+ _id por defecto).
// Descomenta las siguientes líneas:

// db.books.find(
//   {},
//   { title: 1, author: 1, price: 1 }
// )


// ============================================
// PASO 2: Proyección de inclusión sin _id
// ============================================

// Ocultar _id explícitamente con _id: 0.
// Descomenta las siguientes líneas:

// db.books.find(
//   { inStock: true },
//   { title: 1, price: 1, _id: 0 }
// )


// ============================================
// PASO 3: Proyección de exclusión
// ============================================

// Retornar todos los campos excepto tags e inStock.
// Descomenta las siguientes líneas:

// db.books.find(
//   {},
//   { tags: 0, inStock: 0 }
// )


// ============================================
// PASO 4: Ordenar con .sort()
// ============================================

// Libros ordenados de más caro a más barato.
// Descomenta las siguientes líneas:

// db.books.find(
//   {},
//   { title: 1, price: 1, _id: 0 }
// ).sort({ price: -1 })


// ============================================
// PASO 5: Limitar con .limit()
// ============================================

// Los 3 libros más recientes.
// Descomenta las siguientes líneas:

// db.books.find(
//   {},
//   { title: 1, year: 1, _id: 0 }
// ).sort({ year: -1 }).limit(3)


// ============================================
// PASO 6: Paginación con .skip() y .limit()
// ============================================

// Página 1 y página 2 de libros ordenados por título (3 por página).
// Descomenta las siguientes líneas:

// // Página 1
// db.books.find(
//   {},
//   { title: 1, _id: 0 }
// ).sort({ title: 1 }).skip(0).limit(3)

// // Página 2
// db.books.find(
//   {},
//   { title: 1, _id: 0 }
// ).sort({ title: 1 }).skip(3).limit(3)
