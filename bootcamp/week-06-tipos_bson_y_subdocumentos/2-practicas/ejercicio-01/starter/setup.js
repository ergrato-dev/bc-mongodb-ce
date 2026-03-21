// Semana 06: Tipos BSON y Subdocumentos
// setup.js — Ejercicio 01: Tipos BSON correctos en un catálogo de empleados

db.employees.drop()

db.employees.insertMany([
  {
    name: "Isabela Ramos",
    age: NumberInt(29),
    salary: Decimal128("4500.00"),
    hireDate: new Date("2022-06-01"),
    isActive: true,
    isRemote: true,
    address: {
      street: "Av. Principal 456",
      city: "Bogotá",
      country: "Colombia",
      zipCode: "110011"
    },
    contact: {
      phone: { mobile: "+57 300 111 2222", office: "+57 1 234 5678" },
      social: { linkedin: "isabela-ramos" }
    },
    skills: ["MongoDB", "Node.js", "Docker"],
    performance: { score: NumberInt(9), lastReview: new Date("2024-01-15") },
    projects: [
      { name: "API Gateway", status: "active", hoursLogged: NumberInt(120) },
      { name: "Migration", status: "completed", hoursLogged: NumberInt(80) }
    ]
  },
  {
    name: "Carlos Ruiz",
    age: NumberInt(34),
    salary: Decimal128("5200.00"),
    hireDate: new Date("2020-03-10"),
    isActive: true,
    isRemote: false,
    address: {
      street: "Calle 10 #23-45",
      city: "Medellín",
      country: "Colombia",
      zipCode: "050001"
    },
    contact: {
      phone: { mobile: "+57 300 333 4444", office: "+57 4 345 6789" },
      social: { linkedin: "carlos-ruiz-dev" }
    },
    skills: ["Python", "MongoDB", "AWS"],
    performance: { score: NumberInt(8), lastReview: new Date("2024-02-20") },
    projects: [
      { name: "Data Pipeline", status: "active", hoursLogged: NumberInt(200) },
      { name: "Reporting", status: "active", hoursLogged: NumberInt(50) }
    ]
  },
  {
    name: "Sofía Vargas",
    age: NumberInt(26),
    salary: Decimal128("3800.00"),
    hireDate: new Date("2023-09-01"),
    isActive: true,
    isRemote: true,
    address: {
      street: "Carrera 80 #12-10",
      city: "Cali",
      country: "Colombia",
      zipCode: "760001"
    },
    contact: {
      phone: { mobile: "+57 301 555 6666" },
      social: {}
    },
    skills: ["JavaScript", "React", "MongoDB"],
    performance: { score: NumberInt(7), lastReview: new Date("2023-12-10") },
    projects: [
      { name: "Frontend Redesign", status: "active", hoursLogged: NumberInt(90) }
    ]
  },
  {
    name: "Miguel Torres",
    age: NumberInt(41),
    salary: Decimal128("6100.00"),
    hireDate: new Date("2018-01-15"),
    isActive: true,
    isRemote: false,
    address: {
      street: "Diagonal 22 #56-78",
      city: "Bogotá",
      country: "Colombia",
      zipCode: "110221"
    },
    contact: {
      phone: { mobile: "+57 302 777 8888", office: "+57 1 456 7890" },
      social: { linkedin: "miguel-torres-mgr", twitter: "@mtorres" }
    },
    skills: ["Leadership", "MongoDB", "Java", "Kubernetes"],
    performance: { score: NumberInt(9), lastReview: new Date("2024-03-01") },
    projects: [
      { name: "Platform Upgrade", status: "active", hoursLogged: NumberInt(60) },
      { name: "Team Training", status: "completed", hoursLogged: NumberInt(30) }
    ]
  },
  {
    name: "Laura Mendez",
    age: NumberInt(31),
    salary: Decimal128("4200.00"),
    hireDate: new Date("2021-07-20"),
    isActive: false,
    isRemote: false,
    address: {
      street: "Transversal 45 #9-12",
      city: "Barranquilla",
      country: "Colombia",
      zipCode: "080001"
    },
    contact: {
      phone: { mobile: "+57 303 999 0000" },
      social: {}
    },
    skills: ["QA", "Selenium", "MongoDB"],
    performance: { score: NumberInt(6), lastReview: new Date("2023-06-30") },
    projects: [
      { name: "Test Automation", status: "on-hold", hoursLogged: NumberInt(45) }
    ]
  }
])

print("✅ employees cargado con " + db.employees.countDocuments() + " documentos.")
printjson(db.employees.findOne({ name: "Isabela Ramos" }))
