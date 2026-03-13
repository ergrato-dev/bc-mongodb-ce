// Semana 01: Ejercicio 01 — find() y Proyecciones
// SOLUCIÓN

// ============================================
// PASO 1: Leer todos los documentos
// ============================================

// Obtener todos los productos de la colección.
db.products.find()


// ============================================
// PASO 2: findOne() — primer documento
// ============================================

// Obtener solo el primer documento de la colección.
db.products.findOne()


// ============================================
// PASO 3: Proyección — incluir campos
// ============================================

// Mostrar solo name, brand y price de todos los productos.
// (El campo _id se oculta explícitamente con _id: 0)
db.products.find(
  {},
  { name: 1, brand: 1, price: 1, _id: 0 }
)


// ============================================
// PASO 4: Proyección — excluir campos
// ============================================

// Mostrar todos los campos excepto specs, tags y createdAt.
db.products.find(
  {},
  { specs: 0, tags: 0, createdAt: 0 }
)
