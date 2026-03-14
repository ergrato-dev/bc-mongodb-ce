# Glosario — Semana 16: Validación de Esquemas y Transacciones

Términos clave ordenados alfabéticamente.

---

**abortTransaction**
Método de sesión que cancela todos los cambios realizados dentro de la transacción activa. Ningún cambio se persiste. Se llama en el bloque `catch`.

**ACID**
Propiedades que garantizan la integridad de las transacciones: Atomicity, Consistency, Isolation, Durability.

**Atomicity**
Propiedad que garantiza que todas las operaciones de una transacción se completan o ninguna se aplica.

**bsonType**
Propiedad de `$jsonSchema` que especifica el tipo de dato BSON esperado para un campo. Valores: `"string"`, `"int"`, `"decimal"`, `"bool"`, `"date"`, `"array"`, `"object"`.

**collMod**
Comando que modifica las opciones de una colección existente, incluyendo `validator`, `validationLevel` y `validationAction`. No requiere recrear la colección.

**commitTransaction**
Método de sesión que confirma y persiste todos los cambios de la transacción activa en la base de datos.

**Document failed validation**
Error que MongoDB lanza cuando un documento insertado o actualizado no cumple las reglas del `$jsonSchema` configurado con `validationAction: "error"`.

**endSession**
Libera los recursos de la sesión. Debe llamarse siempre en el bloque `finally` para garantizar que se liberen los locks.

**enum**
Restricción de `$jsonSchema` que limita los valores aceptados de un campo a una lista específica: `enum: ["pending", "completed", "cancelled"]`.

**$jsonSchema**
Operador de MongoDB que permite definir reglas de validación según el estándar JSON Schema Draft 4. Se usa dentro del `validator` de una colección.

**required**
Propiedad de `$jsonSchema` que lista los campos obligatorios de un documento. Si alguno está ausente, la operación falla.

**Snapshot isolation**
Nivel de aislamiento de transacciones en MongoDB: cada transacción ve una fotografía consistente de los datos al inicio de la transacción.

**startSession**
Método de `db.getMongo()` que crea una nueva sesión cliente. Requerida para ejecutar transacciones multi-documento.

**startTransaction**
Método de sesión que inicia el contexto transaccional. A partir de este punto, todas las operaciones con `{ session }` participan en la transacción.

**validator**
Opción de colección en MongoDB que especifica las reglas de validación (generalmente via `$jsonSchema`) que deben cumplir los documentos.

**validationAction**
Define qué hace MongoDB cuando un documento falla la validación: `"error"` (rechaza) o `"warn"` (permite y registra en log).

**validationLevel**
Controla qué documentos se validan: `"strict"` (todos), `"moderate"` (solo los que ya cumplen el esquema), `"off"` (sin validación).
