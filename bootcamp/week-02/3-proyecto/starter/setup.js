// ============================================
// PROYECTO SEMANA 02: Poblar y Consultar
// Semana 02 — CRUD I: Inserción y Lectura
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// Ejemplos:
//   Biblioteca  → books, members, loans
//   Farmacia    → medicines, sales, inventory
//   Gimnasio    → members, routines, attendance
//   Restaurante → dishes, tables, orders

// TODO: Renombrar "items" por la colección principal de tu dominio
// TODO: Ajustar los campos según las entidades de tu dominio

db.items.drop()

// Colección de ejemplo: "exhibits" (Planetario)
// El aprendiz debe adaptar esto a su dominio
db.items.insertMany([
  {
    // TODO: Definir los campos de tu entidad principal
    // Incluir al menos: nombre, precio/costo, fecha, boolean de estado,
    // array de etiquetas y subdocumento de detalle
    name: "Exhibit A",
    category: "category-1",
    price: Decimal128("0.00"),
    active: true,
    tags: ["tag1", "tag2"],
    details: { field1: "value1", field2: "value2" },
    createdAt: new Date()
  }
  // TODO: Agregar al menos 7 documentos más, representativos de tu dominio
])

print("✅ Datos cargados: " + db.items.countDocuments() + " documentos")
