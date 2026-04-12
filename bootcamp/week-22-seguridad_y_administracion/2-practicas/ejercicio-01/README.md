# Ejercicio 01 — RBAC: Crear y Gestionar Usuarios

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
4. Copia y ejecuta cada sección de `starter/ejercicio.js`

---

## Pasos del Ejercicio

### Paso 1: Crear usuario de solo lectura

El rol `read` permite `find`, `listCollections` y `listIndexes`, pero no escrituras. Es perfecto para dashboards o sistemas de reportes:

```js
db.createUser({
  user: "catalog_reader",
  pwd: "Reader2025!",
  roles: [{ role: "read", db: "bootcamp_db" }]
})
db.getUser("catalog_reader")
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 1.

---

### Paso 2: Crear usuario de lectura y escritura

El rol `readWrite` agrega capacidad de `insertOne`, `updateOne`, `deleteOne` y `createIndex` sobre la BD asignada:

```js
db.createUser({
  user: "catalog_writer",
  pwd: "Writer2025!",
  roles: [{ role: "readWrite", db: "bootcamp_db" }]
})
db.getUsers()
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 2.

---

### Paso 3: Otorgar rol adicional

`grantRolesToUser()` agrega roles sin eliminar los existentes. El rol `dbAdmin` permite gestionar índices y estadísticas:

```js
db.grantRolesToUser(
  "catalog_writer",
  [{ role: "dbAdmin", db: "bootcamp_db" }]
)
db.getUser("catalog_writer")
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 3.

---

### Paso 4: Revocar rol y eliminar usuario

`revokeRolesFromUser()` quita un rol específico manteniendo los demás:

```js
db.revokeRolesFromUser("catalog_writer", [{ role: "dbAdmin", db: "bootcamp_db" }])
db.dropUser("catalog_reader")
db.getUsers()
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 4.
