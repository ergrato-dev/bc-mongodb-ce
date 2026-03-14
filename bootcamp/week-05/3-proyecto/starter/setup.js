// Semana 05: CRUD III — Actualización y Eliminación
// setup.js — Proyecto: datos base para gestión de inventario
// ============================================================
// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// Ejemplos de adaptación:
//   Biblioteca  → books (title, shelf, copies, isAvailable)
//   Farmacia    → medicines (name, category, stock, price)
//   Gimnasio    → equipment (name, zone, condition, isActive)
//   Restaurante → dishes (name, section, price, available)

db.items.drop()

db.items.insertMany([
  {
    name: "Conference Table",
    category: "furniture",
    price: Decimal128("450.00"),
    stock: NumberInt(8),
    inStock: true,
    tags: ["table", "conference", "wood"],
    condition: "new",
    isActive: true
  },
  {
    name: "Standing Desk",
    category: "furniture",
    price: Decimal128("320.00"),
    stock: NumberInt(12),
    inStock: true,
    tags: ["desk", "standing", "ergonomic"],
    condition: "new",
    isActive: true
  },
  {
    name: "Office Chair Deluxe",
    category: "seating",
    price: Decimal128("189.99"),
    stock: NumberInt(0),
    inStock: false,
    tags: ["chair", "office", "lumbar"],
    condition: "refurbished",
    isActive: true
  },
  {
    name: "Projector Screen",
    category: "presentation",
    price: Decimal128("95.00"),
    stock: NumberInt(5),
    inStock: true,
    tags: ["screen", "projector", "portable"],
    condition: "new",
    isActive: true
  },
  {
    name: "Whiteboard 120cm",
    category: "presentation",
    price: Decimal128("62.50"),
    stock: NumberInt(0),
    inStock: false,
    tags: ["whiteboard", "marker"],
    condition: "used",
    isActive: false
  },
  {
    name: "Filing Cabinet",
    category: "storage",
    price: Decimal128("78.00"),
    stock: NumberInt(20),
    inStock: true,
    tags: ["cabinet", "storage", "metal"],
    condition: "new",
    isActive: true
  },
  {
    name: "Bookshelf 5-tier",
    category: "storage",
    price: Decimal128("55.00"),
    stock: NumberInt(15),
    inStock: true,
    tags: ["shelf", "wood", "storage"],
    condition: "new",
    isActive: true
  },
  {
    name: "Visitor Chair",
    category: "seating",
    price: Decimal128("45.00"),
    stock: NumberInt(0),
    inStock: false,
    tags: ["chair", "visitor"],
    condition: "used",
    isActive: false
  },
  {
    name: "Reception Desk",
    category: "furniture",
    price: Decimal128("680.00"),
    stock: NumberInt(3),
    inStock: true,
    tags: ["desk", "reception", "large"],
    condition: "new",
    isActive: true
  },
  {
    name: "Locker Unit 4-door",
    category: "storage",
    price: Decimal128("110.00"),
    stock: NumberInt(7),
    inStock: true,
    tags: ["locker", "metal", "4-door"],
    condition: "new",
    isActive: true
  }
])

print("✅ items cargado con " + db.items.countDocuments() + " documentos.")
printjson(db.items.findOne({ name: "Conference Table" }))
