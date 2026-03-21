// Semana 05: CRUD III — Actualización y Eliminación
// Ejercicio 02: $push, $addToSet, $pull, deleteOne, findOneAndUpdate — SOLUCIÓN

// ============================================================
// PASO 1: $push — Agregar elementos a un array (permite duplicados)
// ============================================================

db.inventory.updateOne(
  { name: "Mechanical Keyboard" },
  { $push: { tags: "bestseller" } }
)
db.inventory.findOne(
  { name: "Mechanical Keyboard" },
  { name: 1, tags: 1, _id: 0 }
)

// ============================================================
// PASO 2: $addToSet — Agregar solo si no existe (sin duplicados)
// ============================================================

db.inventory.updateOne(
  { name: "Wireless Mouse" },
  { $addToSet: { tags: "wireless" } }
)
db.inventory.findOne(
  { name: "Wireless Mouse" },
  { name: 1, tags: 1, _id: 0 }
)

db.inventory.updateMany(
  { featured: true },
  { $addToSet: { tags: "featured" } }
)
db.inventory.find(
  { featured: true },
  { name: 1, tags: 1, _id: 0 }
)

// ============================================================
// PASO 3: $pull — Eliminar elementos de un array por valor
// ============================================================

db.inventory.updateOne(
  { name: "USB Mouse Basic" },
  { $pull: { tags: "basic" } }
)
db.inventory.findOne(
  { name: "USB Mouse Basic" },
  { name: 1, tags: 1, _id: 0 }
)

db.inventory.updateMany(
  { category: "peripherals" },
  { $pull: { tags: "rgb" } }
)

// ============================================================
// PASO 4: deleteOne y findOneAndUpdate
// ============================================================

db.inventory.deleteOne({ name: "USB Mouse Basic" })
db.inventory.countDocuments()

db.inventory.updateOne(
  { name: "Keyboard Wireless" },
  { $set: { isDeleted: true, deletedAt: new Date() } }
)
db.inventory.findOne(
  { name: "Keyboard Wireless" },
  { name: 1, isDeleted: 1, deletedAt: 1, _id: 0 }
)

db.inventory.findOneAndUpdate(
  { name: "SSD External 1TB" },
  { $inc: { stock: NumberInt(-3) }, $set: { updatedAt: new Date() } },
  { returnDocument: "after" }
)
