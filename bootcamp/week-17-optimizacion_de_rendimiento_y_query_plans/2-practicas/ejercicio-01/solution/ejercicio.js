// ============================================
// Semana 17 — Ejercicio 01: explain() y COLLSCAN
// SOLUCIÓN
// ============================================

// ============================================
// PASO 1: Identificar COLLSCAN sin índice
// ============================================

db.sales_perf.find(
  { status: "completed", region: "north" }
).explain("executionStats")

// Resultado: stage: "COLLSCAN"
// totalDocsExamined: 15 (todos los docs)
// nReturned: 3 (solo los que cumplen el filtro)


// ============================================
// PASO 2: Crear índice compuesto
// ============================================

db.sales_perf.createIndex(
  { status: 1, region: 1 },
  { name: "sales_status_region" }
)

db.sales_perf.getIndexes()


// ============================================
// PASO 3: Verificar IXSCAN después del índice
// ============================================

db.sales_perf.find(
  { status: "completed", region: "north" }
).explain("executionStats")

// Resultado: stage: "IXSCAN"
// totalDocsExamined: 3, nReturned: 3
// executionTimeMillis: mucho menor que en PASO 1


// ============================================
// PASO 4: Inspeccionar estadísticas del índice
// ============================================

db.sales_perf.getIndexes()

db.sales_perf.aggregate([
  { $indexStats: {} }
])
