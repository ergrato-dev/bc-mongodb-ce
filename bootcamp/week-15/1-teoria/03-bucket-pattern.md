# 03 — Patrón Bucket

## Objetivos

- Entender el problema de insertar un documento por cada evento (IoT, logs, sensores)
- Crear documentos "cubo" que agrupan N mediciones por período o dispositivo
- Insertar mediciones con `$push` e `$inc` en un solo `updateOne` con `upsert`
- Calcular agregaciones directamente desde los cubos sin pipeline complejo

## Diagrama

![Bucket y Computed](../0-assets/02-bucket-computed.svg)

---

## 1. El problema: un documento por medición

Con sensores IoT que reportan cada segundo, en 1 hora se crean 3,600 documentos
por sensor. En un año, con 100 sensores: 315 millones de documentos.

```js
// ❌ Sin Bucket — un doc por lectura
{ sensorId: "s01", temp: 22.5, ts: ISODate("2024-01-01T00:00:01Z") }
{ sensorId: "s01", temp: 22.6, ts: ISODate("2024-01-01T00:00:02Z") }
// ... 3598 documentos más por hora y sensor
```

---

## 2. La solución: agrupar N mediciones en un cubo

```js
// ✅ Patrón Bucket — un documento por hora y sensor
{
  sensorId: "s01",
  hour: "2024-01-01T00",
  readings: [
    { ts: ISODate("2024-01-01T00:00:01Z"), temp: 22.5 },
    { ts: ISODate("2024-01-01T00:00:02Z"), temp: 22.6 }
    // ... hasta ~60 lecturas
  ],
  count: 60,
  minTemp: 22.1,
  maxTemp: 22.9,
  sumTemp: 1347.0  // para calcular promedio
}
```

---

## 3. Insertar en un cubo existente o crear uno nuevo (`upsert`)

```js
// Insertar una nueva medición en el cubo de la hora actual
db.sensor_buckets.updateOne(
  {
    sensorId: "s01",
    hour: "2024-01-01T00"
  },
  {
    $push: {
      readings: { ts: new Date(), temp: 22.7 }
    },
    $inc: { count: 1, sumTemp: 22.7 },
    $min: { minTemp: 22.7 },
    $max: { maxTemp: 22.7 }
  },
  { upsert: true }
)
```

---

## 4. Cuándo usar Bucket

- Series de tiempo (sensores, logs, clics, eventos)
- Máximo de N elementos por cubo (60 lecturas/hora, 24 horas/día)
- Se calculan agregados por cubo (min, max, sum, count)
- Las lecturas raramente se eliminan individualmente

---

## Checklist

- [ ] ¿Qué campo y período define el "cubo" en tu dominio?
- [ ] ¿Cuántos elementos máximos caben en un cubo?
- [ ] ¿Qué campos de agregado mantienes en el cubo (min, max, sum)?
- [ ] ¿Qué ventaja tiene el cubo vs un documento por evento para el pipeline?

## Referencias

- [Bucket Pattern — MongoDB Blog](https://www.mongodb.com/blog/post/building-with-patterns-the-bucket-pattern)
- [Time Series with Bucket Pattern](https://www.mongodb.com/developer/products/mongodb/bucket-pattern/)
