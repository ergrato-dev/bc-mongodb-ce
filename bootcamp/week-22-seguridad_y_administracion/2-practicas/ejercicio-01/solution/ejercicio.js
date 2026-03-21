// ============================================
// Semana 22: Seguridad y Administración
// Ejercicio 01 — SOLUCIÓN
// ============================================

// ============================================
// PASO 1: Crear usuario de solo lectura
// ============================================

db.createUser({
  user: "catalog_reader",
  pwd: "Reader2025!",
  roles: [{ role: "read", db: "bootcamp_db" }]
})

db.getUser("catalog_reader")

// ============================================
// PASO 2: Crear usuario de lectura y escritura
// ============================================

db.createUser({
  user: "catalog_writer",
  pwd: "Writer2025!",
  roles: [{ role: "readWrite", db: "bootcamp_db" }]
})

db.getUsers()

// ============================================
// PASO 3: Otorgar rol adicional
// ============================================

db.grantRolesToUser(
  "catalog_writer",
  [{ role: "dbAdmin", db: "bootcamp_db" }]
)

db.getUser("catalog_writer")

// ============================================
// PASO 4: Revocar rol y eliminar usuario
// ============================================

db.revokeRolesFromUser(
  "catalog_writer",
  [{ role: "dbAdmin", db: "bootcamp_db" }]
)

db.dropUser("catalog_reader")

db.getUsers()
