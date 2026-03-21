// Semana 07: Índices Básicos y explain()
// Ejercicio 02: explain() — Análisis de rendimiento
// ============================================================
// Requiere la colección "listings" del ejercicio-01.
// Asegúrate de tener los datos cargados y los índices creados.

// ============================================================
// PASO 1: Restablecer — sin índices adicionales
// ============================================================

// Elimina todos los índices excepto _id para empezar desde cero:
// db.listings.dropIndexes()
// db.listings.getIndexes()

// ============================================================
// PASO 2: Detectar queries lentas con explain()
// ============================================================

// Query 1: por tipo de alojamiento — COLLSCAN esperado
// db.listings.find({ type: "apartment" }).explain("executionStats")

// Query 2: por rating alto — COLLSCAN esperado
// db.listings.find({ rating: { $gte: NumberInt(4) } }).explain("executionStats")

// Query 3: sort por precio — COLLSCAN esperado
// db.listings.find({ isAvailable: true }).sort({ price: 1 }).explain("executionStats")

// ============================================================
// PASO 3: Crear los índices necesarios y re-analizar
// ============================================================

// Crea un índice en "type":
// db.listings.createIndex({ type: 1 })
// Vuelve a explicar la Query 1:
// db.listings.find({ type: "apartment" }).explain("executionStats")

// Crea un índice en "rating":
// db.listings.createIndex({ rating: 1 })
// Vuelve a explicar la Query 2:
// db.listings.find({ rating: { $gte: NumberInt(4) } }).explain("executionStats")

// Crea un índice en "price" para el sort:
// db.listings.createIndex({ price: 1 })
// Vuelve a explicar la Query 3:
// db.listings.find({ isAvailable: true }).sort({ price: 1 }).explain("executionStats")

// ============================================================
// PASO 4: Interpretar los resultados
// ============================================================

// Compara los resultados con y sin índice.
// Revisa estos campos en ambos casos:
// - queryPlanner.winningPlan.stage (COLLSCAN vs IXSCAN)
// - executionStats.totalDocsExamined
// - executionStats.nReturned
// - executionStats.executionTimeMillis

// Estado final de índices de la colección:
// db.listings.getIndexes()
