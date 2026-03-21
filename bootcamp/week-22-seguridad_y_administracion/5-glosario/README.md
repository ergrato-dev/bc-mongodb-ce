# Glosario — Semana 22: Seguridad y Administración

Términos clave de MongoDB ordenados alfabéticamente.

---

## A

**Autenticación** — Proceso de verificar la identidad de un usuario antes de permitir acceso a MongoDB. Soporta SCRAM-SHA-256 (default), x.509, LDAP y Kerberos.

**Autorización** — Control de qué acciones puede realizar un usuario autenticado. En MongoDB se implementa con RBAC.

---

## B

**Backup** — Copia de seguridad de los datos de MongoDB. Puede ser lógica (`mongodump`) o física (snapshots de volumen).

---

## C

**collMod** — Comando de MongoDB para modificar opciones de una colección existente, incluyendo el validador `$jsonSchema`.

---

## D

**dbAdmin** — Rol built-in que permite administración operativa: `createIndex`, `dropIndex`, `dbStats`, `reIndex`, `validate`. No permite leer documentos de usuario.

**dbOwner** — Rol que combina `readWrite` + `dbAdmin` + `userAdmin`. Control total sobre una base de datos específica.

---

## E

**enum** — Restricción en `$jsonSchema` que limita los valores de un campo a una lista predefinida. Ej: `enum: ["active", "inactive"]`.

---

## J

**$jsonSchema** — Operador de MongoDB que define un validador de esquema del lado servidor. Permite especificar `required`, `bsonType`, `minLength`, `minimum`, `enum`, `pattern` y más.

---

## M

**Mínimo Privilegio** — Principio de seguridad: otorgar a cada usuario solo los permisos estrictamente necesarios para su función. Reduce la superficie de ataque.

**mongodump** — Herramienta de línea de comandos que exporta una base de datos MongoDB en formato BSON. Produce archivos `.bson` y `.metadata.json`.

**mongorestore** — Herramienta que restaura datos de un backup generado por `mongodump`.

---

## P

**pattern** — Restricción en `$jsonSchema` que valida strings con una expresión regular. Ej: `pattern: "^.+@.+$"` para emails.

---

## R

**RBAC (Role-Based Access Control)** — Modelo de seguridad donde los permisos se agrupan en roles y los roles se asignan a usuarios.

**read** — Rol built-in de solo lectura: `find`, `listCollections`, `listIndexes`. Sin capacidad de escritura.

**readWrite** — Rol built-in que incluye `read` más operaciones de escritura: `insert`, `update`, `delete`, `createIndex`.

**required** — Campo de `$jsonSchema` que lista los campos obligatorios en un documento. Un insert sin esos campos genera un error de validación.

---

## U

**userAdmin** — Rol que permite gestionar usuarios: `createUser`, `dropUser`, `grantRolesToUser`, `revokeRolesFromUser`. No incluye acceso a datos.

---

## V

**validationAction** — Opción del validador de colección que define el comportamiento ante documentos inválidos: `"error"` rechaza la operación, `"warn"` la permite pero registra advertencia.

**validationLevel** — Controla a qué documentos se aplica la validación: `"strict"` (todos), `"moderate"` (solo inserts y updates de documentos que ya cumplen el esquema), `"off"` (desactivado).
