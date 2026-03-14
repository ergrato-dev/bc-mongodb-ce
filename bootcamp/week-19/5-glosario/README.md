# Glosario — Semana 19: Change Streams

Términos ordenados alfabéticamente.

---

**change event**
Documento generado por MongoDB cada vez que ocurre una operación (insert, update,
delete, replace, drop) sobre una colección vigilada. Es el objeto que retorna `cs.next()`.

**Change Stream**
Mecanismo de MongoDB para suscribirse a cambios en una colección, base de datos
o deployment completo en tiempo real. Requiere replica set activo.

**documentKey**
Campo del change event que contiene el `_id` del documento afectado. Presente en
todos los tipos de evento.

**fullDocument**
Campo del change event que contiene el documento completo. Disponible por defecto
en eventos `insert` y `replace`. Para `update`, requiere la opción
`fullDocument: "updateLookup"`.

**fullDocument: "updateLookup"**
Opción de `watch()` que hace que MongoDB busque y adjunte el documento actualizado
completo en eventos de tipo `update`. Ejemplo: `db.col.watch([], { fullDocument: "updateLookup" })`.

**hasNext()**
Método del cursor de Change Stream que retorna `true` si hay un evento disponible.
Bloquea hasta recibir un evento o hasta que se agote el tiempo de espera.

**invalidate**
Tipo de evento que indica que el stream ya no puede enviar más eventos (ocurre
tras un `drop`, `rename` o `dropDatabase`). Cierra el cursor automáticamente.

**next()**
Método del cursor de Change Stream que retorna el siguiente evento. Bloquea
hasta que haya un evento disponible.

**oplog**
Operation log — registro interno de MongoDB en un replica set que almacena
todas las operaciones de escritura en orden. Source de los Change Streams.

**operationType**
Campo del change event que indica el tipo de operación: `"insert"`, `"update"`,
`"replace"`, `"delete"`, `"drop"`, `"rename"`, `"dropDatabase"`, `"invalidate"`.

**pipeline de Change Stream**
Array de etapas de aggregation pasadas a `watch()` para filtrar o transformar
los eventos recibidos. Solo soporta: `$match`, `$project`, `$addFields`,
`$replaceRoot`, `$replaceWith`.

**replace**
Tipo de evento generado por `replaceOne()`. A diferencia de `update`, incluye
`fullDocument` con el documento nuevo completo por defecto.

**resumeAfter**
Opción de `watch()` para reanudar un stream desde justo después de un token
específico. Sintaxis: `db.col.watch([], { resumeAfter: savedToken })`.

**resumeToken**
Valor opaco almacenado en `evt._id` de cada change event. Identifica la posición
del evento en el oplog. Se usa con `resumeAfter` o `startAfter` para reanudar un stream.

**startAfter**
Variante de `resumeAfter` que puede reanudar incluso después de un evento
`invalidate`. Útil cuando el stream fue cerrado por un drop o rename.

**startAtOperationTime**
Opción de `watch()` para reanudar desde un timestamp específico en lugar de
un token. Acepta un objeto `Timestamp`.

**updateDescription**
Campo del change event `update` que describe los cambios aplicados al documento.
Contiene `updatedFields`, `removedFields` y `truncatedArrays`.

**watch()**
Método de MongoDB para abrir un Change Stream sobre una colección, base de datos
o deployment. Retorna un cursor iterable. Requiere replica set activo.
Sintaxis: `db.collection.watch(pipeline, options)`.
