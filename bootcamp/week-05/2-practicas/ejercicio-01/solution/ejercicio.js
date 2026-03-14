// Semana 05: CRUD III — Actualización y Eliminación
// Ejercicio 01: Operadores $set, $unset, $inc, $mul — SOLUCIÓN

// ============================================================
// PASO 1: $set — Actualizar campos existentes y agregar nuevos
// ============================================================

db.inventory.updateOne(
  { name: "USB-C Hub" },
  {
    $set: {
      price: Decimal128("29.99"),
      updatedAt: new Date(),
      featured: true
    }
  }
)
db.inventory.findOne({ name: "USB-C Hub" })

// ============================================================
// PASO 2: $unset — Eliminar campos del documento
// ============================================================

db.inventory.updateMany(
  { category: "accessories" },
  { $unset: { discount: "" } }
)
db.inventory.find(
  { category: "accessories" },
  { name: 1, discount: 1, _id: 0 }
)

// ============================================================
// PASO 3: $inc — Incrementar y decrementar valores numéricos
// ============================================================

db.inventory.updateOne(
  { name: "Wireless Mouse" },
  { $inc: { stock: NumberInt(-5) } }
)
db.inventory.findOne(
  { name: "Wireless Mouse" },
  { name: 1, stock: 1, _id: 0 }
)

db.inventory.updateMany(
  { rating: NumberInt(3) },
  { $inc: { rating: NumberInt(1) } }
)
db.inventory.find(
  { rating: NumberInt(4) },
  { name: 1, rating: 1, _id: 0 }
)

// ============================================================
// PASO 4: $mul — Multiplicar un campo por un factor
// ============================================================

db.inventory.updateMany(
  { category: "audio" },
  { $mul: { price: Decimal128("0.8") } }
)
db.inventory.find(
  { category: "audio" },
  { name: 1, price: 1, _id: 0 }
)
