# Ejercicio 02 — `$replaceRoot` y `$merge`

## Descripción

Practica la reestructuración de documentos con `$replaceRoot` y `$mergeObjects`,
y la persistencia de resultados con `$out` y `$merge`.

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

## Pasos

### Paso 1: `$replaceRoot` básico

Promueve el subdocumento embebido `customer` a raíz:

```js
db.orders.aggregate([
  { $replaceRoot: { newRoot: "$customer" } }
])
```

El resultado tendrá solo los campos de `customer` (`customerId`, `name`, `city`, `tier`).

**Abre `starter/ejercicio.js`** y descomenta el Paso 1.

---

### Paso 2: `$replaceRoot` + `$mergeObjects`

Preserva campos del documento original al promover el subdocumento:

```js
db.orders.aggregate([
  {
    $replaceRoot: {
      newRoot: {
        $mergeObjects: [
          "$customer",
          { orderId: "$orderId", status: "$status", total: "$total" }
        ]
      }
    }
  },
  { $sort: { name: 1 } }
])
```

**Descomenta el Paso 2** en `starter/ejercicio.js`.

---

### Paso 3: `$out` — guardar resultado en colección

`$out` escribe el resultado del pipeline en una colección nueva:

```js
db.orders.aggregate([
  { $match: { status: "completed" } },
  {
    $group: {
      _id: "$customer.city",
      totalRevenue: { $sum: { $toDouble: "$total" } },
      orderCount: { $sum: 1 },
      customers: { $addToSet: "$customer.customerId" }
    }
  },
  { $sort: { totalRevenue: -1 } },
  { $out: "city_summary" }
])
db.city_summary.find()
```

> ⚠️ `$out` elimina y recrea `city_summary`. Ejecuta `db.city_summary.find()` para verificar.

**Descomenta el Paso 3** en `starter/ejercicio.js`.

---

### Paso 4: `$merge` — fusionar con colección existente

`$merge` actualiza documentos existentes e inserta los nuevos:

```js
db.orders.aggregate([
  { $match: { status: "completed" } },
  {
    $group: {
      _id: "$month",
      actualRevenue: { $sum: { $toDouble: "$total" } },
      orderCount: { $sum: 1 }
    }
  },
  {
    $merge: {
      into: "monthly_stats",
      on: "_id",
      whenMatched: "merge",
      whenNotMatched: "insert"
    }
  }
])
db.monthly_stats.find()
```

> El documento `2024-01` ya existe en `monthly_stats` con datos históricos.
> `$merge` lo fusionará con los datos reales calculados del pipeline.

**Descomenta el Paso 4** en `starter/ejercicio.js`.
