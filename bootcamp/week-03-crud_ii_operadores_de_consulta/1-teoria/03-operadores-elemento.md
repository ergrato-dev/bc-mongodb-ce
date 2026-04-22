# Semana 03 · 03 — $exists y $type

## Objetivos

- Encontrar documentos que tengan o no tengan un campo con `$exists`
- Filtrar por tipo BSON de un campo con `$type`
- Gestionar colecciones con esquemas flexibles donde los campos son opcionales

![03-exists-type.svg](../0-assets/03-exists-type.svg)

---

## 1. $exists — verificar presencia de campo

MongoDB permite que distintos documentos tengan distintos campos. `$exists` filtra
por la presencia o ausencia de un campo específico.

```js
// Productos que SÍ tienen campo "discount"
db.products.find({ discount: { $exists: true } })

// Productos que NO tienen campo "discount"
db.products.find({ discount: { $exists: false } })
```

---

## 2. $exists: true con valor null

Un campo con valor `null` SÍ existe. `$exists: true` lo incluirá:

```js
// Ambos documentos aparecen con $exists: true
// { name: "A", discount: null }     ← campo existe (valor null)
// { name: "B", discount: 0.15 }     ← campo existe (valor numérico)
// { name: "C" }                     ← campo no existe → $exists: false
db.products.find({ discount: { $exists: true } })
// Retorna "A" y "B", no "C"
```

---

## 3. $type — filtrar por tipo BSON

`$type` filtra documentos donde el campo tiene el tipo BSON especificado.
Útil para detectar inconsistencias de datos.

```js
// Productos cuyo precio es de tipo string (posible error de datos)
db.products.find({ price: { $type: "string" } })

// Productos cuyo precio es Decimal128 (tipo correcto)
db.products.find({ price: { $type: "decimal" } })

// Usar alias de tipo (más legible que los códigos numéricos)
db.products.find({ year: { $type: "int" } })
```

Alias de tipo comunes: `"string"`, `"int"`, `"long"`, `"decimal"`, `"double"`,
`"bool"`, `"date"`, `"objectId"`, `"array"`, `"object"`, `"null"`.

---

## 4. Combinar $exists y $type

```js
// Campos "rating" que existen Y son de tipo numérico
db.products.find({
  rating: { $exists: true, $type: "double" }
})
```

---

## ✅ Checklist

- [ ] ¿Puedo encontrar documentos donde falta un campo opcional?
- [ ] ¿Entiendo que `null` y "campo ausente" son distintos para `$exists`?
- [ ] ¿Sé qué alias usar con `$type` para los tipos más comunes?
- [ ] ¿Puedo combinar `$exists` y `$type` en la misma condición?

---

## 📚 Referencias

- [$exists — MongoDB Docs](https://www.mongodb.com/docs/manual/reference/operator/query/exists/)
- [$type — MongoDB Docs](https://www.mongodb.com/docs/manual/reference/operator/query/type/)
