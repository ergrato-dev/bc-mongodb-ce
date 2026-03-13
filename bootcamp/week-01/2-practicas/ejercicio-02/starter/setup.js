// Semana 01: Introducción a MongoDB y NoSQL
// setup.js — datos de prueba para ejercicios 01 y 02

// Limpiar colección si ya existe
db.products.drop()

// Insertar productos de tecnología
db.products.insertMany([
  {
    name: "Laptop Pro 15",
    brand: "TechCorp",
    category: "laptops",
    price: Decimal128("1299.99"),
    stock: NumberInt(42),
    rating: 4.5,
    isActive: true,
    tags: ["tech", "laptop", "sale"],
    specs: { ram: "16GB", storage: "512GB" },
    createdAt: new Date("2024-01-15")
  },
  {
    name: "Laptop Air 13",
    brand: "TechCorp",
    category: "laptops",
    price: Decimal128("899.99"),
    stock: NumberInt(15),
    rating: 4.2,
    isActive: true,
    tags: ["tech", "laptop", "lightweight"],
    specs: { ram: "8GB", storage: "256GB" },
    createdAt: new Date("2024-02-20")
  },
  {
    name: "Wireless Mouse X200",
    brand: "ClickPro",
    category: "peripherals",
    price: Decimal128("49.99"),
    stock: NumberInt(150),
    rating: 4.7,
    isActive: true,
    tags: ["mouse", "wireless", "ergonomic"],
    specs: { dpi: NumberInt(1600), buttons: NumberInt(6) },
    createdAt: new Date("2024-01-08")
  },
  {
    name: "Mechanical Keyboard MK-1",
    brand: "KeyMaster",
    category: "peripherals",
    price: Decimal128("129.99"),
    stock: NumberInt(80),
    rating: 4.8,
    isActive: true,
    tags: ["keyboard", "mechanical", "rgb"],
    specs: { layout: "TKL", switches: "brown" },
    createdAt: new Date("2024-03-05")
  },
  {
    name: "4K Monitor 27in",
    brand: "ViewMax",
    category: "monitors",
    price: Decimal128("699.99"),
    stock: NumberInt(20),
    rating: 4.6,
    isActive: true,
    tags: ["monitor", "4k", "ips"],
    specs: { resolution: "3840x2160", refreshRate: NumberInt(144) },
    createdAt: new Date("2024-01-22")
  },
  {
    name: "USB-C Hub 7-in-1",
    brand: "ConnectAll",
    category: "accessories",
    price: Decimal128("39.99"),
    stock: NumberInt(200),
    rating: 4.3,
    isActive: true,
    tags: ["hub", "usbc", "accessories"],
    specs: { ports: NumberInt(7), powerDelivery: true },
    createdAt: new Date("2024-02-14")
  },
  {
    name: "Noise Cancelling Headphones NC-900",
    brand: "SoundWave",
    category: "audio",
    price: Decimal128("299.99"),
    stock: NumberInt(55),
    rating: 4.9,
    isActive: true,
    tags: ["headphones", "anc", "wireless"],
    specs: { batteryHours: NumberInt(30), driver: "40mm" },
    createdAt: new Date("2024-03-18")
  },
  {
    name: "Webcam HD 1080p",
    brand: "ClearView",
    category: "peripherals",
    price: Decimal128("89.99"),
    stock: NumberInt(30),
    rating: 4.1,
    isActive: false,
    tags: ["webcam", "hd", "streaming"],
    specs: { resolution: "1920x1080", fps: NumberInt(60) },
    createdAt: new Date("2023-12-01")
  },
  {
    name: "Portable SSD 1TB",
    brand: "SpeedDisk",
    category: "storage",
    price: Decimal128("149.99"),
    stock: NumberInt(90),
    rating: 4.7,
    isActive: true,
    tags: ["ssd", "portable", "storage"],
    specs: { capacity: "1TB", readSpeed: "1050MB/s" },
    createdAt: new Date("2024-02-28")
  },
  {
    name: "Ergonomic Chair Pro",
    brand: "ComfortWork",
    category: "furniture",
    price: Decimal128("449.99"),
    stock: NumberInt(10),
    rating: 4.4,
    isActive: true,
    tags: ["chair", "ergonomic", "office"],
    specs: { maxWeight: "120kg", armrests: "adjustable" },
    createdAt: new Date("2024-01-30")
  }
])

print("✅ Colección 'products' creada con " + db.products.countDocuments() + " documentos.")
