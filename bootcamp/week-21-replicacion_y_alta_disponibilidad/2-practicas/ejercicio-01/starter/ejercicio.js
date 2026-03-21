// ============================================
// Semana 21: Replicación y Alta Disponibilidad
// Ejercicio 01 — Explorando el Replica Set
// ============================================

// ============================================
// PASO 1: Estado del Replica Set — rs.status()
// ============================================

// rs.status() muestra el estado actual de todos los miembros:
// set: nombre del Replica Set (rs0)
// members[].stateStr: "PRIMARY", "SECONDARY", "ARBITER"
// members[].health: 1 = disponible, 0 = inaccesible
// members[].optime: último timestamp aplicado del oplog
// Descomenta las siguientes líneas:

// rs.status()

// ============================================
// PASO 2: Configuración del Set — rs.conf()
// ============================================

// rs.conf() muestra la configuración estructural:
// members[].priority: mayor = candidato preferido en elecciones (0 = nunca Primary)
// members[].votes: 1 = puede votar, 0 = no vota
// members[].hidden: true = invisible al readPreference secundario
// Descomenta las siguientes líneas:

// rs.conf()

// ============================================
// PASO 3: Últimas Operaciones del Oplog
// ============================================

// El oplog vive en la base de datos 'local', colección 'oplog.rs'
// op:"i" insert, "u" update, "d" delete, "c" command, "n" no-op
// ns: namespace "db.colección"
// Descomenta las siguientes líneas:

// use("local")
// db["oplog.rs"].find(
//   { ns: /bootcamp_db/ }
// ).sort({ $natural: -1 }).limit(5)

// ============================================
// PASO 4: Información del Nodo Actual
// ============================================

// db.isMaster() indica si este nodo es el Primary actual:
// ismaster: true = este nodo ES el Primary
// hosts: todos los nodos del set
// setName: nombre del Replica Set
// Descomenta las siguientes líneas:

// db.isMaster()
