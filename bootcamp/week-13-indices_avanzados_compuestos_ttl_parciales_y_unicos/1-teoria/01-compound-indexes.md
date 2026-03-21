# Índices Compuestos y la Regla ESR

## Objetivos

- Crear índices compuestos con múltiples campos
- Aplicar la regla ESR (Equality → Sort → Range) para ordenar los campos
- Verificar el uso del índice con `explain()`

## Diagrama

![Índices Compuestos ESR](../0-assets/01-compound-indexes.svg)

## 1. ¿Qué es un índice compuesto?

Un índice compuesto indexa **dos o más campos** de una colección. El orden de
los campos en el índice determina qué queries puede satisfacer:

```js
// Índice compuesto en status y city
db.orders.createIndex({ status: 1, city: 1 })

// Esta query usa el índice completo:
db.orders.find({ status: "active", city: "Bogotá" })

// Esta query usa solo el prefijo (status):
db.orders.find({ status: "active" })

// Esta query NO puede usar el índice (city sin status):
db.orders.find({ city: "Bogotá" })
```

MongoDB usa el índice solo si la query comienza por el prefijo izquierdo.

## 2. La regla ESR

Para máxima eficiencia, ordena los campos del índice así:

1. **E — Equality** (igualdad) primero: `{ field: "valor" }`
2. **S — Sort** (ordenamiento) en el medio: `.sort({ field: 1 })`
3. **R — Range** (rango) al final: `{ field: { $gt: 50 } }`

```js
// Query: orders activas (E), ordenadas por date (S), price > 100 (R)
db.orders.find(
  { status: "completed", price: { $gt: 100 } }
).sort({ orderDate: -1 })

// Índice ESR correcto:
db.orders.createIndex({ status: 1, orderDate: -1, price: 1 })
//                         E (equal)  S (sort)     R (range)
```

## 3. Dirección del índice y sort

La dirección del índice importa cuando hay `sort()` con múltiples campos:

```js
// Para esta query de sort compuesto:
db.orders.find().sort({ status: 1, price: -1 })

// Este índice lo satisface (mismas direcciones):
db.orders.createIndex({ status: 1, price: -1 })

// Este índice NO lo satisface (inversión parcial):
db.orders.createIndex({ status: 1, price: 1 })
```

## 4. Verificar con `explain()`

```js
// Verificar que se usa el índice (IXSCAN, no COLLSCAN)
db.orders.find(
  { status: "completed", price: { $gt: 100 } }
).sort({ orderDate: -1 }).explain("executionStats")
// Busca: winningPlan.stage === "IXSCAN"
```

## Checklist

- ¿Qué significa "prefijo del índice" en un índice compuesto?
- ¿Por qué E (equality) va primero en la regla ESR?
- ¿Qué verifica `explain("executionStats")` respecto al índice usado?
- ¿Cuándo el orden de dirección `1` vs `-1` importa en el índice?

## Referencias

- [Compound Indexes — MongoDB Docs](https://www.mongodb.com/docs/manual/core/index-compound/)
- [ESR Rule — MongoDB Docs](https://www.mongodb.com/docs/manual/tutorial/equality-sort-range-rule/)
