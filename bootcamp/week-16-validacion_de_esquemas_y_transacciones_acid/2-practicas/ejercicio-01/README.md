# Ejercicio 01 — Validación de Esquemas con `$jsonSchema`

## Objetivo

Definir y aplicar validadores de esquema en MongoDB usando `$jsonSchema`, comprobar que documentos inválidos se rechazan, y agregar validación a colecciones existentes con `collMod`.

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

### Paso 1: Insertar documento inválido

Intenta insertar un producto con `category` fuera del `enum`, `name` muy corto y `price` negativo. El error debe confirmarte que el validator está activo:

```js
try {
  db.validated_products.insertOne({
    productId: "prod-bad", name: "X",
    category: "furniture", price: Decimal128("-10.00"), stock: NumberInt(5)
  })
} catch(e) {
  print("Validación activa: " + e.message)
}
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Omitir un campo requerido

Insertamos sin el campo `stock`, que está en `required`. MongoDB debe rechazarlo:

```js
try {
  db.validated_products.insertOne({
    productId: "prod-nostock", name: "Producto sin stock",
    category: "tools", price: Decimal128("15.00")
  })
} catch(e) {
  print("Campo requerido ausente: " + e.message)
}
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 2.

---

### Paso 3: `collMod` — agregar validación a colección existente

`product_reviews_v` no tiene validación. La agregamos ahora sin perder documentos:

```js
db.runCommand({
  collMod: "product_reviews_v",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["reviewId", "productId", "rating", "userId"],
      properties: {
        rating: { bsonType: "int", minimum: 1, maximum: 5 }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
})
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 3.

---

### Paso 4: Verificar el validator activo

```js
const info = db.runCommand({ listCollections: 1, filter: { name: "validated_products" } })
printjson(info.cursor.firstBatch[0].options.validator)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 4.

---

## Checklist de verificación

- [ ] ¿El Paso 1 devolvió `Document failed validation`?
- [ ] ¿El Paso 2 también rechazó la inserción por campo requerido ausente?
- [ ] ¿`collMod` ejecutó sin errores en el Paso 3?
- [ ] ¿`listCollections` muestra el validator configurado?
