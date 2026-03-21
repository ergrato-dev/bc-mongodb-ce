# Time Series Collections — Consultas y Agregaciones

## Objetivos
1. Consultar datos temporales con `$match` por rango de fechas
2. Agrupar mediciones por período con `$dateToString` y `$dateTrunc`
3. Calcular métricas como promedio, mínimo y máximo por ventana de tiempo
4. Combinar `$match` temprano para optimizar pipelines de series de tiempo

---

## 1. Consulta por rango de fechas

```js
// Lecturas del último día
db.sensor_readings.find({
  recordedAt: {
    $gte: new Date("2025-04-01T00:00:00Z"),
    $lt:  new Date("2025-04-02T00:00:00Z")
  },
  "metadata.sensorId": "sen-001"
})
```

> Siempre incluye un filtro por `timeField` al inicio del pipeline para aprovechar
> el bucketing interno de MongoDB.

## 2. Agrupar por hora con $dateToString

```js
// Promedio de temperatura por hora
db.sensor_readings.aggregate([
  {
    $match: {
      recordedAt: {
        $gte: new Date("2025-04-01T00:00:00Z"),
        $lt:  new Date("2025-04-02T00:00:00Z")
      }
    }
  },
  {
    $group: {
      _id: {
        hour: { $dateToString: { format: "%Y-%m-%dT%H:00", date: "$recordedAt" } },
        sensor: "$metadata.sensorId"
      },
      avgTemp: { $avg: "$temperature" },
      maxTemp: { $max: "$temperature" },
      minTemp: { $min: "$temperature" },
      readings: { $sum: 1 }
    }
  },
  { $sort: { "_id.hour": 1 } }
])
```

## 3. Agrupar con $dateTrunc (MongoDB 5.0+)

```js
// Agrupar por ventana de 15 minutos
db.sensor_readings.aggregate([
  { $match: { recordedAt: { $gte: new Date("2025-04-01T00:00:00Z") } } },
  {
    $group: {
      _id: {
        window: {
          $dateTrunc: { date: "$recordedAt", unit: "minute", binSize: 15 }
        }
      },
      avgHumidity: { $avg: "$humidity" },
      count: { $sum: 1 }
    }
  },
  { $sort: { "_id.window": 1 } }
])
```

## 4. Última lectura por sensor

```js
// Última lectura de cada sensor
db.sensor_readings.aggregate([
  { $sort: { recordedAt: -1 } },
  {
    $group: {
      _id: "$metadata.sensorId",
      lastReading: { $first: "$temperature" },
      lastAt: { $first: "$recordedAt" }
    }
  }
])
```

## Checklist
- ¿Por qué es importante poner `$match` con `timeField` al inicio del pipeline?
- ¿Qué diferencia hay entre `$dateToString` y `$dateTrunc` para agrupar por período?
- ¿Cómo obtienes el valor máximo de temperatura por sensor en un rango de fechas?
- ¿Cuál operador de group usas para obtener el primer documento de cada grupo ordenado?

## Referencias
- [Time Series Aggregation](https://www.mongodb.com/docs/manual/core/timeseries-collections/#aggregation-on-time-series-collections)
- [$dateTrunc](https://www.mongodb.com/docs/manual/reference/operator/aggregation/dateTrunc/)
- [$dateToString](https://www.mongodb.com/docs/manual/reference/operator/aggregation/dateToString/)
