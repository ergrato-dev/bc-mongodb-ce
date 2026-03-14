// Semana 04: Operadores Lógicos y de Array
// setup.js — Datos de prueba

db.courses.drop()

db.courses.insertMany([
  {
    title: "MongoDB Fundamentals",
    category: "database",
    level: "beginner",
    price: Decimal128("49.99"),
    rating: 4.8,
    enrolled: NumberInt(1200),
    isPublished: true,
    tags: ["mongodb", "nosql", "database"],
    modules: NumberInt(12),
    scores: [85, 92, 78, 95]
  },
  {
    title: "Node.js API Design",
    category: "backend",
    level: "intermediate",
    price: Decimal128("79.99"),
    rating: 4.5,
    enrolled: NumberInt(850),
    isPublished: true,
    tags: ["nodejs", "api", "backend"],
    modules: NumberInt(8),
    scores: [70, 88, 65]
  },
  {
    title: "React Hooks Deep Dive",
    category: "frontend",
    level: "advanced",
    price: Decimal128("99.99"),
    rating: 4.9,
    enrolled: NumberInt(600),
    isPublished: true,
    tags: ["react", "hooks", "frontend"],
    modules: NumberInt(15),
    scores: [90, 94, 97]
  },
  {
    title: "Python for Data Science",
    category: "data",
    level: "beginner",
    price: Decimal128("59.99"),
    rating: 4.3,
    enrolled: NumberInt(2100),
    isPublished: true,
    tags: ["python", "data", "analytics"],
    modules: NumberInt(20),
    scores: [60, 75, 80]
  },
  {
    title: "Docker & Kubernetes",
    category: "devops",
    level: "intermediate",
    price: Decimal128("89.99"),
    rating: 4.6,
    enrolled: NumberInt(430),
    isPublished: false,
    tags: ["docker", "kubernetes", "devops"],
    modules: NumberInt(10),
    scores: [82, 87, 91]
  },
  {
    title: "GraphQL Fundamentals",
    category: "backend",
    level: "beginner",
    price: Decimal128("39.99"),
    rating: 3.9,
    enrolled: NumberInt(320),
    isPublished: true,
    tags: ["graphql", "api", "backend"],
    modules: NumberInt(6),
    scores: [55, 68, 72]
  },
  {
    title: "TypeScript for Beginners",
    category: "frontend",
    level: "beginner",
    price: Decimal128("44.99"),
    rating: 4.4,
    enrolled: NumberInt(980),
    isPublished: true,
    tags: ["typescript", "javascript", "frontend"],
    modules: NumberInt(9),
    scores: [76, 83, 89]
  },
  {
    title: "AWS Cloud Practitioner",
    category: "cloud",
    level: "beginner",
    price: Decimal128("69.99"),
    rating: 4.2,
    enrolled: NumberInt(1500),
    isPublished: true,
    tags: ["aws", "cloud", "devops"],
    modules: NumberInt(18),
    scores: [79, 84, 88]
  },
  {
    title: "Redis Caching Patterns",
    category: "database",
    level: "advanced",
    price: Decimal128("109.99"),
    rating: 4.7,
    enrolled: NumberInt(210),
    isPublished: false,
    tags: ["redis", "caching", "database"],
    modules: NumberInt(7),
    scores: [88, 93, 96]
  },
  {
    title: "Git & GitHub Mastery",
    category: "tools",
    level: "beginner",
    price: Decimal128("24.99"),
    rating: 4.1,
    enrolled: NumberInt(3400),
    isPublished: true,
    tags: ["git", "github", "version-control"],
    modules: NumberInt(5),
    scores: [65, 72, 80]
  },
  {
    title: "SQL for Developers",
    category: "database",
    level: "intermediate",
    price: Decimal128("54.99"),
    rating: 4.0,
    enrolled: NumberInt(760),
    isPublished: true,
    tags: ["sql", "database", "relational"],
    modules: NumberInt(11),
    scores: [70, 78, 85]
  },
  {
    title: "Microservices Architecture",
    category: "backend",
    level: "advanced",
    price: Decimal128("129.99"),
    rating: 4.8,
    enrolled: NumberInt(185),
    isPublished: true,
    tags: ["microservices", "api", "backend", "devops"],
    modules: NumberInt(14),
    scores: [85, 91, 95, 98]
  }
])

print("✅ Colección courses creada con 12 documentos")
