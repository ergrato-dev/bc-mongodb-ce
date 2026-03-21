// ============================================
// Semana 21: Replicación y Alta Disponibilidad
// Ejercicio 02 — setup.js
// ============================================

// Colección: shipments
// Envíos internacionales para practicar writeConcern y readPreference
db.shipments.drop()

db.shipments.insertMany([
  {
    shipmentId: "SHP-1001",
    origin: "Bogotá",
    destination: "Miami",
    status: "pending",
    weight: Decimal128("12.50"),
    createdAt: new Date("2025-03-01T08:00:00Z")
  },
  {
    shipmentId: "SHP-1002",
    origin: "Medellín",
    destination: "Madrid",
    status: "in_transit",
    weight: Decimal128("45.00"),
    createdAt: new Date("2025-03-01T10:00:00Z")
  },
  {
    shipmentId: "SHP-1003",
    origin: "Cali",
    destination: "Ciudad de México",
    status: "delivered",
    weight: Decimal128("8.75"),
    createdAt: new Date("2025-03-02T07:30:00Z")
  }
])

print("setup.js: colección 'shipments' creada con 3 documentos")
print("Total: " + db.shipments.countDocuments() + " envíos")
