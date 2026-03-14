// ============================================
// Semana 18 — Ejercicio 02: Schema + Document Versioning
// setup.js — Crea colecciones para ambos patrones
// ============================================

// ============================================
// Colección 1: contacts (Schema Versioning)
// docs v1 (sin schemaVersion) + docs v2
// ============================================
db.contacts.drop()

// Documentos versión 1 (formato antiguo, sin schemaVersion)
db.contacts.insertMany([
  {
    contactId: "cont-001",
    name: "Ana García",
    phone: "555-0101",                  // v1: un solo teléfono string
    address: "Calle 45 #12-30, Bogotá", // v1: dirección como string
    createdAt: new Date("2023-01-10")
  },
  {
    contactId: "cont-002",
    name: "Carlos Roa",
    phone: "555-0202",
    address: "Av 80 #23-15, Medellín",
    createdAt: new Date("2023-03-20")
  }
])

// Documentos versión 2 (formato nuevo, con schemaVersion)
db.contacts.insertMany([
  {
    schemaVersion: NumberInt(2),
    contactId: "cont-003",
    name: "Laura Soto",
    phones: ["555-0303", "555-0304"],   // v2: array de teléfonos
    address: {                          // v2: dirección como objeto
      street: "Cra 15 #80-10",
      city: "Bogotá",
      country: "Colombia"
    },
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05")
  },
  {
    schemaVersion: NumberInt(2),
    contactId: "cont-004",
    name: "Pedro Niño",
    phones: ["555-0405"],
    address: {
      street: "Cll 50 #4-20",
      city: "Cali",
      country: "Colombia"
    },
    createdAt: new Date("2024-02-14"),
    updatedAt: new Date("2024-02-14")
  }
])

// ============================================
// Colección 2: catalog_items (Document Versioning)
// ============================================
db.catalog_items.drop()
db.catalog_items_history.drop()

db.catalog_items.insertMany([
  {
    itemId: "itm-001",
    name: "Wireless Headphones Pro",
    price: Decimal128("149.99"),
    stock: NumberInt(30),
    currentVersion: NumberInt(1),
    updatedAt: new Date("2024-01-01")
  },
  {
    itemId: "itm-002",
    name: "USB-C Hub 7-port",
    price: Decimal128("45.00"),
    stock: NumberInt(80),
    currentVersion: NumberInt(1),
    updatedAt: new Date("2024-01-01")
  }
])

print("✓ contacts: " + db.contacts.countDocuments())
print("  - v1 (sin schemaVersion): " + db.contacts.countDocuments({ schemaVersion: { $exists: false } }))
print("  - v2: " + db.contacts.countDocuments({ schemaVersion: 2 }))
print("✓ catalog_items: " + db.catalog_items.countDocuments())
