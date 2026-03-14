# Operation Types — Tipos de Eventos

## Objetivos
1. Conocer todos los `operationType` posibles en un Change Stream
2. Distinguir los campos disponibles por tipo de operación
3. Interpretar `updateDescription` en eventos de tipo `update`
4. Entender el evento `invalidate` y cuándo ocurre

---

## 1. Tabla de operationTypes

| operationType | Cuándo ocurre | fullDocument disponible |
|---|---|---|
| `insert` | `insertOne()` / `insertMany()` | Sí — documento completo |
| `update` | `updateOne()` / `updateMany()` | Solo con `fullDocument: "updateLookup"` |
| `replace` | `replaceOne()` | Sí — documento nuevo completo |
| `delete` | `deleteOne()` / `deleteMany()` | No — solo `documentKey._id` |
| `drop` | `db.collection.drop()` | No |
| `rename` | `renameCollection()` | No |
| `dropDatabase` | `db.dropDatabase()` | No |
| `invalidate` | Después de drop/rename/dropDatabase | No — cierra el stream |

## 2. Evento insert

```js
{
  operationType: "insert",
  fullDocument: { _id: ObjectId(), status: "pending", amount: 300 },
  documentKey: { _id: ObjectId() }
}
```

## 3. Evento update — updateDescription

Por defecto, `update` no incluye `fullDocument`. Incluye solo el diff:

```js
{
  operationType: "update",
  documentKey: { _id: ObjectId("...") },
  updateDescription: {
    updatedFields: { status: "completed", updatedAt: ISODate("...") },
    removedFields: [],
    truncatedArrays: []
  }
}
```

Para recibir el documento completo en eventos update:

```js
const cs = db.orders.watch([], {
  fullDocument: "updateLookup"   // busca y adjunta el doc actualizado
})
```

## 4. Evento delete

Solo contiene el `_id` del documento eliminado:

```js
{
  operationType: "delete",
  documentKey: { _id: ObjectId("...") }
  // fullDocument ya no existe — fue eliminado
}
```

## 5. Evento invalidate

Ocurre cuando la fuente del stream desaparece (drop, rename, dropDatabase).
Después de `invalidate`, el cursor se cierra automáticamente.

```js
{
  operationType: "invalidate",
  _id: { ... },    // último resumeToken válido
}
// El stream se cierra — no se pueden recibir más eventos
```

## Checklist
- ¿Qué opción activa `fullDocument` en eventos de tipo update?
- ¿Qué campo de un evento update describe solo los campos modificados?
- ¿Qué ocurre al stream después de recibir `invalidate`?
- ¿Qué `operationType` incluye el documento completo por defecto?

## Referencias
- [Change Events — operationType](https://www.mongodb.com/docs/manual/reference/change-events/)
- [fullDocument Option](https://www.mongodb.com/docs/manual/reference/change-events/#std-label-change-stream-output)
