# Ejercicio 02 — Bucket Pattern y Computed Pattern

## Objetivo

Implementar el patrón **Bucket** para agrupar lecturas de sensores en documentos por hora, y el patrón **Computed** para mantener campos precalculados actualizados en tiempo de escritura.

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

### Paso 1: Crear primer bucket con upsert

El Bucket Pattern agrupa lecturas del mismo sensor y hora en un solo documento. Si el bucket no existe, `upsert: true` lo crea automáticamente:

```js
db.sensor_buckets.updateOne(
  { sensorId: "sensor-A", hour: "2024-05-10T08" },
  {
    $push: { readings: { ts: new Date("2024-05-10T08:05:00Z"), temp: 21.3 } },
    $inc:  { count: 1, sumTemp: 21.3 },
    $min:  { minTemp: 21.3 },
    $max:  { maxTemp: 21.3 }
  },
  { upsert: true }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Agregar más lecturas al mismo bucket

Usamos un `forEach` para agregar 4 lecturas adicionales. Cada operación actualiza los campos estadísticos acumulados:

```js
readings.forEach(reading => {
  db.sensor_buckets.updateOne(
    { sensorId: "sensor-A", hour: "2024-05-10T08" },
    {
      $push: { readings: reading },
      $inc:  { count: 1, sumTemp: reading.temp },
      $min:  { minTemp: reading.temp },
      $max:  { maxTemp: reading.temp }
    },
    { upsert: true }
  )
})
```

Al final, `count` debe ser 5, `minTemp` debe ser 20.8 y `maxTemp` debe ser 24.1.

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 2.

---

### Paso 3: Insertar nueva orden y actualizar campo calculado

Con el Computed Pattern actualizamos el campo precomputado en tiempo de escritura, no de lectura:

```js
// a) Insertar la orden
db.orders_comp.insertOne({ orderId: "ord-999", customerId: "cust-01", amount: Decimal128("250.00"), ... })

// b) Actualizar el campo calculado del cliente
db.customers_comp.updateOne(
  { customerId: "cust-01" },
  { $inc: { orderCount: 1 }, $set: { lastOrderDate: new Date() } }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 3.

---

### Paso 4: Verificar integridad del campo calculado

Comparamos el valor almacenado en `totalRevenue` contra la suma real calculada desde `orders_comp`:

```js
db.orders_comp.aggregate([
  { $match: { customerId: "cust-01", status: "completed" } },
  { $group: { _id: "$customerId", realTotal: { $sum: { $toDouble: "$amount" } }, realCount: { $sum: 1 } } }
])
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 4.

---

## Checklist de verificación

- [ ] ¿El bucket de sensor-A tiene `count: 5` después de los dos pasos?
- [ ] ¿`minTemp` y `maxTemp` reflejan los valores correctos automáticamente?
- [ ] ¿`orderCount` de cust-01 incrementó en 1 tras la nueva orden?
- [ ] ¿Entiendes por qué el campo `totalRevenue` no se recalcula en cada lectura?
