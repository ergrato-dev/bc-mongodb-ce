// Semana 04: Operadores de Array — $elemMatch, $all, $size
// solution/ejercicio.js — Solución completa

// ============================================
// PASO 1: Operador $all — Todos los elementos presentes
// ============================================

// Cursos que tienen TANTO el tag "api" COMO "backend"
db.courses.find(
  { tags: { $all: ["api", "backend"] } },
  { title: 1, tags: 1, _id: 0 }
)

// ============================================
// PASO 2: Operador $elemMatch — Condición compuesta en array
// ============================================

// Cursos donde ALGUNA nota es > 85 Y < 92 en el mismo elemento
db.courses.find(
  { scores: { $elemMatch: { $gt: 85, $lt: 92 } } },
  { title: 1, scores: 1, _id: 0 }
)

// Con $in (compara valores exactos en el array)
db.courses.find(
  { scores: { $in: [88, 91] } },
  { title: 1, scores: 1, _id: 0 }
)

// ============================================
// PASO 3: Operador $size — Tamaño exacto del array
// ============================================

// Cursos con exactamente 3 puntuaciones
db.courses.find(
  { scores: { $size: 3 } },
  { title: 1, scores: 1, _id: 0 }
)

// Cursos con exactamente 4 puntuaciones
db.courses.find(
  { scores: { $size: 4 } },
  { title: 1, scores: 1, _id: 0 }
)

// ============================================
// PASO 4: Combinación — Lógica + Array
// ============================================

// Cursos publicados, con tag "database" Y alguna nota > 90
db.courses.find(
  {
    isPublished: true,
    tags: { $in: ["database"] },
    scores: { $elemMatch: { $gt: 90 } }
  },
  { title: 1, tags: 1, scores: 1, isPublished: 1, _id: 0 }
)
