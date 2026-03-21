// ============================================
// Semana 21: Replicación y Alta Disponibilidad
// Ejercicio 01 — SOLUCIÓN
// ============================================

// ============================================
// PASO 1: Estado del Replica Set — rs.status()
// ============================================

rs.status()

// ============================================
// PASO 2: Configuración del Set — rs.conf()
// ============================================

rs.conf()

// ============================================
// PASO 3: Últimas Operaciones del Oplog
// ============================================

use("local")
db["oplog.rs"].find(
  { ns: /bootcamp_db/ }
).sort({ $natural: -1 }).limit(5)

// ============================================
// PASO 4: Información del Nodo Actual
// ============================================

db.isMaster()
