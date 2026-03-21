// Semana 08: Proyecto Integrador Etapa 0
// Setup — Datos de prueba genéricos
// ============================================================

// NOTA PARA EL APRENDIZ:
// Renombra las colecciones y ajusta los campos según tu dominio.
//
// Ejemplos de adaptación:
//   Biblioteca  → books, members, loans
//   Farmacia    → medicines, sales, inventory
//   Gimnasio    → members, routines, attendance
//   Restaurante → dishes, tables, orders

// Limpiar colecciones previas
db.entities.drop()
db.events.drop()

// Colección principal — adapta al dominio asignado
db.entities.insertMany([
  {
    name: "Item Primero",
    category: "type-a",
    status: "active",
    isActive: true,
    quantity: NumberInt(10),
    price: Decimal128("250.00"),
    createdAt: new Date("2024-01-15"),
    tags: ["featured", "new"],
    details: { color: "blue", weight: NumberInt(500), origin: "local" }
  },
  {
    name: "Item Segundo",
    category: "type-b",
    status: "active",
    isActive: true,
    quantity: NumberInt(5),
    price: Decimal128("899.99"),
    createdAt: new Date("2024-02-03"),
    tags: ["premium"],
    details: { color: "black", weight: NumberInt(1200), origin: "imported" }
  },
  {
    name: "Item Tercero",
    category: "type-a",
    status: "inactive",
    isActive: false,
    quantity: NumberInt(0),
    price: Decimal128("45.50"),
    createdAt: new Date("2024-03-20"),
    tags: ["discontinued"],
    details: { color: "red", weight: NumberInt(300), origin: "local" }
  },
  {
    name: "Item Cuarto",
    category: "type-c",
    status: "active",
    isActive: true,
    quantity: NumberInt(20),
    price: Decimal128("120.00"),
    createdAt: new Date("2024-04-08"),
    tags: ["sale", "new"],
    details: { color: "white", weight: NumberInt(800), origin: "local" }
  },
  {
    name: "Item Quinto",
    category: "type-b",
    status: "active",
    isActive: true,
    quantity: NumberInt(3),
    price: Decimal128("1499.00"),
    createdAt: new Date("2024-04-22"),
    tags: ["premium", "featured"],
    details: { color: "silver", weight: NumberInt(2000), origin: "imported" }
  },
  {
    name: "Item Sexto",
    category: "type-a",
    status: "active",
    isActive: true,
    quantity: NumberInt(15),
    price: Decimal128("75.00"),
    createdAt: new Date("2024-05-14"),
    tags: ["sale"],
    details: { color: "green", weight: NumberInt(450), origin: "local" }
  },
  {
    name: "Item Séptimo",
    category: "type-c",
    status: "active",
    isActive: true,
    quantity: NumberInt(8),
    price: Decimal128("320.00"),
    createdAt: new Date("2024-06-01"),
    tags: ["new"],
    details: { color: "blue", weight: NumberInt(900), origin: "imported" }
  },
  {
    name: "Item Octavo",
    category: "type-b",
    status: "inactive",
    isActive: false,
    quantity: NumberInt(0),
    price: Decimal128("550.00"),
    createdAt: new Date("2024-06-18"),
    tags: ["discontinued", "premium"],
    details: { color: "black", weight: NumberInt(1500), origin: "imported" }
  },
  {
    name: "Item Noveno",
    category: "type-a",
    status: "active",
    isActive: true,
    quantity: NumberInt(25),
    price: Decimal128("35.00"),
    createdAt: new Date("2024-07-05"),
    tags: ["sale", "featured"],
    details: { color: "yellow", weight: NumberInt(200), origin: "local" }
  },
  {
    name: "Item Décimo",
    category: "type-c",
    status: "active",
    isActive: true,
    quantity: NumberInt(7),
    price: Decimal128("780.00"),
    createdAt: new Date("2024-07-29"),
    tags: ["premium"],
    details: { color: "gray", weight: NumberInt(1800), origin: "imported" }
  },
  {
    name: "Item Once",
    category: "type-a",
    status: "active",
    isActive: true,
    quantity: NumberInt(12),
    price: Decimal128("199.00"),
    createdAt: new Date("2024-08-10"),
    tags: ["new", "featured"],
    details: { color: "orange", weight: NumberInt(600), origin: "local" }
  },
  {
    name: "Item Doce",
    category: "type-b",
    status: "active",
    isActive: true,
    quantity: NumberInt(2),
    price: Decimal128("2100.00"),
    createdAt: new Date("2024-08-25"),
    tags: ["premium"],
    details: { color: "gold", weight: NumberInt(3000), origin: "imported" }
  },
  {
    name: "Item Trece",
    category: "type-c",
    status: "active",
    isActive: true,
    quantity: NumberInt(18),
    price: Decimal128("65.50"),
    createdAt: new Date("2024-09-03"),
    tags: ["sale"],
    details: { color: "purple", weight: NumberInt(350), origin: "local" }
  },
  {
    name: "Item Catorce",
    category: "type-a",
    status: "inactive",
    isActive: false,
    quantity: NumberInt(0),
    price: Decimal128("410.00"),
    createdAt: new Date("2024-09-19"),
    tags: ["discontinued"],
    details: { color: "brown", weight: NumberInt(1100), origin: "imported" }
  },
  {
    name: "Item Quince",
    category: "type-b",
    status: "active",
    isActive: true,
    quantity: NumberInt(9),
    price: Decimal128("875.00"),
    createdAt: new Date("2024-10-07"),
    tags: ["premium", "new"],
    details: { color: "navy", weight: NumberInt(2200), origin: "imported" }
  }
])

// Colección de eventos/transacciones relacionados
// Usa los _id de las entities recién insertadas
var entityIds = db.entities.find({}, { _id: 1 }).toArray().map(e => e._id)

db.events.insertMany([
  {
    entityId: entityIds[0],
    action: "purchase",
    amount: Decimal128("250.00"),
    quantity: NumberInt(2),
    occurredAt: new Date("2024-01-20"),
    performedBy: { userId: "user001", name: "Ana García" }
  },
  {
    entityId: entityIds[1],
    action: "restock",
    amount: Decimal128("0.00"),
    quantity: NumberInt(5),
    occurredAt: new Date("2024-02-10"),
    performedBy: { userId: "admin01", name: "Admin Sistema" }
  },
  {
    entityId: entityIds[3],
    action: "purchase",
    amount: Decimal128("360.00"),
    quantity: NumberInt(3),
    occurredAt: new Date("2024-04-15"),
    performedBy: { userId: "user002", name: "Carlos López" }
  },
  {
    entityId: entityIds[0],
    action: "purchase",
    amount: Decimal128("500.00"),
    quantity: NumberInt(2),
    occurredAt: new Date("2024-05-05"),
    performedBy: { userId: "user003", name: "María Torres" }
  },
  {
    entityId: entityIds[4],
    action: "purchase",
    amount: Decimal128("1499.00"),
    quantity: NumberInt(1),
    occurredAt: new Date("2024-05-20"),
    performedBy: { userId: "user001", name: "Ana García" }
  }
])

print("Entities insertadas:", db.entities.countDocuments())
print("Events insertados:", db.events.countDocuments())
