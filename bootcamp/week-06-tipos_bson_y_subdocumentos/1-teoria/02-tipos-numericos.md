# 02 — NumberInt, NumberLong y Boolean

## Objetivos

- Distinguir cuándo usar `NumberInt` vs `NumberLong` vs `Number`
- Usar `Boolean` para flags de estado
- Entender la inferencia de tipos en `mongosh`

## Diagrama

![Tipos numéricos BSON](../0-assets/02-subdocumentos.svg)

## 1. Números en MongoDB

Por defecto, `mongosh` infiere el tipo numérico como `Double` (64-bit float).
Para enteros explícitos se usan constructores específicos:

| Constructor    | Bytes | Rango                              | Cuándo usar           |
|----------------|-------|------------------------------------|-----------------------|
| `NumberInt`    | 4     | -2,147,483,648 a 2,147,483,647     | Edad, cantidad, año   |
| `NumberLong`   | 8     | ±9.2 × 10¹⁸                       | IDs externos, views   |
| `Number`       | 8     | Double (float 64-bit)              | Solo para cálculos    |
| `Decimal128`   | 16    | Alta precisión                     | Precios, montos       |

## 2. NumberInt — Enteros pequeños

```js
db.employees.insertOne({
  name: "Carlos Ruiz",
  age: NumberInt(34),
  yearsExperience: NumberInt(8),
  teamSize: NumberInt(5)
})

// $inc funciona con NumberInt
db.employees.updateOne(
  { name: "Carlos Ruiz" },
  { $inc: { yearsExperience: NumberInt(1) } }
)
```

## 3. NumberLong — Enteros grandes

```js
db.analytics.insertOne({
  pageId: "home",
  totalViews: NumberLong(1500000),
  uniqueVisitors: NumberLong(890432),
  externalId: NumberLong(9007199254740993)
})
```

## 4. Boolean — Flags de estado

```js
db.employees.insertOne({
  name: "Sofía Vargas",
  isActive: true,
  isRemote: false,
  hasManagerAccess: false
})

// Consultar empleados activos y remotos
db.employees.find({
  isActive: true,
  isRemote: true
})
```

## 5. Inferencia de tipos en mongosh

En `mongosh` interactivo, los números sin constructor se convierten a Double:

```js
// mongosh infiere como Double
db.test.insertOne({ value: 42 })        // almacena como Double
db.test.insertOne({ value: NumberInt(42) }) // almacena como Int32
```

> Para datos de producción, usar constructores explícitos en scripts `.js`.
> En consultas interactivas, `mongosh` tolera la inferencia.

## Checklist

- ¿Cuándo usas `NumberInt` en lugar de un número simple?
- ¿Puedes crear un documento con `NumberLong` para un contador de visitas?
- ¿Sabes filtrar por `isActive: true` en una colección?
- ¿Entiendes la diferencia entre almacenar `42` vs `NumberInt(42)`?

## Referencias

- [BSON Types](https://www.mongodb.com/docs/manual/reference/bson-types/)
- [mongosh Data Types](https://www.mongodb.com/docs/mongodb-shell/reference/data-types/)
