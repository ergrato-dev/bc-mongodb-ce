// Semana 24: Proyecto Final Capstone
// setup.js — Colecciones genéricas para el proyecto capstone
// Adapta los nombres y campos a tu dominio asignado

// NOTA: Renombra las colecciones y ajusta los campos.
// Ejemplo para Biblioteca:
//   items      → books
//   categories → genres
//   transactions → loans

db.items.drop()
db.categories.drop()
db.item_transactions.drop()
db.daily_summaries.drop()

// Colección principal (Extended Reference: categoryName embebido)
db.items.insertMany([
  {
    code: "ITEM-001",
    name: "Elemento Principal A",
    categoryId: ObjectId("660000000000000000000001"),
    categoryName: "Categoría Alpha",   // Extended Reference
    value: Decimal128("45.00"),
    isActive: true,
    stock: NumberInt(20),
    createdAt: new Date()
  },
  {
    code: "ITEM-002",
    name: "Elemento Principal B",
    categoryId: ObjectId("660000000000000000000002"),
    categoryName: "Categoría Beta",    // Extended Reference
    value: Decimal128("120.00"),
    isActive: true,
    stock: NumberInt(5),
    createdAt: new Date()
  },
  {
    code: "ITEM-003",
    name: "Elemento Principal C",
    categoryId: ObjectId("660000000000000000000001"),
    categoryName: "Categoría Alpha",   // Extended Reference
    value: Decimal128("30.00"),
    isActive: false,
    stock: NumberInt(0),
    createdAt: new Date()
  }
])

// Colección de categorías (fuente para Extended Reference)
db.categories.insertMany([
  {
    _id: ObjectId("660000000000000000000001"),
    name: "Categoría Alpha",
    description: "Primera categoría del dominio"
  },
  {
    _id: ObjectId("660000000000000000000002"),
    name: "Categoría Beta",
    description: "Segunda categoría del dominio"
  }
])

// Colección de transacciones (para withTransaction en el proyecto)
// Inicialmente vacía — se llena desde el script Node.js

// Colección de resúmenes diarios (Computed Pattern)
db.daily_summaries.insertOne({
  date: new Date(new Date().setHours(0, 0, 0, 0)),
  totalOperations: NumberInt(0),
  totalValue: Decimal128("0.00"),
  computedAt: new Date()
})

print("items:", db.items.countDocuments())
print("categories:", db.categories.countDocuments())
print("daily_summaries:", db.daily_summaries.countDocuments())
