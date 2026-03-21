// Semana 12: Aggregation Pipeline III — $facet y $bucket
// setup.js — Datos de prueba para ejercicio-01

db.products.drop()

// Colección de productos para practicar $facet y $bucket
db.products.insertMany([
  {
    name: "Laptop Pro 15",
    category: "electronics",
    brand: "TechBrand",
    price: NumberDecimal("1299.99"),
    stock: NumberInt(45),
    rating: 4.5,
    isActive: true,
    createdAt: new Date("2024-01-10")
  },
  {
    name: "Wireless Headphones",
    category: "electronics",
    brand: "SoundCo",
    price: NumberDecimal("199.99"),
    stock: NumberInt(120),
    rating: 4.2,
    isActive: true,
    createdAt: new Date("2024-01-15")
  },
  {
    name: "USB-C Hub",
    category: "electronics",
    brand: "TechBrand",
    price: NumberDecimal("49.99"),
    stock: NumberInt(300),
    rating: 3.8,
    isActive: true,
    createdAt: new Date("2024-01-20")
  },
  {
    name: "Running Shoes",
    category: "sports",
    brand: "SportMax",
    price: NumberDecimal("89.99"),
    stock: NumberInt(85),
    rating: 4.6,
    isActive: true,
    createdAt: new Date("2024-02-01")
  },
  {
    name: "Yoga Mat Pro",
    category: "sports",
    brand: "FitLife",
    price: NumberDecimal("35.00"),
    stock: NumberInt(200),
    rating: 4.0,
    isActive: true,
    createdAt: new Date("2024-02-10")
  },
  {
    name: "Water Bottle 1L",
    category: "sports",
    brand: "FitLife",
    price: NumberDecimal("22.50"),
    stock: NumberInt(350),
    rating: 4.3,
    isActive: true,
    createdAt: new Date("2024-02-12")
  },
  {
    name: "Office Chair Ergonomic",
    category: "furniture",
    brand: "ErgoCo",
    price: NumberDecimal("449.00"),
    stock: NumberInt(20),
    rating: 4.7,
    isActive: true,
    createdAt: new Date("2024-02-20")
  },
  {
    name: "Standing Desk 160cm",
    category: "furniture",
    brand: "ErgoCo",
    price: NumberDecimal("699.00"),
    stock: NumberInt(15),
    rating: 4.4,
    isActive: true,
    createdAt: new Date("2024-03-01")
  },
  {
    name: "Monitor 27 4K",
    category: "electronics",
    brand: "ViewTech",
    price: NumberDecimal("549.99"),
    stock: NumberInt(60),
    rating: 4.6,
    isActive: true,
    createdAt: new Date("2024-03-05")
  },
  {
    name: "Mechanical Keyboard",
    category: "electronics",
    brand: "TechBrand",
    price: NumberDecimal("129.99"),
    stock: NumberInt(95),
    rating: 4.5,
    isActive: true,
    createdAt: new Date("2024-03-10")
  },
  {
    name: "Desk Lamp LED",
    category: "furniture",
    brand: "LightCo",
    price: NumberDecimal("39.99"),
    stock: NumberInt(180),
    rating: 4.1,
    isActive: false,
    createdAt: new Date("2024-03-12")
  },
  {
    name: "Resistance Bands Set",
    category: "sports",
    brand: "FitLife",
    price: NumberDecimal("28.00"),
    stock: NumberInt(250),
    rating: 3.9,
    isActive: true,
    createdAt: new Date("2024-03-15")
  }
])

// Índice para optimizar $match en los pipelines
db.products.createIndex({ category: 1, isActive: 1 })
db.products.createIndex({ price: 1 })

print("✅ Colección 'products' cargada con 12 documentos")
print("   Categorías: electronics (5), sports (4), furniture (3)")
print("   Índices creados en category+isActive y price")
