# Ejercicio 02 — Proyecciones y Métodos de Cursor

**Semana 02 · CRUD I: Inserción y Lectura**

## Objetivo

Practicar proyecciones para seleccionar campos y encadenar `.sort()`, `.limit()` y `.skip()`.

## Cómo ejecutar

1. Si no cargaste el setup del ejercicio anterior, ejecútalo ahora:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < ../ejercicio-01/starter/setup.js
   ```
2. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

### Paso 1: Proyección de inclusión

Devuelve solo los campos que especificas. `_id` se incluye por defecto.

```js
db.books.find(
  {},
  { title: 1, author: 1, price: 1 }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Proyección de inclusión sin _id

Agrega `_id: 0` para ocultar el identificador del resultado.

```js
db.books.find(
  { inStock: true },
  { title: 1, price: 1, _id: 0 }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 2.

---

### Paso 3: Proyección de exclusión

Devuelve todo menos los campos marcados con `0`.

```js
db.books.find(
  {},
  { tags: 0, inStock: 0 }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 3.

---

### Paso 4: Ordenar con .sort()

`1` = ascendente, `-1` = descendente.

```js
db.books.find(
  {},
  { title: 1, price: 1, _id: 0 }
).sort({ price: -1 })
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 4.

---

### Paso 5: Limitar con .limit()

Retorna solo los primeros N documentos del cursor.

```js
db.books.find(
  {},
  { title: 1, year: 1, _id: 0 }
).sort({ year: -1 }).limit(3)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 5.

---

### Paso 6: Paginación con .skip() y .limit()

Combina `.skip()` y `.limit()` para paginar resultados.

```js
// Página 1
db.books.find({}, { title: 1, _id: 0 }).sort({ title: 1 }).skip(0).limit(3)
// Página 2
db.books.find({}, { title: 1, _id: 0 }).sort({ title: 1 }).skip(3).limit(3)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 6.
