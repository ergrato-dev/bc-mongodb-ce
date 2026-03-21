// Semana 05: CRUD III — Actualización y Eliminación
// setup.js — Ejercicio 01: Operadores $set, $unset, $inc

// Colección: inventory
// 12 productos con campos actualizables para practicar

db.inventory.drop()

db.inventory.insertMany([
  {
    name: "Mechanical Keyboard",
    category: "peripherals",
    price: Decimal128("89.99"),
    stock: NumberInt(45),
    inStock: true,
    tags: ["keyboard", "mechanical", "rgb"],
    rating: NumberInt(5),
    discount: Decimal128("0.00"),
    featured: true
  },
  {
    name: "USB-C Hub",
    category: "accessories",
    price: Decimal128("34.99"),
    stock: NumberInt(120),
    inStock: true,
    tags: ["hub", "usb-c", "multiport"],
    rating: NumberInt(4),
    discount: Decimal128("5.00")
  },
  {
    name: "Laptop Stand",
    category: "accessories",
    price: Decimal128("28.50"),
    stock: NumberInt(0),
    inStock: false,
    tags: ["stand", "ergonomic"],
    rating: NumberInt(4)
  },
  {
    name: "Wireless Mouse",
    category: "peripherals",
    price: Decimal128("45.00"),
    stock: NumberInt(60),
    inStock: true,
    tags: ["mouse", "wireless"],
    rating: NumberInt(5),
    featured: true
  },
  {
    name: "HDMI Cable 2m",
    category: "cables",
    price: Decimal128("12.99"),
    stock: NumberInt(200),
    inStock: true,
    tags: ["hdmi", "cable"],
    rating: NumberInt(3)
  },
  {
    name: "Webcam HD",
    category: "peripherals",
    price: Decimal128("75.00"),
    stock: NumberInt(30),
    inStock: true,
    tags: ["webcam", "hd", "remote-work"],
    rating: NumberInt(4),
    discount: Decimal128("10.00")
  },
  {
    name: "Monitor 24inch",
    category: "displays",
    price: Decimal128("199.99"),
    stock: NumberInt(15),
    inStock: true,
    tags: ["monitor", "24inch", "ips"],
    rating: NumberInt(5),
    featured: true
  },
  {
    name: "Desk Lamp LED",
    category: "accessories",
    price: Decimal128("22.00"),
    stock: NumberInt(5),
    inStock: true,
    tags: ["lamp", "led", "desk"],
    rating: NumberInt(3),
    discount: Decimal128("2.00")
  },
  {
    name: "Headset Gaming",
    category: "audio",
    price: Decimal128("59.99"),
    stock: NumberInt(0),
    inStock: false,
    tags: ["headset", "gaming", "surround"],
    rating: NumberInt(4),
    discount: Decimal128("15.00")
  },
  {
    name: "SSD External 1TB",
    category: "storage",
    price: Decimal128("85.00"),
    stock: NumberInt(25),
    inStock: true,
    tags: ["ssd", "external", "1tb"],
    rating: NumberInt(5)
  },
  {
    name: "USB Mouse Basic",
    category: "peripherals",
    price: Decimal128("9.99"),
    stock: NumberInt(300),
    inStock: true,
    tags: ["mouse", "usb", "basic"],
    rating: NumberInt(2),
    discount: Decimal128("1.00")
  },
  {
    name: "Keyboard Wireless",
    category: "peripherals",
    price: Decimal128("39.99"),
    stock: NumberInt(0),
    inStock: false,
    tags: ["keyboard", "wireless"],
    rating: NumberInt(4)
  }
])

print("✅ inventory cargado con " + db.inventory.countDocuments() + " documentos.")
print("Ejemplos:")
printjson(db.inventory.findOne({ name: "Mechanical Keyboard" }))
