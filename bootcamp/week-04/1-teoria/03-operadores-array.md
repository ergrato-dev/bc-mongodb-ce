# Semana 04 · 03 — Operadores de Array

## Objetivos

- Usar `$elemMatch` para filtrar por condiciones múltiples en elementos de array
- Usar `$all` para exigir que el array contenga todos los valores especificados
- Usar `$size` para filtrar por tamaño del array

> Ver diagrama: [03-operadores-array.svg](../0-assets/03-operadores-array.svg)

---

## 1. Problema con `$in` en arrays anidados

`$in` coincide si **algún elemento** del array está en la lista.
Cuando necesitas que el elemento cumpla **múltiples condiciones simultáneas**,
`$in` no es suficiente:

```js
// ¿Tiene alguna puntuación > 90 Y < 95 en el mismo elemento?
// $in no puede hacer esto — usa $elemMatch
```

---

## 2. Operador `$elemMatch`

`$elemMatch` aplica múltiples condiciones al **mismo elemento del array**:

```js
// Encontrar documentos donde ALGÚN elemento de scores sea > 85 Y < 95
db.students.find({
  scores: { $elemMatch: { $gt: 85, $lt: 95 } }
})

// Con arrays de subdocumentos
db.orders.find({
  items: { $elemMatch: { category: "electronics", price: { $gt: 100 } } }
})
```

---

## 3. Operador `$all`

`$all` exige que el array contenga **todos** los valores especificados,
en cualquier orden:

```js
// Productos que tienen TODOS estos tags
db.products.find({
  tags: { $all: ["mongodb", "nosql", "database"] }
})
```

---

## 4. Operador `$size`

`$size` filtra por el número exacto de elementos en el array:

```js
// Pedidos con exactamente 3 artículos
db.orders.find({ items: { $size: 3 } })
```

> `$size` no acepta rangos (`$gt`, `$lt`). Para filtrar por tamaño relativo,
> usa `$expr` con `$size`:
> `db.orders.find({ $expr: { $gt: [{ $size: "$items" }, 2] } })`

---

## ✅ Checklist

- [ ] ¿Sé cuándo usar `$elemMatch` en lugar de condiciones directas en el campo?
- [ ] ¿Puedo usar `$all` para exigir múltiples tags en un mismo documento?
- [ ] ¿Entiendo que `$size` solo acepta valores exactos?
- [ ] ¿Sé la diferencia de resultado entre `$in` y `$elemMatch` en arrays?

---

## 📚 Referencias

- [Array Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query-array/)
- [Query an Array](https://www.mongodb.com/docs/manual/tutorial/query-arrays/)
