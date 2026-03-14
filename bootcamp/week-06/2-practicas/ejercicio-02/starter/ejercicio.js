// Semana 06: Tipos BSON y Subdocumentos
// Ejercicio 02: Subdocumentos y dot notation
// ============================================================
// Requiere la colección "employees" del ejercicio-01.

// ============================================================
// PASO 1: Dot notation — Filtrar por campo de subdocumento
// ============================================================

// Busca todos los empleados de la ciudad "Bogotá".
// "address" es un subdocumento; usa dot notation para acceder a .city.
// Descomenta las siguientes líneas:

// db.employees.find(
//   { "address.city": "Bogotá" },
//   { name: 1, "address.city": 1, "address.country": 1, _id: 0 }
// )

// ============================================================
// PASO 2: Dot notation a 2 niveles
// ============================================================

// Busca empleados que tengan teléfono de oficina registrado.
// "contact.phone.office" tiene 2 niveles de anidamiento.
// Descomenta las siguientes líneas:

// db.employees.find(
//   { "contact.phone.office": { $exists: true } },
//   { name: 1, "contact.phone.office": 1, _id: 0 }
// )

// Proyecta solo el teléfono móvil de todos los empleados:
// db.employees.find(
//   {},
//   { name: 1, "contact.phone.mobile": 1, _id: 0 }
// )

// ============================================================
// PASO 3: Operadores de comparación con dot notation
// ============================================================

// Busca empleados con score de desempeño >= 8:
// db.employees.find(
//   { "performance.score": { $gte: NumberInt(8) } },
//   { name: 1, "performance.score": 1, _id: 0 }
// )

// Actualiza el campo de ciudad de un empleado con $set y dot notation:
// db.employees.updateOne(
//   { name: "Sofía Vargas" },
//   { $set: { "address.city": "Bogotá", "address.zipCode": "110011" } }
// )
// db.employees.findOne(
//   { name: "Sofía Vargas" },
//   { name: 1, "address.city": 1, "address.zipCode": 1, _id: 0 }
// )

// ============================================================
// PASO 4: $elemMatch en array de subdocumentos (projects)
// ============================================================

// Busca empleados con al menos 1 proyecto activo con más de 100 horas:
// db.employees.find(
//   {
//     projects: {
//       $elemMatch: { status: "active", hoursLogged: { $gt: NumberInt(100) } }
//     }
//   },
//   { name: 1, projects: 1, _id: 0 }
// )

// Compara con la versión SIN $elemMatch (puede dar falsos positivos):
// db.employees.find(
//   {
//     "projects.status": "active",
//     "projects.hoursLogged": { $gt: NumberInt(100) }
//   },
//   { name: 1, _id: 0 }
// )
