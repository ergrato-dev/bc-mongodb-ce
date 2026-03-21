# Time Series Collections — Crear e Insertar

## Objetivos
1. Crear una Time Series collection con `createCollection()` y sus opciones
2. Entender `timeField`, `metaField` y `granularity`
3. Insertar documentos con el campo de tiempo correcto
4. Configurar `expireAfterSeconds` para TTL automático

---

## 1. Qué es una Time Series Collection

Una colección de series de tiempo es un tipo especial optimizado para datos donde
cada documento representa una **medición en un instante de tiempo**:
lecturas de sensores, precios de acciones, métricas de servidor, logs de eventos.

MongoDB almacena estos documentos con **compresión columnar interna** y aplica
**bucketing automático** por `timeField` → mejor rendimiento en consultas temporales.

## 2. Crear la colección

```js
db.createCollection("sensor_readings", {
  timeseries: {
    timeField: "recordedAt",     // campo Date obligatorio
    metaField: "metadata",       // campo de agrupación/dimensión (opcional pero recomendado)
    granularity: "seconds"       // "seconds" | "minutes" | "hours"
  },
  expireAfterSeconds: 2592000    // 30 días — TTL opcional
})
```

### timeField
Debe contener un valor `Date`. Es el campo por el que MongoDB organiza internamente
los datos. **Obligatorio**.

### metaField
Agrupa documentos del mismo origen (ej: mismo sensor, mismo servidor, mismo usuario).
Usado por MongoDB para crear buckets eficientes. **Opcional pero recomendado**.

### granularity
Indica cada cuánto se espera recibir datos. Controla el tamaño interno de los buckets:

| granularity | Frecuencia típica | Ejemplo |
|---|---|---|
| `"seconds"` | Cada segundos | Sensores IoT, tráfico web |
| `"minutes"` | Cada minutos | Métricas de servidor |
| `"hours"` | Cada horas | Temperatura diaria, ventas |

## 3. Insertar documentos

```js
db.sensor_readings.insertMany([
  {
    recordedAt: new Date("2025-04-01T10:00:00Z"),
    metadata: { sensorId: "sen-001", location: "server-room-A" },
    temperature: 22.5,
    humidity: 45.0
  },
  {
    recordedAt: new Date("2025-04-01T10:00:05Z"),
    metadata: { sensorId: "sen-001", location: "server-room-A" },
    temperature: 22.7,
    humidity: 44.8
  }
])
```

> Una Time Series collection **no acepta** `_id` a nivel de campo de usuario.
> MongoDB lo gestiona internamente.

## Checklist
- ¿Cuál es el único campo obligatorio al crear una Time Series collection?
- ¿Para qué sirve `metaField` en el contexto de bucketing interno?
- ¿Qué `granularity` elegirías para datos de ventas por hora?
- ¿Qué hace `expireAfterSeconds` en una Time Series collection?

## Referencias
- [Time Series Collections — MongoDB Docs](https://www.mongodb.com/docs/manual/core/timeseries-collections/)
- [createCollection timeseries options](https://www.mongodb.com/docs/manual/reference/command/create/)
