// Semana 02 — Ejercicio 01: insertOne e insertMany
// ejercicio.js — Descomenta cada sección para practicar la inserción

// ============================================
// PASO 1: Insertar un documento con insertOne()
// ============================================

// insertOne() retorna el _id del documento insertado.
// Descomenta las siguientes líneas:

// let resultado = db.books.insertOne({
//   title: "Eloquent JavaScript",
//   author: "Marijn Haverbeke",
//   year: NumberInt(2018),
//   price: Decimal128("31.99"),
//   inStock: true,
//   tags: ["javascript", "web"],
//   publisher: { name: "No Starch Press", country: "USA" }
// })
// print("_id generado:", resultado.insertedId)


// ============================================
// PASO 2: Insertar múltiples documentos con insertMany()
// ============================================

// insertMany() retorna los _id de todos los documentos.
// Descomenta las siguientes líneas:

// let resultado2 = db.books.insertMany([
//   {
//     title: "Learning Python",
//     author: "Mark Lutz",
//     year: NumberInt(2013),
//     price: Decimal128("59.99"),
//     inStock: true,
//     tags: ["python"]
//   },
//   {
//     title: "Fluent Python",
//     author: "Luciano Ramalho",
//     year: NumberInt(2022),
//     price: Decimal128("69.99"),
//     inStock: true,
//     tags: ["python", "advanced"]
//   }
// ])
// print("Insertados:", Object.keys(resultado2.insertedIds).length, "documentos")


// ============================================
// PASO 3: Insertar con _id personalizado
// ============================================

// Puedes definir el _id tú mismo en lugar de usar ObjectId automático.
// Descomenta las siguientes líneas:

// db.books.insertOne({
//   _id: "ISBN-978-0-596-51774-8",
//   title: "JavaScript: The Good Parts",
//   author: "Douglas Crockford",
//   year: NumberInt(2008),
//   price: Decimal128("24.99"),
//   inStock: false
// })
// db.books.findOne({ _id: "ISBN-978-0-596-51774-8" })


// ============================================
// PASO 4: insertMany con ordered: false
// ============================================

// Con ordered: false, los errores no detienen el lote completo.
// Descomenta las siguientes líneas:

// db.books.insertMany(
//   [
//     { _id: "custom-1", title: "Book A", price: Decimal128("19.99") },
//     { _id: "custom-1", title: "Book B", price: Decimal128("24.99") },  // _id duplicado
//     { _id: "custom-2", title: "Book C", price: Decimal128("29.99") }
//   ],
//   { ordered: false }
// )
// // Book A y Book C se insertan; Book B falla sin detener el lote
// db.books.find({ _id: { $in: ["custom-1", "custom-2"] } })


// ============================================
// VERIFICAR: contar total de libros
// ============================================

// db.books.countDocuments()
