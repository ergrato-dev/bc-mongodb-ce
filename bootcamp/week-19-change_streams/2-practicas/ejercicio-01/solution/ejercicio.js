// ============================================
// Semana 19: Change Streams — Ejercicio 01
// Solución: abrir stream y capturar eventos
// ============================================

// ============================================
// PASO 1: Abrir el Change Stream
// ============================================

// Terminal A — Abrir stream y esperar primer evento
const cs = db.notifications.watch()
print("Stream abierto — esperando eventos...")
print("Ejecuta en Terminal B:")
print("  db.notifications.insertOne({ notificationId: 'ntf-new', type: 'info', message: 'Evento de prueba', userId: 'user-103', isRead: false, createdAt: new Date() })")

const evt = cs.next()
printjson(evt)
// Resultado esperado:
// { operationType: "insert", fullDocument: { _id: ..., notificationId: "ntf-new", ... }, documentKey: { _id: ... } }


// ============================================
// PASO 2: Observar evento update
// ============================================

const cs2 = db.notifications.watch()
print("Stream abierto — ejecuta en Terminal B:")
print("  db.notifications.updateOne({ notificationId: 'ntf-001' }, { $set: { isRead: true, updatedAt: new Date() } })")

const evtUpdate = cs2.next()
printjson(evtUpdate)
// Resultado esperado:
// {
//   operationType: "update",
//   documentKey: { _id: ObjectId("...") },
//   updateDescription: {
//     updatedFields: { isRead: true, updatedAt: ISODate("...") },
//     removedFields: [],
//     truncatedArrays: []
//   }
// }


// ============================================
// PASO 3: Observar evento delete
// ============================================

const cs3 = db.notifications.watch()
print("Stream abierto — ejecuta en Terminal B:")
print("  db.notifications.deleteOne({ notificationId: 'ntf-003' })")

const evtDelete = cs3.next()
printjson(evtDelete)
// Resultado esperado:
// {
//   operationType: "delete",
//   documentKey: { _id: ObjectId("...") }
//   // fullDocument no presente
// }


// ============================================
// PASO 4: Filtrar solo eventos insert con pipeline
// ============================================

const pipeline = [
  { $match: { operationType: "insert" } }
]
const csFiltered = db.notifications.watch(pipeline)
print("Stream con filtro activo — solo inserts serán recibidos")
print("Terminal B: primero haz updateOne (no llegará) — luego insertOne (sí llegará)")

const evtFiltered = csFiltered.next()
printjson(evtFiltered)
// Confirma: evtFiltered.operationType === "insert"
