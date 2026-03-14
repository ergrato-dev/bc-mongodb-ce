# 03. Validación de Esquemas con $jsonSchema

> **Semana 22 · Etapa 2 · MongoDB 7.0**
> Referencia visual: `../0-assets/02-jsonschema-validation.svg`

## Objetivos

- Crear colecciones con validación del lado servidor
- Definir campos requeridos, tipos BSON y restricciones con `$jsonSchema`
- Manejar `validationAction` (`error` vs `warn`)

---

## 1. ¿Por qué Validar en el Servidor?

MongoDB es schema-flexible, pero en producción conviene garantizar estructura mínima. `$jsonSchema` rechaza documentos inválidos **antes** de que lleguen a la colección.

---

## 2. Crear una Colección con Validador

```js
db.createCollection("employees", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["firstName", "lastName", "email", "salary"],
      properties: {
        firstName: { bsonType: "string", minLength: 2 },
        lastName:  { bsonType: "string", minLength: 2 },
        email:     { bsonType: "string", pattern: "^.+@.+$" },
        salary:    { bsonType: "decimal", minimum: 0 },
        isActive:  { bsonType: "bool" },
        department: {
          enum: ["engineering", "sales", "hr", "finance"]
        }
      }
    }
  },
  validationAction: "error"
})
```

---

## 3. validationAction

| Valor | Comportamiento |
|-------|---------------|
| `"error"` | Rechaza la operación — el cliente recibe error (default) |
| `"warn"` | Permite la operación pero registra advertencia en el log |

---

## 4. Modificar el Validador en una Colección Existente

```js
// Actualizar el validador de una colección ya existente
db.runCommand({
  collMod: "employees",
  validator: { $jsonSchema: { /* nuevo esquema */ } },
  validationLevel: "strict"
})
```

> `validationLevel: "off"` desactiva la validación temporalmente para importaciones masivas.

---

## Checklist

- [ ] ¿Qué hace `required` en un `$jsonSchema`?
- [ ] ¿Cuál es la diferencia entre `validationAction: "error"` y `"warn"`?
- [ ] ¿Cómo validar el formato de un email con `$jsonSchema`?
- [ ] ¿Cómo se modifica el validador de una colección existente?

## Referencias

- [$jsonSchema — MongoDB Docs](https://www.mongodb.com/docs/manual/reference/operator/query/jsonSchema/)
- [Schema Validation](https://www.mongodb.com/docs/manual/core/schema-validation/)
