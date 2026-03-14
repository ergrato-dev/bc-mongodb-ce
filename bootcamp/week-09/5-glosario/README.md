# Glosario Semana 09 — Aggregation Pipeline I

| Término | Definición |
|---|---|
| **$avg** | Acumulador de `$group`. Calcula el promedio de un campo en el grupo. |
| **$count** | Acumulador que cuenta los documentos en un `$group`. Alternativa a `{ $sum: 1 }`. |
| **$group** | Etapa del pipeline que agrupa documentos por un campo (`_id`) y aplica acumuladores. |
| **$limit** | Etapa que retiene solo los primeros N documentos del pipeline. |
| **$match** | Etapa que filtra documentos usando los mismos operadores que `find()`. |
| **$max** | Acumulador que retorna el valor máximo del campo en el grupo. |
| **$min** | Acumulador que retorna el valor mínimo del campo en el grupo. |
| **pipeline** | Array de etapas de transformación en `aggregate()`. Cada etapa recibe la salida de la anterior. |
| **$project** | Etapa que selecciona, excluye y calcula campos de los documentos. |
| **$skip** | Etapa que descarta los primeros N documentos. Usada con `$limit` para paginación. |
| **$sort** | Etapa que ordena documentos. `1` = ascendente, `-1` = descendente. |
| **$sum** | Acumulador de `$group`. `{ $sum: 1 }` cuenta docs; `{ $sum: "$campo" }` suma valores. |
| **$toDouble** | Expresión de conversión. Convierte `Decimal128` a `Double` para operaciones aritméticas. |
| **etapa** | Cada objeto dentro del array de `aggregate()`. Ej: `{ $match: ... }` es una etapa. |
