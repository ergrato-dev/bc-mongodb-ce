// Semana 11: $lookup y $unwind — Joins en MongoDB
// proyecto.js — Proyecto integrador semanal

// NOTA PARA EL APRENDIZ:
// Adapta las queries a tu dominio asignado.
// Reemplaza "catalog" y "transactions" con tus colecciones.
// Ajusta los nombres de campo según tus entidades.

// ============================================
// PIPELINE 1: $lookup básico
// Enriquecer transacciones con datos del catálogo
// ============================================

// TODO: Usa $lookup para combinar "transactions" con "catalog"
//       - localField: campo que referencia al item
//       - foreignField: campo _id del catálogo
//       - Proyecta: txId, agentName, quantity, status
//         + datos del item (name, type, price)
//       - Resultado esperado: 8 documentos enriquecidos

// db.transactions.aggregate([
//   // TODO: Agrega etapa $lookup
//   // TODO: Agrega etapa $unwind sobre el resultado del $lookup
//   // TODO: Agrega etapa $project con los campos requeridos
// ])


// ============================================
// PIPELINE 2: $unwind y agrupación por tipo
// Totales por tipo de item en transacciones completadas
// ============================================

// TODO: Filtra solo transacciones con status "completed"
//       Usa $lookup para obtener el item del catálogo
//       Aplica $unwind sobre el resultado del $lookup
//       Agrupa por item.type y calcula:
//         - totalQuantity: suma de quantity
//         - txCount: conteo de transacciones
//         - avgQuantity: promedio de quantity
//       Ordena por totalQuantity descendente

// db.transactions.aggregate([
//   // TODO: $match — solo completadas
//   // TODO: $lookup — enriquecer con catalog
//   // TODO: $unwind — un doc por item
//   // TODO: $group — agrupar por type, calcular totales
//   // TODO: $sort — ordenar por totalQuantity
// ])


// ============================================
// PIPELINE 3: $lookup con pipeline
// Transacciones con items activos del catálogo
// ============================================

// TODO: Usa $lookup con let y pipeline interno para:
//       - Definir la variable local (itemId)
//       - En el pipeline del $lookup, filtrar solo items activos
//         usando $match con $expr y $$variable
//       - Proyectar resultado final: txId, agentName, status,
//         y si el item está disponible o no (isEmpty del array)
// PISTA: Un array vacío en el $lookup significa que el item no está activo

// db.transactions.aggregate([
//   // TODO: $lookup con let/pipeline (filter isActive: true)
//   // TODO: $project — calcular campo "hasActiveItem" con $gt: [{$size: "$campo"}, 0]
//   // TODO: $sort — estado completado primero
// ])


// ============================================
// PIPELINE 4: Pipeline complejo — Ranking de agentes
// Top agentes por revenue en items activos
// ============================================

// TODO: Pipeline de 5+ etapas que calcule el ranking de agentes
//       con base en el revenue de transacciones COMPLETADAS
//       con items ACTIVOS del catálogo:
//
//       Etapa 1: $lookup básico (transactions → catalog)
//       Etapa 2: $unwind sobre resultado del $lookup
//       Etapa 3: $match — completadas + item activo
//       Etapa 4: $group por agentId:
//                - totalRevenue: suma de quantity * price del item
//                - txCount: conteo de transacciones
//                - avgTxValue: promedio del valor por transacción
//       Etapa 5: $sort por totalRevenue descendente
//       Etapa 6 (opcional): $limit 3 — top 3 agentes
//
// PISTA: Para calcular revenue usa $multiply: ["$quantity", { $toDouble: "$item.price" }]

// db.transactions.aggregate([
//   // TODO: Etapa 1 — $lookup
//   // TODO: Etapa 2 — $unwind
//   // TODO: Etapa 3 — $match (status + isActive)
//   // TODO: Etapa 4 — $group por agentId
//   // TODO: Etapa 5 — $sort
//   // TODO: Etapa 6 (opcional) — $limit 3
// ])
