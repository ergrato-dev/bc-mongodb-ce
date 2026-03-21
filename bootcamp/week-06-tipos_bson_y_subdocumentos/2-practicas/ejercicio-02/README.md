# Ejercicio 02 — Subdocumentos y Dot Notation

Semana 06 · Tipos BSON y Subdocumentos

## Objetivo

Practicar el acceso y consulta de campos en subdocumentos anidados
usando dot notation, y aplicar `$elemMatch` para filtrar arrays
que contienen subdocumentos.

## Cómo ejecutar

1. Asegúrate de haber cargado los datos del ejercicio-01:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < ../ejercicio-01/starter/setup.js
   ```
2. Abre mongosh:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Paso 1: Dot notation — filtrar por campo de subdocumento

Usa `"campo.subcampo"` (con comillas) para acceder a campos anidados:

```js
db.employees.find(
  { "address.city": "Bogotá" },
  { name: 1, "address.city": 1, _id: 0 }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 1.

---

## Paso 2: Dot notation a 2 niveles

Para acceder a campos con 2 o más niveles de anidamiento,
encadena los nombres con puntos:

```js
db.employees.find(
  { "contact.phone.office": { $exists: true } },
  { name: 1, "contact.phone.office": 1, _id: 0 }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 2.

---

## Paso 3: Operadores con dot notation y $set anidado

Combina operadores de comparación con dot notation. Para actualizar
un campo anidado: `$set: { "subdoc.campo": valor }`:

```js
db.employees.updateOne(
  { name: "Sofía Vargas" },
  { $set: { "address.city": "Bogotá" } }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 3.

---

## Paso 4: $elemMatch en arrays de subdocumentos

Cuando el array contiene subdocumentos, `$elemMatch` garantiza que
las condiciones apliquen al mismo elemento del array:

```js
db.employees.find({
  projects: {
    $elemMatch: { status: "active", hoursLogged: { $gt: NumberInt(100) } }
  }
})
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 4.
