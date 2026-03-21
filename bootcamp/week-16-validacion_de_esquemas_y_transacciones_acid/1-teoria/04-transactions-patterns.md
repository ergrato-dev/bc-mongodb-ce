# 04 — Cuándo Usar Transacciones

## Objetivos

- Distinguir entre atomicidad de documento único y transacciones multi-documento
- Reconocer los casos de uso que justifican una transacción
- Entender el impacto en rendimiento

## 1. Operación atómica vs. transacción

MongoDB garantiza atomicidad **por defecto** en operaciones sobre un solo documento:

```js
// Atómico sin transacción — todo o nada en el mismo documento
db.accounts.updateOne(
  { accountId: "acc-01" },
  { $inc: { balance: -500 }, $push: { movements: { type: "debit", amount: 500 } } }
)
```

Una transacción es necesaria cuando la operación involucra **múltiples documentos o colecciones**:

```js
// Necesita transacción: debitar cuenta A y acreditar cuenta B
session.startTransaction()
db.accounts.updateOne({ accountId: "acc-01" }, { $inc: { balance: -500 } }, { session })
db.accounts.updateOne({ accountId: "acc-02" }, { $inc: { balance: +500 } }, { session })
session.commitTransaction()
```

## 2. Casos de uso comunes

| Caso | ¿Transacción? |
|---|---|
| Actualizar varios campos de un documento | ❌ No necesaria |
| Insertar orden + decrementar stock | ✅ Recomendada |
| Transferencia entre dos cuentas | ✅ Necesaria |
| Insertar documento con subdocumentos | ❌ No necesaria |
| Registrar pago + actualizar saldo + crear factura | ✅ Necesaria |

## 3. Impacto en rendimiento

- Las transacciones adquieren **locks** a nivel de documento durante su ejecución
- El tiempo de ejecución tiene un límite de **60 segundos** por defecto
- Aumentan la latencia de escritura; evitar para operaciones de un solo documento
- Si es posible, diseñar el modelo de datos para evitar transacciones (Embed > Reference)

## 4. Buenas prácticas

```js
// Siempre usar try/catch/finally
const session = db.getMongo().startSession()
session.startTransaction()
try {
  // operaciones...
  session.commitTransaction()
} catch(e) {
  session.abortTransaction()
  throw e
} finally {
  session.endSession()   // liberar recursos siempre
}
```

## Checklist

- [ ] ¿Cuándo es suficiente con la atomicidad de documento único?
- [ ] ¿Qué operaciones del mundo real requieren transacciones?
- [ ] ¿Cuál es el beneficio de diseñar el esquema para evitar transacciones?
- [ ] ¿Qué riesgo existe si no incluyes `session.endSession()` en `finally`?

## Referencias

- [Production Considerations for Transactions](https://www.mongodb.com/docs/manual/core/transactions-production-consideration/)
- [Transactions and Operations — MongoDB Docs](https://www.mongodb.com/docs/manual/core/transactions-operations/)
