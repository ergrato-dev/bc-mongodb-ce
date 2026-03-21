// ============================================
// Semana 22: Seguridad y Administración
// Ejercicio 01 — RBAC: Crear y Gestionar Usuarios
// ============================================

// NOTA: Estos comandos se ejecutan conectado como el usuario 'bootcamp'
// que tiene rol dbOwner en bootcamp_db.

// ============================================
// PASO 1: Crear usuario de solo lectura
// ============================================

// Crear un usuario 'catalog_reader' con rol de solo lectura
// El rol 'read' permite find, listCollections, listIndexes
// Descomenta las siguientes líneas:

// db.createUser({
//   user: "catalog_reader",
//   pwd: "Reader2025!",
//   roles: [{ role: "read", db: "bootcamp_db" }]
// })

// Verificar que fue creado:
// db.getUser("catalog_reader")

// ============================================
// PASO 2: Crear usuario de lectura y escritura
// ============================================

// Crear un usuario 'catalog_writer' con rol readWrite
// El rol 'readWrite' incluye: find, insert, update, delete, createIndex
// Descomenta las siguientes líneas:

// db.createUser({
//   user: "catalog_writer",
//   pwd: "Writer2025!",
//   roles: [{ role: "readWrite", db: "bootcamp_db" }]
// })

// Ver todos los usuarios de la BD:
// db.getUsers()

// ============================================
// PASO 3: Otorgar rol adicional
// ============================================

// Agregar rol dbAdmin al catalog_writer (simula un DBA operativo)
// dbAdmin permite: createIndex, dropIndex, dbStats, collMod
// Descomenta las siguientes líneas:

// db.grantRolesToUser(
//   "catalog_writer",
//   [{ role: "dbAdmin", db: "bootcamp_db" }]
// )

// Verificar los roles actualizados:
// db.getUser("catalog_writer")

// ============================================
// PASO 4: Revocar rol y eliminar usuario
// ============================================

// Revocar el rol dbAdmin del catalog_writer
// Descomenta las siguientes líneas:

// db.revokeRolesFromUser(
//   "catalog_writer",
//   [{ role: "dbAdmin", db: "bootcamp_db" }]
// )

// Eliminar el usuario de solo lectura
// db.dropUser("catalog_reader")

// Verificar que solo queda catalog_writer:
// db.getUsers()
