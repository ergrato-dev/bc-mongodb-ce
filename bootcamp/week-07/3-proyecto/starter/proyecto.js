// Semana 07: Índices Básicos y explain()
// Proyecto — Optimización de Queries con Índices
// ============================================================

// NOTA: Adapta todos los nombres de colecciones y campos
// a tu dominio asignado antes de implementar.

// ============================================================
// PARTE 1: Análisis inicial — queries sin índices
// ============================================================

// TODO: Verifica el estado inicial (solo debe existir el índice _id)
// db.assets.getIndexes()

// TODO: Query 1 — busca por categoría y analiza con explain()
// Identifica: winningPlan.stage, totalDocsExamined, nReturned
// db.assets.find({ category: "???" }).explain("executionStats")

// TODO: Query 2 — filtra por status y precio mínimo
// db.assets.find({ status: "???", price: { $gte: Decimal128("???") } })
//   .explain("executionStats")

// TODO: Query 3 — ordena por una fecha o precio
// db.assets.find({ isAvailable: true }).sort({ price: 1 })
//   .explain("executionStats")

// ============================================================
// PARTE 2: Crear los índices apropiados
// ============================================================

// TODO: Crea un índice simple en el campo más consultado
// db.assets.createIndex({ ???: 1 })

// TODO: Crea un índice único en un campo que deba ser único
// db.assets.createIndex({ ???: 1 }, { unique: true })

// TODO: Crea un índice en el campo de array (multikey) o subdocumento
// db.assets.createIndex({ "???.???": 1 })  // subdocumento
// db.assets.createIndex({ tags: 1 })       // multikey

// ============================================================
// PARTE 3: Verificación — queries con índices
// ============================================================

// TODO: Repite las mismas 3 queries con explain()
// y compara: stage, totalDocsExamined, nReturned, executionTimeMillis

// Query 1 con índice:
// db.assets.find({ category: "???" }).explain("executionStats")

// Query 2 con índice:
// db.assets.find({ status: "???", price: { $gte: Decimal128("???") } })
//   .explain("executionStats")

// Query 3 con índice:
// db.assets.find({ isAvailable: true }).sort({ price: 1 })
//   .explain("executionStats")

// ============================================================
// PARTE 4: Documentar resultados
// ============================================================

// TODO: Documenta aquí (en comentarios) los resultados obtenidos:
//
// Query 1:
//   Sin índice: stage=???, totalDocsExamined=???, nReturned=???
//   Con índice: stage=???, totalDocsExamined=???, nReturned=???
//   Conclusión: ???
//
// Query 2:
//   Sin índice: stage=???, totalDocsExamined=???, nReturned=???
//   Con índice: stage=???, totalDocsExamined=???, nReturned=???
//   Conclusión: ???
//
// Query 3:
//   Sin índice: stage=???, totalDocsExamined=???, nReturned=???
//   Con índice: stage=???, totalDocsExamined=???, nReturned=???
//   Conclusión: ???

// ============================================================
// PARTE 5: Estado final
// ============================================================

// TODO: Muestra todos los índices creados
// db.assets.getIndexes()
