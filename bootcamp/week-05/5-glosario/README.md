# Glosario — Semana 05

CRUD III: Actualización y Eliminación

## Términos A–Z

**$addToSet**
Operador de array que agrega un elemento a un array solo si no existe,
previniendo duplicados: `{ $addToSet: { tags: "new-tag" } }`.

**$inc**
Operador que incrementa (o decrementa con valor negativo) el valor de un
campo numérico de forma atómica: `{ $inc: { stock: -1 } }`.

**$mul**
Operador que multiplica el valor de un campo por un factor dado.
Útil para ajustes de precio en masa: `{ $mul: { price: 0.9 } }`.

**$pop**
Operador que elimina el primer (`-1`) o último (`1`) elemento de un array:
`{ $pop: { tags: 1 } }`.

**$pull**
Operador que elimina todas las ocurrencias de un valor (o que cumplan una
condición) de un array: `{ $pull: { tags: "obsolete" } }`.

**$push**
Operador que agrega un elemento al final de un array. Permite duplicados:
`{ $push: { tags: "new-tag" } }`.

**$rename**
Operador que renombra un campo sin cambiar su valor:
`{ $rename: { "qty": "stock" } }`.

**$set**
Operador fundamental de actualización. Modifica campos existentes o
agrega nuevos sin afectar el resto del documento:
`{ $set: { price: 29.99, updatedAt: new Date() } }`.

**$unset**
Operador que elimina un campo del documento:
`{ $unset: { discount: "" } }`.

**deleteMany()**
Método que elimina todos los documentos que coincidan con el filtro:
`db.collection.deleteMany({ isActive: false })`.

**deleteOne()**
Método que elimina el primer documento que coincida con el filtro:
`db.collection.deleteOne({ _id: id })`.

**findOneAndUpdate()**
Método atómico que encuentra, actualiza y retorna el documento en una
sola operación. Con `returnDocument: "after"` retorna el estado
posterior a la actualización.

**replaceOne()**
Reemplaza el documento completo (excepto `_id`) con el nuevo documento
proporcionado. No usa operadores de actualización.

**Soft delete**
Patrón de diseño que "elimina" documentos marcándolos con
`isDeleted: true` en lugar de borrarlos permanentemente. Preserva
el historial y permite auditoría.

**updateMany()**
Método que actualiza todos los documentos que coincidan con el filtro.

**updateOne()**
Método que actualiza el primer documento que coincida con el filtro.

**Upsert**
Opción `{ upsert: true }` en operaciones de actualización. Si no se
encuentra ningún documento que coincida con el filtro, crea uno nuevo
con los campos del filtro y la actualización aplicada.
