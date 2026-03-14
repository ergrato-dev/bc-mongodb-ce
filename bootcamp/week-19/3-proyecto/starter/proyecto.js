// ============================================
// Semana 19: Change Streams — Proyecto Semanal
// ============================================
// NOTA PARA EL APRENDIZ:
// Adapta todos los nombres de colecciones y campos a tu dominio asignado.
// Los TODOs son los requisitos mínimos que debes implementar.
//
// Dominio ejemplo: Acuario — exhibit_events
// Tu dominio: reemplaza exhibit_events con tu colección principal

// ============================================
// TODO 1: Abrir stream y capturar los tres tipos de eventos básicos
// ============================================
// Abre un Change Stream sobre tu colección principal (Terminal A).
// Genera desde Terminal B:
//   - Un insertOne con priority:"normal"
//   - Un updateOne cambiando resolved:true en un documento existente
//   - Un deleteOne eliminando un documento
// Usa cs.next() para capturar y mostrar cada evento.
// Verifica que operationType sea correcto en cada caso.

// TODO: Implementar apertura del stream
// const cs = db.<tu_coleccion>.watch()

// TODO: Capturar y mostrar al menos 3 eventos (insert, update, delete)
// const evt1 = cs.next()
// printjson(evt1)


// ============================================
// TODO 2: Filtrar eventos de alta prioridad
// ============================================
// Abre un Change Stream con:
//   - Pipeline $match en fullDocument.priority === "critical"
//   - Opción fullDocument:"updateLookup"
// Desde Terminal B:
//   - Inserta o actualiza un documento con priority:"normal" — NO debe llegar
//   - Inserta o actualiza un documento con priority:"critical" — SÍ debe llegar
// Verifica que solo los eventos critical sean recibidos.

// TODO: Definir el pipeline para filtrar por alta prioridad
// const priorityPipeline = [
//   {
//     $match: {
//       // TODO: condición para priority:"critical"
//     }
//   }
// ]

// TODO: Abrir el stream con el pipeline y fullDocument:"updateLookup"
// const csHigh = db.<tu_coleccion>.watch(priorityPipeline, { fullDocument: "updateLookup" })
// const evtHigh = csHigh.next()
// printjson(evtHigh)


// ============================================
// TODO 3: Persistir el resume token en colección resume_tokens
// ============================================
// Abre un Change Stream, captura un evento y guarda su token en la
// colección resume_tokens con la siguiente estructura:
//   { streamName: "<nombre>", token: evt._id, savedAt: new Date() }
// Usa updateOne + upsert:true para que funcione en reintentos.

// TODO: Abrir stream, capturar evento y persistir token
// const cs3 = db.<tu_coleccion>.watch()
// const evtForToken = cs3.next()

// TODO: Guardar el token en resume_tokens
// db.resume_tokens.updateOne(
//   { streamName: "<nombre_de_tu_stream>" },
//   { $set: { token: evtForToken._id, savedAt: new Date() } },
//   { upsert: true }
// )
// print("Token persistido en resume_tokens")
// db.resume_tokens.findOne({ streamName: "<nombre_de_tu_stream>" })


// ============================================
// TODO 4: Simular reinicio — leer token y reanudar con resumeAfter
// ============================================
// 1. Lee el token persistido de resume_tokens
// 2. Abre un nuevo Change Stream con { resumeAfter: token }
// 3. Genera un evento desde Terminal B
// 4. Verifica que el evento sea recibido después del punto de reanudación

// TODO: Leer token de resume_tokens
// const tokenDoc = db.resume_tokens.findOne({ streamName: "<nombre_de_tu_stream>" })
// print("Token leído de la base de datos:")
// printjson(tokenDoc.token)

// TODO: Reanudar el stream con el token
// const csResumed = db.<tu_coleccion>.watch([], {
//   resumeAfter: tokenDoc.token
// })
// print("Stream reanudado — genera un evento en Terminal B")

// TODO: Capturar el evento posterior al token
// const evtResumed = csResumed.next()
// printjson(evtResumed)
// print("Reanudación exitosa — evento recibido después del token guardado")
