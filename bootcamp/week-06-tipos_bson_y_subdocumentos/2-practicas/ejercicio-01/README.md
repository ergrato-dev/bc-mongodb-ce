# Ejercicio 01 — Tipos BSON: ObjectId, Date, Decimal128

Semana 06 · Tipos BSON y Subdocumentos

## Objetivo

Usar correctamente los tipos BSON principales (`ObjectId`, `Date`,
`Decimal128`, `NumberInt`, `Boolean`) en consultas reales sobre una
colección de empleados.

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   ```
2. Carga los datos:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Abre mongosh:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Paso 1: ObjectId — Identidad única y timestamp

El `_id` de cada documento es un `ObjectId`. Contiene la fecha de
creación embebida y se puede extraer con `.getTimestamp()`:

```js
const emp = db.employees.findOne({ name: "Isabela Ramos" })
print(emp._id.getTimestamp())
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 1.

---

## Paso 2: Date — Consultas por rango de fechas

Las fechas se comparan con operadores `$gte`, `$lte`, `$lt`.
Siempre usa `new Date("YYYY-MM-DD")` para construir el valor:

```js
db.employees.find({
  hireDate: { $gte: new Date("2022-01-01") }
})
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 2.

---

## Paso 3: Decimal128 — Filtros de montos

Para comparar campos `Decimal128`, usa el mismo constructor en el filtro:

```js
db.employees.find({ salary: { $gt: Decimal128("4500.00") } })
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 3.

---

## Paso 4: NumberInt y Boolean — Enteros y flags

Combina tipos para filtros precisos. Usa `$type` para verificar el
tipo almacenado en un campo:

```js
db.employees.find({
  isActive: true,
  age: { $lt: NumberInt(33) }
})
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 4.
