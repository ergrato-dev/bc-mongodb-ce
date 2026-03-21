// Semana 03: CRUD II — $in, $nin, $exists, $type
// solution/ejercicio.js — Solución completa

// ============================================
// PASO 1: Operador $in — Pertenencia a lista
// ============================================

// Productos de categoría "monitors" o "tablets"
db.products.find(
  { category: { $in: ["monitors", "tablets"] } },
  { name: 1, category: 1, price: 1, _id: 0 }
)

// Productos que contienen el tag "usb-c" o "wireless" en su array de tags
db.products.find(
  { tags: { $in: ["usb-c", "wireless"] } },
  { name: 1, tags: 1, _id: 0 }
)

// ============================================
// PASO 2: Operador $nin — Exclusión de lista
// ============================================

// Productos que NO pertenecen a categorías de audio ni storage
db.products.find(
  { category: { $nin: ["audio", "storage"] } },
  { name: 1, category: 1, _id: 0 }
).sort({ category: 1 })

// ============================================
// PASO 3: Operador $exists
// ============================================

// Productos que TIENEN el campo discount definido (aunque sea null)
db.products.find(
  { discount: { $exists: true } },
  { name: 1, discount: 1, _id: 0 }
)

// Productos que NO tienen el campo discount en absoluto
db.products.find(
  { discount: { $exists: false } },
  { name: 1, _id: 0 }
)

// Productos con descuento real (campo existe Y no es null)
db.products.find(
  { discount: { $exists: true, $ne: null } },
  { name: 1, discount: 1, _id: 0 }
)

// ============================================
// PASO 4: Operador $type y Combinaciones
// ============================================

// Verificar que el campo price sea de tipo Decimal128 ("decimal")
db.products.find(
  { price: { $type: "decimal" } },
  { name: 1, price: 1, _id: 0 }
).limit(3)

// Combinación avanzada: accessories con usb-c, en stock, precio < 60
db.products.find(
  {
    category: { $in: ["accessories", "peripherals"] },
    tags: { $in: ["usb-c", "wireless"] },
    inStock: true,
    price: { $lt: Decimal128("60") }
  },
  { name: 1, category: 1, tags: 1, price: 1, _id: 0 }
)
