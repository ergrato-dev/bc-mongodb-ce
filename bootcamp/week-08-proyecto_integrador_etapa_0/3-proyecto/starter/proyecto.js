// Semana 08: Proyecto Integrador Etapa 0
// Proyecto — CRUD Completo + Índices
// ============================================================

// NOTA: Adapta todos los nombres de colecciones y campos a tu dominio.
// Renombra "entities" y "events" por las colecciones de tu dominio.

// ============================================================
// SECCIÓN 1: Inserción — agrega documentos propios del dominio
// ============================================================

// TODO: Usa insertOne() para insertar un documento con todos los campos
// db.entities.insertOne({
//   name: "Nuevo Item",
//   category: "type-a",
//   status: "active",
//   isActive: true,
//   quantity: NumberInt(??),
//   price: Decimal128("??"),
//   createdAt: new Date(),
//   tags: ["???"],
//   details: { /* campos del subdocumento */ }
// })

// TODO: Usa insertMany() para insertar al menos 3 documentos más
// db.entities.insertMany([
//   { /* documento 1 */ },
//   { /* documento 2 */ },
//   { /* documento 3 */ }
// ])

// ============================================================
// SECCIÓN 2: Consultas — queries con operadores
// ============================================================

// TODO: Query 1 — usa $gt o $gte con un campo numérico
// db.entities.find({ price: { $gte: Decimal128("???") } })

// TODO: Query 2 — usa $in con el campo category o status
// db.entities.find({ category: { $in: ["type-a", "type-c"] } })

// TODO: Query 3 — usa $and o $or con 2 condiciones
// db.entities.find({ $and: [{ isActive: true }, { quantity: { $gt: NumberInt(5) } }] })

// TODO: Query 4 — usa $elemMatch sobre el campo array "tags"
// db.entities.find({ tags: { $elemMatch: { $in: ["???"] } } })

// TODO: Query 5 — proyección con .sort() y .limit()
// db.entities.find(
//   { isActive: true },
//   { name: 1, price: 1, category: 1, _id: 0 }
// ).sort({ price: -1 }).limit(5)

// TODO: Query 6 — consulta en subdocumento con dot notation
// db.entities.find({ "details.origin": "???" }, { name: 1, details: 1, _id: 0 })

// ============================================================
// SECCIÓN 3: Actualización
// ============================================================

// TODO: Actualiza un documento con $set
// db.entities.updateOne(
//   { name: "???" },
//   { $set: { status: "inactive", isActive: false } }
// )

// TODO: Incrementa un campo numérico con $inc
// db.entities.updateOne(
//   { name: "???" },
//   { $inc: { quantity: NumberInt(-1) } }
// )

// TODO: Agrega un tag con $push
// db.entities.updateOne(
//   { name: "???" },
//   { $push: { tags: "updated" } }
// )

// TODO: Actualiza múltiples documentos con updateMany()
// db.entities.updateMany(
//   { status: "inactive" },
//   { $set: { isActive: false } }
// )

// ============================================================
// SECCIÓN 4: Eliminación
// ============================================================

// TODO: Elimina un documento con filtro específico
// db.entities.deleteOne({ status: "discontinued" })

// TODO: Verifica el conteo final
// db.entities.countDocuments()

// ============================================================
// SECCIÓN 5: Índices y explain()
// ============================================================

// TODO: Verifica los índices actuales
// db.entities.getIndexes()

// TODO: Analiza la query 1 SIN índice — observa COLLSCAN
// db.entities.find({ category: "type-a" }).explain("executionStats")

// TODO: Crea un índice en el campo más consultado
// db.entities.createIndex({ category: 1 })

// TODO: Analiza la misma query CON índice — observa IXSCAN
// db.entities.find({ category: "type-a" }).explain("executionStats")

// TODO: Crea un segundo índice (compuesto o único)
// db.entities.createIndex({ status: 1, createdAt: -1 })

// TODO: Documenta aquí los resultados del explain():
// Sin índice: stage=???, totalDocsExamined=???, nReturned=???
// Con índice: stage=???, totalDocsExamined=???, nReturned=???
// Conclusión: ???

// ============================================================
// SECCIÓN 6: Consultas sobre la colección de eventos
// ============================================================

// TODO: Cuenta los eventos por acción
// db.events.aggregate([
//   { $group: { _id: "$action", total: { $sum: 1 } } }
// ])

// TODO: Lista los eventos de un entity específico
// var entityId = db.entities.findOne({ name: "???" })._id
// db.events.find({ entityId: entityId }).sort({ occurredAt: -1 })
