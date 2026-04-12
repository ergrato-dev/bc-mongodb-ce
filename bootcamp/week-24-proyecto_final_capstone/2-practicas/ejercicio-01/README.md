# Ejercicio 01 — Patrones de Diseño Avanzados

## Cómo ejecutar

1. Levanta Docker y carga los datos:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < 2-practicas/ejercicio-01/starter/setup.js
   ```
2. Conecta a `mongosh` y ejecuta el ejercicio:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
3. Dentro de `mongosh`, carga el archivo:
   ```js
   load("/path/to/starter/ejercicio.js")
   ```

---

## Pasos del Ejercicio

### Paso 1: Extended Reference — leer sin $lookup

El patrón Extended Reference copia los campos más leídos del documento
referenciado directamente en el documento principal. Así se evita un `$lookup`
costoso en cada lectura:

```js
db.events.find(
  { isActive: true },
  { title: 1, venueName: 1, venueCity: 1, startDate: 1, _id: 0 }
).sort({ startDate: 1 })
```

**Descomenta el PASO 1 en `starter/ejercicio.js`.**

---

### Paso 2: Bucket Pattern — consultar lecturas agrupadas

El Bucket Pattern almacena múltiples lecturas en un array dentro de un solo
documento por período. La siguiente query obtiene el bucket más reciente y
proyecta las últimas 3 lecturas con `$slice`:

```js
db.sensor_buckets.aggregate([
  { $match: { sensorId: "SENSOR-TEMP-01" } },
  { $sort: { hour: -1 } },
  { $limit: 1 },
  { $project: { count: 1, avgValue: 1, recentReadings: { $slice: ["$readings", -3] } } }
])
```

**Descomenta el PASO 2.**

---

### Paso 3: Computed Pattern — leer estadísticas precalculadas

En lugar de calcular `totalRevenue` y `totalEvents` en cada request con
un pipeline costoso, el Computed Pattern los pre-calcula en el momento
de la escritura y los almacena listos para leer:

```js
db.daily_stats.find({}, { date: 1, totalRevenue: 1, totalEvents: 1, _id: 0 })
  .sort({ date: -1 })
```

**Descomenta el PASO 3.**

---

### Paso 4: Actualizar estadísticas con $inc

Cuando ocurre un nuevo evento de venta, actualiza `daily_stats` con
`$inc` para mantener los totales al día. El `upsert: true` crea el
documento si no existe para el día actual:

```js
db.daily_stats.updateOne(
  { date: hoy },
  { $inc: { totalRevenue: 75.00, totalEvents: 1 }, $set: { computedAt: new Date() } },
  { upsert: true }
)
```

**Descomenta el PASO 4.**
