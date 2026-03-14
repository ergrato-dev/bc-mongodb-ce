# Semana 04 · 04 — Combinando Lógica y Arrays

## Objetivos

- Combinar operadores lógicos con operadores de array en una sola query
- Entender la precedencia entre `$or`, `$and` y condiciones de campo
- Construir queries legibles con múltiples operadores

> Ver diagrama: [04-logica-arrays.svg](../0-assets/04-logica-arrays.svg)

---

## 1. `$or` con condiciones de array

```js
// Productos que tienen el tag "portable" O tienen precio < 50
db.products.find({
  $or: [
    { tags: "portable" },
    { price: { $lt: Decimal128("50") } }
  ]
})
```

---

## 2. `$and` implícito + `$or` + `$elemMatch`

```js
// En stock, Y (tiene tag "gaming" O algún score > 90)
db.products.find({
  inStock: true,
  $or: [
    { tags: "gaming" },
    { ratings: { $elemMatch: { $gt: 90 } } }
  ]
})
```

---

## 3. Patrón: múltiples `$or` en el mismo documento

Si necesitas dos `$or` independientes (equivalente a `(A OR B) AND (C OR D)`),
usa `$and` explícito:

```js
db.events.find({
  $and: [
    { $or: [{ type: "sale" }, { type: "promo" }] },
    { $or: [{ region: "LATAM" }, { region: "US" }] }
  ]
})
```

> Sin `$and` explícito, el segundo `$or` sobrescribiría al primero en el objeto.

---

## 4. Reglas de orden recomendadas

```js
// ✅ Primero condiciones de campo simples, luego $or
db.orders.find({
  status: "completed",        // filtra primero (más selectivo)
  year: { $gte: 2023 },
  $or: [
    { total: { $gt: 500 } },
    { items: { $size: 5 } }
  ]
})
```

MongoDB evalúa el filtro completo; el orden en el objeto no afecta el resultado
pero sí la legibilidad del código.

---

## ✅ Checklist

- [ ] ¿Puedo construir `(A OR B) AND (C OR D)` con `$and` explícito?
- [ ] ¿Sé combinar `$or` con `$elemMatch` en el mismo filtro?
- [ ] ¿Entiendo por qué dos `$or` en el mismo objeto son problemáticos?
- [ ] ¿Ordeno las condiciones para maximizar legibilidad?

---

## 📚 Referencias

- [Compound Query Conditions](https://www.mongodb.com/docs/manual/tutorial/query-documents/#compound-query-conditions)
- [Query on Embedded Documents](https://www.mongodb.com/docs/manual/tutorial/query-embedded-documents/)
