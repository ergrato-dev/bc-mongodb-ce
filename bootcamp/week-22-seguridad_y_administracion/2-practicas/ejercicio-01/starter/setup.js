// ============================================
// Semana 22: Seguridad y Administración
// Ejercicio 01 — setup.js
// ============================================

// Colección de demostración para practicar RBAC
// Simula un catálogo de productos accedido por diferentes roles

db.catalog.drop()

db.catalog.insertMany([
  {
    sku: "CAT-001",
    name: "Widget Estándar",
    category: "hardware",
    price: Decimal128("29.99"),
    stock: NumberInt(150),
    isActive: true,
    createdAt: new Date("2025-01-15")
  },
  {
    sku: "CAT-002",
    name: "Componente Premium",
    category: "hardware",
    price: Decimal128("199.99"),
    stock: NumberInt(25),
    isActive: true,
    createdAt: new Date("2025-01-20")
  },
  {
    sku: "CAT-003",
    name: "Servicio Básico",
    category: "software",
    price: Decimal128("9.99"),
    stock: NumberInt(999),
    isActive: false,
    createdAt: new Date("2025-02-01")
  }
])

print("setup.js: colección 'catalog' creada con 3 productos")
print("Total: " + db.catalog.countDocuments() + " productos")
