// Semana 15: Patrones de Modelado Avanzado — Extended Reference y Subset
// ============================================
// SETUP — Carga de datos de prueba
// ============================================
// Ejecutar con:
// docker compose -f scripts/docker-compose.yml exec -T mongodb \
//   mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
//   bootcamp_db --file /dev/stdin < starter/setup.js
// ============================================

db.authors.drop()
db.posts.drop()

// Autores: colección maestra (fuente de verdad)
db.authors.insertMany([
  {
    authorId: "auth-01",
    name: "Ana Torres",
    bio: "Desarrolladora backend con 8 años de experiencia en bases de datos NoSQL.",
    avatarUrl: "/avatars/ana-torres.png",
    email: "ana.torres@example.com",
    socialLinks: { twitter: "@anatorres", github: "anatorres" },
    postCount: NumberInt(3),
    registeredAt: new Date("2022-03-10")
  },
  {
    authorId: "auth-02",
    name: "Bruno Salazar",
    bio: "Arquitecto de datos especializado en sistemas de alta disponibilidad.",
    avatarUrl: "/avatars/bruno-salazar.png",
    email: "bruno.salazar@example.com",
    socialLinks: { twitter: "@brunosal", github: "brunosal" },
    postCount: NumberInt(2),
    registeredAt: new Date("2022-06-20")
  },
  {
    authorId: "auth-03",
    name: "Carolina Mejía",
    bio: "Ingeniería en sistemas, docente y entusiasta del open source.",
    avatarUrl: "/avatars/carolina-mejia.png",
    email: "carolina.mejia@example.com",
    socialLinks: { twitter: "@carolmejia", github: "carolmejia" },
    postCount: NumberInt(2),
    registeredAt: new Date("2023-01-15")
  },
  {
    authorId: "auth-04",
    name: "Diego Vargas",
    bio: "Consultor de MongoDB y AWS, escritor técnico.",
    avatarUrl: "/avatars/diego-vargas.png",
    email: "diego.vargas@example.com",
    socialLinks: { twitter: "@diegovar", github: "diegovar" },
    postCount: NumberInt(3),
    registeredAt: new Date("2023-04-05")
  },
  {
    authorId: "auth-05",
    name: "Elena Ríos",
    bio: "Experta en modelado de datos y patrones de diseño para MongoDB.",
    avatarUrl: "/avatars/elena-rios.png",
    email: "elena.rios@example.com",
    socialLinks: {},
    postCount: NumberInt(0),
    registeredAt: new Date("2023-08-30")
  }
])

// Posts: incluyen Extended Reference (authorInfo) y Subset (topComments)
db.posts.insertMany([
  {
    postId: "post-001",
    title: "Introducción a MongoDB y el modelo de documentos",
    authorId: "auth-01",
    // Extended Reference: solo los campos que se muestran en listados
    authorInfo: { name: "Ana Torres", avatarUrl: "/avatars/ana-torres.png" },
    content: "MongoDB almacena datos como documentos BSON, lo que permite mayor flexibilidad...",
    tags: ["mongodb", "nosql", "documentos"],
    // Subset Pattern: solo los 3 comentarios más recientes
    topComments: [
      { user: "user_01", text: "Excelente intro!", rating: NumberInt(5), at: new Date("2024-01-10") },
      { user: "user_02", text: "Muy claro el ejemplo.", rating: NumberInt(4), at: new Date("2024-01-11") },
      { user: "user_03", text: "¿Funciona con Node.js?", rating: NumberInt(5), at: new Date("2024-01-12") }
    ],
    commentCount: NumberInt(47),
    publishedAt: new Date("2024-01-08")
  },
  {
    postId: "post-002",
    title: "Optimización de consultas con índices en MongoDB",
    authorId: "auth-01",
    authorInfo: { name: "Ana Torres", avatarUrl: "/avatars/ana-torres.png" },
    content: "Los índices son estructuras que aceleran las consultas al precio de mayor espacio...",
    tags: ["mongodb", "indices", "rendimiento"],
    topComments: [
      { user: "user_05", text: "Muy útil para producción.", rating: NumberInt(5), at: new Date("2024-02-05") },
      { user: "user_06", text: "¿Y los índices TTL?", rating: NumberInt(4), at: new Date("2024-02-06") }
    ],
    commentCount: NumberInt(23),
    publishedAt: new Date("2024-02-03")
  },
  {
    postId: "post-003",
    title: "Aggregation Pipeline: de cero a héroe",
    authorId: "auth-01",
    authorInfo: { name: "Ana Torres", avatarUrl: "/avatars/ana-torres.png" },
    content: "El aggregation pipeline permite transformar documentos en múltiples etapas...",
    tags: ["mongodb", "aggregation", "pipeline"],
    topComments: [
      { user: "user_08", text: "$group es poderoso!", rating: NumberInt(5), at: new Date("2024-03-20") }
    ],
    commentCount: NumberInt(8),
    publishedAt: new Date("2024-03-18")
  },
  {
    postId: "post-004",
    title: "Replica Sets: alta disponibilidad en MongoDB",
    authorId: "auth-02",
    authorInfo: { name: "Bruno Salazar", avatarUrl: "/avatars/bruno-salazar.png" },
    content: "Un Replica Set mantiene múltiples copias de los datos para garantizar continuidad...",
    tags: ["mongodb", "replicacion", "ha"],
    topComments: [
      { user: "user_10", text: "Excelente explicación.", rating: NumberInt(5), at: new Date("2024-01-25") },
      { user: "user_11", text: "¿Es difícil la configuración?", rating: NumberInt(4), at: new Date("2024-01-26") }
    ],
    commentCount: NumberInt(15),
    publishedAt: new Date("2024-01-20")
  },
  {
    postId: "post-005",
    title: "Sharding: escalado horizontal en MongoDB",
    authorId: "auth-02",
    authorInfo: { name: "Bruno Salazar", avatarUrl: "/avatars/bruno-salazar.png" },
    content: "El sharding distribuye datos entre múltiples servidores para manejar grandes volúmenes...",
    tags: ["mongodb", "sharding", "escalado"],
    topComments: [
      { user: "user_13", text: "Uno de los mejores artículos.", rating: NumberInt(5), at: new Date("2024-04-02") }
    ],
    commentCount: NumberInt(5),
    publishedAt: new Date("2024-03-30")
  },
  {
    postId: "post-006",
    title: "Introducción a la programación funcional con Python",
    authorId: "auth-03",
    authorInfo: { name: "Carolina Mejía", avatarUrl: "/avatars/carolina-mejia.png" },
    content: "La programación funcional aborda los problemas como la evaluación de funciones matemáticas...",
    tags: ["python", "funcional", "programacion"],
    topComments: [
      { user: "user_15", text: "Muy didáctico.", rating: NumberInt(5), at: new Date("2024-02-14") }
    ],
    commentCount: NumberInt(9),
    publishedAt: new Date("2024-02-12")
  },
  {
    postId: "post-007",
    title: "Docker y contenedores para desarrolladores",
    authorId: "auth-03",
    authorInfo: { name: "Carolina Mejía", avatarUrl: "/avatars/carolina-mejia.png" },
    content: "Docker simplifica el despliegue de aplicaciones empaquetando código y dependencias...",
    tags: ["docker", "contenedores", "devops"],
    topComments: [
      { user: "user_17", text: "Docker compose es genial.", rating: NumberInt(5), at: new Date("2024-03-08") },
      { user: "user_18", text: "Gran artículo.", rating: NumberInt(4), at: new Date("2024-03-09") }
    ],
    commentCount: NumberInt(12),
    publishedAt: new Date("2024-03-05")
  },
  {
    postId: "post-008",
    title: "Seguridad en APIs REST: mejores prácticas",
    authorId: "auth-04",
    authorInfo: { name: "Diego Vargas", avatarUrl: "/avatars/diego-vargas.png" },
    content: "Proteger una API REST requiere autenticación, autorización y validación de entradas...",
    tags: ["seguridad", "api", "rest"],
    topComments: [
      { user: "user_20", text: "JWT bien explicado.", rating: NumberInt(5), at: new Date("2024-01-30") },
      { user: "user_21", text: "Muy útil el ejemplo.", rating: NumberInt(5), at: new Date("2024-02-01") }
    ],
    commentCount: NumberInt(18),
    publishedAt: new Date("2024-01-28")
  },
  {
    postId: "post-009",
    title: "Introducción a AWS S3 y almacenamiento en la nube",
    authorId: "auth-04",
    authorInfo: { name: "Diego Vargas", avatarUrl: "/avatars/diego-vargas.png" },
    content: "Amazon S3 proporciona almacenamiento de objetos de alta durabilidad y disponibilidad...",
    tags: ["aws", "s3", "cloud"],
    topComments: [
      { user: "user_23", text: "Las políticas de bucket son clave.", rating: NumberInt(4), at: new Date("2024-04-10") }
    ],
    commentCount: NumberInt(6),
    publishedAt: new Date("2024-04-08")
  },
  {
    postId: "post-010",
    title: "CI/CD con GitHub Actions: del código a producción",
    authorId: "auth-04",
    authorInfo: { name: "Diego Vargas", avatarUrl: "/avatars/diego-vargas.png" },
    content: "GitHub Actions automatiza pruebas y despliegues directamente desde el repositorio...",
    tags: ["cicd", "github", "devops"],
    topComments: [
      { user: "user_25", text: "Lo usé hoy mismo.", rating: NumberInt(5), at: new Date("2024-05-02") }
    ],
    commentCount: NumberInt(4),
    publishedAt: new Date("2024-04-30")
  }
])

print("Setup semana 15 - ejercicio 01 completado.")
print("Autores insertados: " + db.authors.countDocuments())
print("Posts insertados  : " + db.posts.countDocuments())
