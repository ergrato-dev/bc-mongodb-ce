# Semana 04 · 02 — `$not` y `$nor`

## Objetivos

- Usar `$not` para negar cualquier condición de operador
- Usar `$nor` para excluir documentos que cumplan cualquiera de varias condiciones
- Distinguir `$not` de `$ne` y `$nor` de `$nin`

> Ver diagrama: [02-not-nor.svg](../0-assets/02-not-nor.svg)

---

## 1. Operador `$not`

`$not` niega la expresión de operador que envuelve. Se aplica a un campo
con una expresión de operador, no a un valor directo:

```js
// Productos cuyo precio NO es mayor a 100
// (equivale a: precio <= 100)
db.products.find({
  price: { $not: { $gt: Decimal128("100") } }
})

// ❌ INCORRECTO — $not no acepta valor directo
// db.products.find({ category: { $not: "accessories" } })

// ✅ CORRECTO para valor directo: usar $ne
// db.products.find({ category: { $ne: "accessories" } })
```

---

## 2. Diferencia entre `$not` y `$ne`

| Operador | Uso | Niega |
|---|---|---|
| `$ne` | `{ campo: { $ne: valor } }` | Igualdad exacta |
| `$not` | `{ campo: { $not: { $gt: N } } }` | Cualquier expresión de operador |

---

## 3. Operador `$nor`

`$nor` excluye documentos que cumplan **cualquiera** de las condiciones del array.
El documento pasa el filtro solo si NO cumple ninguna:

```js
// Documentos que NO son "cancelled" NOR tienen total < 10
db.orders.find({
  $nor: [
    { status: "cancelled" },
    { total: { $lt: 10 } }
  ]
})
```

---

## 4. Reglas de precedencia

```js
// year >= 2022 AND NOT (status = "draft")
db.articles.find({
  year: { $gte: 2022 },
  status: { $not: { $eq: "draft" } }
})
```

`$not` tiene prioridad de campo; no anida en `$and` ni `$or` directamente.

---

## ✅ Checklist

- [ ] ¿Sé la diferencia sintáctica entre `$not` y `$ne`?
- [ ] ¿Puedo construir una query con `$nor` de 2 condiciones?
- [ ] ¿Entiendo que `$not` envuelve una expresión de operador, no un valor?
- [ ] ¿Sé cuándo `$nor` es más legible que `$and` + `$ne`?

---

## 📚 Referencias

- [Logical Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query-logical/)
