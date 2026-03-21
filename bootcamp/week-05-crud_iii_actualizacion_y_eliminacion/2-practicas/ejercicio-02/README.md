# Ejercicio 02 — $push, $addToSet, $pull, deleteOne, findOneAndUpdate

Semana 05 · CRUD III — Actualización y Eliminación

## Objetivo

Practicar la manipulación de arrays en documentos con `$push`,
`$addToSet` y `$pull`, y gestionar la eliminación de documentos
con `deleteOne` y el patrón de soft delete.

## Cómo ejecutar

1. Asegúrate de haber cargado los datos del ejercicio-01:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < ../ejercicio-01/starter/setup.js
   ```
2. Abre mongosh:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
3. Copia y ejecuta las queries de `starter/ejercicio.js` descomentando
   cada sección.

---

## Paso 1: $push — Agrega al array (duplicados permitidos)

`$push` siempre inserta el valor, incluso si ya existe:

```js
db.inventory.updateOne(
  { name: "Mechanical Keyboard" },
  { $push: { tags: "bestseller" } }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 1.

---

## Paso 2: $addToSet — Solo agrega si no existe

`$addToSet` garantiza que no haya duplicados en el array:

```js
db.inventory.updateOne(
  { name: "Wireless Mouse" },
  { $addToSet: { tags: "wireless" } }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 2.

---

## Paso 3: $pull — Elimina elementos del array

`$pull` elimina por valor o por condición todas las ocurrencias coincidentes:

```js
db.inventory.updateOne(
  { name: "USB Mouse Basic" },
  { $pull: { tags: "basic" } }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 3.

---

## Paso 4: deleteOne y findOneAndUpdate

Elimina un documento o usa soft delete para preservar el historial.
`findOneAndUpdate` retorna el documento actualizado en una sola operación atómica:

```js
// Soft delete
db.inventory.updateOne(
  { name: "Keyboard Wireless" },
  { $set: { isDeleted: true, deletedAt: new Date() } }
)

// Retorna el documento después de la actualización
db.inventory.findOneAndUpdate(
  { name: "SSD External 1TB" },
  { $inc: { stock: NumberInt(-3) } },
  { returnDocument: "after" }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 4.
