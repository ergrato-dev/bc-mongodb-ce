# 02 — Operadores de Texto: Score, Idioma y Frases

## Objetivos

- Filtrar resultados de texto por puntuación mínima de relevancia
- Usar `$language` por consulta para sobreescribir el idioma del índice
- Combinar `$text` con otros filtros normales de MongoDB
- Entender las stop words y el stemming en la búsqueda de texto

## Diagrama

![Text Index](../0-assets/01-text-index.svg)

---

## 1. Filtrar por puntuación mínima

Puedes combinar `$text` con `$expr` para filtrar resultados por debajo
de un umbral de relevancia:

```js
db.articles.find(
  {
    $text: { $search: "optimización índice" },
    $expr: { $gte: [{ $meta: "textScore" }, 1.5] }
  },
  { title: 1, score: { $meta: "textScore" }, _id: 0 }
).sort({ score: { $meta: "textScore" } })
```

---

## 2. Idioma por consulta (`$language`)

Permite sobreescribir el idioma del índice para una búsqueda específica:

```js
// Buscar en inglés aunque el índice esté en español
db.articles.find({
  $text: {
    $search: "performance tuning",
    $language: "english"
  }
})
```

---

## 3. Combinar `$text` con otros filtros

`$text` puede combinarse con filtros normales en el mismo `find()`.
El campo `$text` siempre debe ir dentro del objeto `$match` o del `find()`.

```js
// Buscar artículos de MongoDB publicados en 2024
db.articles.find({
  $text: { $search: "mongodb" },
  publishedYear: 2024,
  category: "databases"
})
```

---

## 4. Stop words y stemming

- **Stop words**: palabras comunes ignoradas (`the`, `and`, `de`, `la`, `en`)
- **Stemming**: MongoDB reduce palabras a su raíz (`escribiendo` → `escrib`)
  para que `escribir`, `escrito` y `escribiendo` coincidan

```js
// "correr" también encuentra "corría", "corriendo", "corrió"
db.articles.find({ $text: { $search: "correr" } })
```

---

## Checklist

- [ ] ¿Puedes combinar `$text` con un filtro de categoría en la misma query?
- [ ] ¿Qué hace el operador `-` dentro de `$search`?
- [ ] ¿Cómo ordenas resultados por relevancia con `textScore`?
- [ ] ¿Cuántos índices `text` puede tener una colección?

## Referencias

- [Text Search Operators — MongoDB Docs](https://www.mongodb.com/docs/v7.0/reference/operator/query/text/)
- [Text Search Languages](https://www.mongodb.com/docs/v7.0/reference/text-search-languages/)
