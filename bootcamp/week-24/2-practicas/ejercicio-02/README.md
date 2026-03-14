# Ejercicio 02 — Transacciones Multi-documento con Node.js

## Prerequisitos

```bash
cd bootcamp/week-24 && npm install
```

## Cómo ejecutar

1. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < 2-practicas/ejercicio-02/starter/setup.js
   ```
2. Ejecuta el script Node.js:
   ```bash
   node 2-practicas/ejercicio-02/starter/ejercicio.js
   ```

---

## Pasos del Ejercicio

### Paso 1: Transferencia con withTransaction()

`withTransaction()` garantiza que las dos actualizaciones (débito y crédito) y
el registro de la transacción se apliquen como una unidad atómica. Si cualquiera
falla, todo se revierte:

```js
await session.withTransaction(async () => {
  await accounts.updateOne({ accountId: "ACC-001" }, { $inc: { balance: -200 } }, { session })
  await accounts.updateOne({ accountId: "ACC-002" }, { $inc: { balance: 200 } }, { session })
  await txns.insertOne({ from: "ACC-001", to: "ACC-002", amount: 200 }, { session })
})
```

**Descomenta `paso1_transferencia()`.**

---

### Paso 2: Verificar saldos

Consulta los saldos para confirmar que la transferencia aplicó correctamente.
ACC-001 debe bajar a `$1300` y ACC-002 subir a `$1000`.

**Descomenta `paso2_verificarSaldos()`.**

---

### Paso 3: Pipeline de auditoría

Agrupa el historial de `transactions` por tipo para un reporte de auditoría:

```js
const resumen = await txns.aggregate([
  { $group: { _id: "$type", totalOperaciones: { $sum: 1 }, montoTotal: { $sum: "$amount" } } }
]).toArray()
```

**Descomenta `paso3_auditoria()`.**

---

### Paso 4: Rollback automático

Cuando se lanza un error dentro de `withTransaction()`, MongoDB revierte
automáticamente todas las operaciones de esa transacción. Los saldos deben
permanecer igual que antes del PASO 4.

**Descomenta `paso4_rollback()`.**
