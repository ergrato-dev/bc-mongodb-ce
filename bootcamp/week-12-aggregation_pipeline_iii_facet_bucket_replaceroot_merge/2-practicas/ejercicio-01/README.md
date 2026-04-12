# Ejercicio 01 — `$facet` y `$bucket`

## Descripción

Practica análisis multidimensional con `$facet` y clasificación por rangos de
precio con `$bucket` y `$bucketAuto` sobre una colección de productos.

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

### Paso 1: `$facet` básico — dos análisis en paralelo

`$facet` ejecuta múltiples sub-pipelines sobre los mismos documentos:

```js
db.products.aggregate([
  { $match: { isActive: true } },
  {
    $facet: {
      byCategory: [
        { $group: { _id: "$category", count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ],
      priceStats: [
        {
          $group: {
            _id: null,
            avgPrice: { $avg: { $toDouble: "$price" } },
            minPrice: { $min: { $toDouble: "$price" } },
            maxPrice: { $max: { $toDouble: "$price" } }
          }
        }
      ]
    }
  }
])
```

**Abre `starter/ejercicio.js`** y descomenta el Paso 1.

---

### Paso 2: `$facet` con paginación

Un patrón frecuente en APIs: resultados paginados + total en una sola query.

```js
db.products.aggregate([
  { $match: { isActive: true } },
  {
    $facet: {
      results: [
        { $sort: { price: 1 } },
        { $limit: 5 },
        { $project: { name: 1, category: 1, price: 1, _id: 0 } }
      ],
      totalCount: [
        { $count: "total" }
      ]
    }
  }
])
```

**Descomenta el Paso 2** en `starter/ejercicio.js`.

---

### Paso 3: `$bucket` — rangos de precio manuales

Clasifica documentos en grupos según rangos que defines:

```js
db.products.aggregate([
  {
    $bucket: {
      groupBy: { $toDouble: "$price" },
      boundaries: [0, 50, 200, 600],
      default: "lujo",
      output: {
        count: { $sum: 1 },
        avgPrice: { $avg: { $toDouble: "$price" } },
        items: { $push: "$name" }
      }
    }
  }
])
```

> Nota: `default` captura los documentos que no caen en ningún rango definido.

**Descomenta el Paso 3** en `starter/ejercicio.js`.

---

### Paso 4: `$bucketAuto` — distribución automática

MongoDB calcula los límites para obtener grupos de tamaño similar:

```js
db.products.aggregate([
  {
    $bucketAuto: {
      groupBy: { $toDouble: "$price" },
      buckets: 4,
      output: {
        count: { $sum: 1 },
        minPrice: { $min: { $toDouble: "$price" } },
        maxPrice: { $max: { $toDouble: "$price" } },
        avgRating: { $avg: "$rating" }
      }
    }
  }
])
```

**Descomenta el Paso 4** en `starter/ejercicio.js`.
