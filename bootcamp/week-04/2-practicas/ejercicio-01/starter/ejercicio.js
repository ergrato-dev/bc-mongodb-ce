// Semana 04: Operadores Lógicos — $and, $or, $not, $nor
// ejercicio.js — Descomenta cada sección para practicar

// ============================================
// PASO 1: Operador $or — Condiciones alternativas
// ============================================

// Cursos de categoría "frontend" O con más de 1000 inscritos
// Descomenta las siguientes líneas:

// db.courses.find(
//   {
//     $or: [
//       { category: "frontend" },
//       { enrolled: { $gt: NumberInt(1000) } }
//     ]
//   },
//   { title: 1, category: 1, enrolled: 1, _id: 0 }
// )

// ============================================
// PASO 2: Combinar AND implícito con $or
// ============================================

// Cursos publicados Y (categoria "backend" O nivel "advanced")
// Descomenta las siguientes líneas:

// db.courses.find(
//   {
//     isPublished: true,
//     $or: [
//       { category: "backend" },
//       { level: "advanced" }
//     ]
//   },
//   { title: 1, category: 1, level: 1, isPublished: 1, _id: 0 }
// )

// ============================================
// PASO 3: Operador $not
// ============================================

// Cursos cuyo rating NO es >= 4.5 (es decir, rating < 4.5)
// Descomenta las siguientes líneas:

// db.courses.find(
//   { rating: { $not: { $gte: 4.5 } } },
//   { title: 1, rating: 1, _id: 0 }
// ).sort({ rating: -1 })

// ============================================
// PASO 4: Operador $nor
// ============================================

// Cursos que NO son de categoria "devops" NOR están sin publicar
// Descomenta las siguientes líneas:

// db.courses.find(
//   {
//     $nor: [
//       { category: "devops" },
//       { isPublished: false }
//     ]
//   },
//   { title: 1, category: 1, isPublished: 1, _id: 0 }
// ).sort({ category: 1 })

// Patrón (A OR B) AND (C OR D) con $and explícito
// Cursos (database OR cloud) AND (beginner OR intermediate)
// Descomenta las siguientes líneas:

// db.courses.find(
//   {
//     $and: [
//       { $or: [{ category: "database" }, { category: "cloud" }] },
//       { $or: [{ level: "beginner" }, { level: "intermediate" }] }
//     ]
//   },
//   { title: 1, category: 1, level: 1, _id: 0 }
// )
