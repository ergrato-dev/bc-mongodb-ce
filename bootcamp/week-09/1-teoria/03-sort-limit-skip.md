# 03 — $sort, $limit y $skip

## Objetivos

- Ordenar resultados de un pipeline con `$sort`
- Paginar resultados con `$limit` y `$skip`
- Combinar las tres etapas para resultados controlados

## 1. $sort — Ordenar resultados

`$sort` ordena los documentos. `1` = ascendente, `-1` = descendente:

```js
// Productos más caros primero
db.products.aggregate([
  { $match: { isActive: true } },
  { $sort: { price: -1 } }
])
```

Puedes ordenar por múltiples campos:

```js
db.products.aggregate([
  { $sort: { category: 1, price: -1 } }
])
```

## 2. $limit — Limitar resultados

```js
// Los 5 productos más baratos
db.products.aggregate([
  { $match: { isActive: true } },
  { $sort: { price: 1 } },
  { $limit: 5 }
])
```

## 3. $skip — Saltar documentos (paginación)

`$skip` descarta los primeros N documentos. Combinado con `$limit`
implementa paginación:

```js
// Página 2 con 5 elementos por página
db.products.aggregate([
  { $sort: { name: 1 } },
  { $skip: 5 },
  { $limit: 5 }
])
```

## 4. Orden recomendado en el pipeline

```
$match → $sort → $skip → $limit
```

Filtrar primero reduce el trabajo de las etapas siguientes.

```js
db.products.aggregate([
  { $match: { category: "electronics" } },
  { $sort: { price: -1 } },
  { $skip: 0 },
  { $limit: 10 }
])
```

## Checklist

- [ ] ¿Qué valor usas en `$sort` para orden descendente?
- [ ] ¿`$skip: 10` con `$limit: 5` da la página 3? ¿Por qué?
- [ ] ¿Es mejor poner `$match` antes o después de `$sort`?
- [ ] ¿Qué problema tiene `$skip` con colecciones muy grandes?

## Referencias

- [$sort — MongoDB Docs](https://www.mongodb.com/docs/manual/reference/operator/aggregation/sort/)
- [$limit — MongoDB Docs](https://www.mongodb.com/docs/manual/reference/operator/aggregation/limit/)
- [$skip — MongoDB Docs](https://www.mongodb.com/docs/manual/reference/operator/aggregation/skip/)
