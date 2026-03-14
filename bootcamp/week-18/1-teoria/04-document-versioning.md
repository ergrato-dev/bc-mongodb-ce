# Patrón Document Versioning

## Objetivos
1. Entender cuándo se necesita historial completo de versiones de un documento
2. Separar versión actual vs historial en dos colecciones
3. Implementar el flujo de archivado al actualizar un documento
4. Consultar versiones anteriores de un documento

---

## 1. ¿Cuándo guardar historial?

**Schema Versioning** gestiona la forma del esquema.
**Document Versioning** guarda cada estado previo del *contenido* del documento.

Casos de uso: precios históricos, contratos, registros médicos, eventos auditables.

## 2. Estructura: dos colecciones

```js
// Colección principal: versión actual
db.products.findOne({ productId: "prod-1" })
// → { productId: "prod-1", name: "Widget Pro", price: 49.99, currentVersion: 3 }

// Colección historial: versiones anteriores
db.products_history.find({ productId: "prod-1" }).sort({ version: -1 })
// → [
//     { productId: "prod-1", version: 2, name: "Widget", price: 39.99, archivedAt: ... },
//     { productId: "prod-1", version: 1, name: "Proto",  price: 29.99, archivedAt: ... }
//   ]
```

## 3. Flujo de actualización

```js
// 1. Leer versión actual
const current = db.products.findOne({ productId: "prod-1" })

// 2. Archivar en historial
db.products_history.insertOne({
  productId: current.productId,
  version: current.currentVersion,
  name: current.name,
  price: current.price,
  archivedAt: new Date()
})

// 3. Actualizar la versión actual
db.products.updateOne(
  { productId: "prod-1" },
  {
    $set: {
      name: "Widget Ultra",
      price: Decimal128("59.99"),
      updatedAt: new Date()
    },
    $inc: { currentVersion: 1 }
  }
)
```

## 4. Consultar versión específica

```js
// Ver precio en una fecha pasada
db.products_history.findOne(
  { productId: "prod-1", version: NumberInt(1) }
)

// Ver todos los cambios de precio de un producto
db.products_history.find(
  { productId: "prod-1" },
  { version: 1, price: 1, archivedAt: 1, _id: 0 }
).sort({ version: 1 })
```

## 5. Índice recomendado en historial

```js
db.products_history.createIndex(
  { productId: 1, version: -1 }
)
```

## Checklist
- ¿Cuántas colecciones usa el patrón Document Versioning?
- ¿Qué operación se ejecuta ANTES de actualizar un documento?
- ¿Qué diferencia hay entre Schema Versioning y Document Versioning?
- ¿Qué índice optimiza la consulta de versiones de un documento?

## Referencias
- [Document Versioning Pattern — MongoDB Blog](https://www.mongodb.com/blog/post/building-with-patterns-the-document-versioning-pattern)
- [insertOne() + updateOne() chained](https://www.mongodb.com/docs/manual/crud/)
