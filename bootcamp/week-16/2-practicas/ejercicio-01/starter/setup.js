// Semana 16: Validación de Esquemas y Transacciones — Ejercicio 01
// ============================================
// SETUP — Datos de prueba
// ============================================

// Limpiar colecciones previas
db.getCollection("validated_products").drop()
db.product_reviews_v.drop()

// Crear colección con $jsonSchema validator
db.createCollection("validated_products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["productId", "name", "category", "price", "stock"],
      properties: {
        productId: {
          bsonType: "string",
          description: "Identificador único del producto"
        },
        name: {
          bsonType: "string",
          minLength: 2,
          maxLength: 100
        },
        category: {
          bsonType: "string",
          enum: ["electronics", "clothing", "food", "tools", "books"]
        },
        price: {
          bsonType: "decimal",
          minimum: 0,
          description: "Precio en Decimal128, debe ser >= 0"
        },
        stock: {
          bsonType: "int",
          minimum: 0
        },
        isActive: {
          bsonType: "bool"
        },
        tags: {
          bsonType: "array",
          items: { bsonType: "string" }
        }
      }
    }
  },
  validationLevel:  "strict",
  validationAction: "error"
})

// Insertar productos válidos
db.validated_products.insertMany([
  {
    productId: "prod-001",
    name: "Laptop Ultrabook X1",
    category: "electronics",
    price: Decimal128("899.99"),
    stock: NumberInt(15),
    isActive: true,
    tags: ["laptop", "ultrabook", "portable"]
  },
  {
    productId: "prod-002",
    name: "Camiseta Deportiva",
    category: "clothing",
    price: Decimal128("29.99"),
    stock: NumberInt(100),
    isActive: true,
    tags: ["deporte", "ropa"]
  },
  {
    productId: "prod-003",
    name: "Martillo Profesional",
    category: "tools",
    price: Decimal128("45.00"),
    stock: NumberInt(30),
    isActive: true,
    tags: ["herramienta", "construccion"]
  },
  {
    productId: "prod-004",
    name: "Arroz Integral Orgánico",
    category: "food",
    price: Decimal128("4.50"),
    stock: NumberInt(200),
    isActive: true,
    tags: ["organico", "grano"]
  },
  {
    productId: "prod-005",
    name: "MongoDB: The Definitive Guide",
    category: "books",
    price: Decimal128("55.00"),
    stock: NumberInt(8),
    isActive: false,
    tags: ["mongodb", "nosql", "databases"]
  }
])

// Colección adicional sin validación inicial (para ejercicio de collMod)
db.product_reviews_v.insertMany([
  { reviewId: "rev-001", productId: "prod-001", rating: NumberInt(5), comment: "Excelente.", userId: "user_01" },
  { reviewId: "rev-002", productId: "prod-001", rating: NumberInt(4), comment: "Muy buena.", userId: "user_02" },
  { reviewId: "rev-003", productId: "prod-002", rating: NumberInt(3), comment: "Regular.", userId: "user_03" }
])

print("Setup semana 16 - ejercicio 01 completado.")
print("validated_products : " + db.validated_products.countDocuments())
print("product_reviews_v  : " + db.product_reviews_v.countDocuments())
