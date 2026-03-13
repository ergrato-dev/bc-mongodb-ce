// Semana 02 — Ejercicio 01: insertOne e insertMany
// setup.js — Crea la colección y carga datos de libros

// Limpiar colección si existe
db.books.drop()

// Insertar documentos con insertOne (uno a uno)
db.books.insertOne({
  title: "Clean Code",
  author: "Robert C. Martin",
  year: NumberInt(2008),
  price: Decimal128("39.99"),
  inStock: true,
  tags: ["programming", "clean-code", "best-practices"],
  publisher: { name: "Prentice Hall", country: "USA" }
})

db.books.insertOne({
  title: "The Pragmatic Programmer",
  author: "David Thomas",
  year: NumberInt(1999),
  price: Decimal128("49.99"),
  inStock: true,
  tags: ["programming", "career"],
  publisher: { name: "Addison-Wesley", country: "USA" }
})

// Insertar en lote con insertMany
db.books.insertMany([
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    year: NumberInt(2015),
    price: Decimal128("29.99"),
    inStock: true,
    tags: ["javascript", "frontend"],
    publisher: { name: "O'Reilly", country: "USA" }
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: NumberInt(2008),
    price: Decimal128("24.99"),
    inStock: false,
    tags: ["javascript"],
    publisher: { name: "O'Reilly", country: "USA" }
  },
  {
    title: "Design Patterns",
    author: "Gang of Four",
    year: NumberInt(1994),
    price: Decimal128("54.99"),
    inStock: true,
    tags: ["patterns", "architecture"],
    publisher: { name: "Addison-Wesley", country: "USA" }
  },
  {
    title: "Refactoring",
    author: "Martin Fowler",
    year: NumberInt(2018),
    price: Decimal128("44.99"),
    inStock: true,
    tags: ["refactoring", "clean-code"],
    publisher: { name: "Addison-Wesley", country: "USA" }
  },
  {
    title: "Node.js Design Patterns",
    author: "Mario Casciaro",
    year: NumberInt(2020),
    price: Decimal128("35.99"),
    inStock: true,
    tags: ["nodejs", "javascript", "patterns"],
    publisher: { name: "Packt", country: "UK" }
  },
  {
    title: "Pro MongoDB Development",
    author: "Deepak Vohra",
    year: NumberInt(2015),
    price: Decimal128("49.50"),
    inStock: false,
    tags: ["mongodb", "nosql"],
    publisher: { name: "Apress", country: "USA" }
  }
])

print("✅ Setup completado: " + db.books.countDocuments() + " libros insertados")
