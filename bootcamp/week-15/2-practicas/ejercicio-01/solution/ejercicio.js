// Semana 15: Patrones de Modelado Avanzado — Extended Reference y Subset
// ============================================
// EJERCICIO 01 — solution
// ============================================

// ============================================
// PASO 1: Leer posts SIN Extended Reference
// ============================================

db.posts.aggregate([
  {
    $lookup: {
      from: "authors",
      localField: "authorId",
      foreignField: "authorId",
      as: "authorData"
    }
  },
  { $unwind: "$authorData" },
  {
    $project: {
      title: 1,
      "authorData.name": 1,
      "authorData.avatarUrl": 1,
      publishedAt: 1,
      _id: 0
    }
  },
  { $sort: { publishedAt: -1 } },
  { $limit: 5 }
])

// ============================================
// PASO 2: Leer posts CON Extended Reference
// ============================================

db.posts.find(
  {},
  {
    title: 1,
    "authorInfo.name": 1,
    "authorInfo.avatarUrl": 1,
    publishedAt: 1,
    _id: 0
  }
).sort({ publishedAt: -1 }).limit(5)

// ============================================
// PASO 3: Propagación de cambio de nombre
// ============================================

// a) Actualizar la fuente de verdad
db.authors.updateOne(
  { authorId: "auth-01" },
  { $set: { name: "Ana Torres Gómez" } }
)

// b) Propagar al Extended Reference en posts
db.posts.updateMany(
  { authorId: "auth-01" },
  { $set: { "authorInfo.name": "Ana Torres Gómez" } }
)

// Verificar que la propagación fue correcta
db.posts.find(
  { authorId: "auth-01" },
  { title: 1, "authorInfo.name": 1, _id: 0 }
)

// ============================================
// PASO 4: Agregar comentario con Subset Pattern
// ============================================

const newComment = {
  user: "user_99",
  text: "Este artículo me cambió el enfoque sobre MongoDB!",
  rating: NumberInt(5),
  at: new Date()
}

db.posts.updateOne(
  { postId: "post-001" },
  {
    $push: {
      topComments: {
        $each: [newComment],
        $slice: -3
      }
    },
    $inc: { commentCount: 1 }
  }
)

// Verificar que topComments tiene máximo 3 elementos
db.posts.findOne(
  { postId: "post-001" },
  { title: 1, topComments: 1, commentCount: 1, _id: 0 }
)
