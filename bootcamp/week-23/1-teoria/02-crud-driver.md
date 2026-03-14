# 02. CRUD con el Driver Node.js

> **Semana 23 · Etapa 2 · MongoDB 7.0**
> Referencia visual: `../0-assets/02-async-await-methods.svg`

## Objetivos

- Ejecutar las cuatro operaciones CRUD desde Node.js
- Interpretar los objetos de resultado de cada operación
- Usar proyecciones y opciones en `find()`

---

## 1. Insert

```js
// Insertar un documento
const result = await collection.insertOne({
  title: "Guía de Node.js",
  author: "Dev Team",
  price: 29.99,
  createdAt: new Date()
})
console.log("ID insertado:", result.insertedId)

// Insertar múltiples documentos
const manyResult = await collection.insertMany([
  { title: "MongoDB Basics", price: 19.99 },
  { title: "Advanced MongoDB", price: 39.99 }
])
console.log("IDs insertados:", manyResult.insertedIds)
```

---

## 2. Read

```js
// Encontrar un documento
const doc = await collection.findOne({ title: "Guía de Node.js" })
console.log(doc)   // null si no existe

// Encontrar múltiples con filtro y proyección
const docs = await collection
  .find({ price: { $lt: 30 } }, { projection: { title: 1, price: 1, _id: 0 } })
  .sort({ price: 1 })
  .limit(10)
  .toArray()
console.log(docs)
```

---

## 3. Update

```js
// Actualizar un documento
const updated = await collection.updateOne(
  { title: "Guía de Node.js" },
  { $set: { price: 24.99, updatedAt: new Date() } }
)
console.log("Modificados:", updated.modifiedCount)

// Actualizar múltiples documentos
const manyUpdated = await collection.updateMany(
  { price: { $gt: 30 } },
  { $inc: { price: -5 } }
)
console.log("Documentos actualizados:", manyUpdated.modifiedCount)
```

---

## 4. Delete

```js
// Eliminar un documento
const deleted = await collection.deleteOne({ title: "MongoDB Basics" })
console.log("Eliminados:", deleted.deletedCount)
```

---

## Checklist

- [ ] ¿Qué propiedad del resultado de `insertOne()` contiene el `_id` generado?
- [ ] ¿Por qué hay que llamar `.toArray()` en `find()`?
- [ ] ¿Qué diferencia hay entre `updateOne()` y `updateMany()`?
- [ ] ¿Qué devuelve `findOne()` si no hay coincidencias?

## Referencias

- [Collection Methods — Node.js Driver](https://www.mongodb.com/docs/drivers/node/current/usage-examples/)
