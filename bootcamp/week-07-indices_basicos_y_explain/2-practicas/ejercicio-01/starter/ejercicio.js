// Semana 07: Índices Básicos y explain()
// Ejercicio 01: createIndex(), getIndexes(), dropIndex()
// ============================================================
// Antes de comenzar, ejecuta setup.js para cargar los datos.

// ============================================================
// PASO 1: Ver índices existentes y ejecutar query sin índice
// ============================================================

// Primero, comprueba qué índices existen actualmente.
// Solo debería existir el índice automático de _id.
// Descomenta las siguientes líneas:

// db.listings.getIndexes()

// Ejecuta explain para ver COLLSCAN (sin índice en "city"):
// db.listings.find({ city: "Bogotá" }).explain("executionStats")
// Observa: stage: "COLLSCAN" y totalDocsExamined = total docs

// ============================================================
// PASO 2: Crear un índice simple y verificar IXSCAN
// ============================================================

// Crea un índice en el campo "city":
// db.listings.createIndex({ city: 1 })

// Verifica que apareció el nuevo índice:
// db.listings.getIndexes()

// Vuelve a ejecutar explain — ahora debe mostrar IXSCAN:
// db.listings.find({ city: "Bogotá" }).explain("executionStats")
// Observa: stage: "IXSCAN" y totalDocsExamined ≈ nReturned

// ============================================================
// PASO 3: Crear índice en campo de subdocumento y en array
// ============================================================

// Índice en campo anidado con dot notation:
// db.listings.createIndex({ "host.email": 1 })

// Índice multikey en array de amenities:
// db.listings.createIndex({ amenities: 1 })

// Verifica todos los índices:
// db.listings.getIndexes()

// ============================================================
// PASO 4: Crear índice único y dropIndex()
// ============================================================

// Índice único en "host.email" (cada host tiene un correo único):
// Primero elimina el índice simple que creamos:
// db.listings.dropIndex("host.email_1")

// Luego crea el único:
// db.listings.createIndex(
//   { "host.email": 1 },
//   { unique: true, name: "listings_host_email_unique" }
// )

// Elimina el índice de city por nombre:
// db.listings.dropIndex("city_1")

// Estado final de índices:
// db.listings.getIndexes()
