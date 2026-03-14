# Transacciones Multi-documento con Node.js

> MongoDB 7.0 — Semana 24

## Objetivos

- Ejecutar transacciones ACID con sesiones de MongoDB
- Usar `withTransaction()` para manejo automático de retry
- Identificar cuándo las transacciones son necesarias

## 1. Cuándo usar transacciones

Úsalas cuando una operación lógica modifica **más de un documento** y necesitas
garantizar que todas se apliquen o ninguna:

- Transferencia de fondos entre dos cuentas
- Crear una orden y descontar stock simultáneamente
- Registrar un evento y actualizar estadísticas agregadas

## 2. Patrón con withTransaction()

```js
import { MongoClient } from "mongodb"

const client = new MongoClient(uri)
await client.connect()

const session = client.startSession()
try {
  await session.withTransaction(async () => {
    const orders = client.db("bootcamp_db").collection("orders")
    const inventory = client.db("bootcamp_db").collection("inventory")

    await orders.insertOne(
      { orderId: "ORD-100", productId: "P-01", qty: 2 },
      { session }
    )
    await inventory.updateOne(
      { productId: "P-01" },
      { $inc: { stock: -2 } },
      { session }
    )
  })
  console.log("Transacción completada")
} catch (err) {
  console.error("Transacción abortada:", err.message)
} finally {
  await session.endSession()
  await client.close()
}
```

`withTransaction()` reintenta automáticamente si ocurre un `TransientTransactionError`.

## 3. Consideraciones de rendimiento

- Las transacciones tienen overhead: úsalas solo cuando son necesarias
- Mantén las transacciones cortas (< 60 segundos, límite de MongoDB)
- Requieren Replica Set o Sharded Cluster (single-node rs0 es válido)
- Los índices importan: las lecturas dentro de la transacción también deben estar indexadas

## 4. writeConcern en transacciones

```js
// La transacción hereda el writeConcern del cliente o se puede especificar:
await session.withTransaction(async () => { ... }, {
  writeConcern: { w: "majority" },
  readConcern: { level: "snapshot" }
})
```

## Checklist

1. ¿Qué garantías ACID provee `withTransaction()`?
2. ¿Por qué las transacciones requieren un Replica Set?
3. ¿Qué pasa si una operación dentro de la transacción falla?
4. ¿Cuál es el límite de tiempo para una transacción en MongoDB?

## Referencias

- https://www.mongodb.com/docs/manual/core/transactions/
- https://www.mongodb.com/docs/drivers/node/current/fundamentals/transactions/
