# Patrón Attribute

## Objetivos
1. Identificar colecciones con conjuntos heterogéneos de atributos por documento
2. Transformar campos individuales a un array de `{k, v}` normalizado
3. Crear un índice eficiente sobre el array de atributos
4. Consultar atributos específicos con `$elemMatch`

---

## 1. El problema: demasiados campos opcionales

Algunos documentos tienen 3 atributos de producto; otros tienen 30.
Con campos individuales, el índice no puede cubrir todos.

```js
// ❌ Sin patrón — campos dispersos, difícil de indexar
{
  productId: "p-001",
  color: "red",
  size: "L",
  material: "cotton",
  waterproof: true
  // ... 25 campos más, la mayoría null en otros docs
}
```

## 2. Solución: array de atributos `{k, v}`

```js
// ✅ Con patrón Attribute
{
  productId: "p-001",
  name: "Outdoor Jacket",
  attrs: [
    { k: "color",      v: "red" },
    { k: "size",       v: "L" },
    { k: "material",   v: "cotton" },
    { k: "waterproof", v: true }
  ]
}
```

## 3. Índice multikey sobre el array

```js
// Un solo índice cubre TODOS los atributos posibles
db.products_attr.createIndex({ "attrs.k": 1, "attrs.v": 1 })
```

MongoDB crea entradas de índice por cada elemento del array (índice multikey).

## 4. Consultar atributos con $elemMatch

```js
// Buscar productos waterproof de color rojo
db.products_attr.find({
  attrs: {
    $elemMatch: { k: "waterproof", v: true }
  }
})

// Verificar con explain()
db.products_attr.find({
  attrs: { $elemMatch: { k: "color", v: "red" } }
}).explain("executionStats")
// → stage: "IXSCAN" usando el índice attrs.k + attrs.v
```

## 5. Cuándo usar Attribute

- Catálogos de productos con especificaciones variables
- Entidades con propiedades configurables por el usuario
- Campos que van a crecer con el tiempo (evitar alter schema)

> No usar si los atributos son fijos y conocidos — en ese caso, campos normales
> con un índice compuesto son más eficientes.

## Checklist
- ¿Qué estructura tiene cada elemento del array en el patrón Attribute?
- ¿Por qué un índice multikey cubre todos los atributos con una sola definición?
- ¿Cuándo NO conviene usar el patrón Attribute?
- ¿Qué operador de query se usa para buscar en arrays de objetos?

## Referencias
- [Attribute Pattern — MongoDB Blog](https://www.mongodb.com/blog/post/building-with-patterns-the-attribute-pattern)
- [Multikey Indexes](https://www.mongodb.com/docs/manual/core/indexes/index-types/index-multikey/)
