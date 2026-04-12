# Ejercicio 01 — Operadores de Comparación

**Semana 03 · CRUD II — Operadores de Consulta**

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   ```
2. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Colección de práctica: `products`

12 productos de tecnología con campos: `name`, `category`, `price` (Decimal128),
`stock` (NumberInt), `rating`, `year`, `inStock`, `tags`, `specs`.

---

### Paso 1: Igualdad y Desigualdad — `$eq` y `$ne`

`$eq` compara exactamente. Es el operador implícito cuando escribes `campo: valor`:

```js
// Buscar por categoría (las dos formas son equivalentes)
db.products.find({ category: "accessories" })
db.products.find({ category: { $eq: "accessories" } })
```

`$ne` excluye documentos donde el campo tiene ese valor:

```js
// Todos los que NO son accessories
db.products.find({ category: { $ne: "accessories" } })
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Mayor y Menor — `$gt` y `$lt`

```js
// Comparar valores numéricos
db.products.find({ price: { $gt: Decimal128("100") } })
db.products.find({ rating: { $lt: 4 } })
```

**Descomenta la sección del Paso 2.**

---

### Paso 3: Rangos con `$gte` y `$lte`

Combinar `$gte` y `$lte` en el mismo campo forma un rango cerrado:

```js
db.products.find({
  price: { $gte: Decimal128("50"), $lte: Decimal128("200") }
})
```

También puedes combinar condiciones en **campos distintos**:

```js
db.products.find({
  year: { $gte: NumberInt(2022) },
  rating: { $gte: 4 }
})
```

**Descomenta la sección del Paso 3.**

---

### Paso 4: Múltiples Condiciones

MongoDB aplica AND implícito cuando el filtro tiene varios campos:

```js
db.products.find({
  inStock: true,
  rating: { $gte: 4.2 },
  price: { $lt: Decimal128("200") }
})
```

El documento debe cumplir **todas** las condiciones simultáneamente.

**Descomenta la sección del Paso 4.**
