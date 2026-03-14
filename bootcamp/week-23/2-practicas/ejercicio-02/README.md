# Ejercicio 02 — find, insertMany, aggregate y updateMany

## Prerequisitos

```bash
# Desde bootcamp/week-23/
npm install
```

## Cómo ejecutar

1. Levanta Docker y carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < 2-practicas/ejercicio-02/starter/setup.js
   ```
2. Ejecuta el script:
   ```bash
   node 2-practicas/ejercicio-02/starter/ejercicio.js
   ```

---

## Pasos del Ejercicio

### Paso 1: find() con proyección, sort y toArray()

`find()` retorna un `Cursor`. Para obtener un array de resultados encadena `.toArray()`. Combina `.project()` y `.sort()` antes de resolverlo:

```js
const ordenes = await col
  .find({ status: "pending" })
  .project({ orderId: 1, total: 1, _id: 0 })
  .sort({ total: -1 })
  .toArray()
```

**Abre `starter/ejercicio.js`** y descomenta `paso1_findPendientes()`.

---

### Paso 2: insertMany()

`insertMany()` recibe un array de documentos y retorna `{ insertedCount, insertedIds }`:

```js
const result = await col.insertMany([{ ... }, { ... }])
console.log(result.insertedCount, result.insertedIds)
```

**Descomenta `paso2_insertMany()`.**

---

### Paso 3: aggregate()

`aggregate()` recibe el pipeline como array. Retorna un `AggregationCursor`; llama `.toArray()` para resolverlo:

```js
const resultados = await col.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } }
]).toArray()
```

**Descomenta `paso3_aggregate()`.**

---

### Paso 4: updateMany()

`updateMany()` modifica todos los documentos que coincidan con el filtro y retorna `{ matchedCount, modifiedCount }`:

```js
const hace7Dias = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
const result = await col.updateMany(
  { status: "pending", createdAt: { $lt: hace7Dias } },
  { $set: { status: "expired" } }
)
console.log("Actualizados:", result.modifiedCount)
```

**Descomenta `paso4_updateMany()`.**
