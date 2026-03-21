// Semana 05: CRUD III — Actualización y Eliminación
// Ejercicio 02: $push, $addToSet, $pull, deleteOne, findOneAndUpdate
// ============================================================
// Requiere tener cargada la colección "inventory" (ejercicio-01/setup.js).

// ============================================================
// PASO 1: $push — Agregar elementos a un array (permite duplicados)
// ============================================================

// Agrega el tag "bestseller" al "Mechanical Keyboard".
// $push siempre agrega el elemento aunque ya exista en el array.
// Descomenta las siguientes líneas:

// db.inventory.updateOne(
//   { name: "Mechanical Keyboard" },
//   { $push: { tags: "bestseller" } }
// )
// db.inventory.findOne(
//   { name: "Mechanical Keyboard" },
//   { name: 1, tags: 1, _id: 0 }
// )

// ============================================================
// PASO 2: $addToSet — Agregar solo si no existe (sin duplicados)
// ============================================================

// Agrega "wireless" al array de tags del "Wireless Mouse".
// Si ya existe, no genera duplicado.
// Descomenta las siguientes líneas:

// db.inventory.updateOne(
//   { name: "Wireless Mouse" },
//   { $addToSet: { tags: "wireless" } }
// )
// db.inventory.findOne(
//   { name: "Wireless Mouse" },
//   { name: 1, tags: 1, _id: 0 }
// )

// Prueba agregar "bestseller" a todos los featured = true:
// db.inventory.updateMany(
//   { featured: true },
//   { $addToSet: { tags: "featured" } }
// )
// db.inventory.find(
//   { featured: true },
//   { name: 1, tags: 1, _id: 0 }
// )

// ============================================================
// PASO 3: $pull — Eliminar elementos de un array por valor
// ============================================================

// Elimina el tag "basic" del producto "USB Mouse Basic".
// $pull elimina todas las ocurrencias del valor en el array.
// Descomenta las siguientes líneas:

// db.inventory.updateOne(
//   { name: "USB Mouse Basic" },
//   { $pull: { tags: "basic" } }
// )
// db.inventory.findOne(
//   { name: "USB Mouse Basic" },
//   { name: 1, tags: 1, _id: 0 }
// )

// Elimina el tag "rgb" de todos los productos de la
// categoría "peripherals":
// db.inventory.updateMany(
//   { category: "peripherals" },
//   { $pull: { tags: "rgb" } }
// )

// ============================================================
// PASO 4: deleteOne y findOneAndUpdate
// ============================================================

// Elimina el producto con menor rating (USB Mouse Basic):
// db.inventory.deleteOne({ name: "USB Mouse Basic" })
// db.inventory.countDocuments()

// Soft delete: en lugar de borrar, marca como eliminado
// el "Keyboard Wireless" (sin stock y sin featured):
// db.inventory.updateOne(
//   { name: "Keyboard Wireless" },
//   { $set: { isDeleted: true, deletedAt: new Date() } }
// )
// db.inventory.findOne(
//   { name: "Keyboard Wireless" },
//   { name: 1, isDeleted: 1, deletedAt: 1, _id: 0 }
// )

// findOneAndUpdate — obtener el documento DESPUÉS del cambio:
// db.inventory.findOneAndUpdate(
//   { name: "SSD External 1TB" },
//   { $inc: { stock: NumberInt(-3) }, $set: { updatedAt: new Date() } },
//   { returnDocument: "after" }
// )
