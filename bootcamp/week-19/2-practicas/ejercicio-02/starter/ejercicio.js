// ============================================
// Semana 19: Change Streams — Ejercicio 02
// fullDocument en updates, pipeline filter y resume token
// ============================================

// ============================================
// PASO 1: fullDocument:"updateLookup" en eventos update
// ============================================

// Terminal A — Abre stream con fullDocument:"updateLookup"
// const cs = db.sensors.watch([], { fullDocument: "updateLookup" })
// print("Stream con fullDocument:updateLookup — esperando update...")

// const evtUpdate = cs.next()
// printjson(evtUpdate)
// // Observa: evtUpdate.fullDocument contiene el documento completo DESPUÉS del update
// // (MongoDB hace un lookup al momento de crear el evento)
// // Observa: evtUpdate.updateDescription.updatedFields también está presente

// Terminal B — Genera el update:
// db.sensors.updateOne(
//   { sensorId: "sen-001" },
//   { $set: { value: 35.2, severity: "warning", recordedAt: new Date() } }
// )


// ============================================
// PASO 2: Filtrar eventos por campo de fullDocument
// ============================================

// Terminal A — Solo recibe eventos con severity:"critical"
// const pipelineSeverity = [
//   {
//     $match: {
//       $or: [
//         {
//           operationType: { $in: ["insert", "replace"] },
//           "fullDocument.severity": "critical"
//         },
//         {
//           operationType: "update",
//           "fullDocument.severity": "critical"
//         }
//       ]
//     }
//   }
// ]
// const csFiltered = db.sensors.watch(pipelineSeverity, { fullDocument: "updateLookup" })
// print("Stream filtrado — solo severity:critical")

// Terminal B — primero inserta normal (no llegará), luego critical (sí llegará)
// db.sensors.insertOne({ sensorId:"sen-005", type:"voltage", location:"rack-C", value:110.5, unit:"volt", severity:"normal", recordedAt:new Date() })
// // Ahora inserta uno critical:
// db.sensors.insertOne({ sensorId:"sen-006", type:"temperature", location:"rack-C", value:55.0, unit:"celsius", severity:"critical", recordedAt:new Date() })

// const evtCritical = csFiltered.next()
// printjson(evtCritical)
// // Confirma: evtCritical.fullDocument.severity === "critical"


// ============================================
// PASO 3: Guardar resume token y reanudar stream
// ============================================

// Terminal A — Captura un evento y guarda su token
// const cs3 = db.sensors.watch()
// print("Genera un insertOne en Terminal B para capturar el token")

// const evtToken = cs3.next()
// const savedToken = evtToken._id
// print("Token guardado:")
// printjson(savedToken)

// // Cerrar el stream
// cs3.close()
// print("Stream cerrado")

// // Reanudar desde el token guardado
// const csResumed = db.sensors.watch([], { resumeAfter: savedToken })
// print("Stream reanudado — genera otro evento en Terminal B")

// const evtAfterResume = csResumed.next()
// printjson(evtAfterResume)
// // El siguiente evento viene justo DESPUÉS del evento donde guardamos el token


// ============================================
// PASO 4: Persistir token en colección stream_tokens
// ============================================

// Terminal A — Persistir el token en MongoDB
// const cs4 = db.sensors.watch()

// const evtPersist = cs4.next()

// // Guardar el token en la colección stream_tokens
// db.stream_tokens.updateOne(
//   { streamName: "sensors_stream" },
//   {
//     $set: {
//       token: evtPersist._id,
//       savedAt: new Date()
//     }
//   },
//   { upsert: true }
// )
// print("Token persistido en stream_tokens")

// // Simular reinicio — leer token persistido
// const tokenDoc = db.stream_tokens.findOne({ streamName: "sensors_stream" })
// print("Token recuperado de base de datos:")
// printjson(tokenDoc.token)

// // Reanudar desde el token persistido
// const csRestart = db.sensors.watch([], { resumeAfter: tokenDoc.token })
// print("Stream reanudado después de reinicio simulado")
