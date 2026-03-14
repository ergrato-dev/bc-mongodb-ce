// Semana 10: Aggregation Pipeline II — Acumuladores Avanzados
// proyecto.js — Proyecto Semanal Integrador

// ============================================
// INSTRUCCIONES:
// 1. Ejecuta primero: starter/setup.js
// 2. Adapta los nombres de colecciones y campos a tu dominio
// 3. Implementa cada TODO con el operador indicado
// ============================================

// ============================================
// PIPELINE 1: Enriquecimiento con $addFields
// ============================================
// Objetivo: Agregar campos calculados sin perder los originales.
// Debe incluir:
//   - Un campo numérico calculado (total = amount × quantity)
//   - Una clasificación condicional con $cond (ej: "alto"/"bajo")

// TODO: Implementar $addFields con totalValue y tier
// db.transactions.aggregate([
//   {
//     $addFields: {
//       // TODO: calcular totalValue con $multiply
//       // TODO: asignar tier con $cond (ej: amount > 500 → "high", si no → "standard")
//     }
//   },
//   { $limit: 5 }
// ])

// ============================================
// PIPELINE 2: Manejo de datos faltantes con $ifNull
// ============================================
// Objetivo: Normalizar campos que pueden ser nulos o ausentes.
// Uno de los documentos en setup.js tiene "location" ausente.

// TODO: Implementar $ifNull para normalizar el campo "location"
// db.transactions.aggregate([
//   {
//     $addFields: {
//       // TODO: crear "locationNormalized" con $ifNull
//     }
//   },
//   { $project: { item: 1, location: 1, locationNormalized: 1, _id: 0 } }
// ])

// ============================================
// PIPELINE 3: Acumuladores $push y $addToSet
// ============================================
// Objetivo: Generar arrays por grupo con todos los ítems y los únicos.
// Agrupa por agentId (o el campo equivalente en tu dominio).

// TODO: Usar $push (todos los ítems) y $addToSet (tipos únicos)
// db.transactions.aggregate([
//   {
//     $group: {
//       _id: "$agentId",
//       // TODO: allItems con $push de "item"
//       // TODO: uniqueTypes con $addToSet de "type"
//       // TODO: totalTransactions con $sum: 1
//     }
//   },
//   { $sort: { _id: 1 } }
// ])

// ============================================
// PIPELINE 4: Acumuladores $first y $last
// ============================================
// Objetivo: Obtener el primer y último registro por grupo según fecha.
// Recuerda: $sort antes de $group garantiza determinismo.

// TODO: Agregar $sort por createdAt y usar $first/$last en $group
// db.transactions.aggregate([
//   // TODO: agregar etapa $sort por createdAt ascendente
//   {
//     $group: {
//       _id: "$agentId",
//       // TODO: firstItem con $first de "item"
//       // TODO: lastItem con $last de "item"
//       // TODO: firstDate con $first de "createdAt"
//       // TODO: lastDate con $last de "createdAt"
//     }
//   },
//   { $sort: { _id: 1 } }
// ])

// ============================================
// PIPELINE 5: Pipeline complejo (4+ etapas)
// ============================================
// Objetivo: Responder una pregunta de negocio usando múltiples etapas.
// Estructura: $addFields → $match → $group → $sort
//
// Ejemplo de pregunta de negocio:
// "¿Cuáles son las zonas con mayor ingreso en transacciones completadas,
//  clasificando como 'high' las de monto > 500?"

// TODO: Implementar el pipeline completo de 4 etapas
// db.transactions.aggregate([
//   // Etapa 1 — TODO: $addFields con totalValue, tier, locationNormalized
//   // Etapa 2 — TODO: $match solo registros con status "completed"
//   // Etapa 3 — TODO: $group por tier y locationNormalized
//   //   con $sum de totalSales, $sum de totalRevenue, $addToSet de items
//   // Etapa 4 — TODO: $sort por totalRevenue descendente
// ])
