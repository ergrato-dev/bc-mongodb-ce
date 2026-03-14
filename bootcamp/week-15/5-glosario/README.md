# Glosario — Semana 15: Patrones de Modelado Avanzado

Términos clave de la semana ordenados alfabéticamente.

---

**avgRating**
Campo numérico precomputado que almacena el promedio de valoraciones de un documento. Se actualiza en cada escritura para evitar recalcularlo en lectura. Patrón Computed.

**Bucket Pattern**
Patrón que agrupa documentos de series temporales (lecturas de sensores, eventos) en un solo documento por unidad de tiempo (hora, día). Reduce el número de documentos y habilita estadísticas acumuladas (`count`, `sum`, `min`, `max`).

**Campo computado**
Campo cuyo valor es el resultado de un cálculo (suma, conteo, promedio) que se precalcula y almacena en el documento para evitar el costo de calcularlo en cada consulta.

**Computed Pattern**
Patrón en el que los resultados de operaciones costosas se almacenan como campos en el documento. Las escrituras mantienen actualizado el valor con `$inc` o `$set`.

**Extended Reference Pattern**
Patrón que embebe en un documento los campos más leídos de otro documento relacionado. Evita la necesidad de un `$lookup` en consultas frecuentes. Requiere propagación activa al actualizar la fuente de verdad.

**$inc**
Operador de actualización que incrementa (o decrementa) un campo numérico en el valor indicado. Fundamental en el Computed Pattern para mantener contadores y totales.

**Patrón de modelado**
Solución reutilizable a un problema recurrente de diseño de datos en MongoDB. Ejemplos: Extended Reference, Subset, Bucket, Computed, Polymorphic.

**reviewCount**
Contador que almacena el número total de reseñas de un ítem. Se mantiene con `$inc` al agregar una reseña, evitando un `$count` en cada lectura. Patrón Computed.

**$slice**
Modificador del operador `$push` que limita el tamaño del array resultante. Con valor negativo (ej. `-3`) conserva los últimos N elementos. Clave en el Subset Pattern.

**Subset Pattern**
Patrón que embebe solo un subconjunto de una lista larga (ej. los 3 comentarios más recientes) directamente en el documento principal, dejando el resto en una colección separada.

**topReviews**
Array que contiene las N reseñas más recientes de un ítem, mantenido con `$push` + `$slice: -N`. Representa el Subset Pattern para acceso rápido sin consultar la colección de reseñas completa.

**upsert**
Operación que actualiza un documento si existe, o lo inserta si no existe. Indispensable en el Bucket Pattern para crear o acumular el bucket de una ventana temporal.
