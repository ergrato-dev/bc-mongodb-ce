# Semana 02 · 03 — Proyecciones

## Objetivos

- Incluir solo los campos necesarios en el resultado de una consulta
- Excluir campos no deseados sin afectar el filtro
- Entender el comportamiento especial del campo `_id`

![03-proyecciones.svg](../0-assets/03-proyecciones.svg)

---

## 1. ¿Qué es una proyección?

La proyección es el **segundo argumento** de `find()`. Controla qué campos
devuelve cada documento del resultado. Reduce el tráfico de red y simplifica
el código del cliente.

```js
// Sin proyección — devuelve todos los campos
db.books.find({ inStock: true })

// Con proyección — devuelve solo title y author (+ _id siempre)
db.books.find({ inStock: true }, { title: 1, author: 1 })
```

---

## 2. Proyección de inclusión (campo: 1)

Especifica los campos que SÍ quieres ver. MongoDB devuelve esos campos más `_id`.

```js
// Incluir title, author y price
db.books.find({}, { title: 1, author: 1, price: 1 })
// Retorna: { _id: ObjectId("..."), title: "...", author: "...", price: ... }
```

---

## 3. Proyección de exclusión (campo: 0)

Especifica los campos que NO quieres ver. MongoDB devuelve todo lo demás.

```js
// Excluir tags e inStock
db.books.find({}, { tags: 0, inStock: 0 })
// Retorna todos los campos excepto tags e inStock
```

---

## 4. El campo _id es especial

`_id` **siempre se incluye** a menos que lo excluyas explícitamente.
Es la única excepción a la regla de no mezclar `1` y `0`.

```js
// Ocultar _id en una proyección de inclusión
db.books.find({}, { title: 1, author: 1, _id: 0 })
// Retorna: { title: "...", author: "..." } — sin _id

// ❌ INCORRECTO — mezclar inclusión y exclusión (excepto _id)
db.books.find({}, { title: 1, tags: 0 })
// MongoServerError: projection cannot have a mix of inclusion and exclusion
```

---

## ✅ Checklist

- [ ] ¿Puedo obtener solo 2 campos de un documento sin incluir `_id`?
- [ ] ¿Entiendo por qué no se pueden mezclar `1` y `0` (salvo `_id`)?
- [ ] ¿Sé qué campos devuelve MongoDB cuando no hay proyección?
- [ ] ¿Puedo excluir un campo específico conservando todos los demás?

---

## 📚 Referencias

- [Project Fields to Return from Query](https://www.mongodb.com/docs/manual/tutorial/project-fields-from-query-results/)
- [Projection Operators](https://www.mongodb.com/docs/manual/reference/operator/query/#projection-operators)
