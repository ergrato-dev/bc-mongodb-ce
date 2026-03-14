// ============================================
// Semana 19: Change Streams — Ejercicio 02
// Solución: fullDocument, pipeline filter y resume token
// ============================================

// ============================================
// PASO 1: fullDocument:"updateLookup" en eventos update
// ============================================

const cs = db.sensors.watch([], { fullDocument: "updateLookup" })
print("Stream con fullDocument:updateLookup — ejecuta en Terminal B:")
print("  db.sensors.updateOne({ sensorId:'sen-001' }, { $set: { value: 35.2, severity: 'warning', recordedAt: new Date() } })")

const evtUpdate = cs.next()
printjson(evtUpdate)
// fullDocument contiene el estado completo del documento tras el update
// updateDescription.updatedFields muestra solo los campos modificados


// ============================================
// PASO 2: Filtrar eventos por campo de fullDocument
// ============================================

const pipelineSeverity = [
  {
    $match: {
      $or: [
        {
          operationType: { $in: ["insert", "replace"] },
          "fullDocument.severity": "critical"
        },
        {
          operationType: "update",
          "fullDocument.severity": "critical"
        }
      ]
    }
  }
]
const csFiltered = db.sensors.watch(pipelineSeverity, { fullDocument: "updateLookup" })
print("Stream filtrado — solo severity:critical. Genera en Terminal B:")
print("  1. db.sensors.insertOne({ sensorId:'sen-005', ..., severity:'normal', ... })")
print("  2. db.sensors.insertOne({ sensorId:'sen-006', ..., severity:'critical', ... })")

const evtCritical = csFiltered.next()
printjson(evtCritical)
// Solo el documento con severity:"critical" llega al stream


// ============================================
// PASO 3: Guardar resume token y reanudar stream
// ============================================

const cs3 = db.sensors.watch()
print("Genera un insertOne en Terminal B para capturar el token:")
print("  db.sensors.insertOne({ sensorId:'sen-007', type:'temperature', location:'rack-D', value:30.0, unit:'celsius', severity:'normal', recordedAt: new Date() })")

const evtToken = cs3.next()
const savedToken = evtToken._id
print("Token guardado:")
printjson(savedToken)

cs3.close()
print("Stream cerrado")

// Reanudar — recibirá el evento SIGUIENTE al token
const csResumed = db.sensors.watch([], { resumeAfter: savedToken })
print("Stream reanudado — genera otro evento en Terminal B:")
print("  db.sensors.insertOne({ sensorId:'sen-008', type:'humidity', location:'rack-D', value:60.0, unit:'percent', severity:'warning', recordedAt: new Date() })")

const evtAfterResume = csResumed.next()
printjson(evtAfterResume)
// Este es el evento que ocurrió DESPUÉS del token guardado


// ============================================
// PASO 4: Persistir token en colección stream_tokens
// ============================================

const cs4 = db.sensors.watch()
print("Abre Terminal B y genera un evento. El token se persistirá automáticamente.")

const evtPersist = cs4.next()

db.stream_tokens.updateOne(
  { streamName: "sensors_stream" },
  {
    $set: {
      token: evtPersist._id,
      savedAt: new Date()
    }
  },
  { upsert: true }
)
print("Token persistido en stream_tokens")

// Simular reinicio: leer token de la base de datos
const tokenDoc = db.stream_tokens.findOne({ streamName: "sensors_stream" })
print("Token recuperado:")
printjson(tokenDoc.token)

const csRestart = db.sensors.watch([], {
  resumeAfter: tokenDoc.token
})
print("Stream reanudado desde token persistido — reinicio simulado exitoso")
