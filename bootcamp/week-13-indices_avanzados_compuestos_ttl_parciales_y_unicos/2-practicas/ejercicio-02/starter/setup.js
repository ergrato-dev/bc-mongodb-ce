// Semana 13: Índices Avanzados — Compuestos, TTL, Parciales y Únicos
// Ejercicio 02 — Setup: TTL, Parciales y Únicos
// ============================================================

// Colección 1: sessions (para índice TTL)
// Campos: userId, token, createdAt, isGuest

db.sessions.drop()

db.sessions.insertMany([
  {
    userId: "user-01",
    token: "tkn-abc123",
    isGuest: false,
    createdAt: new Date()
  },
  {
    userId: "user-02",
    token: "tkn-def456",
    isGuest: false,
    createdAt: new Date()
  },
  {
    userId: "user-03",
    token: "tkn-ghi789",
    isGuest: true,
    createdAt: new Date()
  },
  {
    userId: "user-04",
    token: "tkn-jkl012",
    isGuest: false,
    createdAt: new Date()
  },
  {
    userId: "user-05",
    token: "tkn-mno345",
    isGuest: true,
    createdAt: new Date()
  }
])

// Colección 2: users_idx (para índices único y parcial)
// Campos: email, username, isActive, role, registeredAt

db.users_idx.drop()

db.users_idx.insertMany([
  {
    email: "ana@example.com",
    username: "ana_dev",
    isActive: true,
    role: "admin",
    registeredAt: new Date("2023-01-10")
  },
  {
    email: "carlos@example.com",
    username: "clopez",
    isActive: true,
    role: "editor",
    registeredAt: new Date("2023-03-22")
  },
  {
    email: "diana@example.com",
    username: "diana99",
    isActive: false,
    role: "viewer",
    registeredAt: new Date("2023-06-15")
  },
  {
    email: "elias@example.com",
    username: "elias_m",
    isActive: true,
    role: "editor",
    registeredAt: new Date("2023-09-01")
  },
  {
    email: "fiona@example.com",
    username: "fionax",
    isActive: false,
    role: "viewer",
    registeredAt: new Date("2024-01-05")
  },
  {
    email: "gabriel@example.com",
    username: "gab_admin",
    isActive: true,
    role: "admin",
    registeredAt: new Date("2024-02-14")
  },
  {
    email: "helena@example.com",
    username: "helenav",
    isActive: true,
    role: "viewer",
    registeredAt: new Date("2024-04-20")
  },
  {
    email: "ivan@example.com",
    username: "ivan_io",
    isActive: false,
    role: "editor",
    registeredAt: new Date("2024-06-01")
  }
])

print("✅ sessions: " + db.sessions.countDocuments() + " documentos insertados")
print("✅ users_idx: " + db.users_idx.countDocuments() + " documentos insertados")
print("   Activos: " + db.users_idx.countDocuments({ isActive: true }) +
      " | Inactivos: " + db.users_idx.countDocuments({ isActive: false }))
