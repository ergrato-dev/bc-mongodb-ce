// ============================================
// Semana 19: Change Streams — Ejercicio 01
// Abrir stream y capturar eventos
// ============================================
// IMPORTANTE: Este archivo se ejecuta en la Terminal A.
// La Terminal B realiza las escrituras mientras este stream está abierto.
// Necesitas un Replica Set activo (--replSet rs0).

// ============================================
// PASO 1: Abrir el Change Stream
// ============================================

// Terminal A — Ejecuta estas líneas para abrir el stream
// El cursor quedará bloqueado esperando eventos

// const cs = db.notifications.watch()
// print("Stream abierto — esperando eventos...")
// print("Ejecuta en Terminal B: db.notifications.insertOne({...})")

// // Leer UN evento cuando llegue
// const evt = cs.next()
// printjson(evt)
// // Observa: evt.operationType === "insert"
// // Observa: evt.fullDocument contiene el documento completo
// // Observa: evt.documentKey contiene el _id


// ============================================
// PASO 2: Observar evento update
// ============================================

// Terminal A — Reopens stream (o continúa con el mismo cs)
// const cs2 = db.notifications.watch()
// print("Stream abierto — esperando evento update...")
// print("Ejecuta en Terminal B: db.notifications.updateOne({notificationId:'ntf-001'},{$set:{isRead:true}})")

// const evtUpdate = cs2.next()
// printjson(evtUpdate)
// // Observa: evt.operationType === "update"
// // Observa: evt.updateDescription.updatedFields — solo los campos modificados
// // Observa: evt.fullDocument NO está presente por defecto en updates


// ============================================
// PASO 3: Observar evento delete
// ============================================

// Terminal A
// const cs3 = db.notifications.watch()
// print("Stream abierto — esperando evento delete...")
// print("Ejecuta en Terminal B: db.notifications.deleteOne({notificationId:'ntf-003'})")

// const evtDelete = cs3.next()
// printjson(evtDelete)
// // Observa: evt.operationType === "delete"
// // Observa: evt.documentKey._id — solo el _id, no el documento (ya fue eliminado)
// // Observa: evt.fullDocument es null/undefined


// ============================================
// PASO 4: Filtrar solo eventos insert con pipeline
// ============================================

// Terminal A — Abrir stream con filtro en el pipeline
// const pipeline = [
//   { $match: { operationType: "insert" } }
// ]
// const csFiltered = db.notifications.watch(pipeline)
// print("Stream con filtro — solo recibirá eventos insert")

// // Terminal B: primero haz un updateOne — NO debería aparecer aquí
// // Terminal B: luego haz un insertOne — SÍ debería aparecer aquí

// const evtFiltered = csFiltered.next()
// printjson(evtFiltered)
// // Confirma: evtFiltered.operationType === "insert"
