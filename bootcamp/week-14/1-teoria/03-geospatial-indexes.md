# 03 — Índices Geoespaciales: `2dsphere`

## Objetivos

- Entender el formato GeoJSON y los tipos Point, Polygon y LineString
- Crear un índice `2dsphere` para habilitar operaciones geoespaciales
- Almacenar coordenadas en el formato correcto (`[longitud, latitud]`)
- Verificar la creación del índice con `getIndexes()`

## Diagrama

![Geospatial Index](../0-assets/02-geospatial-index.svg)

---

## 1. Formato GeoJSON

MongoDB usa GeoJSON para representar geometrías. El campo de ubicación
debe seguir este formato:

```js
// Punto (Point) — localización de un negocio, usuario, etc.
{
  location: {
    type: "Point",
    coordinates: [-74.0721, 4.7110]
    // [longitud, latitud] — IMPORTANTE: longitud va primero
  }
}

// Polígono (Polygon) — zona de cobertura, vecindario, etc.
{
  area: {
    type: "Polygon",
    coordinates: [[
      [-74.08, 4.72], [-74.06, 4.72],
      [-74.06, 4.70], [-74.08, 4.70],
      [-74.08, 4.72]  // último punto == primero (se cierra)
    ]]
  }
}
```

> ⚠️ `coordinates` siempre es `[longitud, latitud]`, no `[latitud, longitud]`.

---

## 2. Crear el índice `2dsphere`

```js
// Índice geoespacial para coordenadas en la superficie terrestre
db.stores.createIndex({ location: "2dsphere" })

// Verificar
db.stores.getIndexes()
// Verás: "key": { "location": "2dsphere" }
```

---

## 3. Insertar documentos con GeoJSON

```js
db.stores.insertMany([
  {
    name: "Tienda Norte",
    category: "electronics",
    location: {
      type: "Point",
      coordinates: [-74.07, 4.71]
    }
  },
  {
    name: "Tienda Sur",
    category: "food",
    location: {
      type: "Point",
      coordinates: [-74.10, 4.65]
    }
  }
])
```

---

## 4. Restricciones del índice `2dsphere`

- Requiere que los documentos usen el formato GeoJSON
- Las coordenadas deben estar en rango válido: longitud [-180, 180], latitud [-90, 90]
- Es compatible con el índice compuesto (puede combinarse con otros campos)

---

## Checklist

- [ ] ¿En qué orden van longitud y latitud en GeoJSON?
- [ ] ¿Qué valor va en el `type` para representar un punto?
- [ ] ¿Cuántos índices `2dsphere` puede tener una colección?
- [ ] ¿Qué pasa si insertas coordenadas fuera del rango válido?

## Referencias

- [2dsphere Indexes — MongoDB Docs](https://www.mongodb.com/docs/v7.0/core/indexes/index-types/geospatial/2dsphere/)
- [GeoJSON Objects](https://www.mongodb.com/docs/v7.0/reference/geojson/)
