// Semana 06: Tipos BSON y Subdocumentos
// Ejercicio 01: Tipos BSON — SOLUCIÓN

// ============================================================
// PASO 1: Consultar por ObjectId y extraer timestamp
// ============================================================

const emp = db.employees.findOne({ name: "Isabela Ramos" })
print("ObjectId del empleado: " + emp._id)
print("Fecha de creación (del ObjectId): " + emp._id.getTimestamp())

// ============================================================
// PASO 2: Consultar por tipo Date con $gte y $lt
// ============================================================

db.employees.find(
  { hireDate: { $gte: new Date("2022-01-01") } },
  { name: 1, hireDate: 1, _id: 0 }
)

db.employees.find(
  {
    "performance.lastReview": {
      $gte: new Date("2024-01-01"),
      $lt: new Date("2025-01-01")
    }
  },
  { name: 1, "performance.lastReview": 1, _id: 0 }
)

// ============================================================
// PASO 3: Consultar con Decimal128 — salarios
// ============================================================

db.employees.find(
  { salary: { $gt: Decimal128("4500.00") } },
  { name: 1, salary: 1, _id: 0 }
)

// ============================================================
// PASO 4: Consultar con NumberInt y Boolean
// ============================================================

db.employees.find(
  {
    isActive: true,
    isRemote: true,
    age: { $lt: NumberInt(33) }
  },
  { name: 1, age: 1, isRemote: 1, _id: 0 }
)

db.employees.find(
  { salary: { $type: "decimal" } },
  { name: 1, salary: 1, _id: 0 }
)
db.employees.find(
  { hireDate: { $type: "date" } },
  { name: 1, hireDate: 1, _id: 0 }
)
