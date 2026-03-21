# Glosario — Semana 10

**Aggregation Pipeline II — Acumuladores y Transformaciones Avanzadas**

---

## A

**$addFields**
Etapa del pipeline que agrega nuevos campos calculados a los documentos
sin eliminar los campos existentes. Contrasta con `$project`, que solo
preserva los campos explícitamente declarados.
```js
{ $addFields: { totalValue: { $multiply: ["$price", "$quantity"] } } }
```

**$addToSet**
Acumulador de `$group` que crea un array con los valores **únicos** del
campo especificado dentro de cada grupo. Ignora duplicados.
```js
{ uniqueCategories: { $addToSet: "$category" } }
```

**Acumulador**
Operador usado dentro de `$group` para calcular un valor a partir de
todos los documentos de un grupo. Ejemplos: `$sum`, `$avg`, `$push`,
`$addToSet`, `$first`, `$last`.

---

## C

**$cond**
Operador condicional ternario: evalúa una expresión booleana y retorna
uno de dos valores según sea verdadera o falsa.
```js
{ $cond: { if: { $gt: ["$amount", 500] }, then: "premium", else: "standard" } }
```

---

## E

**Expresión condicional**
Expresión del aggregation pipeline que evalúa condiciones para
producir valores dinámicos. En MongoDB incluye `$cond`, `$ifNull`,
`$switch` y `$filter`.

---

## F

**$first**
Acumulador de `$group` que retorna el **primer** valor del campo
dentro del grupo. Para resultados deterministas, debe ir precedido
de un `$sort`.
```js
{ firstSale: { $first: "$product" } }
```

---

## I

**$ifNull**
Operador que evalúa una expresión: si es `null` o el campo no existe,
retorna un valor por defecto. Útil para normalizar datos incompletos.
```js
{ $ifNull: ["$city", "Sin asignar"] }
```

---

## L

**$last**
Acumulador de `$group` que retorna el **último** valor del campo
dentro del grupo. Para resultados deterministas, debe ir precedido
de un `$sort`.
```js
{ lastSale: { $last: "$product" } }
```

---

## P

**Pipeline complejo**
Pipeline de agregación que encadena 4 o más etapas para responder
preguntas de negocio complejas. Patrón común:
`$addFields` → `$match` → `$group` → `$sort`.

**$push**
Acumulador de `$group` que crea un array con **todos** los valores
del campo en el grupo, incluyendo duplicados. Contrasta con `$addToSet`.
```js
{ allProducts: { $push: "$product" } }
```

---

## T

**$toDouble**
Operador de conversión que transforma un valor (como `Decimal128`)
a tipo `Double`. Necesario para operaciones aritméticas sobre campos
monetarios almacenados como `Decimal128`.
```js
{ $toDouble: "$amount" }
```
