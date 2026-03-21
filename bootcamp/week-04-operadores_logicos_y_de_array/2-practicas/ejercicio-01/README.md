# Ejercicio 01 — Operadores Lógicos `$and`, `$or`, `$not`, `$nor`

**Semana 04 · Operadores Lógicos y de Array**

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga los datos:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta e interactúa:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Colección de práctica: `courses`

12 cursos de programación con `title`, `category`, `level`, `price`, `rating`,
`enrolled`, `isPublished`, `tags`, `modules`, `scores` (array de notas).

---

### Paso 1: `$or` — Condiciones alternativas

```js
// Cursos frontend O con más de 1000 inscritos
db.courses.find({
  $or: [
    { category: "frontend" },
    { enrolled: { $gt: NumberInt(1000) } }
  ]
})
```

**Abre `starter/ejercicio.js`** y descomenta el Paso 1.

---

### Paso 2: AND implícito + `$or`

Puedes combinar condiciones de campo (AND implícito) con `$or`:

```js
// Publicados Y (backend O advanced)
db.courses.find({
  isPublished: true,
  $or: [{ category: "backend" }, { level: "advanced" }]
})
```

**Descomenta el Paso 2.**

---

### Paso 3: `$not` — Negación de expresión

`$not` niega la expresión de operador, no un valor directo:

```js
// Rating menor a 4.5 (negación de $gte: 4.5)
db.courses.find({ rating: { $not: { $gte: 4.5 } } })
```

**Descomenta el Paso 3.**

---

### Paso 4: `$nor` y `(A OR B) AND (C OR D)`

```js
// Ni devops NI sin publicar
db.courses.find({ $nor: [{ category: "devops" }, { isPublished: false }] })

// (database OR cloud) AND (beginner OR intermediate) — requiere $and explícito
db.courses.find({
  $and: [
    { $or: [{ category: "database" }, { category: "cloud" }] },
    { $or: [{ level: "beginner" }, { level: "intermediate" }] }
  ]
})
```

**Descomenta el Paso 4.**
