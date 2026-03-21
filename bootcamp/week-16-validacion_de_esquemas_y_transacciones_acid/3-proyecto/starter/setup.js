// Semana 16: Validación de Esquemas y Transacciones — Proyecto Semanal
// ============================================
// SETUP — Datos de prueba genéricos (dominio: Acuario)
// Adapta las colecciones y campos a tu dominio asignado.
// ============================================

// Colección principal con validator ya aplicado
db.getCollection("aquarium_species").drop()
db.aquarium_tickets.drop()
db.aquarium_exhibits.drop()

db.createCollection("aquarium_species", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["speciesId", "commonName", "sciName", "habitat", "count"],
      properties: {
        speciesId:  { bsonType: "string" },
        commonName: { bsonType: "string", minLength: 2 },
        sciName:    { bsonType: "string" },
        habitat:    {
          bsonType: "string",
          enum: ["freshwater", "saltwater", "brackish", "terrestrial"]
        },
        count: { bsonType: "int", minimum: 0 },
        isEndangered: { bsonType: "bool" }
      }
    }
  },
  validationLevel:  "strict",
  validationAction: "error"
})

db.aquarium_species.insertMany([
  { speciesId: "sp-001", commonName: "Pez Payaso", sciName: "Amphiprioninae", habitat: "saltwater", count: NumberInt(12), isEndangered: false },
  { speciesId: "sp-002", commonName: "Mantarraya Gigante", sciName: "Mobula birostris", habitat: "saltwater", count: NumberInt(3), isEndangered: true },
  { speciesId: "sp-003", commonName: "Piranha Roja", sciName: "Pygocentrus nattereri", habitat: "freshwater", count: NumberInt(20), isEndangered: false },
  { speciesId: "sp-004", commonName: "Tortuga Marina", sciName: "Chelonia mydas", habitat: "saltwater", count: NumberInt(2), isEndangered: true }
])

db.aquarium_exhibits.insertMany([
  { exhibitId: "ex-01", name: "Arrecife Tropical", capacity: NumberInt(10), registered: NumberInt(0) },
  { exhibitId: "ex-02", name: "Aguas Profundas", capacity: NumberInt(5),  registered: NumberInt(0) }
])

print("Setup proyecto semana 16 completado.")
print("aquarium_species : " + db.aquarium_species.countDocuments())
print("aquarium_exhibits: " + db.aquarium_exhibits.countDocuments())
