# Semana 01 · 02 — Documentos, Colecciones y BSON

## Objetivos

- Entender la estructura interna de un documento MongoDB
- Conocer los tipos BSON fundamentales y cuándo usar cada uno
- Comprender la jerarquía: servidor → base de datos → colección → documento

> Ver diagrama: [modelo-documento.svg](../0-assets/modelo-documento.svg)

---

## 1. BSON: el formato interno de MongoDB

MongoDB almacena documentos en **BSON** (Binary JSON). Extiende JSON con tipos
adicionales que permiten representar datos con mayor precisión:

```js
{
  _id:       ObjectId("64a7f3b2c9e1d5a823f0b4c1"), // identificador único
  name:      "Laptop Pro 15",                       // String
  price:     Decimal128("1299.99"),                 // decimal monetario
  stock:     NumberInt(42),                         // entero 32-bit
  isActive:  true,                                  // Boolean
  tags:      ["tech", "laptop"],                    // Array
  specs:     { ram: "16GB", storage: "512GB" },     // subdocumento
  createdAt: new Date("2024-01-15")                 // Date
}
```

---

## 2. Tipos BSON clave

| Tipo         | Uso principal                         | Ejemplo                      |
| ------------ | ------------------------------------- | ---------------------------- |
| `ObjectId`   | `_id` por defecto (automático)        | `ObjectId("64a7...")`        |
| `String`     | Texto UTF-8                           | `"Laptop Pro 15"`            |
| `Decimal128` | Valores monetarios (precio, monto)    | `Decimal128("1299.99")`      |
| `NumberInt`  | Enteros pequeños (stock, edad, año)   | `NumberInt(42)`              |

> En `mongosh` interactivo los números se infieren. En `setup.js` usar
> constructores explícitos para montos (`Decimal128`) y contadores (`NumberInt`).

---

## 3. Colecciones

Una colección agrupa documentos relacionados. No tiene esquema fijo.
Equivale a una tabla SQL, pero sin columnas predefinidas.

```js
// Dos documentos en la misma colección con campos distintos — ambos válidos
{ name: "Laptop", price: Decimal128("1299.99"), stock: NumberInt(5) }
{ name: "Mouse",  price: Decimal128("49.99"),   color: "black" }
```

Convención del bootcamp: nombres en **snake_case, plural, inglés** (`products`, `order_items`).

---

## 4. La jerarquía completa

```
Servidor MongoDB
└── base de datos: bootcamp_db
      ├── colección: products
      │     ├── { _id, name, price, ... }
      │     └── { _id, name, price, ... }
      └── colección: users
            └── { _id, email, ... }
```

---

## ✅ Checklist

- [ ] ¿Sé qué diferencia hay entre `Decimal128` y `NumberInt`?
- [ ] ¿Entiendo por qué `ObjectId` se usa como `_id` por defecto?
- [ ] ¿Puedo insertar un documento con un subdocumento anidado?
- [ ] ¿Sé cómo se organiza la jerarquía servidor → db → colección → documento?

---

## 📚 Referencias

- [BSON Types](https://www.mongodb.com/docs/manual/reference/bson-types/)
- [MongoDB Documents](https://www.mongodb.com/docs/manual/core/document/)
