# Glosario — Semana 20: GridFS y Time Series

Términos ordenados alfabéticamente.

---

**BinData**
Tipo BSON para datos binarios. Formato: `BinData(subtype, base64string)`.
Usado para almacenar los datos de los chunks en `fs.chunks`.

**bucket (GridFS)**
Conjunto lógico de dos colecciones que forman un sistema GridFS: `fs.files` y `fs.chunks`.
El bucket por defecto se llama `fs`. Puede haber múltiples buckets con nombres personalizados.

**bucket (Time Series)**
Agrupación interna de documentos de series de tiempo por `timeField` y `metaField`.
MongoDB gestiona los buckets automáticamente — no son visibles para el desarrollador.

**chunkSize**
Tamaño máximo de cada chunk en GridFS. Valor por defecto: **261120 bytes (255 KB)**.
Configurable por bucket, pero 255 KB es el estándar recomendado.

**contentType**
Campo de `fs.files` que indica el tipo MIME del archivo almacenado.
Ejemplo: `"application/pdf"`, `"image/png"`, `"video/mp4"`.

**$dateTrunc**
Operador de aggregation (MongoDB 5.0+) que trunca una fecha a una unidad de tiempo:
`{ $dateTrunc: { date: "$field", unit: "hour", binSize: 1 } }`.

**$dateToString**
Operador de aggregation que convierte una fecha a string con formato personalizado.
Ejemplo: `{ $dateToString: { format: "%Y-%m-%d", date: "$recordedAt" } }`.

**expireAfterSeconds**
Opción de `createCollection` para Time Series que configura un TTL automático.
Los documentos cuyo `timeField` sea más antiguo que ese número de segundos
son eliminados automáticamente por MongoDB.

**files_id**
Campo de `fs.chunks` que referencia al `_id` del documento en `fs.files`.
Es la clave foránea que une los chunks con su archivo.

**fs.chunks**
Colección interna de GridFS que almacena los datos binarios del archivo en bloques.
Cada documento representa un chunk con `files_id`, `n` (orden) y `data` (BinData).

**fs.files**
Colección interna de GridFS que almacena la metadata de cada archivo:
nombre, tamaño, tipo MIME, fecha de subida y campos personalizados en `metadata`.

**granularity**
Opción de Time Series que indica la frecuencia esperada de los datos:
`"seconds"`, `"minutes"` o `"hours"`. Afecta el tamaño interno de los buckets
y la eficiencia de la compresión.

**GridFS**
Especificación de MongoDB para almacenar y recuperar archivos que superan el
límite BSON de 16 MB. Divide el archivo en chunks y los almacena en dos colecciones:
`fs.files` y `fs.chunks`.

**GridFSBucket**
Clase de los drivers oficiales de MongoDB para interactuar con GridFS.
Ofrece métodos como `uploadFromStream`, `downloadToStream` y `delete`.

**metaField**
Campo de un documento de Time Series que actúa como clave de agrupación (dimensión).
Ejemplo: `{ sensorId: "sen-001", location: "server-room-A" }`.
MongoDB agrupa documentos con el mismo `metaField` en el mismo bucket.

**n**
Campo de `fs.chunks` que indica el número de orden del chunk dentro del archivo.
El chunk `n: 0` es el primero; los chunks se reconstruyen en orden ascendente.

**Time Series Collection**
Tipo especial de colección de MongoDB optimizada para datos con marca de tiempo.
Usa compresión columnar, bucketing automático y `expireAfterSeconds` para TTL.
Creada con `db.createCollection("nombre", { timeseries: { timeField, metaField, granularity } })`.

**timeField**
Campo obligatorio de una Time Series collection que contiene el timestamp de cada
medición. Debe ser de tipo `Date`. MongoDB lo usa como eje principal de organización.

**TTL (Time To Live)**
Mecanismo de expiración automática de documentos. En Time Series se configura con
`expireAfterSeconds`. En colecciones normales se configura con un índice TTL.
