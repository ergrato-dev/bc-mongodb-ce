// ============================================
// Semana 20: GridFS — Ejercicio 01
// Solución: consultar y eliminar archivos
// ============================================

// ============================================
// PASO 1: Explorar la estructura de GridFS
// ============================================

// Ver todos los archivos almacenados
db.getCollection("fs.files").find(
  {},
  { filename: 1, length: 1, uploadDate: 1, contentType: 1 }
)

// Contar chunks por archivo
db.getCollection("fs.chunks").aggregate([
  {
    $group: {
      _id: "$files_id",
      totalChunks: { $sum: 1 }
    }
  }
])

// Ver el archivo más pesado
db.getCollection("fs.files").find({}).sort({ length: -1 }).limit(1)


// ============================================
// PASO 2: Consultar archivos por metadata
// ============================================

db.getCollection("fs.files").find(
  { "metadata.department": "support" },
  { filename: 1, length: 1, "metadata.uploadedBy": 1 }
)

db.getCollection("fs.files").find(
  { "metadata.uploadedBy": "admin" },
  { filename: 1, uploadDate: 1 }
)

db.getCollection("fs.files").find({
  contentType: "application/pdf",
  uploadDate: {
    $gte: new Date("2025-03-01"),
    $lt:  new Date("2025-04-01")
  }
})


// ============================================
// PASO 3: Subir un nuevo archivo (simular)
// ============================================

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

db.getCollection("fs.files").findOne({ filename: "politica-privacidad.docx" })


// ============================================
// PASO 4: Eliminar un archivo y sus chunks
// ============================================

const fileToDelete = db.getCollection("fs.files").findOne({ filename: "logo-empresa.png" })

// Primero eliminar los chunks
const deleteChunksResult = db.getCollection("fs.chunks").deleteMany({
  files_id: fileToDelete._id
})
print("Chunks eliminados: " + deleteChunksResult.deletedCount)

// Luego eliminar la metadata
db.getCollection("fs.files").deleteOne({ _id: fileToDelete._id })
print("Archivo eliminado de fs.files")

// Verificar que ya no existe
const check = db.getCollection("fs.files").findOne({ filename: "logo-empresa.png" })
print("¿Existe el archivo?: " + (check ? "Sí" : "No — eliminado correctamente"))
