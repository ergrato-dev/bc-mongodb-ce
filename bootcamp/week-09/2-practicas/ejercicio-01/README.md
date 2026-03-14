# Ejercicio 01 — $match, $project, $sort, $limit y $skip

## Objetivo

Construir pipelines de agregación usando las etapas fundamentales:
`$match`, `$project`, `$sort`, `$limit` y `$skip`.

## Colección

`sales` — 15 registros de ventas con producto, categoría, ciudad, vendedor,
monto, cantidad, estado y fecha.

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga los datos:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
4. Abre `starter/ejercicio.js` y descomenta cada paso.

---

## Paso 1: $match + $project

Combina un filtro con una proyección para obtener solo los campos relevantes:

```js
db.sales.aggregate([
  { $match: { status: "completed" } },
  { $project: { _id: 0, product: 1, city: 1, amount: 1 } }
])
```

**Abre `starter/ejercicio.js`** y descomenta el bloque del Paso 1.

---

## Paso 2: $sort y $limit

Ordena por monto descendente y limita a 5 resultados:

```js
db.sales.aggregate([
  { $match: { status: "completed" } },
  { $sort: { amount: -1 } },
  { $limit: 5 },
  { $project: { _id: 0, product: 1, amount: 1 } }
])
```

**Abre `starter/ejercicio.js`** y descomenta el bloque del Paso 2.

---

## Paso 3: Paginación con $skip

`$skip` + `$limit` implementa paginación. Para la página N con tamaño P:
`$skip = (N-1) * P`, `$limit = P`.

```js
// Página 1
db.sales.aggregate([
  { $sort: { saleDate: -1 } },
  { $skip: 0 },
  { $limit: 5 }
])
```

**Abre `starter/ejercicio.js`** y descomenta el bloque del Paso 3.

---

## Paso 4: Campo calculado en $project

`$project` puede crear un campo nuevo usando una expresión aritmética:

```js
db.sales.aggregate([
  {
    $project: {
      product: 1,
      totalAmount: { $multiply: [{ $toDouble: "$amount" }, "$quantity"] }
    }
  }
])
```

**Abre `starter/ejercicio.js`** y descomenta el bloque del Paso 4.

---

## Checklist de verificación

- [ ] ¿El pipeline del Paso 1 muestra solo product, city y amount sin _id?
- [ ] ¿El Paso 2 devuelve exactamente 5 documentos con los mayores montos?
- [ ] ¿Las páginas 1 y 2 del Paso 3 son conjuntos disjuntos de documentos?
- [ ] ¿El campo `totalAmount` del Paso 4 es amount × quantity?

## Solución

Compara tu trabajo con `solution/ejercicio.js`.
