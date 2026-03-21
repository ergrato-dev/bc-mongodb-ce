// ============================================
// Semana 17 — Ejercicio 02: hint() y Covered Queries
// ejercicio.js — Descomenta cada sección según el paso
// ============================================

// ============================================
// PASO 1: Verificar qué índice elige MongoDB
// ============================================

// Con múltiples índices, MongoDB puede elegir el menos óptimo.
// Verifica el winningPlan para la siguiente query:
// Descomenta las siguientes líneas:

// db.sales_perf.find(
//   { status: "completed", region: "north" }
// ).explain("executionStats")

// Busca en el resultado:
// queryPlanner.winningPlan.inputStage.indexName
// ¿Usó "sales_status_simple" o "sales_status_region"?


// ============================================
// PASO 2: Forzar índice con hint()
// ============================================

// Forza el uso del índice compuesto más completo para la misma query.
// Compara los campos executionStats con el resultado del PASO 1.
// Descomenta las siguientes líneas:

// db.sales_perf.find(
//   { status: "completed", region: "north" }
// ).hint({ status: 1, region: 1, amount: 1 })
//   .explain("executionStats")

// Resultado esperado → indexName: "sales_covered_idx"


// ============================================
// PASO 3: Construir una covered query
// ============================================

// La proyección solo incluye campos del índice "sales_covered_idx".
// Esto elimina el stage FETCH y logra totalDocsExamined: 0.
// Descomenta las siguientes líneas:

// db.sales_perf.find(
//   { status: "completed" },
//   { status: 1, region: 1, amount: 1, _id: 0 }
// ).hint({ status: 1, region: 1, amount: 1 })
//   .explain("executionStats")

// Resultado esperado:
// totalDocsExamined: 0
// totalKeysExamined > 0 (solo recorrió el índice)


// ============================================
// PASO 4: Confirmar sin hint() — misma covered query
// ============================================

// Una vez confirmado el índice correcto, quita hint() y
// verifica que MongoDB también lo elige naturalmente.
// Descomenta las siguientes líneas:

// db.sales_perf.find(
//   { status: "completed" },
//   { status: 1, region: 1, amount: 1, _id: 0 }
// ).explain("executionStats")

// Si totalDocsExamined: 0 → MongoDB eligió el índice correcto automáticamente
