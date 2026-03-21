// ============================================
// Semana 22: Seguridad y Administración
// Ejercicio 02 — $jsonSchema y Administración
// ============================================

// ============================================
// PASO 1: Insertar documento VÁLIDO
// ============================================

// Este documento cumple todos los requisitos del $jsonSchema:
// - firstName y lastName tienen 2+ caracteres
// - email tiene formato válido
// - salary es decimal >= 0
// - department es uno de los valores enum
// Descomenta las siguientes líneas:

// db.employees.insertOne({
//   firstName: "Laura",
//   lastName: "Gómez",
//   email: "laura.gomez@example.com",
//   salary: Decimal128("4500.00"),
//   department: "engineering",
//   isActive: true
// })

// ============================================
// PASO 2: Intentar insertar documento INVÁLIDO
// ============================================

// Este documento viola múltiples reglas — observa el error de validación:
// - firstName de 1 carácter (minLength:2 falla)
// - salary negativo (minimum:0 falla)
// - department no está en el enum
// Descomenta las siguientes líneas:

// db.employees.insertOne({
//   firstName: "X",
//   lastName: "Apellido",
//   email: "x@example.com",
//   salary: Decimal128("-100.00"),
//   department: "marketing"
// })
// → Espera un error: Document failed validation

// ============================================
// PASO 3: Insertar documento con campo faltante
// ============================================

// Falta el campo 'department' que está en required[]:
// Descomenta las siguientes líneas:

// db.employees.insertOne({
//   firstName: "Carlos",
//   lastName: "Torres",
//   email: "carlos@example.com",
//   salary: Decimal128("3200.00")
//   // 'department' faltante — violación de required
// })
// → Error: "required" property "department" is missing

// ============================================
// PASO 4: Ver el validador de la colección
// ============================================

// db.getCollectionInfos({ name: "employees" })[0].options.validator
