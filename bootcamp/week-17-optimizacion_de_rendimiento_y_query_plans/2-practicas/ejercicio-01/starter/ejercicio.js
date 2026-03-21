// ============================================
// Semana 17 — Ejercicio 01: explain() y COLLSCAN
// ejercicio.js — Descomenta cada sección según el paso
// ============================================

// ============================================
// PASO 1: Identificar COLLSCAN sin índice
// ============================================

// Ejecuta la query con explain() ANTES de crear índices.
// Observa: stage, totalDocsExamined, nReturned, executionTimeMillis
// Descomenta las siguientes líneas:

// db.sales_perf.find(
//   { status: "completed", region: "north" }
// ).explain("executionStats")

// Resultado esperado → stage: "COLLSCAN", totalDocsExamined >= 15


// ============================================
// PASO 2: Crear índice compuesto
// ============================================

// Crea un índice en los campos usados frecuentemente para filtrar.
// Descomenta las siguientes líneas:

// db.sales_perf.createIndex(
//   { status: 1, region: 1 },
//   { name: "sales_status_region" }
// )

// Verifica que el índice fue creado:
// db.sales_perf.getIndexes()


// ============================================
// PASO 3: Verificar IXSCAN después del índice
// ============================================

// Ejecuta la misma query con explain() DESPUÉS de crear el índice.
// Compara: stage, totalDocsExamined, nReturned, executionTimeMillis
// Descomenta las siguientes líneas:

// db.sales_perf.find(
//   { status: "completed", region: "north" }
// ).explain("executionStats")

// Resultado esperado → stage: "IXSCAN", totalDocsExamined igual a nReturned


// ============================================
// PASO 4: Inspeccionar estadísticas del índice
// ============================================

// Lista todos los índices y su uso acumulado.
// Descomenta las siguientes líneas:

// db.sales_perf.getIndexes()

// db.sales_perf.aggregate([
//   { $indexStats: {} }
// ])
