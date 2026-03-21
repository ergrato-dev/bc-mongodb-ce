# GridFS — Operaciones en mongosh

## Objetivos
1. Simular la inserción de metadata en `fs.files` directamente en `mongosh`
2. Consultar archivos almacenados por nombre, metadata o fecha
3. Eliminar un archivo y todos sus chunks asociados
4. Entender la diferencia entre la API de driver vs operaciones directas en `mongosh`

---

## 1. Nota sobre mongosh y GridFS

En producción, GridFS se usa desde los drivers (Node.js, Python).
En `mongosh` podemos **simular** las operaciones insertando directamente en
`fs.files` y `fs.chunks` para entender la estructura.

> Para proyectos reales con archivos binarios usa el driver oficial.
> Ver: https://www.mongodb.com/docs/drivers/

## 2. Simular upload — insertar en fs.files y fs.chunks

```js
// Paso 1: Insertar metadata del archivo en fs.files
const fileId = new ObjectId()

db.fs.files.insertOne({
  _id: fileId,
  filename: "reporte-ventas.pdf",
  length: 524288,          // 512 KB
  chunkSize: 261120,       // 255 KB
  uploadDate: new Date(),
  contentType: "application/pdf",
  metadata: { author: "user-101", year: 2025 }
})

// Paso 2: Insertar chunks (simulados con datos vacíos para el ejercicio)
db.fs.chunks.insertMany([
  { files_id: fileId, n: 0, data: BinData(0, "Y2h1bmswZGF0YQ==") },
  { files_id: fileId, n: 1, data: BinData(0, "Y2h1bmsx") }
])
```

## 3. Consultar archivos

```js
// Buscar por nombre
db.fs.files.findOne({ filename: "reporte-ventas.pdf" })

// Buscar por metadata
db.fs.files.find({ "metadata.year": 2025 }, { filename: 1, length: 1, uploadDate: 1 })

// Ordenar por fecha de subida (más reciente primero)
db.fs.files.find({}).sort({ uploadDate: -1 }).limit(5)

// Ver cuántos chunks tiene un archivo
const f = db.fs.files.findOne({ filename: "reporte-ventas.pdf" })
db.fs.chunks.countDocuments({ files_id: f._id })
```

## 4. Eliminar archivo y sus chunks

La eliminación debe borrar **ambas** colecciones:

```js
// Obtener el _id del archivo a eliminar
const file = db.fs.files.findOne({ filename: "reporte-ventas.pdf" })

// Eliminar chunks primero
db.fs.chunks.deleteMany({ files_id: file._id })

// Eliminar metadata
db.fs.files.deleteOne({ _id: file._id })

print("Archivo y chunks eliminados correctamente")
```

> En los drivers, `GridFSBucket.delete(fileId)` hace este proceso automáticamente.

## Checklist
- ¿Qué colección guarda la metadata y cuál los datos binarios?
- ¿Por qué hay que eliminar chunks ANTES de eliminar `fs.files`?
- ¿Cómo consultas todos los archivos subidos por un usuario específico?
- ¿Qué índice usa MongoDB para reconstruir el orden de los chunks?

## Referencias
- [GridFS Operations](https://www.mongodb.com/docs/manual/core/gridfs/#gridfs-operations)
- [Node.js GridFSBucket](https://www.mongodb.com/docs/drivers/node/current/fundamentals/gridfs/)
