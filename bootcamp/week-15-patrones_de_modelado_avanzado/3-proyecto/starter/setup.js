// Semana 15: Patrones de Modelado Avanzado — Proyecto Semanal
// ============================================
// SETUP — Datos de prueba genéricos (dominio: Museo)
// Adapta las colecciones y campos a tu dominio asignado.
// ============================================
// Dominio de ejemplo: Museo
//   Dominio Biblioteca  → books, authors, loans, members
//   Dominio Farmacia    → medicines, suppliers, sales, inventory
//   Dominio Gimnasio    → classes, trainers, attendance, members
//   Dominio Restaurante → dishes, chefs, orders, tables
// ============================================

db.exhibitors.drop()
db.exhibits.drop()
db.exhibit_reviews.drop()
db.visitor_buckets.drop()
db.visitor_stats.drop()

// Expositores: colección maestra (fuente de verdad)
// TODO: Renombrar a la entidad 'responsable' de tu dominio
db.exhibitors.insertMany([
  {
    exhibitorId: "exh-01",
    name: "Instituto Nacional de Arte",
    country: "Colombia",
    logoUrl: "/logos/ina.png",
    contactEmail: "info@ina.co",
    exhibitCount: NumberInt(3)
  },
  {
    exhibitorId: "exh-02",
    name: "Colección Privada Vargas",
    country: "Colombia",
    logoUrl: "/logos/cpv.png",
    contactEmail: "vargas@example.com",
    exhibitCount: NumberInt(2)
  }
])

// Exhibits: incluyen Extended Reference (exhibitorInfo)
// y Subset (topReviews con máximo 3 reseñas recientes)
// TODO: Renombrar a la entidad 'item principal' de tu dominio
db.exhibits.insertMany([
  {
    exhibitId: "ex-001",
    title: "Paisajes del Magdalena",
    exhibitorId: "exh-01",
    // Extended Reference — solo campos leídos frecuentemente
    exhibitorInfo: {
      name: "Instituto Nacional de Arte",
      logoUrl: "/logos/ina.png"
    },
    description: "Colección de 40 pinturas sobre la geografía colombiana.",
    tags: ["pintura", "naturaleza", "colombia"],
    // Subset Pattern — máximo 3 reseñas recientes incrustadas
    topReviews: [
      { user: "visitor_01", text: "Impresionante colección.", rating: NumberInt(5), at: new Date("2024-03-10") },
      { user: "visitor_02", text: "Las texturas son increíbles.", rating: NumberInt(5), at: new Date("2024-03-15") }
    ],
    reviewCount: NumberInt(128),
    avgRating: 4.8,
    openedAt: new Date("2024-01-20")
  },
  {
    exhibitId: "ex-002",
    title: "Esculturas del Caribe",
    exhibitorId: "exh-01",
    exhibitorInfo: {
      name: "Instituto Nacional de Arte",
      logoUrl: "/logos/ina.png"
    },
    description: "Esculturas en madera y arcilla de artistas del litoral.",
    tags: ["escultura", "caribe", "artesania"],
    topReviews: [
      { user: "visitor_03", text: "Muy educativo.", rating: NumberInt(4), at: new Date("2024-04-05") }
    ],
    reviewCount: NumberInt(45),
    avgRating: 4.3,
    openedAt: new Date("2024-02-10")
  },
  {
    exhibitId: "ex-003",
    title: "Fotografía Urbana 2024",
    exhibitorId: "exh-02",
    exhibitorInfo: {
      name: "Colección Privada Vargas",
      logoUrl: "/logos/cpv.png"
    },
    description: "120 fotografías de ciudades latinoamericanas en blanco y negro.",
    tags: ["fotografia", "urbano", "latinoamerica"],
    topReviews: [
      { user: "visitor_04", text: "Arte puro.", rating: NumberInt(5), at: new Date("2024-05-01") }
    ],
    reviewCount: NumberInt(67),
    avgRating: 4.9,
    openedAt: new Date("2024-03-05")
  }
])

// visitor_stats: campos computados preacumulados
// TODO: Renombrar a la entidad de 'estadísticas' de tu dominio
db.visitor_stats.insertMany([
  {
    dayKey: "2024-05-06",
    totalVisitors: NumberInt(230),
    totalRevenue: Decimal128("1150.00"),
    avgTicketPrice: Decimal128("5.00")
  },
  {
    dayKey: "2024-05-07",
    totalVisitors: NumberInt(185),
    totalRevenue: Decimal128("925.00"),
    avgTicketPrice: Decimal128("5.00")
  }
])

print("Setup proyecto semana 15 completado.")
print("exhibitors  : " + db.exhibitors.countDocuments())
print("exhibits    : " + db.exhibits.countDocuments())
print("visitor_stats: " + db.visitor_stats.countDocuments())
