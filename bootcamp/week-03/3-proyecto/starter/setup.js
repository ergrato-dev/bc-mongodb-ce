// Semana 03: Proyecto — Consultas con Operadores
// setup.js — Esquema genérico, adapta al dominio asignado

// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// Ejemplos:
//   Biblioteca  → books, members, loans
//   Farmacia    → medicines, sales, inventory
//   Gimnasio    → members, routines, attendance
//   Restaurante → dishes, tables, orders
//
// Elimina esta colección si ya existe
db.items.drop()

// TODO: Renombrar "items" por la entidad principal de tu dominio
// TODO: Ajustar los campos según las necesidades de tu dominio

db.items.insertMany([
  {
    // TODO: Agrega los campos específicos de tu dominio
    // El esquema debe incluir:
    //   - Al menos 2 campos numéricos (precio, cantidad, año, etc.)
    //   - Al menos 1 campo de categoría/tipo
    //   - Al menos 1 campo booleano (activo, disponible, etc.)
    //   - Al menos 1 campo array (etiquetas, características)
    //   - Al menos 1 campo opcional (descuento, calificación, etc.)
    name: "Elemento de ejemplo",
    category: "categoria-a",
    value: Decimal128("10.00"),
    count: NumberInt(5),
    isActive: true,
    year: NumberInt(2023),
    tags: ["tag1", "tag2"],
    createdAt: new Date()
  }
  // TODO: Agrega al menos 11 documentos más
  // Asegúrate de que:
  //   - Los valores numéricos tengan rangos variados
  //   - Algunos documentos tengan el campo opcional y otros no
  //   - Algunos tengan inStock/isActive en false
  //   - Las categorías sean al menos 3-4 distintas
])

print("✅ Colección items creada — adapta el nombre y los datos")
