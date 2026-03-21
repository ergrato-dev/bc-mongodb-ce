# Glosario — Semana 18

## A

**Atributos heterogéneos**: Campos cuya presencia varía de un documento a otro
dentro de la misma colección. El patrón Attribute los normaliza en arrays `{k, v}`.

**Attribute pattern**: Patrón de modelado que almacena atributos variables como
un array de objetos `{ k: "nombre", v: valor }`, permitiendo indexarlos con un
único índice multikey.

## C

**currentVersion**: Campo numérico en el patrón Document Versioning que indica
la versión actual del documento principal. Se incrementa con `$inc` en cada update.

## D

**Discriminador**: Campo que identifica el subtipo de un documento en una colección
polimórfica. Ejemplo: `vehicleType: "car"` vs `"truck"`.

**Document Versioning**: Patrón que mantiene el historial completo de un documento
archivando cada versión anterior en una colección `*_history`.

## E

**$elemMatch**: Operador de query que garantiza que todos los campos de la condición
pertenezcan al **mismo** elemento de un array. Esencial para consultas en arrays de objetos.

## I

**Índice multikey**: Índice sobre un campo de tipo array. MongoDB crea una entrada
por cada elemento del array. Permite búsquedas eficientes dentro de arrays de objetos.

## L

**Lazy migration**: Estrategia de migración de esquema donde los documentos
se actualizan al formato nuevo la próxima vez que son leídos o escritos,
en lugar de migrar masivamente todos de una vez.

## P

**Polymorphic pattern**: Patrón de modelado que almacena entidades de diferentes
tipos en una misma colección, usando un campo discriminador para diferenciarlos.

## S

**schemaVersion**: Campo que indica la versión del esquema de un documento.
Permite la coexistencia de distintas versiones sin downtime.

**Schema Versioning**: Patrón que agrega `schemaVersion` para gestionar la
evolución del esquema de manera incremental sin migraciones masivas.

**sparse index**: Índice que solo incluye documentos que tienen el campo indexado.
Ideal para campos opcionales en colecciones polimórficas.

## V

**`$unset` en pipeline**: Etapa de aggregation pipeline update que elimina un campo
de un documento. Se usa en migraciones para remover campos del esquema antiguo.
