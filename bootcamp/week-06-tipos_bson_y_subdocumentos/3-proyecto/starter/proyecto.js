// Semana 06: Tipos BSON y Subdocumentos
// proyecto.js — Catálogo con datos enriquecidos
// ============================================================
// NOTA: Cambia "catalog" por la colección de tu dominio.
// Adapta los campos y subdocumentos a tu entidad principal.

// ============================================================
// PARTE 1: Esquema con tipos BSON correctos
// ============================================================

// TODO: Reemplaza los documentos del setup.js con al menos 10
//       documentos de tu dominio. Incluye en cada documento:
//       - Un campo Date (createdAt, purchaseDate, joinDate, etc.)
//       - Un campo Decimal128 (price, amount, cost)
//       - Un subdocumento con 3+ campos
//       - Un array con al menos 3 elementos

// ============================================================
// PARTE 2: Consultas con dot notation
// ============================================================

// TODO: Filtra documentos por un campo dentro del subdocumento
//       Ejemplo: { "details.origin": "Colombia" }
// db.catalog.find({ "details.??": "??" }, { name: 1, "details.??": 1, _id: 0 })

// TODO: Proyecta solo 2 campos del subdocumento usando dot notation
// db.catalog.find({}, { name: 1, "details.??": 1, "details.??": 1, _id: 0 })

// TODO: Combina dot notation con un operador de comparación
//       Ejemplo: { "details.weight": { $gte: NumberInt(500) } }
// db.catalog.find({ "details.??": { $gte: ?? } }, { name: 1, _id: 0 })

// TODO: Actualiza un campo dentro del subdocumento con $set y dot notation
// db.catalog.updateOne(
//   { name: "Nombre de tu ítem" },
//   { $set: { "details.??": "nuevo valor" } }
// )

// ============================================================
// PARTE 3: Consultas avanzadas
// ============================================================

// TODO: Busca documentos cuyo array contenga un elemento específico
//       Ejemplo: { tags: "tag2" }
// db.catalog.find({ tags: "??" }, { name: 1, tags: 1, _id: 0 })

// TODO: Usa $type para verificar el tipo de 2 campos
// db.catalog.find({ price: { $type: "decimal" } }, { name: 1, price: 1, _id: 0 })
// db.catalog.find({ createdAt: { $type: "date" } }, { name: 1, createdAt: 1, _id: 0})
