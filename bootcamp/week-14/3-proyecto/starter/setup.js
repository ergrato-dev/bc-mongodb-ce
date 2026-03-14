// Semana 14: Índices de Texto y Geoespaciales
// Proyecto Semanal — Setup de datos genérico
// ============================================================

// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// Ejemplos:
//   Biblioteca  → books con description + branches con location
//   Farmacia    → medications con description + branches con location
//   Restaurante → dishes con description + restaurants con location
//   Hospital    → specialties con description + clinics con location

// TODO: Renombrar "venues" y "listings" según tu dominio

db.venues.drop()
db.listings.drop()

// Colección con ubicación geoespacial
db.venues.insertMany([
  {
    venueId: "VEN-001",
    name: "Sede Principal",
    type: "headquarters",
    isActive: true,
    location: {
      type: "Point",
      coordinates: [-74.0721, 4.7110]
    }
  },
  {
    venueId: "VEN-002",
    name: "Sede Norte",
    type: "branch",
    isActive: true,
    location: {
      type: "Point",
      coordinates: [-74.0650, 4.7350]
    }
  },
  {
    venueId: "VEN-003",
    name: "Sede Sur",
    type: "branch",
    isActive: false,
    location: {
      type: "Point",
      coordinates: [-74.0920, 4.6850]
    }
  },
  {
    venueId: "VEN-004",
    name: "Sede Occidente",
    type: "branch",
    isActive: true,
    location: {
      type: "Point",
      coordinates: [-74.1100, 4.7020]
    }
  }
])

// Colección con contenido textual
db.listings.insertMany([
  {
    listingId: "LST-001",
    title: "Servicio premium de atención al cliente",
    description: "Atención personalizada con tiempos de respuesta garantizados.",
    category: "premium",
    isAvailable: true,
    venueId: "VEN-001"
  },
  {
    listingId: "LST-002",
    title: "Paquete básico de servicios estándar",
    description: "Incluye los servicios esenciales para nuevos usuarios.",
    category: "basic",
    isAvailable: true,
    venueId: "VEN-002"
  },
  {
    listingId: "LST-003",
    title: "Plan avanzado con soporte prioritario",
    description: "Soporte técnico prioritario con gestor de cuenta dedicado.",
    category: "premium",
    isAvailable: false,
    venueId: "VEN-001"
  },
  {
    listingId: "LST-004",
    title: "Servicio de atención empresarial",
    description: "Diseñado para empresas con necesidades de alto volumen.",
    category: "enterprise",
    isAvailable: true,
    venueId: "VEN-003"
  }
])

print("✅ venues: " + db.venues.countDocuments() + " documentos insertados")
print("✅ listings: " + db.listings.countDocuments() + " documentos insertados")
