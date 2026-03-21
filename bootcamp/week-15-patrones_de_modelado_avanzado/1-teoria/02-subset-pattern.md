# 02 — Patrón Subset

## Objetivos

- Entender el problema de subdocumentos con muchos campos que no siempre se necesitan
- Embeber solo el subconjunto de campos más leídos en el documento principal
- Saber cuándo separar el resto de campos en una colección complementaria
- Aplicar proyecciones como complemento del patrón Subset

## Diagrama

![Extended Reference y Subset](../0-assets/01-extended-reference.svg)

---

## 1. El problema: arrays o campos muy grandes

Un producto puede tener miles de reseñas, pero la UI solo muestra las 5 primeras:

```js
// Sin Subset — el documento tiene TODAS las reseñas
{
  productId: "prod-001",
  name: "Laptop Pro",
  reviews: [
    // ...miles de reseñas incrustadas
  ]
}
// Documento demasiado grande → impacto en RAM y transferencia
```

---

## 2. La solución: embeber solo el subconjunto más relevante

```js
// Patrón Subset — solo los N elementos más recientes/relevantes
{
  productId: "prod-001",
  name: "Laptop Pro",
  topReviews: [
    { reviewer: "Carlos", rating: 5, comment: "Excelente velocidad" },
    { reviewer: "María", rating: 4, comment: "Buena relación calidad-precio" },
    { reviewer: "Luis", rating: 5, comment: "La mejor que he tenido" }
  ],
  reviewCount: 1248,
  avgRating: 4.7
}
```

El resto de reseñas viven en una colección separada `reviews`:

```js
// El histórico completo en colección separada
db.reviews.find({ productId: "prod-001" }).sort({ createdAt: -1 })
```

---

## 3. Mantener el subset actualizado

Al agregar una nueva reseña, empuja al subset y elimina la más antigua:

```js
// Agregar al subset usando $push con $slice
db.products.updateOne(
  { productId: "prod-001" },
  {
    $push: {
      topReviews: {
        $each: [{ reviewer: "Elena", rating: 5, comment: "Perfecta" }],
        $slice: -3  // mantener solo las últimas 3
      }
    },
    $inc: { reviewCount: 1 }
  }
)
```

---

## Checklist

- [ ] ¿Cuántos elementos del subset conservas en el documento principal?
- [ ] ¿Dónde viven el resto de elementos del array?
- [ ] ¿Cómo mantienes sincronizado el subset cuando llega un nuevo elemento?
- [ ] ¿Qué otros contadores o agregados mantienes junto al subset?

## Referencias

- [Subset Pattern — MongoDB Blog](https://www.mongodb.com/blog/post/building-with-patterns-the-subset-pattern)
