// Semana 04: Operadores de Array — $elemMatch, $all, $size
// ejercicio.js — Descomenta cada sección para practicar
// Usa la misma colección courses del ejercicio-01

// ============================================
// PASO 1: Operador $all — Todos los elementos presentes
// ============================================

// Cursos que tienen TANTO el tag "api" COMO "backend" en su array de tags
// Descomenta las siguientes líneas:

// db.courses.find(
//   { tags: { $all: ["api", "backend"] } },
//   { title: 1, tags: 1, _id: 0 }
// )

// ============================================
// PASO 2: Operador $elemMatch — Condición compuesta en array
// ============================================

// Cursos donde ALGUNA nota en scores es mayor a 85 Y menor a 92
// Descomenta las siguientes líneas:

// db.courses.find(
//   { scores: { $elemMatch: { $gt: 85, $lt: 92 } } },
//   { title: 1, scores: 1, _id: 0 }
// )

// Diferencia entre $in y $elemMatch:
// $in: ¿algún elemento de scores ES 88 O ES 91?
// $elemMatch: ¿algún elemento cumple AMBAS condiciones simultáneamente?

// Con $in (puede encontrar 88 o 91 sin importar si un elemento cumple ambas):
// Descomenta las siguientes líneas:

// db.courses.find(
//   { scores: { $in: [88, 91] } },
//   { title: 1, scores: 1, _id: 0 }
// )

// ============================================
// PASO 3: Operador $size — Tamaño exacto del array
// ============================================

// Cursos con exactamente 3 puntuaciones en scores
// Descomenta las siguientes líneas:

// db.courses.find(
//   { scores: { $size: 3 } },
//   { title: 1, scores: 1, _id: 0 }
// )

// Cursos con exactamente 4 puntuaciones
// Descomenta las siguientes líneas:

// db.courses.find(
//   { scores: { $size: 4 } },
//   { title: 1, scores: 1, _id: 0 }
// )

// ============================================
// PASO 4: Combinación — Lógica + Array
// ============================================

// Cursos publicados, con tag "database" Y alguna nota > 90
// Descomenta las siguientes líneas:

// db.courses.find(
//   {
//     isPublished: true,
//     tags: { $in: ["database"] },
//     scores: { $elemMatch: { $gt: 90 } }
//   },
//   { title: 1, tags: 1, scores: 1, isPublished: 1, _id: 0 }
// )
