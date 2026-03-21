# Pipeline Filtering — Filtros en Change Streams

## Objetivos
1. Aplicar etapas de aggregation para filtrar eventos
2. Filtrar por `operationType`, campos de `fullDocument` y `updateDescription`
3. Conocer las etapas permitidas dentro de un pipeline de watch()
4. Reducir la carga en la aplicación recibiendo solo eventos relevantes

---

## 1. Etapas permitidas en watch()

Solo un subconjunto de etapas de aggregation es válido dentro del pipeline de `watch()`:

| Etapa permitida | Uso principal |
|---|---|
| `$match` | Filtrar eventos por cualquier campo |
| `$project` | Seleccionar / renombrar campos del evento |
| `$addFields` | Agregar campos calculados al evento |
| `$replaceRoot` | Reestructurar el documento del evento |
| `$replaceWith` | Alias de `$replaceRoot` |

> Las etapas como `$group`, `$lookup`, `$sort` **no** están permitidas en pipelines de Change Streams.

## 2. Filtrar por operationType

```js
// Solo recibe eventos de tipo insert
const cs = db.orders.watch([
  { $match: { operationType: "insert" } }
])

// Solo inserts y updates
const cs2 = db.orders.watch([
  { $match: { operationType: { $in: ["insert", "update"] } } }
])
```

## 3. Filtrar por campos de fullDocument

Requiere que el documento esté disponible. Para updates, activar `fullDocument: "updateLookup"`:

```js
// Solo documentos con status "critical" (insert o replace)
const cs = db.alerts.watch([
  { $match: { "fullDocument.severity": "critical" } }
])

// Combinar: insert + campo específico
const cs2 = db.orders.watch([
  {
    $match: {
      operationType: "insert",
      "fullDocument.totalAmount": { $gte: 1000 }
    }
  }
])
```

## 4. Filtrar eventos update con updateDescription

Para updates sin `fullDocument: "updateLookup"`, filtrar sobre los campos modificados:

```js
// Detectar cuando el campo "status" fue actualizado
const cs = db.orders.watch([
  {
    $match: {
      operationType: "update",
      "updateDescription.updatedFields.status": { $exists: true }
    }
  }
])
```

## 5. Proyectar campos del evento

```js
// Recibir solo operationType y el _id del documento afectado
const cs = db.orders.watch([
  {
    $project: {
      operationType: 1,
      "documentKey._id": 1,
      "fullDocument.status": 1
    }
  }
])
```

## Checklist
- ¿Es `$group` válido dentro de un pipeline de `watch()`?
- ¿Qué opción debes activar para filtrar por campos de `fullDocument` en eventos update?
- ¿Cómo filtrarías solo updates que modifiquen el campo `status`?
- ¿Para qué sirve `$project` dentro de un pipeline de Change Stream?

## Referencias
- [Modify Change Stream Output](https://www.mongodb.com/docs/manual/changeStreams/#modify-change-stream-output)
- [Aggregation Pipeline Stages (Change Streams)](https://www.mongodb.com/docs/manual/reference/aggregation-pipeline-quick-reference/)
