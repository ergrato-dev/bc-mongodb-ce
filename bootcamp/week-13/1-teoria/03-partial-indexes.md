# Índices Parciales — Indexar Solo un Subconjunto

## Objetivos

- Crear índices parciales con `partialFilterExpression`
- Entender cuándo usar un índice parcial en lugar de uno completo
- Comparar índices parciales con índices sparse

## Diagrama

![Índices Parciales](../0-assets/03-partial-indexes.svg)

## 1. ¿Qué es un índice parcial?

Un índice parcial **solo indexa los documentos que cumplen una condición**.
Esto reduce el tamaño del índice y mejora el rendimiento de escritura:

```js
// Solo indexar órdenes completadas (no las canceladas o pendientes)
db.orders.createIndex(
  { customerId: 1, orderDate: -1 },
  {
    partialFilterExpression: {
      status: { $eq: "completed" }
    }
  }
)
```

> ⚠️ Para que MongoDB use este índice, la query **debe incluir la condición del filtro**:

```js
// ✅ Usa el índice parcial — incluye status: "completed"
db.orders.find({ status: "completed", customerId: "cust-01" })

// ❌ NO usa el índice — no filtra por status
db.orders.find({ customerId: "cust-01" })
```

## 2. Operadores permitidos en `partialFilterExpression`

- `$eq`, `$gt`, `$gte`, `$lt`, `$lte`
- `$exists`
- `$and` (a nivel raíz)
- `$type`

```js
// Indexar solo usuarios activos con email registrado
db.users.createIndex(
  { email: 1 },
  {
    partialFilterExpression: {
      isActive: { $eq: true },
      email: { $exists: true }
    }
  }
)
```

## 3. Índice Parcial vs. Sparse

| Aspecto | Parcial | Sparse |
|---|---|---|
| Condición | Expresión flexible | Solo omite docs sin el campo |
| Control | Total | Limitado |
| Recomendado | Sí (más versátil) | Solo casos muy simples |

```js
// Sparse: omite documentos sin el campo "phone"
db.users.createIndex({ phone: 1 }, { sparse: true })

// Parcial equivalente (más explícito):
db.users.createIndex(
  { phone: 1 },
  { partialFilterExpression: { phone: { $exists: true } } }
)
```

## Checklist

- ¿Por qué una query sin la condición del filtro no usa el índice parcial?
- ¿Qué ventaja tiene un índice parcial sobre un índice completo en términos de tamaño?
- ¿Puedes usar `$or` en `partialFilterExpression`?
- ¿Cuándo usarías sparse en lugar de parcial?

## Referencias

- [Partial Indexes — MongoDB Docs](https://www.mongodb.com/docs/manual/core/index-partial/)
- [Sparse Indexes — MongoDB Docs](https://www.mongodb.com/docs/manual/core/index-sparse/)
