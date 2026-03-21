// Semana 07: Índices Básicos y explain()
// setup.js — Ejercicio 01: Colección para practicar createIndex y getIndexes

db.listings.drop()

// Genera 50 documentos de alojamientos para hacer visible el impacto
// de los índices en colecciones con más datos
const cities = ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena"]
const types = ["apartment", "house", "studio", "loft", "villa"]
const amenities = ["wifi", "parking", "pool", "gym", "kitchen", "balcony", "ac"]

const docs = []
for (let i = 1; i <= 50; i++) {
  docs.push({
    title: `Listing ${i} — ${cities[i % 5]}`,
    type: types[i % 5],
    city: cities[i % 5],
    price: Decimal128((80 + i * 5).toString() + ".00"),
    rating: NumberInt(Math.floor(3 + (i % 3))),
    isAvailable: i % 4 !== 0,
    createdAt: new Date(2023, i % 12, (i % 28) + 1),
    host: {
      name: `Host ${i}`,
      email: `host${i}@listings.com`,
      verified: i % 3 !== 0
    },
    amenities: amenities.filter((_, idx) => idx < (i % 5) + 2)
  })
}

db.listings.insertMany(docs)

print("✅ listings cargado con " + db.listings.countDocuments() + " documentos.")
print("Índices actuales:")
printjson(db.listings.getIndexes())
