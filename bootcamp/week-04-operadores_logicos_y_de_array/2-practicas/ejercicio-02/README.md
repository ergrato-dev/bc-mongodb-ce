# Ejercicio 02 — `$elemMatch`, `$all`, `$size`

**Semana 04 · Operadores Lógicos y de Array**

## Cómo ejecutar

Usa la misma colección `courses` del ejercicio-01. Si ya la tienes cargada, conecta directamente:

```bash
docker compose -f _scripts/docker-compose.yml exec mongodb \
  mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
```

---

### Paso 1: `$all` — Todos los tags deben estar presentes

```js
// Solo cursos que tienen "api" Y "backend" en su array tags
db.courses.find({ tags: { $all: ["api", "backend"] } })
```

**Abre `starter/ejercicio.js`** y descomenta el Paso 1.

---

### Paso 2: `$elemMatch` vs `$in` en arrays

`$in` busca si **algún elemento** está en la lista de valores.  
`$elemMatch` exige que **un mismo elemento** cumpla **todas** las condiciones:

```js
// $elemMatch: el elemento debe ser > 85 Y < 92 (mismo elemento)
db.courses.find({ scores: { $elemMatch: { $gt: 85, $lt: 92 } } })

// $in: ¿score = 88 OR score = 91? (distintos elementos pueden cumplirlo)
db.courses.find({ scores: { $in: [88, 91] } })
```

**Descomenta el Paso 2.**

---

### Paso 3: `$size` — Tamaño exacto del array

```js
// Cursos con exactamente 3 elementos en scores
db.courses.find({ scores: { $size: 3 } })
```

**Descomenta el Paso 3.**

---

### Paso 4: Combinación

Mezcla operadores lógicos con operadores de array:

```js
db.courses.find({
  isPublished: true,
  tags: { $in: ["database"] },
  scores: { $elemMatch: { $gt: 90 } }
})
```

**Descomenta el Paso 4.**
