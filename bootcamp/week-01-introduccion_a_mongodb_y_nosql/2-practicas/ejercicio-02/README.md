# Ejercicio 02 — Filtros con Operadores de Comparación

**Semana 01 · Introducción a MongoDB y NoSQL**

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < bootcamp/week-01-introduccion_a_mongodb_y_nosql/2-practicas/ejercicio-02/starter/setup.js
   ```
3. Conéctate:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

**Abre `starter/ejercicio.js`** y descomenta cada sección siguiendo los pasos.

---

### Paso 1: Filtro exacto (igualdad implícita)

En MongoDB, la igualdad no necesita operador. Se escribe directamente como par `campo: valor`:

```js
db.products.find(
  { category: "peripherals" },
  { name: 1, category: 1, price: 1, _id: 0 }
)
```

**Descomenta la sección del Paso 1.**

---

### Paso 2: Mayor que y menor que ($gt, $lt)

`$gt` (greater than) y `$lt` (less than) filtran por rango numérico:

```js
db.products.find(
  { price: { $gt: Decimal128("100"), $lt: Decimal128("500") } },
  { name: 1, price: 1, _id: 0 }
)
```

**Descomenta la sección del Paso 2.**

---

### Paso 3: Incluido en lista ($in)

`$in` filtra documentos cuyo campo coincide con alguno de los valores del array:

```js
db.products.find(
  { category: { $in: ["laptops", "audio"] } },
  { name: 1, category: 1, price: 1, _id: 0 }
)
```

**Descomenta la sección del Paso 3.**

---

### Paso 4: Combinar filtros + cursor methods

Los filtros se pueden combinar con `.sort()` y `.limit()` en la misma query:

```js
db.products.find(
  { isActive: true },
  { name: 1, price: 1, rating: 1, _id: 0 }
).sort({ price: 1 }).limit(3)
```

**Descomenta la sección del Paso 4.**
