// Semana 06: Tipos BSON y Subdocumentos
// setup.js — Proyecto: catálogo con datos enriquecidos
// ============================================================
// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// Ejemplos de adaptación:
//   Biblioteca  → books (title, isbn, publishDate, price, author: {name, country})
//   Farmacia    → medicines (name, lab, expiration, price, storage: {temp, location})
//   Gimnasio    → members (name, joinDate, plan: {name, price}, stats: {weight, height})
//   Restaurante → dishes (name, category, price, recipe: {ingredients, prepTime})

// TODO: Renombrar "catalog" por la colección de tu dominio
db.catalog.drop()

db.catalog.insertMany([
  {
    // TODO: Agregar campos de tu entidad principal
    name: "Ejemplo de ítem 1",
    createdAt: new Date("2024-01-10"),
    price: Decimal128("29.99"),
    isActive: true,
    // TODO: Definir subdocumento con los datos de tu entidad
    details: {
      origin: "Colombia",
      brand: "Generic",
      weight: NumberInt(500)
    },
    tags: ["tag1", "tag2"]
  },
  {
    name: "Ejemplo de ítem 2",
    createdAt: new Date("2024-02-15"),
    price: Decimal128("49.99"),
    isActive: true,
    details: {
      origin: "México",
      brand: "Premium",
      weight: NumberInt(800)
    },
    tags: ["tag2", "tag3"]
  }
])

print("✅ catalog cargado con " + db.catalog.countDocuments() + " documentos.")
print("RECUERDA: Adapta el esquema a tu dominio antes de entregar.")
