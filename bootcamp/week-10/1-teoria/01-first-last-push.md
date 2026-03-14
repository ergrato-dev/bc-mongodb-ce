# 01 — $first, $last, $push y $addToSet

## Objetivos

- Obtener el primer y último valor de un grupo con `$first` y `$last`
- Recopilar valores en un array con `$push`
- Recopilar valores únicos con `$addToSet`

## Diagrama

![Acumuladores](../0-assets/01-accumulators.svg)

## 1. $first y $last

Obtienen el primer o último valor del campo en el grupo,
según el orden en que los documentos llegan a `$group`:

```js
// Primera y última venta por vendedor
db.sales.aggregate([
  { $sort: { saleDate: 1 } },
  {
    $group: {
      _id: "$salesperson",
      firstSale: { $first: "$product" },
      lastSale: { $last: "$product" },
      totalSales: { $sum: 1 }
    }
  }
])
```

> Para que `$first`/`$last` sean deterministas, ordena con `$sort` antes.

## 2. $push — Recopila todos los valores

`$push` agrega cada valor al array del grupo (incluyendo duplicados):

```js
// Lista de todos los productos vendidos por ciudad
db.sales.aggregate([
  {
    $group: {
      _id: "$city",
      products: { $push: "$product" }
    }
  }
])
```

## 3. $addToSet — Valores únicos

`$addToSet` es igual que `$push` pero elimina duplicados:

```js
// Categorías únicas presentadas en cada ciudad
db.sales.aggregate([
  {
    $group: {
      _id: "$city",
      categories: { $addToSet: "$category" }
    }
  }
])
```

## Checklist

- [ ] ¿`$first` y `$last` son deterministas sin un `$sort` previo?
- [ ] ¿Cuál es la diferencia entre `$push` y `$addToSet`?
- [ ] ¿`$push` puede crear arrays de subdocumentos? ¿Cómo?
- [ ] ¿En qué caso usarías `$addToSet` sobre `$push`?

## Referencias

- [$first / $last](https://www.mongodb.com/docs/manual/reference/operator/aggregation/first/)
- [$push / $addToSet](https://www.mongodb.com/docs/manual/reference/operator/aggregation/push/)
