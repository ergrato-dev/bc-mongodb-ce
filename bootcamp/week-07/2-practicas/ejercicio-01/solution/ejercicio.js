// Semana 07: Índices Básicos y explain()
// Ejercicio 01: createIndex(), getIndexes(), dropIndex() — SOLUCIÓN

// ============================================================
// PASO 1: Ver índices existentes y ejecutar query sin índice
// ============================================================

db.listings.getIndexes()

db.listings.find({ city: "Bogotá" }).explain("executionStats")

// ============================================================
// PASO 2: Crear un índice simple y verificar IXSCAN
// ============================================================

db.listings.createIndex({ city: 1 })

db.listings.getIndexes()

db.listings.find({ city: "Bogotá" }).explain("executionStats")

// ============================================================
// PASO 3: Crear índice en campo de subdocumento y en array
// ============================================================

db.listings.createIndex({ "host.email": 1 })

db.listings.createIndex({ amenities: 1 })

db.listings.getIndexes()

// ============================================================
// PASO 4: Crear índice único y dropIndex()
// ============================================================

db.listings.dropIndex("host.email_1")

db.listings.createIndex(
  { "host.email": 1 },
  { unique: true, name: "listings_host_email_unique" }
)

db.listings.dropIndex("city_1")

db.listings.getIndexes()
