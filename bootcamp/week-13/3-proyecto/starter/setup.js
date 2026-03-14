// Semana 13: Índices Avanzados — Compuestos, TTL, Parciales y Únicos
// Proyecto Semanal — Setup de datos genérico
// ============================================================

// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// Ejemplos:
//   Biblioteca  → books (title, isbn, status, publishedAt) + reading_logs
//   Farmacia    → medications (code, stock, category) + sales_log
//   Gimnasio    → members (email, membership, isActive) + attendance_log
//   Restaurante → dishes (code, category, isAvailable) + order_log
//   Hospital    → patients (idNumber, isActive, ward) + visits_log

// TODO: Renombrar "staff" y "activity_log" según tu dominio

db.staff.drop()
db.activity_log.drop()

// Colección principal — entidad maestra
db.staff.insertMany([
  {
    employeeId: "EMP-001",
    name: "María Rodríguez",
    department: "engineering",
    role: "developer",
    isActive: true,
    salary: Decimal128("3500000.00"),
    hiredAt: new Date("2022-03-15")
  },
  {
    employeeId: "EMP-002",
    name: "Juan Pérez",
    department: "marketing",
    role: "analyst",
    isActive: true,
    salary: Decimal128("2800000.00"),
    hiredAt: new Date("2022-07-01")
  },
  {
    employeeId: "EMP-003",
    name: "Laura Gómez",
    department: "engineering",
    role: "developer",
    isActive: false,
    salary: Decimal128("3200000.00"),
    hiredAt: new Date("2021-11-20")
  },
  {
    employeeId: "EMP-004",
    name: "Andrés Castro",
    department: "hr",
    role: "manager",
    isActive: true,
    salary: Decimal128("4500000.00"),
    hiredAt: new Date("2020-05-10")
  },
  {
    employeeId: "EMP-005",
    name: "Sofía Vargas",
    department: "marketing",
    role: "designer",
    isActive: false,
    salary: Decimal128("2600000.00"),
    hiredAt: new Date("2023-01-15")
  },
  {
    employeeId: "EMP-006",
    name: "Diego Torres",
    department: "engineering",
    role: "lead",
    isActive: true,
    salary: Decimal128("5500000.00"),
    hiredAt: new Date("2019-08-08")
  },
  {
    employeeId: "EMP-007",
    name: "Carolina López",
    department: "hr",
    role: "analyst",
    isActive: true,
    salary: Decimal128("2900000.00"),
    hiredAt: new Date("2023-06-01")
  },
  {
    employeeId: "EMP-008",
    name: "Ricardo Herrera",
    department: "engineering",
    role: "developer",
    isActive: false,
    salary: Decimal128("3100000.00"),
    hiredAt: new Date("2022-09-20")
  }
])

// Colección con datos temporales — para índice TTL
db.activity_log.insertMany([
  {
    staffId: "EMP-001",
    action: "login",
    module: "dashboard",
    loggedAt: new Date()
  },
  {
    staffId: "EMP-002",
    action: "view_report",
    module: "analytics",
    loggedAt: new Date()
  },
  {
    staffId: "EMP-004",
    action: "update_record",
    module: "hr_portal",
    loggedAt: new Date()
  },
  {
    staffId: "EMP-006",
    action: "deploy_task",
    module: "devops",
    loggedAt: new Date()
  },
  {
    staffId: "EMP-007",
    action: "login",
    module: "dashboard",
    loggedAt: new Date()
  }
])

print("✅ staff: " + db.staff.countDocuments() + " documentos insertados")
print("   Activos: " + db.staff.countDocuments({ isActive: true }) +
      " | Inactivos: " + db.staff.countDocuments({ isActive: false }))
print("✅ activity_log: " + db.activity_log.countDocuments() + " documentos insertados")
