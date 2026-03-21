// Semana 05: CRUD III — Actualización y Eliminación
// proyecto.js — Gestión de Inventario con Actualizaciones
// ============================================================
// NOTA: Cambia "items" por la colección de tu dominio.
// Adapta los filtros y campos a tu entidad principal.

// ============================================================
// PARTE 1: Actualizaciones de campos escalares
// ============================================================

// TODO: Actualiza el precio de 3 ítems específicos de tu inventario
//       usando $set. También agrega el campo "updatedAt: new Date()"
// db.items.updateOne(...)
// db.items.updateOne(...)
// db.items.updateOne(...)

// TODO: Usa $unset para eliminar el campo "condition" de todos
//       los ítems con condition: "new" (ya está implícito en stock nuevo)
// db.items.updateMany(...)

// TODO: Incrementa el stock de todos los ítems de la categoría
//       "storage" en 5 unidades usando $inc
// db.items.updateMany(...)

// TODO: Verifica el resultado con find() mostrando: name, price, stock
// db.items.find({ ... }, { name: 1, price: 1, stock: 1, _id: 0 })

// ============================================================
// PARTE 2: Operaciones en arrays de tags
// ============================================================

// TODO: Agrega el tag "premium" (sin duplicados) a todos los ítems
//       cuyo precio sea mayor a 200.00 usando $addToSet
// db.items.updateMany(...)

// TODO: Elimina el tag "used" (si existe) de todos los documentos
//       usando $pull
// db.items.updateMany(...)

// TODO: Verifica los cambios en los tags
// db.items.find({}, { name: 1, tags: 1, _id: 0 })

// ============================================================
// PARTE 3: Eliminación permanente y soft delete
// ============================================================

// TODO: Elimina permanentemente los ítems con stock 0
//       Y isActive: false (no necesitamos historial de ellos)
// db.items.deleteMany(...)

// TODO: Aplica soft delete a los ítems con inStock: false que
//       deben preservarse para historial (isActive sigue siendo true)
//       Marca: isDeleted: true, deletedAt: new Date()
// db.items.updateMany(...)

// ============================================================
// PARTE 4: Verificaciones finales
// ============================================================

// TODO: Muestra todos los ítems ACTIVOS (excluye isDeleted: true)
// db.items.find({ isDeleted: { $ne: true } }, { name: 1, stock: 1, inStock: 1, _id: 0 })

// TODO: Muestra el conteo de activos vs eliminados lógicamente
// print("Activos: " + db.items.countDocuments({ isDeleted: { $ne: true } }))
// print("Soft deleted: " + db.items.countDocuments({ isDeleted: true }))
// print("Permanentemente eliminados: revisado por conteo total inicial vs actual")
