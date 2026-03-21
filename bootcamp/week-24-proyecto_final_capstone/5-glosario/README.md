# Glosario — Semana 24: Proyecto Final Capstone

Repaso y consolidación de términos clave del bootcamp, ordenados alfabéticamente.

---

## A

**ACID**
Propiedades que garantizan la fiabilidad de las transacciones de base de datos:
Atomicidad, Consistencia, Aislamiento y Durabilidad. MongoDB ofrece ACID completo
en transacciones multi-documento desde la versión 4.0.

**Atlas**
Servicio gestionado en la nube de MongoDB. Ofrece Replica Sets, backups
automáticos, escalado y características avanzadas como Atlas Search y Triggers.
M0 (Free Tier) es gratuito para desarrollo.

**Atomicidad**
Propiedad ACID que garantiza que todas las operaciones de una transacción se
aplican o ninguna. Si cualquier operación falla, todas se revierten.

---

## B

**Bucket Pattern**
Patrón de diseño que agrupa múltiples documentos de eventos o series temporales
en un solo documento con un array de registros. Reduce el número de documentos
y mejora consultas de rangos de tiempo.

---

## C

**Change Stream**
Mecanismo de MongoDB que permite suscribirse a cambios en una colección,
base de datos o clúster en tiempo real. Requiere Replica Set. Se usa con
`collection.watch()` en Node.js.

**Computed Pattern**
Patrón que pre-calcula valores derivados en el momento de la escritura y los
almacena en documentos dedicados. Evita pipelines de agregación costosos en
lecturas frecuentes (dashboards, reportes).

**Covered Query**
Consulta que puede ser respondida completamente con un índice sin necesidad
de acceder a los documentos. Se identifica cuando `totalDocsExamined: 0`
en `explain("executionStats")`.

---

## E

**ESR Rule**
Regla para ordenar campos en índices compuestos: primero campos de
**E**quality, luego **S**ort, luego **R**ange. Garantiza el máximo
aprovechamiento del índice.

**explain("executionStats")**
Método de MongoDB que retorna el plan de ejecución de una query con métricas
detalladas: `totalDocsExamined`, `totalKeysExamined`, `stage` (IXSCAN vs COLLSCAN),
`executionTimeMillis`.

**Extended Reference Pattern**
Patrón que copia los campos más leídos de un documento referenciado directamente
en el documento que los necesita. Evita `$lookup` en lecturas frecuentes.
Solo los campos estables deben copiarse.

---

## I

**Índice parcial**
Índice que solo incluye los documentos que cumplen una `partialFilterExpression`.
Reduce el tamaño del índice y mejora el rendimiento de escrituras.

**Índice TTL**
(Time To Live) Índice especial en un campo `Date` que elimina automáticamente
los documentos cuando el campo supera el tiempo configurado en
`expireAfterSeconds`.

---

## O

**Oplog**
(Operations Log) Colección especial en `local.oplog.rs` que registra todas
las operaciones de escritura en el Replica Set. Los secundarios se sincronizan
con el primario leyendo el oplog.

---

## P

**Pipeline de agregación**
Secuencia de etapas (`$match`, `$group`, `$lookup`, `$sort`, etc.) que
transforman documentos de una colección. Es el mecanismo principal de análisis
y transformación de datos en MongoDB.

**Partial Index**
Ver **Índice parcial**.

---

## R

**Replica Set**
Grupo de servidores MongoDB que mantienen el mismo conjunto de datos para
alta disponibilidad. Compuesto por un Primary y uno o más Secondaries, más
opcionalmente un Arbiter.

**RBAC**
(Role-Based Access Control) Modelo de autorización de MongoDB donde los
permisos se asignan a roles y los roles se asignan a usuarios. Roles comunes:
`read`, `readWrite`, `dbAdmin`, `dbOwner`.

---

## S

**Session**
Objeto que representa un contexto lógico de operaciones en MongoDB. Requerido
para iniciar transacciones. Se crea con `client.startSession()` y debe
terminarse con `session.endSession()`.

---

## T

**Transacción multi-documento**
Operación que garantiza atomicidad sobre múltiples documentos o colecciones.
Implementada en MongoDB desde la versión 4.0 con `session.withTransaction()`.

---

## W

**withTransaction()**
Método del driver Node.js que ejecuta una función dentro de una transacción,
con retry automático para `TransientTransactionError` y
`UnknownTransactionCommitResult`. Maneja el commit y el abort automáticamente.

**Write Concern**
Nivel de confirmación de escritura: `w:1` (primario), `w:"majority"` (mayoría
del Replica Set), `j:true` (journal en disco). Mayor `w` = mayor durabilidad,
menor rendimiento.
