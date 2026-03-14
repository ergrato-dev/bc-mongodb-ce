// ============================================
// Semana 21: Replicación y Alta Disponibilidad
// Proyecto — setup.js
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// Ejemplos:
//   Biblioteca  → books, members, loans
//   Farmacia    → medicines, sales, inventory
//   Gimnasio    → members, routines, attendance
//   Restaurante → dishes, tables, orders

// TODO: Renombrar la colección según tu dominio
// TODO: Ajustar los campos según las entidades de tu dominio

db.items.drop()

db.items.insertMany([
  {
    // TODO: Definir los campos de tu entidad principal
    code: "ITEM-001",
    name: "Elemento de ejemplo A",
    category: "general",
    isActive: true,
    quantity: NumberInt(50),
    price: Decimal128("25.00"),
    createdAt: new Date()
  },
  {
    code: "ITEM-002",
    name: "Elemento de ejemplo B",
    category: "general",
    isActive: true,
    quantity: NumberInt(20),
    price: Decimal128("15.50"),
    createdAt: new Date()
  },
  {
    code: "ITEM-003",
    name: "Elemento de ejemplo C",
    category: "especial",
    isActive: false,
    quantity: NumberInt(5),
    price: Decimal128("100.00"),
    createdAt: new Date()
  }
])

print("setup.js: colección 'items' lista con 3 documentos")
print("Replica Set activo: " + rs.status().set)
