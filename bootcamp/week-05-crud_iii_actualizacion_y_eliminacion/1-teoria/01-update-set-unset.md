# Semana 05 · 01 — `updateOne()`, `updateMany()`, `$set`, `$unset`

## Objetivos

- Usar `updateOne()` para modificar el primer documento que coincide
- Usar `updateMany()` para modificar todos los que coinciden
- Aplicar `$set` para agregar o cambiar campos y `$unset` para eliminarlos

> Ver diagrama: [01-update-set-unset.svg](../0-assets/01-update-set-unset.svg)

---

## 1. Estructura básica de un update

```js
// updateOne(filtro, actualización, opciones)
db.products.updateOne(
  { name: "Laptop Pro 15" },          // filtro
  { $set: { price: Decimal128("1199.99") } }  // operación
)
```

> ⚠️ **Sin operador de update** el documento se **reemplaza completamente**
> por el segundo argumento. Siempre usa `$set`, `$inc`, etc.

---

## 2. `$set` — Agregar o modificar campos

```js
// Modificar un campo existente
db.products.updateOne(
  { _id: ObjectId("…") },
  { $set: { inStock: false, stock: NumberInt(0) } }
)

// Agregar un campo nuevo a todos los documentos de una categoría
db.products.updateMany(
  { category: "accessories" },
  { $set: { featured: false } }
)
```

---

## 3. `$unset` — Eliminar un campo

```js
// Quitar el campo "featured" de un documento específico
db.products.updateOne(
  { name: "Budget Mouse" },
  { $unset: { featured: "" } }  // el valor es irrelevante
)

// Quitar un campo de todos los documentos
db.products.updateMany(
  {},
  { $unset: { featured: "" } }
)
```

---

## 4. Opción `upsert`

Si el filtro no encuentra ningún documento, `upsert: true` lo crea:

```js
db.products.updateOne(
  { name: "New Item" },
  { $set: { price: Decimal128("9.99"), inStock: true } },
  { upsert: true }
)
```

---

## ✅ Checklist

- [ ] ¿Sé la diferencia de resultado entre `updateOne()` y `updateMany()`?
- [ ] ¿Entiendo qué pasa si hago `updateOne({}, { name: "x" })` sin operador?
- [ ] ¿Puedo usar `$set` para agregar un campo nuevo a documentos existentes?
- [ ] ¿Sé usar `$unset` para limpiar un campo?

---

## 📚 Referencias

- [Update Documents](https://www.mongodb.com/docs/manual/tutorial/update-documents/)
- [Update Operators](https://www.mongodb.com/docs/manual/reference/operator/update/)
