# Índices Únicos y Covered Queries

## Objetivos

- Crear índices únicos para garantizar integridad de datos
- Entender qué es una covered query y cómo crearla
- Gestionar índices: listar, eliminar y analizar con `explain()`

## Diagrama

![Índices Únicos y Covered Queries](../0-assets/04-unique-covered.svg)

## 1. Índices únicos

Un índice único garantiza que no existan dos documentos con el mismo valor
en el campo indexado:

```js
// Garantizar que no haya dos usuarios con el mismo email
db.users.createIndex({ email: 1 }, { unique: true })

// Intentar insertar un email duplicado lanzará error:
// MongoServerError: E11000 duplicate key error
```

También funciona en índices compuestos (unicidad de la combinación):

```js
// Garantizar que un usuario no tenga dos pedidos en la misma fecha
db.orders.createIndex(
  { userId: 1, orderDate: 1 },
  { unique: true }
)
```

## 2. Covered Query — Consultas sin leer documentos

Una covered query es aquella que MongoDB puede **satisfacer completamente
usando solo el índice**, sin leer los documentos de disco:

```js
// Índice en name y category
db.products.createIndex({ category: 1, name: 1 })

// Covered query: proyecta solo campos del índice
db.products.find(
  { category: "electronics" },
  { name: 1, category: 1, _id: 0 }   // _id: 0 es importante
)
// explain() → totalDocsExamined: 0 ← señal de covered query
```

> La proyección debe incluir solo campos del índice y excluir `_id`.

## 3. Gestión de índices

```js
// Listar todos los índices de una colección
db.orders.getIndexes()

// Eliminar un índice por nombre
db.orders.dropIndex("status_1_city_1")

// Eliminar todos los índices excepto _id
db.orders.dropIndexes()

// Ver estadísticas de uso de índices
db.orders.aggregate([{ $indexStats: {} }])
```

## 4. `explain()` — verificar estrategia de índice

```js
const result = db.orders.find({ status: "completed" }).explain("executionStats")
// Búsqueda clave:
// winningPlan.stage: "IXSCAN" → usa índice
// winningPlan.stage: "COLLSCAN" → no usa índice
// executionStats.totalDocsExamined: 0 → covered query
```

## Checklist

- ¿Qué error lanza MongoDB al insertar un duplicado en un campo único?
- ¿Por qué `_id: 0` es necesario para que sea una covered query?
- ¿Cómo verificas en `explain()` que una query usa un índice?
- ¿Cuándo conviene eliminar un índice que ya no se usa?

## Referencias

- [Unique Indexes — MongoDB Docs](https://www.mongodb.com/docs/manual/core/index-unique/)
- [Query Optimization — MongoDB Docs](https://www.mongodb.com/docs/manual/core/query-optimization/)
