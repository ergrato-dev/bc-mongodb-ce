// Semana 06: Tipos BSON y Subdocumentos
// Ejercicio 01: Tipos BSON — ObjectId, Date, Decimal128, NumberInt
// ============================================================
// Antes de comenzar, ejecuta setup.js para cargar los datos.

// ============================================================
// PASO 1: Consultar por ObjectId y extraer timestamp
// ============================================================

// Obtén el _id del primer empleado y consulta por él.
// ObjectId contiene la fecha de creación embebida.
// Descomenta las siguientes líneas:

// const emp = db.employees.findOne({ name: "Isabela Ramos" })
// print("ObjectId del empleado: " + emp._id)
// print("Fecha de creación (del ObjectId): " + emp._id.getTimestamp())

// ============================================================
// PASO 2: Consultar por tipo Date con $gte y $lt
// ============================================================

// Busca empleados contratados en 2022 o después.
// Las fechas se comparan directamente con operadores.
// Descomenta las siguientes líneas:

// db.employees.find(
//   { hireDate: { $gte: new Date("2022-01-01") } },
//   { name: 1, hireDate: 1, _id: 0 }
// )

// Busca empleados con última revisión de desempeño en 2024:
// db.employees.find(
//   {
//     "performance.lastReview": {
//       $gte: new Date("2024-01-01"),
//       $lt: new Date("2025-01-01")
//     }
//   },
//   { name: 1, "performance.lastReview": 1, _id: 0 }
// )

// ============================================================
// PASO 3: Consultar con Decimal128 — salarios
// ============================================================

// Busca empleados con salario mayor a 4500.
// Nota: usa Decimal128 en el filtro para coincidir con el tipo almacenado.
// Descomenta las siguientes líneas:

// db.employees.find(
//   { salary: { $gt: Decimal128("4500.00") } },
//   { name: 1, salary: 1, _id: 0 }
// )

// ============================================================
// PASO 4: Consultar con NumberInt y Boolean
// ============================================================

// Busca empleados activos y remotos con edad menor a 33:
// db.employees.find(
//   {
//     isActive: true,
//     isRemote: true,
//     age: { $lt: NumberInt(33) }
//   },
//   { name: 1, age: 1, isRemote: 1, _id: 0 }
// )

// Verifica los tipos BSON almacenados con $type:
// db.employees.find(
//   { salary: { $type: "decimal" } },
//   { name: 1, salary: 1, _id: 0 }
// )
// db.employees.find(
//   { hireDate: { $type: "date" } },
//   { name: 1, hireDate: 1, _id: 0 }
// )
