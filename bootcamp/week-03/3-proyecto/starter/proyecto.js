// Semana 03: Proyecto — Consultas con Operadores
// proyecto.js — Implementa las 8 queries requeridas

// ============================================
// QUERY 1: $eq implícito — Valor exacto
// ============================================

// TODO: Buscar documentos de una categoría específica de tu dominio
// Muestra: nombre y categoría
// db.items.find(
//   { category: "tu-categoria" },
//   { name: 1, category: 1, _id: 0 }
// )

// ============================================
// QUERY 2: $ne — Exclusión
// ============================================

// TODO: Excluir documentos con un estado o categoría no deseada
// db.items.find(
//   { category: { $ne: "categoria-excluida" } },
//   { name: 1, category: 1, _id: 0 }
// )

// ============================================
// QUERY 3: $gt + $lt — Rango abierto
// ============================================

// TODO: Filtrar por un rango ABIERTO de valores numéricos
// (usar campos de tu dominio: precio, edad, duración, etc.)
// db.items.find(
//   { value: { $gt: Decimal128("X"), $lt: Decimal128("Y") } },
//   { name: 1, value: 1, _id: 0 }
// ).sort({ value: 1 })

// ============================================
// QUERY 4: $gte + $lte — Rango cerrado
// ============================================

// TODO: Filtrar por un rango CERRADO de valores
// db.items.find(
//   { year: { $gte: NumberInt(2021), $lte: NumberInt(2023) } },
//   { name: 1, year: 1, _id: 0 }
// )

// ============================================
// QUERY 5: $in — Pertenencia a lista
// ============================================

// TODO: Filtrar documentos cuya categoría sea una de las opciones
// db.items.find(
//   { category: { $in: ["cat-a", "cat-b"] } },
//   { name: 1, category: 1, _id: 0 }
// )

// ============================================
// QUERY 6: $nin — Exclusión de lista
// ============================================

// TODO: Excluir documentos de varias categorías
// db.items.find(
//   { category: { $nin: ["cat-x", "cat-y"] } },
//   { name: 1, category: 1, _id: 0 }
// )

// ============================================
// QUERY 7: $exists — Campo presente y no null
// ============================================

// TODO: Buscar documentos donde el campo opcional exista y tenga valor real
// db.items.find(
//   { optionalField: { $exists: true, $ne: null } },
//   { name: 1, optionalField: 1, _id: 0 }
// )

// ============================================
// QUERY 8: Multi-campo — Mínimo 3 condiciones
// ============================================

// TODO: Combinar al menos 3 condiciones con distintos operadores
// db.items.find(
//   {
//     isActive: true,
//     value: { $gte: Decimal128("50"), $lte: Decimal128("500") },
//     category: { $in: ["cat-a", "cat-b"] }
//   },
//   { name: 1, value: 1, category: 1, isActive: 1, _id: 0 }
// ).sort({ value: -1 })
