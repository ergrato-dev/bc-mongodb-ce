# Semana 03 · 04 — Combinando Operadores

## Objetivos

- Entender el AND implícito cuando se especifican múltiples campos en el filtro
- Combinar operadores de comparación, `$in` y `$exists` en una sola query
- Construir queries complejas de forma legible y eficiente

![04-combinando.svg](../0-assets/04-combinando.svg)

---

## 1. AND implícito entre campos

Cuando el objeto filtro tiene múltiples campos, MongoDB aplica un AND:
el documento debe cumplir TODAS las condiciones.

```js
// Productos en stock AND precio entre 20 y 100
db.products.find({
  inStock: true,
  price: { $gte: 20, $lte: 100 }
})
```

---

## 2. Combinar operadores en el mismo campo

Un campo puede tener múltiples operadores a la vez:

```js
// Precio mayor que 10 Y menor que 500 Y distinto de 99.99
db.products.find({
  price: { $gt: 10, $lt: 500, $ne: 99.99 }
})
```

---

## 3. Combinar operadores en campos distintos

```js
// Pedidos completados, de 2024, por alguno de estos clientes
db.orders.find({
  status: { $ne: "cancelled" },
  year: { $gte: 2024 },
  customerId: { $in: ["C001", "C002", "C003"] }
})
```

---

## 4. Buenas prácticas al combinar

```js
// ✅ BIEN — legible, un criterio por línea
db.products.find({
  category: { $in: ["electronics", "computers"] },
  price: { $gte: Decimal128("100"), $lte: Decimal128("1000") },
  inStock: true,
  rating: { $exists: true, $gte: 4 }
})

// ❌ MAL — todo en una línea, difícil de leer
db.products.find({category:{$in:["electronics","computers"]},price:{$gte:100,$lte:1000},inStock:true})
```

> Usa una línea por campo y una línea por operador cuando el objeto se vuelve
> más largo que 80 caracteres.

---

## ✅ Checklist

- [ ] ¿Puedo construir una query con 3 campos y distintos operadores en cada uno?
- [ ] ¿Entiendo que múltiples campos en el filtro es un AND, no OR?
- [ ] ¿Sé combinar `$in` con `$exists` en la misma query?
- [ ] ¿Aplico el estilo de indentación correcto para queries largas?

---

## 📚 Referencias

- [Query on Embedded Documents](https://www.mongodb.com/docs/manual/tutorial/query-embedded-documents/)
- [Query Operators Reference](https://www.mongodb.com/docs/manual/reference/operator/query/)
