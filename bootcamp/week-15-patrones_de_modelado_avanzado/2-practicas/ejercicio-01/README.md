# Ejercicio 01 — Extended Reference y Subset Pattern

## Objetivo

Aplicar los patrones **Extended Reference** y **Subset** para optimizar lecturas frecuentes de datos relacionados sin recurrir a `$lookup` en cada consulta.

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Levanta el contenedor:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   ```
3. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
4. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

### Paso 1: Leer posts SIN Extended Reference

Sin el patrón, obtener el nombre del autor en cada post requiere un `$lookup`:

```js
db.posts.aggregate([
  {
    $lookup: {
      from: "authors",
      localField: "authorId",
      foreignField: "authorId",
      as: "authorData"
    }
  },
  { $unwind: "$authorData" },
  {
    $project: {
      title: 1,
      "authorData.name": 1,
      "authorData.avatarUrl": 1,
      publishedAt: 1,
      _id: 0
    }
  },
  { $sort: { publishedAt: -1 } },
  { $limit: 5 }
])
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Leer posts CON Extended Reference

Con el patrón, `authorInfo` ya está embebido en cada post. No necesitamos `$lookup`:

```js
db.posts.find(
  {},
  { title: 1, "authorInfo.name": 1, "authorInfo.avatarUrl": 1, publishedAt: 1, _id: 0 }
).sort({ publishedAt: -1 }).limit(5)
```

Observa la diferencia en simplicidad y en el número de stages del pipeline.

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 2.

---

### Paso 3: Propagación de cambio de nombre

Cuando el autor cambia su nombre hay que actualizar la fuente de verdad **y** propagar al campo embebido en todos los posts:

```js
// a) Fuente de verdad
db.authors.updateOne(
  { authorId: "auth-01" },
  { $set: { name: "Ana Torres Gómez" } }
)

// b) Extended Reference en posts
db.posts.updateMany(
  { authorId: "auth-01" },
  { $set: { "authorInfo.name": "Ana Torres Gómez" } }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 3.

---

### Paso 4: Agregar comentario con Subset Pattern

`$push` con `$slice: -3` mantiene solo los 3 comentarios más recientes en `topComments`, mientras `$inc` actualiza el contador total:

```js
db.posts.updateOne(
  { postId: "post-001" },
  {
    $push: {
      topComments: { $each: [newComment], $slice: -3 }
    },
    $inc: { commentCount: 1 }
  }
)
```

Después de ejecutarlo, verifica que `topComments` tiene exactamente 3 elementos aunque el `commentCount` sea mayor.

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 4.

---

## Checklist de verificación

- [ ] ¿Puedes listar posts con nombre de autor sin `$lookup`?
- [ ] ¿El `updateMany` actualizó correctamente el nombre en los 3 posts de auth-01?
- [ ] ¿`topComments` tiene máximo 3 elementos tras agregar el nuevo comentario?
- [ ] ¿`commentCount` refleja el total real, no solo los 3 embebidos?
