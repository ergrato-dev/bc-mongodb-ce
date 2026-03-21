// ============================================
// Semana 20: GridFS y Time Series — Proyecto
// ============================================
// NOTA PARA EL APRENDIZ:
// Adapta todos los nombres a tu dominio asignado.
// Los TODOs son los requisitos mínimos a implementar.

// ============================================
// TODO 1: Explorar y consultar los archivos GridFS del dominio
// ============================================
// Responde las siguientes preguntas con queries:
//   a) ¿Cuántos archivos hay en fs.files?
//   b) ¿Cuántos chunks tiene cada archivo?
//   c) ¿Qué archivo es el más reciente según uploadDate?
// Usa db.getCollection("fs.files") y db.getCollection("fs.chunks")

// TODO: Implementar las 3 queries de exploración de GridFS


// ============================================
// TODO 2: Consultar la Time Series collection por rango y sensor
// ============================================
// Obtén todas las lecturas del 2 de abril de tu colección TS.
// Filtra por un ID específico (telescopeId, sensorId, machineId, etc.)
// Ordena por timeField ascendente.

// TODO: Implementar consulta por rango de fechas + filtro por metadata


// ============================================
// TODO 3: Pipeline de tendencia por período
// ============================================
// Agrupa las lecturas de tu colección TS por día y por ID del instrumento/entidad.
// Calcula: promedio, máximo y mínimo de al menos UNA métrica numérica.
// Ordena por día ascendente.
// Usa $match con timeField + $group + $dateToString

// TODO: Implementar pipeline de tendencia temporal
// const tendenciaPipeline = [
//   { $match: { ... } },
//   { $group: { ... } },
//   { $sort: { ... } }
// ]
// db.<tu_coleccion_ts>.aggregate(tendenciaPipeline)


// ============================================
// TODO 4: Identificar el mejor y peor período
// ============================================
// A partir del pipeline del TODO 3, usa $sort + $limit para obtener:
//   a) El día/período con el valor promedio más alto
//   b) El día/período con el valor promedio más bajo
// Interpreta el resultado en términos de tu dominio.

// TODO: Implementar queries de mejor y peor período
