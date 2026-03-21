# Glosario Semana 08 — Proyecto Integrador Etapa 0

Repaso de los términos más importantes de la Etapa 0 (Semanas 01–07):

| Término | Definición |
|---|---|
| **BSON** | Binary JSON. Formato de serialización binaria usado por MongoDB para almacenar documentos. |
| **COLLSCAN** | Collection Scan. La query recorre todos los documentos sin usar índice. |
| **createIndex()** | Crea un índice en la colección para acelerar queries. |
| **Decimal128** | Tipo BSON para valores monetarios y financieros con alta precisión decimal. |
| **deleteMany()** | Elimina todos los documentos que coinciden con el filtro. |
| **deleteOne()** | Elimina el primer documento que coincide con el filtro. |
| **dot notation** | Sintaxis para acceder a campos en subdocumentos: `"address.city"`. |
| **explain()** | Muestra el plan de ejecución de una query. Con `"executionStats"` incluye métricas. |
| **find()** | Busca todos los documentos que coinciden con el filtro. Retorna un cursor. |
| **findOne()** | Retorna el primer documento que coincide con el filtro. |
| **$inc** | Incrementa (o decrementa) el valor de un campo numérico. |
| **insertMany()** | Inserta múltiples documentos en una colección. |
| **insertOne()** | Inserta un documento en una colección. |
| **IXSCAN** | Index Scan. La query usa el índice para localizar documentos eficientemente. |
| **NumberInt** | Tipo BSON para enteros de 32 bits. Ej: cantidades, edades, años. |
| **ObjectId** | Tipo BSON de 12 bytes usado como `_id` por defecto. Contiene timestamp embebido. |
| **$push** | Agrega un elemento a un array en un documento. |
| **$set** | Establece el valor de un campo en una operación de actualización. |
| **subdocumento** | Documento anidado dentro de otro documento MongoDB. |
| **updateMany()** | Actualiza todos los documentos que coinciden con el filtro. |
| **updateOne()** | Actualiza el primer documento que coincide con el filtro. |
