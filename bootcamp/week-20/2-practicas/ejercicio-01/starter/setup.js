// ============================================
// Semana 20: GridFS — Ejercicio 01
// Setup: datos de prueba para fs.files y fs.chunks
// ============================================

db.getCollection("fs.files").drop()
db.getCollection("fs.chunks").drop()

// Simular archivos subidos con GridFS
const fileId1 = new ObjectId()
const fileId2 = new ObjectId()
const fileId3 = new ObjectId()

db.getCollection("fs.files").insertMany([
  {
    _id: fileId1,
    filename: "manual-usuario-v2.pdf",
    length: 786432,       // 768 KB
    chunkSize: 261120,    // 255 KB
    uploadDate: new Date("2025-03-10T09:00:00Z"),
    contentType: "application/pdf",
    metadata: { uploadedBy: "user-101", department: "support", version: "2.0" }
  },
  {
    _id: fileId2,
    filename: "logo-empresa.png",
    length: 204800,       // 200 KB
    chunkSize: 261120,
    uploadDate: new Date("2025-03-15T11:30:00Z"),
    contentType: "image/png",
    metadata: { uploadedBy: "user-102", department: "marketing" }
  },
  {
    _id: fileId3,
    filename: "backup-db-2025-04.gz",
    length: 52428800,     // 50 MB
    chunkSize: 261120,
    uploadDate: new Date("2025-04-01T02:00:00Z"),
    contentType: "application/gzip",
    metadata: { uploadedBy: "admin", department: "ops", automated: true }
  }
])

// Insertar chunks representativos (datos simulados)
db.getCollection("fs.chunks").insertMany([
  { files_id: fileId1, n: 0, data: BinData(0, "cGRmY2h1bmswZGF0YWZpbGUx") },
  { files_id: fileId1, n: 1, data: BinData(0, "cGRmY2h1bmsx") },
  { files_id: fileId1, n: 2, data: BinData(0, "cGRmY2h1bmsyc21hbGw=") },
  { files_id: fileId2, n: 0, data: BinData(0, "cG5nY2h1bmswZGF0YWltYWdl") },
  { files_id: fileId3, n: 0, data: BinData(0, "Z3pjaHVuazBiYWNrdXA=") },
  { files_id: fileId3, n: 1, data: BinData(0, "Z3pjaHVuazE=") }
])

print("Setup completado: 3 archivos en fs.files, 6 chunks en fs.chunks")
print("IDs generados:")
print("  manual-usuario-v2.pdf: " + fileId1)
print("  logo-empresa.png: " + fileId2)
print("  backup-db-2025-04.gz: " + fileId3)
