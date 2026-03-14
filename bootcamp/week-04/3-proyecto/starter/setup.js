// Semana 04: Proyecto — Consultas con Lógica Avanzada
// setup.js — Adapta al dominio asignado

// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// El dominio de ejemplo aquí es ficticio (Planetario) para que no sea
// una solución directa al dominio de ningún aprendiz.
// Renombra la colección y ajusta los campos.

db.items.drop()

// TODO: Renombrar "items" por la entidad principal de tu dominio
// TODO: Asegúrate de incluir:
//   - Al menos un campo boolean (isActive, isAvailable, etc.)
//   - Al menos un campo array (tags, features, participants, etc.)
//   - Campos numéricos con rangos variados
//   - Campos de categoría/tipo con al menos 3-4 valores distintos
//   - Algunas variaciones (distintos niveles, estados, etc.)

db.items.insertMany([
  {
    name: "Elemento de ejemplo",
    category: "tipo-a",
    subcategory: "sub-1",
    value: Decimal128("50.00"),
    count: NumberInt(10),
    isActive: true,
    tags: ["tag1", "tag2", "tag3"],
    scores: [75, 85, 90],
    createdAt: new Date()
  }
  // TODO: Agrega 11 documentos más con:
  //   - Variedad de categorías (3-4 distintas)
  //   - Algunos isActive: false
  //   - Tags variados (algunos documentos comparten tags, otros no)
  //   - scores con diferente cantidad de elementos (2, 3 o 4 por doc)
])

print("✅ Setup lista — adapta la colección a tu dominio")
