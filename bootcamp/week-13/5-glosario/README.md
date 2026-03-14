# Glosario — Semana 13: Índices Avanzados

Términos MongoDB ordenados alfabéticamente.

---

## C

**COLLSCAN** — Collection Scan. El motor de MongoDB recorre todos los documentos
de una colección para encontrar los que coinciden con el filtro. Ineficiente en
colecciones grandes. Aparece en `explain()` cuando no existe un índice adecuado.
```js
// Evitar COLLSCAN creando el índice apropiado
db.orders.createIndex({ status: 1 })
```

**Covered query** — Consulta cubierta. Una query donde todos los campos del filtro
y de la proyección están presentes en el índice. MongoDB responde sin leer documentos
del disco (`totalDocsExamined: 0`). Requiere `_id: 0` en la proyección.
```js
// El índice contiene todos los campos proyectados
db.users.find({ role: "admin" }, { email: 1, role: 1, _id: 0 })
```

---

## E

**ESR** — Equality → Sort → Range. Regla de ordenamiento de campos en un índice
compuesto. Los campos de igualdad van primero, los de ordenamiento en medio,
y los de rango al final. Maximiza la eficiencia del índice.
```js
// E = status | S = orderDate | R = amount
db.orders.createIndex({ status: 1, orderDate: 1, amount: 1 })
```

**`explain()`** — Método que retorna el plan de ejecución de una query.
Con `"executionStats"` muestra `stage`, `keysExamined`, `docsExamined` y tiempo.
```js
db.orders.find({ status: "completed" }).explain("executionStats")
```

**`expireAfterSeconds`** — Opción de índice TTL. Define cuántos segundos después
del valor del campo `Date` se eliminará el documento.
```js
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 1800 })
```

---

## I

**IXSCAN** — Index Scan. El motor usa un índice para encontrar los documentos.
Indica que la query está optimizada. Aparece en `explain()` en el campo `stage`.

---

## P

**Partial index** — Índice parcial. Solo indexa documentos que cumplen
una condición definida en `partialFilterExpression`. Ocupa menos espacio
que un índice normal. La query debe incluir la condición del filtro.
```js
db.users.createIndex(
  { role: 1 },
  { partialFilterExpression: { isActive: { $eq: true } } }
)
```

**`partialFilterExpression`** — Opción en `createIndex()` que define la condición
para el índice parcial. Acepta `$eq`, `$exists`, `$type`, `$and`, `$gt`, `$gte`,
`$lt`, `$lte`.

**Prefijo del índice** — Subconjunto inicial de campos de un índice compuesto.
Un índice `{ a:1, b:1, c:1 }` puede ser usado por queries que filtren `a`,
`a+b` o `a+b+c`, pero NO solo `b` o `c`.

---

## S

**Sparse index** — Índice sparse. Solo indexa documentos donde el campo indexado
existe. A diferencia del parcial, no permite definir condiciones por valor.
```js
db.users.createIndex({ phone: 1 }, { sparse: true })
```

---

## T

**TTL** — Time To Live. Índice especial que elimina documentos automáticamente
cuando el campo `Date` indexado supera el tiempo definido en `expireAfterSeconds`.
El proceso de limpieza corre cada ~60 segundos en el servidor.

---

## U

**Unique index** — Índice único. Garantiza que no existan dos documentos con el
mismo valor en el campo indexado. Lanza `E11000 duplicate key error` al intentar
insertar un duplicado.
```js
db.users.createIndex({ email: 1 }, { unique: true })
```
