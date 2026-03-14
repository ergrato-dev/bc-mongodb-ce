# 03 — $cond e $ifNull

## Objetivos

- Agregar lógica condicional en pipelines con `$cond`
- Manejar campos con valores nulos o faltantes con `$ifNull`
- Crear campos derivados basados en condiciones de negocio

## 1. $cond — Condicional ternario

`$cond` evalúa una condición y retorna uno de dos valores (como `if/else`):

```js
// Etiqueta de precio: "expensive" si > 500, "affordable" si no
db.sales.aggregate([
  {
    $addFields: {
      priceLabel: {
        $cond: {
          if: { $gt: [{ $toDouble: "$amount" }, 500] },
          then: "expensive",
          else: "affordable"
        }
      }
    }
  },
  { $project: { product: 1, amount: 1, priceLabel: 1, _id: 0 } }
])
```

También acepta la forma abreviada: `{ $cond: [condición, "then", "else"] }`.

## 2. $ifNull — Valor por defecto

`$ifNull` retorna el valor del campo si existe, y un valor alternativo si
el campo es `null` o no existe:

```js
// Si "category" no existe, usa "uncategorized"
db.items.aggregate([
  {
    $addFields: {
      safeCategory: { $ifNull: ["$category", "uncategorized"] }
    }
  }
])
```

## 3. Combinar $cond con $group

```js
// Cuenta ventas "high" (amount > 500) y "low" por ciudad
db.sales.aggregate([
  {
    $group: {
      _id: "$city",
      highValueSales: {
        $sum: {
          $cond: [{ $gt: [{ $toDouble: "$amount" }, 500] }, 1, 0]
        }
      },
      lowValueSales: {
        $sum: {
          $cond: [{ $lte: [{ $toDouble: "$amount" }, 500] }, 1, 0]
        }
      }
    }
  }
])
```

## Checklist

- [ ] ¿`$cond` necesita tres partes: condición, then, else?
- [ ] ¿`$ifNull` maneja tanto `null` como campos inexistentes?
- [ ] ¿Cómo cuentas condicionalmente dentro de `$group`?
- [ ] ¿Puedes anidar dos `$cond` para múltiples condiciones?

## Referencias

- [$cond — MongoDB Docs](https://www.mongodb.com/docs/manual/reference/operator/aggregation/cond/)
- [$ifNull — MongoDB Docs](https://www.mongodb.com/docs/manual/reference/operator/aggregation/ifNull/)
