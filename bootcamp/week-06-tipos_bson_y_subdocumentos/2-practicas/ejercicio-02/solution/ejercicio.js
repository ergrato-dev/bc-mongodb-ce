// Semana 06: Tipos BSON y Subdocumentos
// Ejercicio 02: Subdocumentos y dot notation — SOLUCIÓN

// ============================================================
// PASO 1: Dot notation — Filtrar por campo de subdocumento
// ============================================================

db.employees.find(
  { "address.city": "Bogotá" },
  { name: 1, "address.city": 1, "address.country": 1, _id: 0 }
)

// ============================================================
// PASO 2: Dot notation a 2 niveles
// ============================================================

db.employees.find(
  { "contact.phone.office": { $exists: true } },
  { name: 1, "contact.phone.office": 1, _id: 0 }
)

db.employees.find(
  {},
  { name: 1, "contact.phone.mobile": 1, _id: 0 }
)

// ============================================================
// PASO 3: Operadores de comparación con dot notation
// ============================================================

db.employees.find(
  { "performance.score": { $gte: NumberInt(8) } },
  { name: 1, "performance.score": 1, _id: 0 }
)

db.employees.updateOne(
  { name: "Sofía Vargas" },
  { $set: { "address.city": "Bogotá", "address.zipCode": "110011" } }
)
db.employees.findOne(
  { name: "Sofía Vargas" },
  { name: 1, "address.city": 1, "address.zipCode": 1, _id: 0 }
)

// ============================================================
// PASO 4: $elemMatch en array de subdocumentos (projects)
// ============================================================

db.employees.find(
  {
    projects: {
      $elemMatch: { status: "active", hoursLogged: { $gt: NumberInt(100) } }
    }
  },
  { name: 1, projects: 1, _id: 0 }
)

db.employees.find(
  {
    "projects.status": "active",
    "projects.hoursLogged": { $gt: NumberInt(100) }
  },
  { name: 1, _id: 0 }
)
