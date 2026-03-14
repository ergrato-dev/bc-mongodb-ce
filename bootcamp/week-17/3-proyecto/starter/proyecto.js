// ============================================
// PROYECTO SEMANAL: Optimización de Consultas con explain()
// Semana 17 — explain(), COLLSCAN, hint() y Covered Queries
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta la colección y los campos a tu dominio asignado.
// El esquema genérico usa "catalog_perf" — renómbrala según corresponda.

// ============================================
// TODO 1: Identificar COLLSCAN
// ============================================
// Ejecuta una query de filtrado en tu colección principal SIN índice.
// Usa explain("executionStats") y captura:
// - stage (debería ser COLLSCAN)
// - totalDocsExamined
// - nReturned
// - executionTimeMillis

// TODO: Implementar la query de filtrado con explain()
// db.catalog_perf.find(
//   { /* tus filtros frecuentes */ }
// ).explain("executionStats")


// ============================================
// TODO 2: Crear índice compuesto y verificar IXSCAN
// ============================================
// Diseña un índice compuesto para los campos más usados en filtros.
// Verifica con explain() que el stage cambió a IXSCAN y que
// totalDocsExamined ≈ nReturned.

// TODO: Crear el índice
// db.catalog_perf.createIndex(
//   { /* campos del índice */ },
//   { name: "/* nombre_descriptivo */" }
// )

// TODO: Re-ejecutar la misma query del TODO 1 con explain()


// ============================================
// TODO 3: Covered query con totalDocsExamined: 0
// ============================================
// Construye una query cuya proyección solo incluya campos del índice.
// Excluye _id con { _id: 0 }.
// Verifica totalDocsExamined: 0 en executionStats.

// TODO: Implementar la covered query
// db.catalog_perf.find(
//   { /* filtros con campos del índice */ },
//   { /* proyección: solo campos del índice, _id: 0 */ }
// ).explain("executionStats")


// ============================================
// TODO 4: hint() comparativo entre dos índices
// ============================================
// Crea un segundo índice alternativo (solo un campo).
// Usa hint() para comparar ambos índices con la misma query.
// Documenta cuál tiene menor totalDocsExamined o executionTimeMillis.

// TODO: Crear segundo índice (uno solo campo)
// db.catalog_perf.createIndex({ /* un campo */ })

// TODO: Comparar con hint() índice 1
// db.catalog_perf.find({ /* filtros */ })
//   .hint({ /* índice 1 */ }).explain("executionStats")

// TODO: Comparar con hint() índice 2
// db.catalog_perf.find({ /* filtros */ })
//   .hint({ /* índice 2 */ }).explain("executionStats")
