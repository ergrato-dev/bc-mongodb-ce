// Semana 04: Proyecto — Consultas con Lógica Avanzada
// proyecto.js — Implementa las 6 queries requeridas

// ============================================
// QUERY 1: $or — Condiciones alternativas
// ============================================

// TODO: Buscar documentos que cumplan ALGUNA de 2 condiciones
// (por ejemplo: determinada categoría O valor mayor a X)
// db.items.find(
//   {
//     $or: [
//       { category: "categoria-a" },
//       { value: { $gt: Decimal128("X") } }
//     ]
//   },
//   { name: 1, category: 1, value: 1, _id: 0 }
// )

// ============================================
// QUERY 2: AND implícito + $or
// ============================================

// TODO: Campo fijo (AND) combinado con $or
// db.items.find(
//   {
//     isActive: true,
//     $or: [
//       { category: "categoria-a" },
//       { value: { $gte: Decimal128("Y") } }
//     ]
//   },
//   { name: 1, category: 1, isActive: 1, value: 1, _id: 0 }
// )

// ============================================
// QUERY 3: $not — Negación
// ============================================

// TODO: Excluir usando $not sobre una expresión de operador
// db.items.find(
//   { value: { $not: { $gt: Decimal128("Z") } } },
//   { name: 1, value: 1, _id: 0 }
// ).sort({ value: 1 })

// ============================================
// QUERY 4: $nor — Exclusión múltiple
// ============================================

// TODO: Excluir documentos que cumplan cualquiera de 2 condiciones
// db.items.find(
//   {
//     $nor: [
//       { category: "categoria-excluida" },
//       { isActive: false }
//     ]
//   },
//   { name: 1, category: 1, isActive: 1, _id: 0 }
// )

// ============================================
// QUERY 5: $all o $elemMatch — Condición en array
// ============================================

// TODO: Usar $all para exigir múltiples tags O
//       $elemMatch para condición compuesta en array numérico
// db.items.find(
//   { tags: { $all: ["tag1", "tag2"] } },
//   { name: 1, tags: 1, _id: 0 }
// )

// ============================================
// QUERY 6: Combinación libre
// ============================================

// TODO: Combinar $or + array operator + condición de campo
// Al menos 3 tipos de operadores distintos en un solo find()
// db.items.find(
//   {
//     isActive: true,
//     tags: { $all: ["tag1"] },
//     $or: [
//       { category: "cat-a" },
//       { scores: { $elemMatch: { $gt: 80 } } }
//     ]
//   },
//   { name: 1, tags: 1, scores: 1, isActive: 1, _id: 0 }
// )
