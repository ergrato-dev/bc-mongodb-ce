// ============================================
// Semana 17 — Ejercicio 02: hint() y Covered Queries
// SOLUCIÓN
// ============================================

// ============================================
// PASO 1: Verificar qué índice elige MongoDB
// ============================================

db.sales_perf.find(
  { status: "completed", region: "north" }
).explain("executionStats")

// El winningPlan puede mostrar "sales_status_simple" o "sales_status_region"
// dependiendo de la distribución actual de datos y las estadísticas del optimizador


// ============================================
// PASO 2: Forzar índice con hint()
// ============================================

db.sales_perf.find(
  { status: "completed", region: "north" }
).hint({ status: 1, region: 1, amount: 1 })
  .explain("executionStats")

// winningPlan.inputStage.indexName: "sales_covered_idx"
// totalDocsExamined puede ser > 0 porque la proyección no está limitada aún


// ============================================
// PASO 3: Construir una covered query
// ============================================

db.sales_perf.find(
  { status: "completed" },
  { status: 1, region: 1, amount: 1, _id: 0 }
).hint({ status: 1, region: 1, amount: 1 })
  .explain("executionStats")

// totalDocsExamined: 0 ← sin acceso al documento completo
// totalKeysExamined: N (recorrió solo el índice)
// stage: "IXSCAN" sin FETCH anidado


// ============================================
// PASO 4: Confirmar sin hint()
// ============================================

db.sales_perf.find(
  { status: "completed" },
  { status: 1, region: 1, amount: 1, _id: 0 }
).explain("executionStats")

// Si el índice "sales_covered_idx" es el más selectivo para esta query+proyección,
// MongoDB lo elegirá automáticamente → totalDocsExamined: 0
