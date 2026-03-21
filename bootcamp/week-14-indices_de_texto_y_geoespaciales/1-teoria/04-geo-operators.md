# 04 — Operadores Geoespaciales: `$near`, `$geoWithin`, `$geoIntersects`

## Objetivos

- Consultar documentos cercanos a un punto con `$near` y `$maxDistance`
- Filtrar documentos dentro de un área con `$geoWithin`
- Entender cuándo usar `$nearSphere` vs `$near`
- Ordenar resultados por distancia con `$near`

## Diagrama

![Geospatial Index](../0-assets/02-geospatial-index.svg)

---

## 1. `$near` — Documentos más cercanos a un punto

`$near` devuelve documentos ordenados por distancia desde un punto dado.
La distancia en `$maxDistance` y `$minDistance` se expresa en **metros**.

```js
// Tiendas a menos de 2 km del punto de referencia
db.stores.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-74.08, 4.70]
      },
      $maxDistance: 2000  // metros
    }
  }
})
// Los resultados vienen ordenados del más cercano al más lejano
```

---

## 2. `$geoWithin` — Documentos dentro de un área

`$geoWithin` devuelve documentos cuya geometría está completamente
dentro del área especificada. No requiere índice (pero lo usa si existe).

```js
// Tiendas dentro de un rectángulo definido por dos esquinas
db.stores.find({
  location: {
    $geoWithin: {
      $box: [
        [-74.10, 4.68],  // esquina inferior izquierda [long, lat]
        [-74.05, 4.75]   // esquina superior derecha   [long, lat]
      ]
    }
  }
})
```

---

## 3. `$geoWithin` con polígono GeoJSON

```js
// Tiendas dentro de un polígono irregular
db.stores.find({
  location: {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [[
          [-74.10, 4.70], [-74.05, 4.70],
          [-74.05, 4.75], [-74.10, 4.75],
          [-74.10, 4.70]
        ]]
      }
    }
  }
})
```

---

## 4. `$nearSphere` vs `$near`

| Operador       | Cuándo usar                                    |
|----------------|------------------------------------------------|
| `$near`        | Colecciones con índice `2dsphere` (GeoJSON)    |
| `$nearSphere`  | Cuando se necesita cálculo en esfera (legado)  |

Para MongoDB 7.0 con índice `2dsphere`, usar siempre `$near` con `$geometry`.

---

## Checklist

- [ ] ¿En qué unidad se expresa `$maxDistance` en `$near`?
- [ ] ¿`$near` o `$geoWithin` ordena los resultados por distancia?
- [ ] ¿Qué forma geométrica describe `$box`?
- [ ] ¿Puedes combinar `$near` con un filtro de categoría?

## Referencias

- [`$near` — MongoDB Docs](https://www.mongodb.com/docs/v7.0/reference/operator/query/near/)
- [`$geoWithin` — MongoDB Docs](https://www.mongodb.com/docs/v7.0/reference/operator/query/geoWithin/)
