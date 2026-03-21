# Ejercicio 02 — fullDocument, Pipeline Filter y Resume Token

## Objetivos
- Recibir el documento completo en eventos `update` con `fullDocument: "updateLookup"`
- Filtrar el stream por campos de `fullDocument`
- Guardar y usar un resume token para reanudar el stream
- Persistir el token en una colección para simular recuperación ante fallos

## Requisitos
- Docker corriendo con replica set (`--replSet rs0`)
- Ejercicio 01 completado (misma colección `sensors`)

## Cómo ejecutar

1. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
2. Abre **Terminal A** y **Terminal B** tal como en el Ejercicio 01.

---

### Paso 1: fullDocument en eventos update

Por defecto, los eventos `update` no incluyen `fullDocument`. La opción `fullDocument: "updateLookup"` hace que MongoDB busque y adjunte el documento actualizado.

**Terminal A**:

```js
const cs = db.sensors.watch([], { fullDocument: "updateLookup" })
const evtUpdate = cs.next()
printjson(evtUpdate)
// Observa fullDocument con el estado completo del documento
```

**Terminal B**:

```js
db.sensors.updateOne(
  { sensorId: "sen-001" },
  { $set: { value: 35.2, severity: "warning", recordedAt: new Date() } }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 1.

---

### Paso 2: Filtrar por campo de fullDocument

Combina `fullDocument: "updateLookup"` con un pipeline `$match` para recibir solo eventos de documentos con `severity: "critical"`.

**Terminal A**:

```js
const pipeline = [
  {
    $match: {
      $or: [
        { operationType: { $in: ["insert", "replace"] }, "fullDocument.severity": "critical" },
        { operationType: "update", "fullDocument.severity": "critical" }
      ]
    }
  }
]
const csFiltered = db.sensors.watch(pipeline, { fullDocument: "updateLookup" })
const evtCritical = csFiltered.next()
printjson(evtCritical)
```

**Terminal B** — inserta primero uno `normal` (no llegará), luego uno `critical` (sí llegará):

```js
db.sensors.insertOne({
  sensorId: "sen-005", type: "voltage", location: "rack-C",
  value: 110.5, unit: "volt", severity: "normal", recordedAt: new Date()
})

db.sensors.insertOne({
  sensorId: "sen-006", type: "temperature", location: "rack-C",
  value: 55.0, unit: "celsius", severity: "critical", recordedAt: new Date()
})
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 2.

---

### Paso 3: Guardar y usar resume token

El campo `evt._id` es el resume token. Guárdalo y pásalo a `resumeAfter` para reanudar desde ese punto.

**Terminal A**:

```js
const cs3 = db.sensors.watch()
const evtToken = cs3.next()
const savedToken = evtToken._id
printjson(savedToken)

cs3.close()  // cerrar el stream

// Reanudar — el siguiente evento será DESPUÉS del token
const csResumed = db.sensors.watch([], { resumeAfter: savedToken })
const evtAfterResume = csResumed.next()
printjson(evtAfterResume)
```

**Terminal B** — genera dos inserts: uno antes de guardar el token y otro después de cerrar y reabrir el stream.

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 3.

---

### Paso 4: Persistir token en colección

Guarda el token en `stream_tokens` para simular una recuperación ante un reinicio de la aplicación.

**Terminal A**:

```js
const cs4 = db.sensors.watch()
const evtPersist = cs4.next()

db.stream_tokens.updateOne(
  { streamName: "sensors_stream" },
  { $set: { token: evtPersist._id, savedAt: new Date() } },
  { upsert: true }
)

// Simular reinicio: leer token y reanudar
const tokenDoc = db.stream_tokens.findOne({ streamName: "sensors_stream" })
const csRestart = db.sensors.watch([], { resumeAfter: tokenDoc.token })
print("Stream reanudado desde token persistido")
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 4.

---

## Verificación

- El evento `update` del PASO 1 incluye `fullDocument` con el documento completo
- El stream del PASO 2 recibe el insert `critical` pero no el `normal`
- El PASO 3 reanuda correctamente después del token guardado
- `stream_tokens` contiene un documento con el último token persistido
