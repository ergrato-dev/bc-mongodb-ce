# Glosario Semana 07 — Índices Básicos y explain()

| Término | Definición |
|---|---|
| **B-Tree** | Estructura de datos de árbol balanceado usada internamente por MongoDB para almacenar índices. Permite búsquedas en O(log n). |
| **COLLSCAN** | Collection Scan. MongoDB lee todos los documentos de la colección para resolver la query. Ineficiente en colecciones grandes. |
| **createIndex()** | Método para crear un índice en una colección. Ej: `db.col.createIndex({ campo: 1 })`. |
| **dropIndex()** | Elimina un índice específico de la colección. Ej: `db.col.dropIndex("nombre_índice")`. |
| **dropIndexes()** | Elimina todos los índices excepto el de `_id`. |
| **executionTimeMillis** | Tiempo total de ejecución de la query en milisegundos. Aparece en el output de `explain()`. |
| **explain()** | Método que devuelve el plan de ejecución de una query. Con `"executionStats"` incluye métricas de rendimiento. |
| **getIndexes()** | Devuelve la lista de todos los índices de una colección. |
| **índice** | Estructura de datos que mejora la velocidad de las queries al evitar recorrer todos los documentos. |
| **índice multikey** | Índice creado sobre un campo de tipo array. MongoDB indexa cada elemento del array individualmente. |
| **índice sparse** | Índice que solo incluye documentos donde el campo indexado existe. Útil para campos opcionales. |
| **índice único** | Índice con la opción `{ unique: true }`. Garantiza que no haya valores duplicados en el campo indexado. |
| **IXSCAN** | Index Scan. MongoDB usa el índice para localizar documentos. Mucho más eficiente que COLLSCAN. |
| **nReturned** | Número de documentos devueltos por la query. Aparece en `executionStats`. |
| **totalDocsExamined** | Documentos que MongoDB leyó físicamente. Si es mucho mayor que `nReturned`, considera un índice. |
| **totalKeysExamined** | Entradas de índice recorridas. En IXSCAN debe ser cercano a `nReturned`. |
| **winningPlan** | El plan de ejecución elegido por el query optimizer de MongoDB. Muestra el `stage` principal (COLLSCAN o IXSCAN). |
