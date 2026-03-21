// ============================================
// Semana 23: MongoDB con Node.js
// Ejercicio 01 — setup.js
// ============================================
// Este archivo se ejecuta desde mongosh para crear los datos de prueba.
// Los ejercicios .js de Node.js los leen con el driver.

db.products.drop()

db.products.insertMany([
  {
    sku: "PROD-001",
    name: "Teclado Mecánico RGB",
    category: "peripherals",
    price: 89.99,
    stock: NumberInt(45),
    isActive: true,
    tags: ["gaming", "rgb", "mechanical"],
    createdAt: new Date("2025-01-10")
  },
  {
    sku: "PROD-002",
    name: "Monitor 4K 27\"",
    category: "displays",
    price: 499.99,
    stock: NumberInt(12),
    isActive: true,
    tags: ["4k", "ips"],
    createdAt: new Date("2025-01-15")
  },
  {
    sku: "PROD-003",
    name: "Mouse Inalámbrico",
    category: "peripherals",
    price: 39.99,
    stock: NumberInt(80),
    isActive: true,
    tags: ["wireless", "ergonomic"],
    createdAt: new Date("2025-02-01")
  },
  {
    sku: "PROD-004",
    name: "Hub USB-C 7 puertos",
    category: "accessories",
    price: 34.99,
    stock: NumberInt(0),
    isActive: false,
    tags: ["usb-c", "hub"],
    createdAt: new Date("2025-02-10")
  }
])

print("setup.js: colección 'products' lista con 4 documentos")
