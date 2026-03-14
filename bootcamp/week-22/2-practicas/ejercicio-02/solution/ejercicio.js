// ============================================
// Semana 22: Seguridad y Administración
// Ejercicio 02 — SOLUCIÓN
// ============================================

// ============================================
// PASO 1: Insertar documento VÁLIDO
// ============================================

db.employees.insertOne({
  firstName: "Laura",
  lastName: "Gómez",
  email: "laura.gomez@example.com",
  salary: Decimal128("4500.00"),
  department: "engineering",
  isActive: true
})

// ============================================
// PASO 2: Intentar insertar documento INVÁLIDO
// ============================================
// Este bloque generará un error — es el comportamiento esperado

try {
  db.employees.insertOne({
    firstName: "X",
    lastName: "Apellido",
    email: "x@example.com",
    salary: Decimal128("-100.00"),
    department: "marketing"
  })
} catch (e) {
  print("Error esperado: " + e.message)
}

// ============================================
// PASO 3: Insertar documento con campo faltante
// ============================================

try {
  db.employees.insertOne({
    firstName: "Carlos",
    lastName: "Torres",
    email: "carlos@example.com",
    salary: Decimal128("3200.00")
  })
} catch (e) {
  print("Error esperado por campo faltante: " + e.message)
}

// ============================================
// PASO 4: Ver el validador de la colección
// ============================================

db.getCollectionInfos({ name: "employees" })[0].options.validator
