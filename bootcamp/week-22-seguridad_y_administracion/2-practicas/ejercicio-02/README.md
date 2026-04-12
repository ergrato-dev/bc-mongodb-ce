# Ejercicio 02 — $jsonSchema y Validación de Esquemas

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Crea la colección con el validador:
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

### Paso 1: Insertar documento válido

El validador `$jsonSchema` permite el insert cuando todos los campos requeridos están presentes con los tipos correctos:

```js
db.employees.insertOne({
  firstName: "Laura",
  lastName: "Gómez",
  email: "laura.gomez@example.com",
  salary: Decimal128("4500.00"),
  department: "engineering",
  isActive: true
})
```

El resultado debe ser `{ acknowledged: true, insertedId: ObjectId(...) }`.

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 1.

---

### Paso 2: Intentar insertar documento inválido

MongoDB rechaza el documento con un error detallado que indica qué regla del esquema falló:

```js
db.employees.insertOne({
  firstName: "X",         // minLength: 2 → falla
  salary: Decimal128("-100.00"),  // minimum: 0 → falla
  department: "marketing"         // no está en enum → falla
})
// → MongoServerError: Document failed validation
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 2.

---

### Paso 3: Campo requerido faltante

Si falta un campo que está en `required[]`, MongoDB también rechaza la inserción:

```js
db.employees.insertOne({
  firstName: "Carlos",
  lastName: "Torres",
  email: "carlos@example.com",
  salary: Decimal128("3200.00")
  // 'department' faltante
})
// → Error: required property "department" is missing
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 3.

---

### Paso 4: Inspeccionar el validador

Puedes ver el validador activo de una colección con:

```js
db.getCollectionInfos({ name: "employees" })[0].options.validator
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 4.
