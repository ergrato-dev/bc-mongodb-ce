// ============================================
// PROYECTO SEMANAL: Replicación y Alta Disponibilidad
// Semana 21 — writeConcern, readPreference, oplog
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta todas las referencias a 'items' a tu colección de dominio.
// Ejemplos:
//   Biblioteca  → books, members, loans
//   Farmacia    → medicines, sales, inventory
//   Gimnasio    → members, routines, attendance

// ============================================
// TODO 1: Diagnóstico del Replica Set
// ============================================
// Ejecuta rs.status() y rs.conf() y documenta con comentarios:
// - ¿Cuál es el nombre del Replica Set?
// - ¿Qué nodo es el PRIMARY y cuál es su health?
// - ¿Cuál es el priority de tu nodo en rs.conf()?

// TODO: Implementar diagnóstico del Replica Set
// Hint: rs.status() y rs.conf()

// ============================================
// TODO 2: Escrituras con writeConcern
// ============================================
// Inserta 3 documentos de tu dominio con distintos niveles de writeConcern.
// Comenta la diferencia de durabilidad entre cada nivel.

// TODO: Insert con { writeConcern: { w: 1 } }
// db.items.insertOne({ ... }, { writeConcern: { w: 1 } })

// TODO: Insert con { writeConcern: { w: "majority" } }
// db.items.insertOne({ ... }, { writeConcern: { w: "majority" } })

// TODO: Insert con { writeConcern: { w: 0 } } — fire and forget
// db.items.insertOne({ ... }, { writeConcern: { w: 0 } })

// ============================================
// TODO 3: Lecturas con readPreference
// ============================================
// Ejecuta 3 consultas con distintos modos de readPreference.
// En el entorno Docker (un solo nodo), todas caerán al Primary — es correcto.

// TODO: Lectura con readPref("primary") — consistencia estricta
// db.items.find({}).readPref("primary")

// TODO: Lectura con readPref("secondaryPreferred") — distribución de carga
// db.items.find({}).readPref("secondaryPreferred")

// TODO: Lectura con readPref("nearest") — menor latencia
// db.items.find({}).readPref("nearest")

// ============================================
// TODO 4: Análisis del Oplog
// ============================================
// Consulta las 5 operaciones más recientes del oplog
// para tu base de datos. Identifica el campo 'op' de cada una.
// op: "i"=insert, "u"=update, "d"=delete, "c"=command, "n"=no-op

// TODO: Consultar oplog filtrado por bootcamp_db
// Hint: use("local"), db["oplog.rs"].find({ ns: /bootcamp_db/ }).sort({ $natural: -1 }).limit(5)
