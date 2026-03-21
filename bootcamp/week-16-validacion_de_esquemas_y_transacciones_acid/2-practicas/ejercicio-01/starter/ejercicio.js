// Semana 16: Validación de Esquemas y Transacciones — Ejercicio 01 starter
// ============================================
// Descomenta cada sección en el orden indicado
// ============================================

// ============================================
// PASO 1: Intentar insertar un documento inválido
// ============================================

// Intentamos insertar un producto con campos incorrectos.
// MongoDB debe rechazarlo con un error de validación.
// Descomenta las siguientes líneas:

// try {
//   db.validated_products.insertOne({
//     productId: "prod-bad",
//     name: "X",                           // minLength: 2 — muy corto
//     category: "furniture",               // no está en el enum
//     price: Decimal128("-10.00"),          // minimum: 0 violado
//     stock: NumberInt(5)
//   })
//   print("ERROR: debió rechazarse.")
// } catch(e) {
//   print("Validación activa: " + e.message)
// }

// ============================================
// PASO 2: Insertar un documento que omite un campo requerido
// ============================================

// Descomenta las siguientes líneas:

// try {
//   db.validated_products.insertOne({
//     productId: "prod-nostock",
//     name: "Producto sin stock",
//     category: "tools",
//     price: Decimal128("15.00")
//     // stock es required pero está ausente
//   })
//   print("ERROR: debió rechazarse.")
// } catch(e) {
//   print("Campo requerido ausente: " + e.message)
// }

// ============================================
// PASO 3: Agregar validación a una colección existente con collMod
// ============================================

// La colección product_reviews_v no tiene validación.
// La añadimos ahora con collMod.
// Descomenta las siguientes líneas:

// db.runCommand({
//   collMod: "product_reviews_v",
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: ["reviewId", "productId", "rating", "userId"],
//       properties: {
//         reviewId:  { bsonType: "string" },
//         productId: { bsonType: "string" },
//         rating:    { bsonType: "int", minimum: 1, maximum: 5 },
//         comment:   { bsonType: "string" },
//         userId:    { bsonType: "string" }
//       }
//     }
//   },
//   validationLevel: "strict",
//   validationAction: "error"
// })

// ============================================
// PASO 4: Verificar el validator con listCollections
// ============================================

// Descomenta las siguientes líneas:

// const info = db.runCommand({
//   listCollections: 1,
//   filter: { name: "validated_products" }
// })
// printjson(info.cursor.firstBatch[0].options.validator)
