// ============================================
// Semana 20: GridFS y Time Series — Proyecto
// Setup — Dominio ejemplo: Planetario
// ============================================
// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// Los nombres de colecciones, campos y valores deben
// corresponder a tu dominio (Biblioteca, Farmacia, Cine, etc.)

// ============================================
// Parte 1: Archivos GridFS (fs.files + fs.chunks)
// ============================================

db.getCollection("fs.files").drop()
db.getCollection("fs.chunks").drop()

// TODO: Renombrar los archivos según tu dominio
// Ejemplos:
//   Hospital  → "radiografia-pac-001.dcm", "informe-alta.pdf"
//   Cine      → "afiche-pelicula-2025.png", "guion-obra.pdf"
//   Farmacia  → "certificado-lote-A1.pdf", "ficha-tecnica-ibuprofeno.pdf"

const fileId1 = new ObjectId()
const fileId2 = new ObjectId()

db.getCollection("fs.files").insertMany([
  {
    _id: fileId1,
    filename: "catalogo-estrellas-2025.pdf",
    length: 3145728,   // 3 MB
    chunkSize: 261120,
    uploadDate: new Date("2025-03-01T10:00:00Z"),
    contentType: "application/pdf",
    metadata: { uploadedBy: "staff-01", category: "catalog", year: 2025 }
  },
  {
    _id: fileId2,
    filename: "imagen-nebulosa-orion.jpg",
    length: 8388608,   // 8 MB
    chunkSize: 261120,
    uploadDate: new Date("2025-03-15T14:00:00Z"),
    contentType: "image/jpeg",
    metadata: { uploadedBy: "staff-02", category: "image", resolution: "8K" }
  }
])

// Chunks representativos
db.getCollection("fs.chunks").insertMany([
  { files_id: fileId1, n: 0, data: BinData(0, "cGRmY2h1bmswcGxhbmV0YXJpbw==") },
  { files_id: fileId2, n: 0, data: BinData(0, "anBnY2h1bmsw") },
  { files_id: fileId2, n: 1, data: BinData(0, "anBnY2h1bmsxbmVidWxvc2E=") }
])

print("Archivos GridFS creados: 2 archivos, 3 chunks")

// ============================================
// Parte 2: Time Series Collection
// ============================================

db.telescope_readings.drop()

// TODO: Renombrar la colección y campos según tu dominio
// Ejemplos:
//   Hospital  → patient_vitals, timeField:"measuredAt", metaField: patientId/wardId
//   Banco     → account_transactions, timeField:"transactedAt", metaField: accountId
//   Gimnasio  → machine_sessions, timeField:"sessionAt", metaField: machineId

db.createCollection("telescope_readings", {
  timeseries: {
    timeField: "observedAt",
    metaField: "metadata",
    granularity: "minutes"
  },
  expireAfterSeconds: 15552000  // 180 días
})

db.telescope_readings.insertMany([
  { observedAt: new Date("2025-04-01T20:00:00Z"), metadata: { telescopeId: "tel-01", target: "Orion" }, magnitude: 2.1, brightness: 8500, seeing: 1.2 },
  { observedAt: new Date("2025-04-01T20:15:00Z"), metadata: { telescopeId: "tel-01", target: "Orion" }, magnitude: 2.0, brightness: 8650, seeing: 1.1 },
  { observedAt: new Date("2025-04-01T20:30:00Z"), metadata: { telescopeId: "tel-01", target: "Orion" }, magnitude: 2.2, brightness: 8400, seeing: 1.3 },
  { observedAt: new Date("2025-04-01T20:00:00Z"), metadata: { telescopeId: "tel-02", target: "Andromeda" }, magnitude: 3.4, brightness: 6200, seeing: 1.0 },
  { observedAt: new Date("2025-04-01T20:15:00Z"), metadata: { telescopeId: "tel-02", target: "Andromeda" }, magnitude: 3.3, brightness: 6300, seeing: 0.9 },
  { observedAt: new Date("2025-04-02T20:00:00Z"), metadata: { telescopeId: "tel-01", target: "Orion" }, magnitude: 1.9, brightness: 8800, seeing: 0.8 },
  { observedAt: new Date("2025-04-02T20:15:00Z"), metadata: { telescopeId: "tel-01", target: "Orion" }, magnitude: 1.8, brightness: 8950, seeing: 0.7 },
  { observedAt: new Date("2025-04-02T20:00:00Z"), metadata: { telescopeId: "tel-02", target: "Andromeda" }, magnitude: 3.2, brightness: 6450, seeing: 0.85 },
  { observedAt: new Date("2025-04-02T20:15:00Z"), metadata: { telescopeId: "tel-02", target: "Andromeda" }, magnitude: 3.1, brightness: 6550, seeing: 0.8 },
  { observedAt: new Date("2025-04-03T20:00:00Z"), metadata: { telescopeId: "tel-01", target: "Pleiadess" }, magnitude: 1.6, brightness: 9100, seeing: 0.6 }
])

print("Time Series completada: 10 lecturas en telescope_readings")
print("Recuerda adaptar colecciones y campos a tu dominio asignado")
