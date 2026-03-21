# 01 — Patrón Extended Reference

## Objetivos

- Entender por qué embeber solo los campos más usados evita `$lookup` en lectura
- Implementar Extended Reference en una relación frecuentemente leída
- Manejar la actualización de los campos embebidos cuando el documento maestro cambia
- Comparar el costo de escritura vs el beneficio de rendimiento en lectura

## Diagrama

![Extended Reference](../0-assets/01-extended-reference.svg)

---

## 1. El problema: `$lookup` en cada lectura

Sin Extended Reference, leer un post y el nombre del autor requiere join:

```js
// Patrón sin Extended Reference — join en cada lectura
db.posts.aggregate([
  { $match: { postId: "post-001" } },
  {
    $lookup: {
      from: "authors",
      localField: "authorId",
      foreignField: "authorId",
      as: "author"
    }
  }
])
```

---

## 2. La solución: embeber los campos leídos frecuentemente

```js
// Patrón Extended Reference — campos del autor embebidos en posts
{
  postId: "post-001",
  title: "Introducción a MongoDB",
  authorId: "auth-01",
  authorInfo: {
    name: "Ana Torres",
    avatarUrl: "/avatars/ana.jpg"
  }
  // Solo los campos que se muestran en la UI
}
```

---

## 3. Actualización cuando el maestro cambia

Si el autor cambia su nombre, hay que actualizar TODOS los posts:

```js
// Actualizar el campo embebido en todos los posts del autor
db.posts.updateMany(
  { authorId: "auth-01" },
  { $set: { "authorInfo.name": "Ana Torres Gómez" } }
)
```

> Usa Extended Reference solo para campos que cambian raramente (nombre, avatar).
> No para campos que cambian con frecuencia (contador de posts, score).

---

## 4. Cuándo usar Extended Reference

| Condición                                    | ¿Usar Extended Reference? |
|---------------------------------------------|--------------------------|
| Lees el campo frecuentemente                | ✅ Sí                    |
| El campo raramente cambia                   | ✅ Sí                    |
| El campo cambia con mucha frecuencia        | ❌ No — usa $lookup       |
| Solo necesitas el ID para búsquedas internas| ❌ No — Reference simple  |

---

## Checklist

- [ ] ¿Cuáles campos del documento maestro embedes?
- [ ] ¿Qué pasa si el autor borra su cuenta? ¿Cómo manejas `authorInfo`?
- [ ] ¿Cuándo conviene más un `$lookup` que Extended Reference?
- [ ] ¿Cómo actualizar los campos embebidos en todos los documentos hijos?

## Referencias

- [Extended Reference Pattern — MongoDB Blog](https://www.mongodb.com/blog/post/building-with-patterns-the-extended-reference-pattern)
