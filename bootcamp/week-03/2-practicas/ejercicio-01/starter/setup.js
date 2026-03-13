// Semana 03: CRUD II — Operadores de Consulta
// setup.js — Datos de prueba para ejercicios de operadores de comparación

db.products.drop()

db.products.insertMany([
  {
    name: "Laptop Pro 15",
    category: "computers",
    price: Decimal128("1299.99"),
    stock: NumberInt(12),
    rating: 4.7,
    year: NumberInt(2023),
    inStock: true,
    tags: ["laptop", "professional", "intel"],
    specs: { ram: "16GB", storage: "512GB" }
  },
  {
    name: "Wireless Mouse",
    category: "accessories",
    price: Decimal128("29.99"),
    stock: NumberInt(85),
    rating: 4.2,
    year: NumberInt(2022),
    inStock: true,
    tags: ["mouse", "wireless", "ergonomic"],
    specs: { dpi: 1600, battery: "AA" }
  },
  {
    name: "4K Monitor 27\"",
    category: "monitors",
    price: Decimal128("449.00"),
    stock: NumberInt(7),
    rating: 4.8,
    year: NumberInt(2023),
    inStock: true,
    tags: ["monitor", "4k", "ips"],
    specs: { resolution: "3840x2160", refresh: 60 }
  },
  {
    name: "Mechanical Keyboard",
    category: "accessories",
    price: Decimal128("129.00"),
    stock: NumberInt(33),
    rating: 4.5,
    year: NumberInt(2021),
    inStock: true,
    tags: ["keyboard", "mechanical", "rgb"],
    specs: { switch: "Cherry MX Red", layout: "TKL" }
  },
  {
    name: "USB-C Hub",
    category: "accessories",
    price: Decimal128("49.99"),
    stock: NumberInt(52),
    rating: 3.9,
    year: NumberInt(2022),
    inStock: true,
    tags: ["hub", "usb-c", "multiport"],
    specs: { ports: 7 }
  },
  {
    name: "Gaming Headset",
    category: "audio",
    price: Decimal128("89.99"),
    stock: NumberInt(0),
    rating: 4.1,
    year: NumberInt(2021),
    inStock: false,
    tags: ["headset", "gaming", "surround"],
    specs: { driver: "50mm", wireless: false }
  },
  {
    name: "Webcam HD 1080p",
    category: "peripherals",
    price: Decimal128("74.99"),
    stock: NumberInt(19),
    rating: 3.7,
    year: NumberInt(2020),
    inStock: true,
    tags: ["webcam", "hd", "streaming"],
    specs: { resolution: "1920x1080", fps: 30 }
  },
  {
    name: "SSD External 1TB",
    category: "storage",
    price: Decimal128("109.99"),
    stock: NumberInt(28),
    rating: 4.6,
    year: NumberInt(2023),
    inStock: true,
    tags: ["ssd", "portable", "usb-c"],
    specs: { capacity: "1TB", speed: "1050MB/s" }
  },
  {
    name: "Smart Speaker Mini",
    category: "audio",
    price: Decimal128("39.99"),
    stock: NumberInt(0),
    rating: 3.5,
    year: NumberInt(2020),
    inStock: false,
    tags: ["speaker", "smart", "wifi"],
    specs: { assistant: "built-in", watts: 5 }
  },
  {
    name: "Laptop Stand Aluminum",
    category: "accessories",
    price: Decimal128("69.99"),
    stock: NumberInt(41),
    rating: 4.3,
    year: NumberInt(2022),
    inStock: true,
    tags: ["stand", "aluminum", "ergonomic"],
    specs: { material: "aluminum", foldable: true }
  },
  {
    name: "Tablet 10.5\"",
    category: "tablets",
    price: Decimal128("349.99"),
    stock: NumberInt(5),
    rating: 4.4,
    year: NumberInt(2023),
    inStock: true,
    tags: ["tablet", "touch", "portable"],
    specs: { ram: "6GB", storage: "128GB" }
  },
  {
    name: "Budget Mouse",
    category: "accessories",
    price: Decimal128("9.99"),
    stock: NumberInt(120),
    rating: 3.2,
    year: NumberInt(2019),
    inStock: true,
    tags: ["mouse", "budget", "wired"],
    specs: { dpi: 800 }
  }
])

print("✅ Colección products creada con 12 documentos")
print("   Ejecuta: db.products.countDocuments()")
