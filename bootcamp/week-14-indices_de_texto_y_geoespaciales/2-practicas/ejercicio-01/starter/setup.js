// Semana 14: Índices de Texto y Geoespaciales
// Ejercicio 01 — Setup: Búsquedas de Texto
// ============================================================
// Colección: articles
// Campos: title, body, category, author, publishedYear, tags

db.articles.drop()

db.articles.insertMany([
  {
    title: "Introducción a MongoDB: documentos y colecciones",
    body: "MongoDB almacena datos como documentos BSON. Las colecciones agrupan documentos relacionados.",
    category: "databases",
    author: "Ana Torres",
    publishedYear: 2023,
    tags: ["mongodb", "nosql", "fundamentos"]
  },
  {
    title: "Optimización de índices en MongoDB para alto rendimiento",
    body: "Los índices compuestos mejoran el rendimiento de consultas complejas. La regla ESR optimiza el orden.",
    category: "performance",
    author: "Carlos López",
    publishedYear: 2024,
    tags: ["mongodb", "indices", "rendimiento", "optimizacion"]
  },
  {
    title: "Guía completa de replicación y clusters de MongoDB",
    body: "Un replica set proporciona alta disponibilidad. Con tres nodos puedes soportar fallos automáticos.",
    category: "infrastructure",
    author: "Diego Herrera",
    publishedYear: 2024,
    tags: ["mongodb", "replicacion", "cluster", "alta-disponibilidad"]
  },
  {
    title: "Pipeline de agregación: $group, $match y rendimiento",
    body: "El aggregation pipeline procesa documentos en etapas. La etapa $match debe ir siempre al inicio.",
    category: "aggregation",
    author: "Ana Torres",
    publishedYear: 2023,
    tags: ["mongodb", "agregacion", "pipeline", "rendimiento"]
  },
  {
    title: "Modelado de datos: embed vs reference en MongoDB",
    body: "El patrón embed almacena documentos anidados. Reference usa ObjectId para relacionar colecciones.",
    category: "modeling",
    author: "Sofia Vargas",
    publishedYear: 2024,
    tags: ["mongodb", "modelado", "schema", "embed"]
  },
  {
    title: "Transacciones ACID multi-documento en MongoDB",
    body: "MongoDB soporta transacciones ACID desde la versión 4.0. Las sesiones garantizan atomicidad.",
    category: "transactions",
    author: "Carlos López",
    publishedYear: 2024,
    tags: ["mongodb", "transacciones", "acid", "session"]
  },
  {
    title: "Seguridad en MongoDB: autenticación y roles RBAC",
    body: "El control de acceso basado en roles protege los datos. Los roles built-in cubren casos comunes.",
    category: "security",
    author: "Gabriel Muñoz",
    publishedYear: 2023,
    tags: ["mongodb", "seguridad", "rbac", "autenticacion"]
  },
  {
    title: "Change Streams para aplicaciones en tiempo real",
    body: "Change streams permiten escuchar cambios en colecciones. Ideal para pipelines de datos y eventos.",
    category: "realtime",
    author: "Sofia Vargas",
    publishedYear: 2024,
    tags: ["mongodb", "changestreams", "realtime", "eventos"]
  }
])

print("✅ articles: " + db.articles.countDocuments() + " documentos insertados")
print("   Categorías: " + db.articles.distinct("category").join(", "))
