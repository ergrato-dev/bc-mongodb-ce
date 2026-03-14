# 01 — Índices de Texto: `$text` y `$search`

## Objetivos

- Crear un índice de texto sobre uno o varios campos de una colección
- Buscar documentos con `$text` y el operador `$search`
- Entender las limitaciones del índice text (solo uno por colección)
- Excluir palabras con el prefijo `-` en la búsqueda

## Diagrama

![Text Index](../0-assets/01-text-index.svg)

---

## 1. Crear un índice de texto

El índice `text` tokeniza el contenido de los campos y permite búsqueda
de palabras clave. Se declara con el valor `"text"`.

```js
// Índice text en un solo campo
db.articles.createIndex({ title: "text" })

// Índice text en múltiples campos
db.articles.createIndex({ title: "text", body: "text" })

// Solo puede existir UN índice text por colección
```

---

## 2. Buscar con `$text` y `$search`

```js
// Buscar documentos que contengan "mongodb"
db.articles.find({ $text: { $search: "mongodb" } })

// Buscar con frase exacta (entre comillas escapadas)
db.articles.find({ $text: { $search: "\"índice compuesto\"" } })

// Excluir una palabra con prefijo -
db.articles.find({ $text: { $search: "mongodb -cluster" } })
// Devuelve docs con "mongodb" que NO contienen "cluster"
```

---

## 3. Ordenar por relevancia (`textScore`)

`$meta: "textScore"` expone la puntuación de relevancia calculada por MongoDB.

```js
db.articles.find(
  { $text: { $search: "índice rendimiento" } },
  { score: { $meta: "textScore" }, title: 1 }
).sort({ score: { $meta: "textScore" } })
```

---

## 4. Idioma del índice

Por defecto MongoDB usa inglés para el stemming (reducción de palabras a raíz).
Para contenido en español:

```js
db.articles.createIndex(
  { title: "text", body: "text" },
  { default_language: "spanish" }
)
```

---

## Checklist

- [ ] ¿Puedes crear un índice text en múltiples campos a la vez?
- [ ] ¿Qué pasa si intentas crear un segundo índice text en la misma colección?
- [ ] ¿Cómo se excluye una palabra en `$search`?
- [ ] ¿Qué campo debes incluir en la proyección para ver el textScore?

## Referencias

- [Text Indexes — MongoDB Docs](https://www.mongodb.com/docs/v7.0/core/indexes/index-types/index-text/)
- [Text Search — MongoDB Docs](https://www.mongodb.com/docs/v7.0/text-search/)
