// Semana 03: CRUD II — $in, $nin, $exists, $type
// starter/setup.js — misma colección products, datos adicionales

// Nota: ejecuta primero el setup.js del ejercicio-01 para tener los datos base
// Este script agrega documentos con campos opcionales para practicar $exists

db.products.insertMany([
  {
    name: "Lightning Cable 2m",
    category: "accessories",
    price: Decimal128("14.99"),
    stock: NumberInt(200),
    rating: 3.8,
    year: NumberInt(2021),
    inStock: true,
    tags: ["cable", "charging", "apple"],
    discount: NumberInt(10),
    specs: { length: "2m", connector: "Lightning" }
  },
  {
    name: "USB-C Charger 65W",
    category: "accessories",
    price: Decimal128("34.99"),
    stock: NumberInt(65),
    rating: 4.4,
    year: NumberInt(2023),
    inStock: true,
    tags: ["charger", "usb-c", "fast-charge"],
    discount: null,
    specs: { wattage: 65, ports: 1 }
  },
  {
    name: "HDMI Cable 4K",
    category: "accessories",
    price: Decimal128("12.99"),
    stock: NumberInt(150),
    rating: 4.0,
    year: NumberInt(2020),
    inStock: true,
    tags: ["cable", "hdmi", "4k"],
    specs: { version: "2.0", length: "2m" }
  }
])

print("✅ 3 documentos adicionales insertados en products")
print("   Ahora products tiene múltiples documentos con/sin campo 'discount'")
