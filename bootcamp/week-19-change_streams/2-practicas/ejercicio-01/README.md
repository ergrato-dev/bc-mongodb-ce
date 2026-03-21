# Ejercicio 01 — Abrir Stream y Capturar Eventos

## Objetivos
- Abrir un Change Stream con `watch()`
- Observar eventos `insert`, `update` y `delete`
- Aplicar un pipeline para filtrar por `operationType`

## Requisitos
- Docker corriendo con replica set (`--replSet rs0`)
- Dos terminales de `mongosh` abiertas

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Abre **Terminal A** (escucha):
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
4. Abre **Terminal B** (escrituras):
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

### Paso 1: Abrir el Change Stream

**Terminal A** — Describe el flujo de eventos de la colección `notifications`:

```js
const cs = db.notifications.watch()
print("Stream abierto — esperando eventos...")
const evt = cs.next()  // bloquea hasta recibir un evento
printjson(evt)
```

**Terminal B** — Genera un evento insert mientras Terminal A espera:

```js
db.notifications.insertOne({
  notificationId: "ntf-new",
  type: "info",
  message: "Evento de prueba",
  userId: "user-103",
  isRead: false,
  createdAt: new Date()
})
```

Observa en Terminal A: `operationType: "insert"` y `fullDocument` con el documento completo.

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 1.

---

### Paso 2: Observar evento update

**Terminal A** — Reabre el stream:

```js
const cs2 = db.notifications.watch()
const evtUpdate = cs2.next()
printjson(evtUpdate)
```

**Terminal B** — Genera un update:

```js
db.notifications.updateOne(
  { notificationId: "ntf-001" },
  { $set: { isRead: true, updatedAt: new Date() } }
)
```

Observa en Terminal A: `operationType: "update"` y `updateDescription.updatedFields` con solo los campos modificados. `fullDocument` NO aparece por defecto.

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 2.

---

### Paso 3: Observar evento delete

**Terminal A**:

```js
const cs3 = db.notifications.watch()
const evtDelete = cs3.next()
printjson(evtDelete)
```

**Terminal B**:

```js
db.notifications.deleteOne({ notificationId: "ntf-003" })
```

Observa en Terminal A: `operationType: "delete"` y solo `documentKey._id`. El documento ya no existe, por eso no hay `fullDocument`.

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 3.

---

### Paso 4: Filtrar solo inserts con pipeline

**Terminal A** — Abre el stream con un filtro:

```js
const pipeline = [
  { $match: { operationType: "insert" } }
]
const csFiltered = db.notifications.watch(pipeline)
const evtFiltered = csFiltered.next()
printjson(evtFiltered)
```

**Terminal B** — Primero haz un `updateOne` (no llegará al stream), luego un `insertOne` (sí llegará):

```js
// Este update NO llegará al stream filtrado
db.notifications.updateOne(
  { notificationId: "ntf-002" },
  { $set: { isRead: true } }
)

// Este insert SÍ llegará
db.notifications.insertOne({
  notificationId: "ntf-filtered",
  type: "alert",
  message: "Alerta crítica",
  userId: "user-104",
  isRead: false,
  createdAt: new Date()
})
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 4.

---

## Verificación

- `evt.operationType` tiene el valor correcto por cada operación
- El evento `update` muestra `updateDescription.updatedFields`, no `fullDocument`
- El evento `delete` solo muestra `documentKey._id`
- El stream filtrado recibe únicamente eventos `insert`
