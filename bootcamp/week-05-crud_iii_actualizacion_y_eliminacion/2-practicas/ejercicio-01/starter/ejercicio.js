// Semana 05: CRUD III — Actualización y Eliminación
// Ejercicio 01: Operadores $set, $unset, $inc, $mul
// ============================================================
// Antes de comenzar, ejecuta setup.js para cargar los datos.

// ============================================================
// PASO 1: $set — Actualizar campos existentes y agregar nuevos
// ============================================================

// Actualiza el precio y agrega un campo "updatedAt" al producto
// "USB-C Hub". $set modifica o crea los campos indicados sin
// afectar el resto del documento.
// Descomenta las siguientes líneas:

// db.inventory.updateOne(
//   { name: "USB-C Hub" },
//   {
//     $set: {
//       price: Decimal128("29.99"),
//       updatedAt: new Date(),
//       featured: true
//     }
//   }
// )
// db.inventory.findOne({ name: "USB-C Hub" })

// ============================================================
// PASO 2: $unset — Eliminar campos del documento
// ============================================================

// Elimina el campo "discount" de todos los productos de la
// categoría "accessories". $unset no afecta otros campos.
// Descomenta las siguientes líneas:

// db.inventory.updateMany(
//   { category: "accessories" },
//   { $unset: { discount: "" } }
// )
// db.inventory.find(
//   { category: "accessories" },
//   { name: 1, discount: 1, _id: 0 }
// )

// ============================================================
// PASO 3: $inc — Incrementar y decrementar valores numéricos
// ============================================================

// Simula una venta: reduce el stock del "Wireless Mouse" en 5
// unidades. $inc es atómico: no sufre race conditions en
// entornos concurrentes.
// Descomenta las siguientes líneas:

// db.inventory.updateOne(
//   { name: "Wireless Mouse" },
//   { $inc: { stock: NumberInt(-5) } }
// )
// db.inventory.findOne(
//   { name: "Wireless Mouse" },
//   { name: 1, stock: 1, _id: 0 }
// )

// Incrementa el rating de todos los productos con rating 3 en +1:
// db.inventory.updateMany(
//   { rating: NumberInt(3) },
//   { $inc: { rating: NumberInt(1) } }
// )
// db.inventory.find(
//   { rating: NumberInt(4) },
//   { name: 1, rating: 1, _id: 0 }
// )

// ============================================================
// PASO 4: $mul — Multiplicar un campo por un factor
// ============================================================

// Aplica un descuento del 20% (multiply ×0.8) al precio de todos
// los productos de la categoría "audio".
// Nota: $mul preserva el tipo del campo original.
// Descomenta las siguientes líneas:

// db.inventory.updateMany(
//   { category: "audio" },
//   { $mul: { price: Decimal128("0.8") } }
// )
// db.inventory.find(
//   { category: "audio" },
//   { name: 1, price: 1, _id: 0 }
// )
