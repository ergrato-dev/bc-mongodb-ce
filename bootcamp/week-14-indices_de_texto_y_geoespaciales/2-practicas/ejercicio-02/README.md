# Ejercicio 02 — Consultas Geoespaciales con `2dsphere`

## Objetivo

Crear un índice `2dsphere`, almacenar datos en formato GeoJSON y
ejecutar consultas de proximidad con `$near` y consultas de área
con `$geoWithin`.

## Diagrama de referencia

![Geospatial Index](../../0-assets/02-geospatial-index.svg)

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
3. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
4. Conecta e interactúa:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Pasos del ejercicio

### Paso 1: Crear el índice `2dsphere`

El campo `location` debe contener un objeto GeoJSON válido.

```js
db.stores.createIndex({ location: "2dsphere" })
```

> ⚠️ Las coordenadas GeoJSON siempre son `[longitud, latitud]`.
> No al revés.

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 1.

---

### Paso 2: Buscar con `$near`

`$near` ordena automáticamente del más cercano al más lejano.
La distancia se especifica en **metros**.

```js
db.stores.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [-74.0721, 4.7110] },
      $maxDistance: 1500  // metros
    }
  }
})
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 2.

---

### Paso 3: Filtrar con `$geoWithin`

`$geoWithin` retorna documentos dentro de un área geométrica.
`$box` define un rectángulo por sus esquinas SW y NE.

```js
db.stores.find({
  location: {
    $geoWithin: {
      $box: [
        [-74.0950, 4.7000],  // SW
        [-74.0600, 4.7400]   // NE
      ]
    }
  }
})
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 3.

---

### Paso 4: Combinar geoespacial con otros filtros

Los operadores geoespaciales se combinan con cualquier filtro normal.

```js
db.stores.find({
  location: { $near: { ... } },
  category: "electronics",
  isOpen: true
})
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 4.

---

## Checklist

- [ ] ¿El índice `2dsphere` aparece en `getIndexes()`?
- [ ] ¿Los resultados de `$near` vienen ordenados del más cercano al más lejano?
- [ ] ¿`$geoWithin` retorna solo las tiendas dentro del rectángulo definido?
- [ ] ¿Puedes filtrar por `category` y `$near` en la misma query?
