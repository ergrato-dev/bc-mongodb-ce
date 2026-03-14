// Semana 12: Aggregation Pipeline III — $facet, $bucket, $replaceRoot, $merge
// proyecto.js — Proyecto integrador semanal

// NOTA PARA EL APRENDIZ:
// Adapta estas queries a tu dominio asignado.
// Reemplaza "bookings" y "services" con tus colecciones.
// Ajusta los nombres de campo según tus entidades.

// ============================================
// PIPELINE 1: $facet multidimensional
// Análisis completo en una sola query
// ============================================

// TODO: Implementa un $facet con 3 sub-pipelines sobre "bookings":
//   1. byCategory: distribución por categoría de servicio/producto
//      (requiere $lookup previamente para obtener el campo category)
//      Alternativamente, agrupa por status o por segment del clientInfo
//   2. revenueStats: avg, min, max del campo amount (solo completados)
//   3. topClients: los 3 clientes con mayor gasto total (status completed)
//
// Resultado esperado: un único documento con los 3 sub-resultados

// db.bookings.aggregate([
//   // TODO: Agrega $facet con los 3 sub-pipelines
// ])


// ============================================
// PIPELINE 2: $bucket por rangos de valor
// Clasificar por monto de reserva
// ============================================

// TODO: Clasifica las reservas en al menos 4 rangos de "amount":
//   - Define los boundaries (ej: [0, 30, 80, 150, 500])
//   - Incluye un campo "default" para valores fuera de rango
//   - Para cada bucket: count, totalAmount, avgAmount
//   - Ordena por el valor del bucket ascendente

// db.bookings.aggregate([
//   // TODO: $bucket con boundaries, default y output
// ])


// ============================================
// PIPELINE 3: $replaceRoot con enriquecimiento
// Promover subdocumento clientInfo
// ============================================

// TODO: Usa $replaceRoot + $mergeObjects para:
//   - Promover el subdocumento "clientInfo" a raíz
//   - Preservar bookingId, status y amount del documento original
//   - Filtrar solo reservas completadas ($match antes del $replaceRoot)
//   - Ordenar por city

// db.bookings.aggregate([
//   // TODO: $match — solo completadas
//   // TODO: $replaceRoot con $mergeObjects
//   // TODO: $sort por city
// ])


// ============================================
// PIPELINE 4: $merge — estadísticas mensuales incrementales
// ============================================

// TODO: Calcula el revenue real por period (mes) de reservas completadas
//       y persiste en "booking_stats" usando $merge:
//   - Agrupa por "period": totalRevenue ($sum amount), bookingCount ($sum 1)
//   - whenMatched: "merge" → fusiona con documentos existentes (2024-01 histórico)
//   - whenNotMatched: "insert" → inserta meses nuevos
//   Verifica el resultado con db.booking_stats.find()

// db.bookings.aggregate([
//   // TODO: $match — solo completadas
//   // TODO: $group por period
//   // TODO: $merge con opciones whenMatched/whenNotMatched
// ])
// // db.booking_stats.find()
