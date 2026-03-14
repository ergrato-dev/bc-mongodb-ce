# Ejercicio 02 — Time Series: Crear, Insertar y Agregar

## Objetivos
- Crear una Time Series collection con `timeField`, `metaField` y `granularity`
- Insertar documentos con el campo `timeField` correcto
- Consultar datos por rango de fechas y filtros de sensor
- Agrupar lecturas por ventana de tiempo con `$dateToString`

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conéctate:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

### Paso 1: Consultar datos por rango de fechas

Las Time Series collections se consultan igual que cualquier colección.
La clave está en filtrar siempre por `timeField` primero:

```js
db.sensor_readings.find({
  recordedAt: {
    $gte: new Date("2025-04-01T00:00:00Z"),
    $lt:  new Date("2025-04-02T00:00:00Z")
  },
  "metadata.sensorId": "sen-001"
}).sort({ recordedAt: 1 })
```

MongoDB usa el bucketing interno para saltarse bloques de tiempo que no coinciden con el rango.

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 1.

---

### Paso 2: Promedio de temperatura por hora

Agrupa lecturas de `sen-001` del 1 de abril por hora:

```js
db.sensor_readings.aggregate([
  {
    $match: {
      recordedAt: { $gte: new Date("2025-04-01T00:00:00Z"), $lt: new Date("2025-04-02T00:00:00Z") },
      "metadata.sensorId": "sen-001"
    }
  },
  {
    $group: {
      _id: { hour: { $dateToString: { format: "%Y-%m-%dT%H:00", date: "$recordedAt" } } },
      avgTemperature: { $avg: "$temperature" },
      maxTemperature: { $max: "$temperature" },
      minTemperature: { $min: "$temperature" },
      totalReadings: { $sum: 1 }
    }
  },
  { $sort: { "_id.hour": 1 } }
])
```

Esperas 3 grupos: `08:00`, `09:00`, `10:00`.

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 2.

---

### Paso 3: Comparar sensores en el mismo período

```js
db.sensor_readings.aggregate([
  { $match: { recordedAt: { $gte: new Date("2025-04-01T00:00:00Z"), $lt: new Date("2025-04-03T00:00:00Z") } } },
  {
    $group: {
      _id: {
        sensor: "$metadata.sensorId",
        day: { $dateToString: { format: "%Y-%m-%d", date: "$recordedAt" } }
      },
      avgTemp: { $avg: "$temperature" },
      avgHumidity: { $avg: "$humidity" },
      readings: { $sum: 1 }
    }
  },
  { $sort: { "_id.day": 1, "_id.sensor": 1 } }
])
```

`datacenter-B` (sen-002) siempre muestra temperatura más baja que `server-room-A`.

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 3.

---

### Paso 4: Última lectura por sensor

```js
db.sensor_readings.aggregate([
  { $sort: { recordedAt: -1 } },
  {
    $group: {
      _id: "$metadata.sensorId",
      lastTemperature: { $first: "$temperature" },
      lastReadingAt: { $first: "$recordedAt" }
    }
  }
])
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 4.

---

## Verificación

- La colección `sensor_readings` es de tipo `timeseries` (verifica con `db.getCollectionInfos({ name: "sensor_readings" })`)
- El PASO 2 retorna 3 documentos agrupados por hora para sen-001
- El PASO 3 muestra 4 combinaciones sensor×día
- El PASO 4 retorna los 2 sensores con su última lectura del `2025-04-02`
