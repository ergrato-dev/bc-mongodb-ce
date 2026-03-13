// ============================================
// PROYECTO SEMANAL: Mi Primera Colección MongoDB
// Semana 01 — Introducción a MongoDB y NoSQL
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// Ejemplos:
//   Biblioteca  → books, members, loans
//   Farmacia    → medicines, sales, inventory
//   Gimnasio    → members, routines, classes
//   Restaurante → dishes, tables, orders
//
// El ejemplo usa "Planetario" (exposiciones espaciales).
// Tu implementación debe usar TU dominio.

// TODO: Renombrar 'exhibits' por la colección principal de tu dominio
// TODO: Ajustar los campos según las entidades de tu dominio
// TODO: Asegurarte de incluir al menos un subdocumento o array

// Limpiar colección antes de insertar (útil para re-ejecutar)
db.exhibits.drop()

// TODO: Insertar al menos 5 documentos con datos realistas
// Usa tipos BSON correctos: Decimal128 para montos, NumberInt para enteros,
// new Date() para fechas, arrays para listas, objetos para subdocumentos.

db.exhibits.insertMany([
  {
    // TODO: Definir los campos de tu entidad principal
    // Ejemplo de Planetario:
    name: "Sistema Solar Interactivo",
    category: "interactive",
    admissionFee: Decimal128("12.50"),
    capacity: NumberInt(40),
    isOpen: true,
    tags: ["solar", "planets", "interactive"],
    location: { hall: "A", floor: NumberInt(1) },
    openedAt: new Date("2023-06-01")
  }
  // TODO: Agregar los 4 documentos restantes
])

print("✅ Colección creada con " + db.exhibits.countDocuments() + " documento(s).")
