// Semana 07: Índices Básicos y explain()
// Ejercicio 02: explain() — Análisis de rendimiento — SOLUCIÓN
// ============================================================

// PASO 1: Restablecer índices
db.listings.dropIndexes()
db.listings.getIndexes()

// PASO 2: Detectar queries lentas con explain()

// Query 1: COLLSCAN — examina todos los documentos
db.listings.find({ type: "apartment" }).explain("executionStats")

// Query 2: COLLSCAN — range query sin índice
db.listings.find({ rating: { $gte: NumberInt(4) } }).explain("executionStats")

// Query 3: COLLSCAN + sort en memoria
db.listings.find({ isAvailable: true }).sort({ price: 1 }).explain("executionStats")

// PASO 3: Crear los índices necesarios y re-analizar

db.listings.createIndex({ type: 1 })
// IXSCAN — totalDocsExamined ≈ nReturned
db.listings.find({ type: "apartment" }).explain("executionStats")

db.listings.createIndex({ rating: 1 })
// IXSCAN — solo examina docs con rating >= 4
db.listings.find({ rating: { $gte: NumberInt(4) } }).explain("executionStats")

db.listings.createIndex({ price: 1 })
// IXSCAN + FETCH — el sort respeta el orden del índice
db.listings.find({ isAvailable: true }).sort({ price: 1 }).explain("executionStats")

// PASO 4: Ver estado final de índices
db.listings.getIndexes()
