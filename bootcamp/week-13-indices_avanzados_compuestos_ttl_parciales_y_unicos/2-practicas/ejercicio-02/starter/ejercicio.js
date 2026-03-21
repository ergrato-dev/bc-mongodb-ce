// Semana 13: Índices Avanzados — Compuestos, TTL, Parciales y Únicos
// Ejercicio 02 — TTL, Índices Parciales e Índices Únicos
// ============================================================

// ============================================================
// PASO 1: Índice TTL — Expiración automática de documentos
// ============================================================

// Un índice TTL elimina documentos automáticamente después de N segundos.
// Requiere un campo de tipo Date. No puede ser único.
// Descomenta las siguientes líneas:

// // Crear índice TTL en sessions.createdAt con expiración en 60 segundos
// db.sessions.createIndex(
//   { createdAt: 1 },
//   { expireAfterSeconds: 60 }
// )

// // Ver el índice creado
// db.sessions.getIndexes()

// // Consultar sesiones activas antes de que expiren
// db.sessions.find({}, { userId: 1, token: 1, createdAt: 1, _id: 0 })

// // Nota: espera ~60-90 segundos y vuelve a consultar para ver que el monitor
// // TTL del servidor eliminó los documentos automáticamente.
// // El monitor de MongoDB corre cada ~60 segundos.

// ============================================================
// PASO 2: Índice Único — Garantizar integridad del email
// ============================================================

// Un índice único previene documentos con el mismo valor en el campo indexado.
// MongoDB lanza E11000 si se intenta insertar un valor duplicado.
// Descomenta las siguientes líneas:

// // Crear índice único en el campo email
// db.users_idx.createIndex({ email: 1 }, { unique: true })

// // Verificar que el índice fue creado
// db.users_idx.getIndexes()

// // Intentar insertar un email ya existente — debe generar error E11000
// db.users_idx.insertOne({
//   email: "ana@example.com",
//   username: "ana_duplicada",
//   isActive: true,
//   role: "viewer",
//   registeredAt: new Date()
// })
// // MongoServerError: E11000 duplicate key error

// ============================================================
// PASO 3: Índice Parcial — Solo indexar usuarios activos
// ============================================================

// Un índice parcial solo incluye documentos que cumplen
// la partialFilterExpression. Ocupa menos espacio y es más rápido
// para queries que siempre filtran usuarios activos.
// Descomenta las siguientes líneas:

// // Crear índice parcial en role, solo para usuarios activos
// db.users_idx.createIndex(
//   { role: 1, registeredAt: 1 },
//   {
//     partialFilterExpression: { isActive: { $eq: true } },
//     name: "idx_role_active_users"
//   }
// )

// // Query que USA el índice parcial (incluye la condición isActive: true)
// db.users_idx.find(
//   { role: "editor", isActive: true }
// ).explain("executionStats")
// // Observa: stage: "IXSCAN", indexName: "idx_role_active_users"

// // Query que NO usa el índice parcial (falta la condición isActive)
// db.users_idx.find(
//   { role: "editor" }
// ).explain("executionStats")
// // Observa: stage: "COLLSCAN"

// ============================================================
// PASO 4: Índice Sparse — Solo indexar documentos con el campo
// ============================================================

// Un índice sparse excluye documentos donde el campo indexado no existe.
// Es similar al parcial pero con una semántica más limitada.
// Descomenta las siguientes líneas:

// // Crear índice sparse en un campo opcional
// db.users_idx.createIndex(
//   { username: 1 },
//   { sparse: true, unique: true }
// )

// // Ver todos los índices activos en la colección
// db.users_idx.getIndexes()

// // Comparar tamaños: índice parcial (isActive) vs normal
// // El índice parcial indexa solo 5 de 8 docs (los activos)
// // Un índice normal indexaría los 8 docs
// db.users_idx.aggregate([
//   { $indexStats: {} },
//   { $project: { name: 1, "accesses.ops": 1 } }
// ])
