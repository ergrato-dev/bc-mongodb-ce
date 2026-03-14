// Semana 13: Índices Avanzados — Compuestos, TTL, Parciales y Únicos
// Proyecto Semanal — Implementa los 4 tipos de índice
// ============================================================

// INSTRUCCIONES:
// 1. Carga setup.js primero para insertar los datos de prueba
// 2. Adapta las colecciones y campos a tu dominio asignado
// 3. Implementa cada TODO completamente
// 4. Verifica cada índice con getIndexes() y explain()

// ============================================================
// TODO 1: Índice Compuesto con Regla ESR
// ============================================================

// Identifica una query frecuente en tu dominio que use:
//   - Un campo de igualdad (status, department, role, category...)
//   - Un campo de ordenamiento
//   - Un campo de rango (fecha, precio, cantidad...)
//
// Crea el índice en orden ESR y verifica con explain("executionStats")
// que el plan usa IXSCAN y NO COLLSCAN.

// TODO: Crea el índice compuesto con regla ESR
// db.staff.createIndex({
//   /* E: campo igualdad */ : 1,
//   /* S: campo sort      */ : 1,
//   /* R: campo rango     */ : 1
// })

// TODO: Escribe la query que usa el índice y verifica con explain
// db.staff.find({ ... }).sort({ ... }).explain("executionStats")

// ============================================================
// TODO 2: Índice TTL sobre datos temporales
// ============================================================

// Crea un índice TTL en activity_log.loggedAt.
// Define un tiempo de expiración apropiado para tu dominio
// (logs de auditoría: 7 días, sesiones: 30min, notificaciones: 24h).
//
// Muestra los documentos antes de que expiren.

// TODO: Crea el índice TTL
// db.activity_log.createIndex(
//   { loggedAt: 1 },
//   { expireAfterSeconds: /* tiempo en segundos */ }
// )

// TODO: Consulta los documentos antes de la expiración
// db.activity_log.find({}, { staffId: 1, action: 1, loggedAt: 1, _id: 0 })

// ============================================================
// TODO 3: Índice Parcial
// ============================================================

// Crea un índice parcial en la colección principal que solo indexe
// los registros "activos" (isActive: true).
// La query debe incluir la condición del filtro para usar el índice.

// TODO: Crea el índice parcial con partialFilterExpression
// db.staff.createIndex(
//   { /* campo indexado */ : 1 },
//   {
//     partialFilterExpression: { isActive: { $eq: true } },
//     name: "/* nombre descriptivo */"
//   }
// )

// TODO: Escribe una query que USE el índice parcial y verifica con explain
// (Debe incluir isActive: true en el filtro)

// TODO: Escribe una query que NO use el índice parcial (sin isActive)
// y muestra que hace COLLSCAN

// ============================================================
// TODO 4: Índice Único
// ============================================================

// Crea un índice único en employeeId (o el campo equivalente en tu dominio).
// Demuestra que lanza E11000 al intentar insertar un valor duplicado.

// TODO: Crea el índice único
// db.staff.createIndex({ employeeId: 1 }, { unique: true })

// TODO: Intenta insertar un employeeId duplicado (debe fallar con E11000)
// db.staff.insertOne({ employeeId: "EMP-001", name: "Duplicado" })

// TODO: Verifica que el índice único está activo
// db.staff.getIndexes()
