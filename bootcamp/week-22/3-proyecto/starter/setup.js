// ============================================
// Semana 22: Seguridad y Administración
// Proyecto — setup.js
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este esquema al dominio que te fue asignado.
// La colección con validador va aquí para que puedas probarla.
// Renombra 'items' y ajusta los campos.

db.items.drop()

// Crear colección SIN validador (añadirás el tuyo en proyecto.js)
db.items.insertMany([
  {
    code: "ITEM-001",
    name: "Elemento de ejemplo",
    category: "general",
    price: Decimal128("10.00"),
    isActive: true,
    createdAt: new Date()
  },
  {
    code: "ITEM-002",
    name: "Segundo elemento",
    category: "especial",
    price: Decimal128("50.00"),
    isActive: true,
    createdAt: new Date()
  }
])

print("setup.js: colección 'items' lista con 2 documentos")
print("Adapta la colección y sus campos a tu dominio asignado.")
