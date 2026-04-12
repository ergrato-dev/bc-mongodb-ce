# Ejercicio 02 — Schema Versioning + Document Versioning

## Objetivo

Gestionar la evolución del esquema con `schemaVersion` y migración lazy,
y mantener historial de versiones de documentos en una colección separada.

## Cómo ejecutar

1. Carga los datos:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
2. Conecta:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

### Paso 1: Detectar coexistencia de versiones

La colección `contacts` tiene documentos v1 (sin `schemaVersion`) y v2.

```js
db.contacts.countDocuments({ schemaVersion: { $exists: false } })  // → 2
db.contacts.countDocuments({ schemaVersion: 2 })                    // → 2
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 1.

---

### Paso 2: Migración lazy batch

Usa un aggregation pipeline update para convertir todos los v1 a v2.
El campo `phone` (string) se convierte en `phones` (array).

```js
db.contacts.updateMany(
  { schemaVersion: { $exists: false } },
  [ { $set: { schemaVersion: 2, phones: ["$phone"] } }, { $unset: "phone" } ]
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 2.

---

### Paso 3: Document Versioning — archivar al actualizar

Al cambiar el precio de un ítem, primero copia la versión actual a
`catalog_items_history`, luego actualiza e incrementa `currentVersion`.

```js
const current = db.catalog_items.findOne({ itemId: "itm-001" })
db.catalog_items_history.insertOne({ ...current, archivedAt: new Date() })
db.catalog_items.updateOne(
  { itemId: "itm-001" },
  { $set: { price: Decimal128("129.99") }, $inc: { currentVersion: 1 } }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 3.

---

### Paso 4: Consultar historial de versiones

```js
db.catalog_items_history.find(
  { itemId: "itm-001" },
  { version: 1, price: 1, archivedAt: 1, _id: 0 }
).sort({ version: 1 })
```

Debería mostrar 2 entradas en el historial y la versión actual con `currentVersion: 3`.

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 4.
