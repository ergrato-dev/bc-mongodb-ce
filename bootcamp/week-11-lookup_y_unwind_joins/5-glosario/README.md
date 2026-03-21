# Glosario — Semana 11: $lookup y $unwind

Términos clave de la semana ordenados alfabéticamente.

---

**`$lookup`**
Etapa del Aggregation Pipeline que realiza un "join" entre dos colecciones de la
misma base de datos. Agrega un campo de tipo array al documento con los resultados
coincidentes de la colección externa.

---

**`$unwind`**
Etapa del Aggregation Pipeline que descompone un campo de tipo array: genera un
documento independiente por cada elemento del array. Se usa frecuentemente después
de `$lookup` para aplanar el resultado.

---

**`as`** (en `$lookup`)
Nombre del campo nuevo donde `$lookup` coloca el array con los documentos
coincidentes encontrados en la colección externa.

---

**Colección maestra**
Colección que contiene entidades de referencia estables (productos, usuarios,
categorías). Otros documentos la referencian por `_id` en lugar de duplicar sus datos.

---

**Documento embebido (embed)**
Estrategia de modelado que almacena datos relacionados dentro del mismo documento.
Mejora el rendimiento de lectura al evitar joins, pero aumenta el tamaño del documento.

---

**`foreignField`**
Campo de la colección externa (`from`) usado como clave de unión en `$lookup`.
Corresponde al campo del "lado derecho" del join.

---

**Join**
Operación que combina documentos de dos colecciones basándose en un campo en común.
En MongoDB se implementa con `$lookup` en el Aggregation Pipeline.

---

**`let`** (en `$lookup` con pipeline)
Permite declarar variables locales en `$lookup` avanzado, usando valores del
documento actual para filtrar en el pipeline interno de la colección externa.

---

**`localField`**
Campo del documento actual usado como clave de unión en `$lookup`.
Corresponde al campo del "lado izquierdo" del join.

---

**Pipeline interno** (en `$lookup`)
Versión avanzada de `$lookup` que usa `let` + `pipeline` en lugar de
`localField`/`foreignField`. Permite filtros más complejos en la colección externa.

---

**`preserveNullAndEmptyArrays`**
Opción de `$unwind` que conserva documentos cuyo campo de array es nulo, no existe
o está vacío. Por defecto `$unwind` elimina esos documentos.

---

**Referencia (reference)**
Estrategia de modelado que almacena solo el `_id` de un documento relacionado en
lugar de embeber todos sus datos. Requiere un `$lookup` posterior para obtener
la información completa.
