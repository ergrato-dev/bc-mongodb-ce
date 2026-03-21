# 02 — Modificar Esquemas con `collMod`

## Objetivos

- Actualizar el `validator` de una colección existente con `collMod`
- Listar y revisar validadores activos con `listCollections`
- Desactivar la validación temporalmente

## 1. ¿Por qué `collMod`?

Cuando la colección ya existe y tiene datos, no podemos usar `createCollection`. Usamos `collMod` para actualizar o agregar el validator sin perder documentos:

```js
// Agregar o reemplazar el validator de una colección existente
db.runCommand({
  collMod: "orders",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["orderId", "customerId", "amount", "status"],
      properties: {
        orderId:    { bsonType: "string" },
        customerId: { bsonType: "string" },
        amount:     { bsonType: "decimal", minimum: 0 },
        status:     { bsonType: "string", enum: ["pending", "completed", "cancelled"] },
        createdAt:  { bsonType: "date" }
      }
    }
  },
  validationLevel:  "strict",
  validationAction: "error"
})
```

## 2. Revisar el validator activo

```js
// Listar colecciones con su información de validación
db.runCommand({ listCollections: 1, filter: { name: "orders" } })
```

El resultado incluye `options.validator` si la colección tiene validación activa.

## 3. Desactivar la validación

```js
// Desactivar validación (útil para migraciones de datos)
db.runCommand({
  collMod: "orders",
  validationLevel: "off"
})
```

## 4. `enum` para valores permitidos

```js
properties: {
  status: {
    bsonType: "string",
    enum: ["pending", "processing", "completed", "cancelled"],
    description: "Solo estos valores son válidos"
  }
}
```

## Checklist

- [ ] ¿Qué diferencia hay entre `createCollection` con validator y `collMod`?
- [ ] ¿Cómo verificas que el validator se aplicó correctamente?
- [ ] ¿Puedes definir valores permitidos con `enum`?
- [ ] ¿Cuándo usarías `validationLevel: "off"` y por qué es riesgoso?

## Referencias

- [collMod — MongoDB Docs](https://www.mongodb.com/docs/manual/reference/command/collMod/)
- [listCollections — MongoDB Docs](https://www.mongodb.com/docs/manual/reference/command/listCollections/)
