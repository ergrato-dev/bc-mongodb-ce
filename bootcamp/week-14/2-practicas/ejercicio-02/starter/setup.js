// Semana 14: Índices de Texto y Geoespaciales
// Ejercicio 02 — Setup: Consultas Geoespaciales
// ============================================================
// Colección: stores
// Campos: name, category, city, location (GeoJSON Point)
// Coordenadas: área de Bogotá, Colombia (longitud ≈ -74.x, latitud ≈ 4.x)

db.stores.drop()

db.stores.insertMany([
  {
    name: "Tienda Central",
    category: "electronics",
    city: "Bogotá",
    isOpen: true,
    location: {
      type: "Point",
      coordinates: [-74.0721, 4.7110]
    }
  },
  {
    name: "Mercado Norte",
    category: "food",
    city: "Bogotá",
    isOpen: true,
    location: {
      type: "Point",
      coordinates: [-74.0650, 4.7350]
    }
  },
  {
    name: "Electrónica Sur",
    category: "electronics",
    city: "Bogotá",
    isOpen: false,
    location: {
      type: "Point",
      coordinates: [-74.0920, 4.6850]
    }
  },
  {
    name: "Farmacia Plaza",
    category: "health",
    city: "Bogotá",
    isOpen: true,
    location: {
      type: "Point",
      coordinates: [-74.0780, 4.7080]
    }
  },
  {
    name: "Supermercado Occidente",
    category: "food",
    city: "Bogotá",
    isOpen: true,
    location: {
      type: "Point",
      coordinates: [-74.1100, 4.7020]
    }
  },
  {
    name: "Tech Express",
    category: "electronics",
    city: "Bogotá",
    isOpen: true,
    location: {
      type: "Point",
      coordinates: [-74.0680, 4.7160]
    }
  },
  {
    name: "Droguería Central",
    category: "health",
    city: "Bogotá",
    isOpen: true,
    location: {
      type: "Point",
      coordinates: [-74.0740, 4.7090]
    }
  },
  {
    name: "Tienda Chapinero",
    category: "clothing",
    city: "Bogotá",
    isOpen: false,
    location: {
      type: "Point",
      coordinates: [-74.0560, 4.6500]
    }
  },
  {
    name: "Café & Libros",
    category: "food",
    city: "Bogotá",
    isOpen: true,
    location: {
      type: "Point",
      coordinates: [-74.0700, 4.7200]
    }
  },
  {
    name: "Depósito Bosa",
    category: "hardware",
    city: "Bogotá",
    isOpen: true,
    location: {
      type: "Point",
      coordinates: [-74.1800, 4.6200]
    }
  }
])

print("✅ stores: " + db.stores.countDocuments() + " documentos insertados")
print("   Categorías: " + db.stores.distinct("category").join(", "))
