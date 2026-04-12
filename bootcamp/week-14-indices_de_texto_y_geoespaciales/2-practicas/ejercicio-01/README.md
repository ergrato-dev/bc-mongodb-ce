# Ejercicio 01 — Búsquedas de Texto con `$text`

## Objetivo

Crear un índice de texto en múltiples campos y ejecutar búsquedas usando
`$text`, `$search`, el prefijo `-` para exclusión, y ordenar por
relevancia con `$meta: "textScore"`.

## Diagrama de referencia

![Text Index](../../0-assets/01-text-index.svg)

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Levanta el contenedor:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   ```
3. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
4. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Pasos del ejercicio

### Paso 1: Crear el índice de texto

Solo puede existir un índice `text` por colección.
Se puede crear sobre múltiples campos a la vez.

```js
db.articles.createIndex(
  { title: "text", body: "text" },
  { default_language: "spanish" }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 1.

---

### Paso 2: Buscar con `$text` y `$search`

MongoDB aplica stemming automático según el idioma del índice.

```js
// "rendimiento" también encuentra "rinde", "rendía"
db.articles.find({ $text: { $search: "rendimiento" } })

// Excluir documentos con la palabra "cluster"
db.articles.find({ $text: { $search: "mongodb -cluster" } })
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 2.

---

### Paso 3: Ordenar por relevancia

`$meta: "textScore"` calcula la relevancia de cada resultado.

```js
db.articles.find(
  { $text: { $search: "mongodb rendimiento" } },
  { title: 1, score: { $meta: "textScore" }, _id: 0 }
).sort({ score: { $meta: "textScore" } })
```

> El documento con más ocurrencias de las palabras buscadas aparece primero.

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 3.

---

### Paso 4: Combinar `$text` con otros filtros

`$text` puede combinarse con cualquier otro operador de filtro.

```js
db.articles.find({
  $text: { $search: "mongodb" },
  publishedYear: 2024
})
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 4.

---

## Checklist

- [ ] ¿El índice text aparece en `getIndexes()` con los dos campos?
- [ ] ¿La búsqueda con `-cluster` excluye el artículo sobre clusters?
- [ ] ¿Los resultados ordenados por textScore tienen el más relevante primero?
- [ ] ¿Puedes filtrar por `publishedYear: 2024` y texto al mismo tiempo?
