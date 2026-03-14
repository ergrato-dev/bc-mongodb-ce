// Semana 15: Patrones de Modelado Avanzado — Proyecto Semanal
// ============================================
// Implementa los 4 patrones en las colecciones de tu dominio.
// Adapta los nombres de colecciones y campos según corresponda.
// ============================================

// ============================================
// TODO 1: Extended Reference — Lectura sin $lookup
// ============================================
// Lee los items principales de tu dominio usando el campo embebido
// (el equivalente a exhibitorInfo) sin necesitar $lookup.
// Muestra: título del item + nombre del responsable + fecha.
//
// Pista: db.<tuColeccion>.find({}, { title: 1, "responsableInfo.name": 1, ... })

// TODO: Implementar la consulta usando Extended Reference


// ============================================
// TODO 2: Extended Reference — Propagación de cambio
// ============================================
// Simula que el responsable "exh-01" (o su equivalente en tu dominio)
// cambia su nombre. Actualiza:
//   a) La colección maestra (fuente de verdad)
//   b) Todos los items que tienen ese responsableInfo embebido.
//
// Pista: db.<colMaestra>.updateOne(...) + db.<colItems>.updateMany(...)

// TODO: Implementar la propagación en dos pasos


// ============================================
// TODO 3: Subset Pattern — Agregar reseña reciente
// ============================================
// Un visitante deja una nueva reseña en el item "ex-001" (o equivalente).
// Usa $push con $slice: -3 para mantener solo las 3 más recientes.
// Actualiza también reviewCount con $inc.
//
// Pista:
//   db.<colItems>.updateOne(
//     { <itemId>: "..." },
//     { $push: { topReviews: { $each: [newReview], $slice: -3 } },
//       $inc: { reviewCount: 1 } }
//   )

// TODO: Implementar el upsert del Subset Pattern


// ============================================
// TODO 4: Bucket Pattern — Upsert de visitas por hora
// ============================================
// Un nuevo visitante entra al museo a las 10am del día 2024-05-08.
// Agrupa las visitas por hora en la colección visitor_buckets.
// Usa upsert: true para crear el bucket si no existe.
//
// Campos a acumular: count ($inc), entranceRevenue ($inc), firstEntry ($min), lastEntry ($max)
//
// Pista:
//   db.visitor_buckets.updateOne(
//     { day: "2024-05-08", hour: "10" },
//     { $push: { entries: {...} }, $inc: {...}, $min: {...}, $max: {...} },
//     { upsert: true }
//   )

// TODO: Implementar el Bucket Pattern para visitas por hora


// ============================================
// TODO 5: Computed Pattern — Actualizar estadísticas del día
// ============================================
// Al cerrar el día 2024-05-08, agrega los totales en visitor_stats.
// Usa $inc para acumular totalVisitors y totalRevenue.
// Usa upsert: true para que cree el documento si no existe aún.
//
// Pista:
//   db.visitor_stats.updateOne(
//     { dayKey: "2024-05-08" },
//     { $inc: { totalVisitors: <N>, totalRevenue: <monto> } },
//     { upsert: true }
//   )

// TODO: Implementar el Computed Pattern para el cierre del día
