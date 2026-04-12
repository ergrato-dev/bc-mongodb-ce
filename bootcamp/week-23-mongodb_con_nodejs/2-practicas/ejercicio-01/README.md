# Ejercicio 01 — Conexión y CRUD básico con Node.js

## Prerequisitos

```bash
# Desde bootcamp/week-23-mongodb_con_nodejs/
npm install
```

## Cómo ejecutar

1. Levanta Docker y carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < 2-practicas/ejercicio-01/starter/setup.js
   ```
2. Ejecuta el script de Node.js:
   ```bash
   node 2-practicas/ejercicio-01/starter/ejercicio.js
   ```

---

## Pasos del Ejercicio

### Paso 1: Conexión y conteo

Para conectarte a MongoDB desde Node.js, creas una instancia de `MongoClient` con el URI y llamas `await client.connect()`. Luego obtienes la BD y la colección:

```js
const client = new MongoClient(uri)
try {
  await client.connect()
  const col = client.db("bootcamp_db").collection("products")
  const total = await col.countDocuments()
  console.log("Total productos:", total)
} finally {
  await client.close()
}
```

**Abre `starter/ejercicio.js`** y descomenta `paso1_contar()`.

---

### Paso 2: findOne con filtro

`findOne()` retorna el primer documento que coincide con el filtro, o `null` si no hay:

```js
const producto = await col.findOne({ sku: "PROD-001" })
console.log(producto?.name)
```

**Descomenta `paso2_findOne()`.**

---

### Paso 3: insertOne

`insertOne()` retorna `{ acknowledged, insertedId }`. El `insertedId` es el `ObjectId` del documento recién insertado:

```js
const result = await col.insertOne({ sku: "PROD-005", name: "...", ... })
console.log("ID insertado:", result.insertedId)
```

**Descomenta `paso3_insertOne()`.**

---

### Paso 4: updateOne y deleteOne

`updateOne()` modifica el primer documento que coincida. `deleteOne()` elimina el primero:

```js
const updated = await col.updateOne({ sku: "PROD-005" }, { $set: { price: 69.99 } })
console.log("Modificados:", updated.modifiedCount)

const deleted = await col.deleteOne({ sku: "PROD-004" })
console.log("Eliminados:", deleted.deletedCount)
```

**Descomenta `paso4_updateDelete()`.**
