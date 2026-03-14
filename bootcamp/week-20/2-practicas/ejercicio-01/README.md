# Ejercicio 01 — GridFS: Explorar, Consultar y Eliminar

## Objetivos
- Explorar las colecciones `fs.files` y `fs.chunks` y entender su relación
- Consultar archivos por metadata, tipo o fecha de subida
- Simular la subida de un archivo nuevo
- Eliminar un archivo y todos sus chunks correctamente

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conéctate:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

### Paso 1: Explorar la estructura de GridFS

Consulta los archivos almacenados y cuenta sus chunks:

```js
// Ver todos los archivos
db.getCollection("fs.files").find(
  {},
  { filename: 1, length: 1, uploadDate: 1, contentType: 1 }
)

// Contar chunks por archivo
db.getCollection("fs.chunks").aggregate([
  { $group: { _id: "$files_id", totalChunks: { $sum: 1 } } }
])

// El archivo más pesado
db.getCollection("fs.files").find({}).sort({ length: -1 }).limit(1)
```

Nota que `backup-db-2025-04.gz` es de 50 MB → muchos más chunks que una imagen pequeña.

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 1.

---

### Paso 2: Consultar archivos por metadata

```js
// Archivos del departamento support
db.getCollection("fs.files").find(
  { "metadata.department": "support" },
  { filename: 1, length: 1, "metadata.uploadedBy": 1 }
)

// PDFs de marzo 2025
db.getCollection("fs.files").find({
  contentType: "application/pdf",
  uploadDate: { $gte: new Date("2025-03-01"), $lt: new Date("2025-04-01") }
})
```

`fs.files` se comporta como cualquier colección — puedes crear índices en `metadata.*` para acelerar estas consultas.

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 2.

---

### Paso 3: Simular subida de un archivo nuevo

```js
const newFileId = new ObjectId()

db.getCollection("fs.files").insertOne({
  _id: newFileId,
  filename: "politica-privacidad.docx",
  length: 102400,
  chunkSize: 261120,
  uploadDate: new Date(),
  contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  metadata: { uploadedBy: "user-103", department: "legal", approved: false }
})

db.getCollection("fs.chunks").insertOne({
  files_id: newFileId,
  n: 0,
  data: BinData(0, "ZG9jeGNodW5rMGRhdGFsZWdhbA==")
})
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 3.

---

### Paso 4: Eliminar un archivo y sus chunks

El orden importa: primero chunks, luego `fs.files`.

```js
const fileToDelete = db.getCollection("fs.files").findOne({ filename: "logo-empresa.png" })

// 1. Eliminar chunks
db.getCollection("fs.chunks").deleteMany({ files_id: fileToDelete._id })

// 2. Eliminar metadata
db.getCollection("fs.files").deleteOne({ _id: fileToDelete._id })
```

Verifica con `findOne` que el archivo ya no existe en `fs.files`.

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 4.

---

## Verificación

- `fs.files` tiene 3 documentos tras el setup y 4 después del PASO 3
- El aggregate del PASO 1 muestra los chunks correctamente agrupados por `files_id`
- Tras el PASO 4, `fs.files.findOne({ filename: "logo-empresa.png" })` retorna `null`
