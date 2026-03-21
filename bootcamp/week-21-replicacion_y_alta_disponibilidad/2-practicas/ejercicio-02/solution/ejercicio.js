// ============================================
// Semana 21: Replicación y Alta Disponibilidad
// Ejercicio 02 — SOLUCIÓN
// ============================================

// ============================================
// PASO 1: writeConcern { w: 1 }
// ============================================

db.shipments.insertOne(
  {
    shipmentId: "SHP-2001",
    origin: "Bucaramanga",
    destination: "Lima",
    status: "pending",
    weight: Decimal128("20.00"),
    createdAt: new Date()
  },
  { writeConcern: { w: 1 } }
)

// ============================================
// PASO 2: writeConcern { w: "majority" }
// ============================================

db.shipments.insertOne(
  {
    shipmentId: "SHP-2002",
    origin: "Barranquilla",
    destination: "São Paulo",
    status: "pending",
    weight: Decimal128("33.00"),
    createdAt: new Date()
  },
  { writeConcern: { w: "majority" } }
)

// ============================================
// PASO 3: readPreference "secondaryPreferred"
// ============================================

db.shipments.find(
  { status: "pending" },
  { shipmentId: 1, origin: 1, destination: 1, _id: 0 }
).readPref("secondaryPreferred")

// ============================================
// PASO 4: writeConcern { w: 1, j: true }
// ============================================

db.shipments.insertOne(
  {
    shipmentId: "SHP-2003",
    origin: "Cartagena",
    destination: "Buenos Aires",
    status: "pending",
    weight: Decimal128("55.00"),
    createdAt: new Date()
  },
  { writeConcern: { w: 1, j: true } }
)

// Verificar que los 3 nuevos envíos fueron insertados:
db.shipments.countDocuments({ shipmentId: /^SHP-2/ })
