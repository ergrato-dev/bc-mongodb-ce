// Semana 16: Validación de Esquemas y Transacciones — Ejercicio 01 solution
// ============================================

// ============================================
// PASO 1: Intentar insertar un documento inválido
// ============================================

try {
  db.validated_products.insertOne({
    productId: "prod-bad",
    name: "X",
    category: "furniture",
    price: Decimal128("-10.00"),
    stock: NumberInt(5)
  })
  print("ERROR: debió rechazarse.")
} catch(e) {
  print("Validación activa: " + e.message)
}

// ============================================
// PASO 2: Insertar un documento que omite un campo requerido
// ============================================

try {
  db.validated_products.insertOne({
    productId: "prod-nostock",
    name: "Producto sin stock",
    category: "tools",
    price: Decimal128("15.00")
  })
  print("ERROR: debió rechazarse.")
} catch(e) {
  print("Campo requerido ausente: " + e.message)
}

// ============================================
// PASO 3: Agregar validación con collMod
// ============================================

db.runCommand({
  collMod: "product_reviews_v",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["reviewId", "productId", "rating", "userId"],
      properties: {
        reviewId:  { bsonType: "string" },
        productId: { bsonType: "string" },
        rating:    { bsonType: "int", minimum: 1, maximum: 5 },
        comment:   { bsonType: "string" },
        userId:    { bsonType: "string" }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
})

// ============================================
// PASO 4: Verificar el validator con listCollections
// ============================================

const info = db.runCommand({
  listCollections: 1,
  filter: { name: "validated_products" }
})
printjson(info.cursor.firstBatch[0].options.validator)
