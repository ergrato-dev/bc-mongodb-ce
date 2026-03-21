# Semana 02 · 01 — Inserción de Documentos

## Objetivos

- Insertar un documento con `insertOne()` y verificar el `_id` generado
- Insertar múltiples documentos con `insertMany()` en una sola operación
- Comprender las opciones de comportamiento ante errores de inserción

> Ver diagrama: [01-insert-flujo.svg](../0-assets/01-insert-flujo.svg)

---

## 1. insertOne() — insertar un documento

`insertOne()` inserta un único documento y retorna un objeto con el `_id` asignado.

```js
// Insertar un libro en la colección "books"
db.books.insertOne({
  title: "The Pragmatic Programmer",
  author: "David Thomas",
  year: NumberInt(1999),
  price: Decimal128("39.99"),
  inStock: true,
  tags: ["programming", "best-practices"]
})
// Retorna: { acknowledged: true, insertedId: ObjectId("...") }
```

MongoDB asigna `_id` automáticamente como `ObjectId` si no se especifica.
Para definir un `_id` propio: `{ _id: "ISBN-978-0-13-235088-4", title: "..." }`.

---

## 2. insertMany() — insertar en lote

`insertMany()` recibe un array y retorna todos los `_id` generados.

```js
// Insertar varios libros en una operación
db.books.insertMany([
  { title: "Clean Code", author: "Robert C. Martin", year: NumberInt(2008) },
  { title: "You Don't Know JS", author: "Kyle Simpson", year: NumberInt(2015) },
  { title: "JavaScript: The Good Parts", author: "Douglas Crockford", year: NumberInt(2008) }
])
// Retorna: { acknowledged: true, insertedIds: { "0": ObjectId("..."), "1": ... } }
```

---

## 3. Opción ordered — comportamiento ante errores

Por defecto `insertMany()` es **ordered: true**: detiene la inserción al primer error.

```js
// Con ordered: false — inserta todo lo que pueda aunque falle alguno
db.books.insertMany(
  [
    { _id: 1, title: "Libro A" },
    { _id: 1, title: "Libro B" },   // _id duplicado — fallará
    { _id: 2, title: "Libro C" }
  ],
  { ordered: false }
)
// "Libro A" y "Libro C" se insertan; "Libro B" falla sin detener el lote
```

---

## 4. Verificar la inserción

```js
// Contar documentos en la colección
db.books.countDocuments()

// Ver los últimos insertados (sin índice en _id, muestra los más recientes)
db.books.find().sort({ _id: -1 }).limit(3)
```

---

## ✅ Checklist

- [ ] ¿Sé qué retorna `insertOne()` y dónde está el `_id` generado?
- [ ] ¿Puedo insertar 5 documentos con una sola llamada a `insertMany()`?
- [ ] ¿Entiendo la diferencia entre `ordered: true` y `ordered: false`?
- [ ] ¿Sé cómo especificar un `_id` personalizado en lugar del `ObjectId`?

---

## 📚 Referencias

- [db.collection.insertOne()](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/)
- [db.collection.insertMany()](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertMany/)
