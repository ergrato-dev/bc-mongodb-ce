# Ejercicio 02 — Transacciones ACID Multi-Documento

## Objetivo

Implementar transacciones multi-documento en MongoDB usando sesiones, probando tanto el flujo exitoso (`commitTransaction`) como el aborto (`abortTransaction`) ante condiciones de negocio no cumplidas.

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

### Paso 1: Transferencia bancaria exitosa

Transferimos $300 de `acc-001` (saldo $2500) a `acc-002`. Ambos `updateOne` deben completarse en la misma transacción:

```js
const session = db.getMongo().startSession()
session.startTransaction()
try {
  const accounts = session.getDatabase("bootcamp_db").bank_accounts
  accounts.updateOne({ accountId: "acc-001" }, { $inc: { balance: Decimal128("-300.00") } }, { session })
  accounts.updateOne({ accountId: "acc-002" }, { $inc: { balance: Decimal128("300.00") } }, { session })
  session.commitTransaction()
} catch(e) {
  session.abortTransaction()
} finally {
  session.endSession()
}
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Transacción abortada — saldo insuficiente

`acc-003` solo tiene $150 y quiere transferir $500. Validamos antes de operar y abortamos si no se cumple la condición:

```js
const source = accounts.findOne({ accountId: "acc-003" }, { session })
if (parseFloat(source.balance.toString()) < 500) {
  throw new Error("Saldo insuficiente")
}
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 2.

---

### Paso 3: Orden de compra + decremento de stock

Creamos una orden y decrementamos el stock de `item-001` en la misma transacción. Si el `insertOne` o el `updateOne` fallan, ninguno persiste:

```js
orders.insertOne({ orderId: "po-001", itemId: "item-001", quantity: 3, ... }, { session })
items.updateOne({ itemId: "item-001" }, { $inc: { stock: -3 } }, { session })
session.commitTransaction()
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 3.

---

### Paso 4: Verificar resultados

Consulta los saldos, el stock y la orden creada para confirmar que los cambios persisten correctamente.

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 4.

---

## Checklist de verificación

- [ ] ¿El Paso 1 actualizó los saldos de ambas cuentas correctamente?
- [ ] ¿El Paso 2 abortó la transacción y los saldos no cambiaron?
- [ ] ¿El stock de `item-001` bajó de 25 a 22 después del Paso 3?
- [ ] ¿Todas las sesiones terminan con `endSession()` incluso cuando hay error?
