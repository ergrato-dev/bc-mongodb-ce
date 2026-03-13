# Semana 03 · 01 — Operadores de Comparación

## Objetivos

- Filtrar documentos usando `$gt`, `$gte`, `$lt`, `$lte` para rangos numéricos
- Usar `$eq` y `$ne` para igualdad y desigualdad explícita
- Construir rangos combinando dos operadores en un mismo campo

> Ver diagrama: [01-operadores-comparacion.svg](../0-assets/01-operadores-comparacion.svg)

---

## 1. Los 6 operadores de comparación

Todos los operadores de consulta van dentro de un objeto junto al campo:

```js
// Sintaxis: { campo: { $operador: valor } }
db.products.find({ price: { $gt: 100 } })
```

| Operador | Significado       | Ejemplo |
| -------- | ----------------- | ------- |
| `$eq`    | igual a           | `{ year: { $eq: 2020 } }` |
| `$ne`    | distinto de       | `{ status: { $ne: "cancelled" } }` |
| `$gt`    | mayor que         | `{ price: { $gt: 50 } }` |
| `$gte`   | mayor o igual que | `{ price: { $gte: 50 } }` |
| `$lt`    | menor que         | `{ price: { $lt: 200 } }` |
| `$lte`   | menor o igual que | `{ price: { $lte: 200 } }` |

---

## 2. Igualdad implícita vs $eq explícito

La igualdad por campo directo y `$eq` son equivalentes:

```js
// Estas dos queries son idénticas
db.products.find({ category: "electronics" })
db.products.find({ category: { $eq: "electronics" } })
```

Usa `$eq` explícito cuando combinas con otros operadores en el mismo objeto.

---

## 3. Rangos — combinar $gte y $lte

```js
// Productos entre $50 y $200 (inclusive)
db.products.find({ price: { $gte: 50, $lte: 200 } })

// Productos entre 2015 y 2022 (exclusive inicio)
db.products.find({ year: { $gt: 2015, $lte: 2022 } })
```

---

## 4. $ne — excluir un valor

```js
// Todos los pedidos que NO estén cancelados
db.orders.find({ status: { $ne: "cancelled" } })
```

> `$ne` incluye documentos donde el campo no existe.
> Usa `$exists: true` junto a `$ne` si quieres excluir también los documentos sin el campo.

---

## ✅ Checklist

- [ ] ¿Puedo filtrar productos entre dos precios usando `$gte` y `$lte`?
- [ ] ¿Sé cuándo usar `$ne` y qué documentos incluye?
- [ ] ¿Entiendo que `{ price: 100 }` y `{ price: { $eq: 100 } }` son equivalentes?
- [ ] ¿Puedo combinar `$gt` y `$lt` para un rango exclusivo en un solo campo?

---

## 📚 Referencias

- [Comparison Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query-comparison/)
- [Query and Projection Operators](https://www.mongodb.com/docs/manual/reference/operator/query/)
