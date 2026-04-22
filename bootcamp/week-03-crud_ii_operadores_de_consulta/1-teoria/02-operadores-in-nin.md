# Semana 03 · 02 — $in y $nin

## Objetivos

- Filtrar documentos cuyo campo coincida con cualquier valor de una lista usando `$in`
- Excluir documentos cuyos campos pertenezcan a una lista con `$nin`
- Aplicar `$in` sobre campos de tipo array

![02-in-nin.svg](../0-assets/02-in-nin.svg)

---

## 1. $in — pertenece al conjunto

`$in` equivale a múltiples condiciones `$eq` unidas con OR:

```js
// Productos de categoría "books" O "music" O "games"
db.products.find({ category: { $in: ["books", "music", "games"] } })

// Equivalente largo con $or (se verá en semana 04):
// db.products.find({ $or: [
//   { category: "books" },
//   { category: "music" },
//   { category: "games" }
// ] })
```

---

## 2. $nin — no pertenece al conjunto

`$nin` excluye documentos cuyo campo coincida con cualquier valor de la lista:

```js
// Pedidos que NO estén en estado "cancelled" ni "returned"
db.orders.find({ status: { $nin: ["cancelled", "returned"] } })
```

> `$nin` también incluye documentos donde el campo no existe.

---

## 3. $in sobre campos de tipo array

Cuando el campo es un array, `$in` verifica si el array contiene alguno de los valores:

```js
// Productos que tengan al menos uno de estos tags
db.products.find({ tags: { $in: ["sale", "featured", "new"] } })
// Un producto con tags: ["new", "electronics"] SÍ aparece en el resultado
```

---

## 4. $in con ObjectIds

`$in` es especialmente útil para buscar por múltiples `_id`:

```js
// Obtener documentos específicos por su _id
db.products.find({
  _id: { $in: [
    ObjectId("64a7f3b2c9e1d5a823f0b4c1"),
    ObjectId("64a7f3b2c9e1d5a823f0b4c2")
  ] }
})
```

---

## ✅ Checklist

- [ ] ¿Puedo usar `$in` para filtrar por 3 categorías distintas en una sola query?
- [ ] ¿Entiendo que `$nin` incluye documentos donde el campo no existe?
- [ ] ¿Sé cómo funciona `$in` cuando el campo es un array?
- [ ] ¿Cuándo conviene `$in` vs múltiples condiciones `$eq`?

---

## 📚 Referencias

- [$in — MongoDB Docs](https://www.mongodb.com/docs/manual/reference/operator/query/in/)
- [$nin — MongoDB Docs](https://www.mongodb.com/docs/manual/reference/operator/query/nin/)
