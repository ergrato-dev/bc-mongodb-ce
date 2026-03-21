# Semana 05 · 04 — `deleteOne()`, `deleteMany()` y `findOneAndUpdate()`

## Objetivos

- Eliminar documentos con `deleteOne()` y `deleteMany()`
- Usar `findOneAndUpdate()` para leer y actualizar en una sola operación atómica
- Entender cuándo preferir marcar como inactivo vs eliminar

> Ver diagrama: [04-delete.svg](../0-assets/04-delete.svg)

---

## 1. `deleteOne()` y `deleteMany()`

```js
// Eliminar el primer documento que coincide
db.products.deleteOne({ name: "Budget Mouse" })

// Eliminar todos los documentos fuera de stock y sin ventas
db.products.deleteMany({
  inStock: false,
  stock: { $lte: NumberInt(0) }
})
```

> ⚠️ `deleteMany({})` elimina **todos** los documentos de la colección.
> Usa `drop()` si quieres eliminar la colección entera.

---

## 2. Soft delete — patrón recomendado

En producción, es más seguro marcar como inactivo en lugar de eliminar:

```js
// En lugar de deleteOne(), marcar como eliminado
db.products.updateOne(
  { name: "Smart Speaker Mini" },
  {
    $set: {
      isDeleted: true,
      deletedAt: new Date()
    }
  }
)

// Filtrar en queries para excluir eliminados
db.products.find({ isDeleted: { $ne: true } })
```

---

## 3. `findOneAndUpdate()`

Encuentra, actualiza Y devuelve el documento en una sola operación atómica:

```js
// Retorna el documento DESPUÉS de la actualización
const updated = db.products.findOneAndUpdate(
  { name: "USB-C Hub" },
  { $set: { price: Decimal128("44.99") } },
  { returnDocument: "after" }
)
print(updated.price)
```

---

## 4. `replaceOne()`

Reemplaza el documento completo (mantiene el `_id`):

```js
db.products.replaceOne(
  { name: "Old Name" },
  {
    name: "New Name",
    category: "accessories",
    price: Decimal128("19.99"),
    inStock: true
  }
)
```

---

## ✅ Checklist

- [ ] ¿Puedo eliminar un documento específico con `deleteOne()`?
- [ ] ¿Entiendo el riesgo de `deleteMany({})` sin filtro?
- [ ] ¿Sé cuándo aplicar el patrón de soft delete?
- [ ] ¿Puedo usar `findOneAndUpdate()` con `returnDocument: "after"`?

---

## 📚 Referencias

- [Delete Documents](https://www.mongodb.com/docs/manual/tutorial/remove-documents/)
- [findOneAndUpdate()](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOneAndUpdate/)
