// Semana 09: Aggregation Pipeline I
// Proyecto — Pipelines en el dominio asignado
// ============================================================

// NOTA: Renombra "records" por la colección de tu dominio.
// Ajusta los campos (type, value, score, status, etc.)
// según las entidades de tu dominio.

// ============================================================
// PIPELINE 1: Filtro + proyección
// ============================================================

// TODO: Obtén todos los registros activos mostrando solo
// los campos más relevantes de tu dominio (sin _id).
// db.records.aggregate([
//   { $match: { ??? } },
//   {
//     $project: {
//       _id: 0,
//       // TODO: elige los campos a mostrar
//     }
//   }
// ])

// ============================================================
// PIPELINE 2: Top 5 por valor
// ============================================================

// TODO: Los 5 registros con mayor valor, ordenados
// de mayor a menor. Muestra nombre, tipo y valor.
// db.records.aggregate([
//   { $match: { isActive: ??? } },
//   { $sort: { value: ??? } },
//   { $limit: ??? },
//   { $project: { ??? } }
// ])

// ============================================================
// PIPELINE 3: Agrupación por tipo
// ============================================================

// TODO: Agrupa por "type" y calcula:
// - Cantidad de registros en el grupo
// - Suma total de "value"
// - Score promedio
// db.records.aggregate([
//   { $match: { ??? } },
//   {
//     $group: {
//       _id: "???",
//       count: { ??? },
//       totalValue: { ??? },
//       avgScore: { ??? }
//     }
//   },
//   { $sort: { totalValue: ??? } }
// ])

// ============================================================
// PIPELINE 4: Resumen total (_id: null)
// ============================================================

// TODO: Calcula el total general de registros activos:
// - Total de documentos
// - Suma de todos los valores
// - Promedio de score
// - Valor máximo y mínimo
// db.records.aggregate([
//   { $match: { isActive: true } },
//   {
//     $group: {
//       _id: null,
//       totalRecords: { ??? },
//       sumValues: { ??? },
//       avgScore: { ??? },
//       maxValue: { ??? },
//       minValue: { ??? }
//     }
//   }
// ])

// ============================================================
// PIPELINE 5: Paginación
// ============================================================

// TODO: Implementa dos páginas de 5 elementos cada una,
// ordenadas por createdAt descendente.

// Página 1:
// db.records.aggregate([
//   { $match: { isActive: true } },
//   { $sort: { createdAt: ??? } },
//   { $skip: ??? },
//   { $limit: ??? },
//   { $project: { _id: 0, name: 1, type: 1, value: 1, createdAt: 1 } }
// ])

// Página 2:
// db.records.aggregate([
//   { $match: { isActive: true } },
//   { $sort: { createdAt: ??? } },
//   { $skip: ??? },
//   { $limit: ??? },
//   { $project: { _id: 0, name: 1, type: 1, value: 1, createdAt: 1 } }
// ])
