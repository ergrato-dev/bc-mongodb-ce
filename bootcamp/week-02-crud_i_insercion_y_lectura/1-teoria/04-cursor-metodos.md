# Semana 02 · 04 — Métodos de Cursor

## Objetivos

- Ordenar resultados con `.sort()` por uno o varios campos
- Limitar la cantidad de documentos retornados con `.limit()`
- Omitir documentos para implementar paginación con `.skip()`

![04-cursor-chain.svg](../0-assets/04-cursor-chain.svg)

---

## 1. .sort() — ordenar resultados

`.sort()` recibe un objeto donde `1` = ascendente, `-1` = descendente.

```js
// Libros del más barato al más caro
db.books.find().sort({ price: 1 })

// Libros del más nuevo al más antiguo
db.books.find().sort({ year: -1 })

// Ordenar por múltiples campos: primero por año desc, luego por título asc
db.books.find().sort({ year: -1, title: 1 })
```

---

## 2. .limit() — máximo N documentos

```js
// Los 5 libros más caros
db.books.find().sort({ price: -1 }).limit(5)

// Un solo resultado (equivalente corto a findOne con cursor)
db.books.find({ inStock: true }).limit(1)
```

---

## 3. .skip() — saltar documentos para paginar

```js
// Página 1: primeros 10 libros
db.books.find().sort({ title: 1 }).limit(10)

// Página 2: saltar los primeros 10, traer los siguientes 10
db.books.find().sort({ title: 1 }).skip(10).limit(10)

// Página 3
db.books.find().sort({ title: 1 }).skip(20).limit(10)
```

> ⚠️ `.skip()` escanea y descarta los documentos omitidos.
> Para colecciones muy grandes, usar paginación por cursor (`_id`) es más eficiente.

---

## 4. Orden de ejecución del cursor

MongoDB aplica los modificadores en este orden interno, independientemente
de cómo los encadenes en el código:

```
sort → skip → limit
```

```js
// Estas dos formas son equivalentes
db.books.find().sort({ year: -1 }).skip(5).limit(3)
db.books.find().limit(3).skip(5).sort({ year: -1 })
```

---

## ✅ Checklist

- [ ] ¿Puedo ordenar una colección por precio de mayor a menor?
- [ ] ¿Sé cómo implementar paginación con `.skip()` y `.limit()`?
- [ ] ¿Entiendo que el orden de ejecución es siempre sort → skip → limit?
- [ ] ¿Puedo combinar filtro + proyección + sort + limit en una sola query?

---

## 📚 Referencias

- [cursor.sort()](https://www.mongodb.com/docs/manual/reference/method/cursor.sort/)
- [cursor.limit()](https://www.mongodb.com/docs/manual/reference/method/cursor.limit/)
- [cursor.skip()](https://www.mongodb.com/docs/manual/reference/method/cursor.skip/)
