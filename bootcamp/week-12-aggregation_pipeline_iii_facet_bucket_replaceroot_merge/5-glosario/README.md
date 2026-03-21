# Glosario — Semana 12: Aggregation Pipeline III

Términos clave de la semana ordenados alfabéticamente.

---

**`$bucket`**
Etapa del Aggregation Pipeline que clasifica documentos en grupos (buckets)
según rangos numéricos definidos manualmente. Requiere un campo numérico y un
array de `boundaries`. El campo `default` captura documentos fuera de los rangos.

---

**`$bucketAuto`**
Variante de `$bucket` que divide los documentos en N grupos de tamaño similar.
MongoDB calcula automáticamente los límites de cada grupo.

---

**`$facet`**
Etapa del Aggregation Pipeline que ejecuta múltiples sub-pipelines independientes
sobre los mismos documentos de entrada. Devuelve siempre un único documento con
los resultados de cada sub-pipeline agrupados por nombre.

---

**`$merge`**
Etapa final del Aggregation Pipeline que escribe el resultado en una colección
existente. Puede insertar, reemplazar o fusionar documentos. A diferencia de
`$out`, no elimina los documentos existentes.

---

**`$mergeObjects`**
Operador de expresión que combina múltiples objetos en uno. Si hay claves
duplicadas, el último valor sobrescribe al anterior. Se usa frecuentemente
con `$replaceRoot`.

---

**`$out`**
Etapa final del Aggregation Pipeline que escribe el resultado en una colección.
**Elimina y recrea** la colección destino completa. Usar con precaución
si hay datos históricos que conservar.

---

**`$replaceRoot`**
Etapa del Aggregation Pipeline que reemplaza el documento actual por un nuevo
documento. Permite promover un subdocumento embebido a la raíz del resultado.

---

**`$replaceWith`**
Alias más conciso de `$replaceRoot` introducido en MongoDB 4.2.
`{ $replaceWith: "$campo" }` equivale a `{ $replaceRoot: { newRoot: "$campo" } }`.

---

**`boundaries`** (en `$bucket`)
Array de valores numéricos que definen los límites de los buckets en `$bucket`.
Cada bucket cubre el rango `[boundaries[N], boundaries[N+1])`.

---

**ETL (Extract, Transform, Load)**
Proceso de extracción, transformación y carga de datos. En MongoDB,
`$out` y `$merge` permiten implementar el paso "Load" de un pipeline ETL.

---

**Faceted search (búsqueda facetada)**
Patrón de búsqueda que combina resultados paginados con conteos de filtros
disponibles en una sola query. Se implementa con `$facet` en MongoDB.

---

**`whenMatched`** (en `$merge`)
Opción de `$merge` que define el comportamiento cuando un documento del
pipeline ya existe en la colección destino. Valores: `"merge"`, `"replace"`,
`"keepExisting"`, `"fail"`.

---

**`whenNotMatched`** (en `$merge`)
Opción de `$merge` que define el comportamiento cuando un documento del
pipeline no existe en la colección destino. Valores: `"insert"`, `"discard"`, `"fail"`.
