// Semana 12: Aggregation Pipeline III — $facet, $bucket, $replaceRoot, $merge
// setup.js — Datos de prueba genéricos para el proyecto semanal

// ============================================
// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// TODO: Renombrar "services" y "bookings" según tu dominio
// TODO: Ajustar los campos según las entidades de tu dominio
// ============================================

db.services.drop()
db.bookings.drop()
db.booking_stats.drop()

// Catálogo de servicios/productos del dominio
db.services.insertMany([
  {
    _id: "svc-001",
    name: "Basic Service A",
    category: "category-1",
    duration: NumberInt(30),
    price: NumberDecimal("25.00"),
    isActive: true,
    metadata: {
      providerId: "prov-01",
      providerName: "Provider Alpha",
      location: "Zone North"
    }
  },
  {
    _id: "svc-002",
    name: "Standard Service B",
    category: "category-1",
    duration: NumberInt(60),
    price: NumberDecimal("55.00"),
    isActive: true,
    metadata: {
      providerId: "prov-01",
      providerName: "Provider Alpha",
      location: "Zone North"
    }
  },
  {
    _id: "svc-003",
    name: "Premium Service C",
    category: "category-2",
    duration: NumberInt(90),
    price: NumberDecimal("120.00"),
    isActive: true,
    metadata: {
      providerId: "prov-02",
      providerName: "Provider Beta",
      location: "Zone South"
    }
  },
  {
    _id: "svc-004",
    name: "Deluxe Service D",
    category: "category-2",
    duration: NumberInt(120),
    price: NumberDecimal("200.00"),
    isActive: true,
    metadata: {
      providerId: "prov-03",
      providerName: "Provider Gamma",
      location: "Zone East"
    }
  },
  {
    _id: "svc-005",
    name: "Basic Service E",
    category: "category-3",
    duration: NumberInt(45),
    price: NumberDecimal("15.00"),
    isActive: false,
    metadata: {
      providerId: "prov-02",
      providerName: "Provider Beta",
      location: "Zone South"
    }
  }
])

// Reservas/transacciones que referencian servicios
db.bookings.insertMany([
  {
    bookingId: "BK-001",
    clientId: "cli-01",
    clientName: "Client One",
    serviceId: "svc-001",
    status: "completed",
    period: "2024-01",
    amount: NumberDecimal("25.00"),
    bookingDate: new Date("2024-01-08"),
    clientInfo: {
      segment: "regular",
      city: "City A",
      memberSince: new Date("2023-01-01")
    }
  },
  {
    bookingId: "BK-002",
    clientId: "cli-02",
    clientName: "Client Two",
    serviceId: "svc-003",
    status: "completed",
    period: "2024-01",
    amount: NumberDecimal("120.00"),
    bookingDate: new Date("2024-01-12"),
    clientInfo: {
      segment: "premium",
      city: "City B",
      memberSince: new Date("2022-06-15")
    }
  },
  {
    bookingId: "BK-003",
    clientId: "cli-03",
    clientName: "Client Three",
    serviceId: "svc-002",
    status: "completed",
    period: "2024-01",
    amount: NumberDecimal("55.00"),
    bookingDate: new Date("2024-01-20"),
    clientInfo: {
      segment: "regular",
      city: "City A",
      memberSince: new Date("2023-09-01")
    }
  },
  {
    bookingId: "BK-004",
    clientId: "cli-01",
    clientName: "Client One",
    serviceId: "svc-004",
    status: "cancelled",
    period: "2024-02",
    amount: NumberDecimal("200.00"),
    bookingDate: new Date("2024-02-05"),
    clientInfo: {
      segment: "regular",
      city: "City A",
      memberSince: new Date("2023-01-01")
    }
  },
  {
    bookingId: "BK-005",
    clientId: "cli-02",
    clientName: "Client Two",
    serviceId: "svc-001",
    status: "completed",
    period: "2024-02",
    amount: NumberDecimal("25.00"),
    bookingDate: new Date("2024-02-14"),
    clientInfo: {
      segment: "premium",
      city: "City B",
      memberSince: new Date("2022-06-15")
    }
  },
  {
    bookingId: "BK-006",
    clientId: "cli-04",
    clientName: "Client Four",
    serviceId: "svc-003",
    status: "completed",
    period: "2024-03",
    amount: NumberDecimal("120.00"),
    bookingDate: new Date("2024-03-02"),
    clientInfo: {
      segment: "vip",
      city: "City C",
      memberSince: new Date("2021-03-20")
    }
  },
  {
    bookingId: "BK-007",
    clientId: "cli-04",
    clientName: "Client Four",
    serviceId: "svc-004",
    status: "completed",
    period: "2024-03",
    amount: NumberDecimal("200.00"),
    bookingDate: new Date("2024-03-18"),
    clientInfo: {
      segment: "vip",
      city: "City C",
      memberSince: new Date("2021-03-20")
    }
  }
])

// Estadísticas de meses anteriores (para practicar $merge)
db.booking_stats.insertOne({
  _id: "2024-01",
  revenue: NumberDecimal("150.00"),
  bookings: NumberInt(8),
  source: "historical"
})

db.bookings.createIndex({ status: 1, period: 1 })
db.bookings.createIndex({ serviceId: 1 })

print("✅ Colección 'services' cargada con 5 documentos")
print("✅ Colección 'bookings' cargada con 7 documentos")
print("✅ Colección 'booking_stats' cargada con 1 documento histórico")
