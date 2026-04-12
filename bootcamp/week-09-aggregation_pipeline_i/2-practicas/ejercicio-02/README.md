# Ejercicio 02 — $group y Acumuladores

## Objetivo

Usar `$group` para agrupar documentos y calcular totales, promedios y
conteos con los acumuladores `$sum`, `$avg`, `$min` y `$max`.

## Colección

Usa la colección `sales` del ejercicio-01.

## Cómo ejecutar

1. Asegúrate de que los datos estén cargados (ver ejercicio-01).
2. Conéctate con:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
3. Abre `starter/ejercicio.js` y descomenta cada paso.

---

## Paso 1: Contar ventas por categoría

`$group` con `$sum: 1` cuenta los documentos de cada grupo:

```js
db.sales.aggregate([
  {
    $group: {
      _id: "$category",
      totalSales: { $sum: 1 }
    }
  }
])
```

**Abre `starter/ejercicio.js`** y descomenta el bloque del Paso 1.

---

## Paso 2: Sumar montos por ciudad

```js
db.sales.aggregate([
  { $match: { status: "completed" } },
  {
    $group: {
      _id: "$city",
      totalRevenue: { $sum: { $toDouble: "$amount" } },
      salesCount: { $sum: 1 }
    }
  }
])
```

> `$toDouble` convierte `Decimal128` a número para que `$sum` funcione.

**Abre `starter/ejercicio.js`** y descomenta el bloque del Paso 2.

---

## Paso 3: Promedio de rating por vendedor

Con `$avg` calculas el promedio del campo dentro de cada grupo:

```js
db.sales.aggregate([
  {
    $group: {
      _id: "$salesperson",
      avgRating: { $avg: "$rating" },
      totalSales: { $sum: 1 }
    }
  }
])
```

**Abre `starter/ejercicio.js`** y descomenta el bloque del Paso 3.

---

## Paso 4: Total general con `_id: null`

Cuando `_id` es `null`, todos los documentos forman un único grupo:

```js
db.sales.aggregate([
  {
    $group: {
      _id: null,
      grandTotal: { $sum: { $toDouble: "$amount" } },
      maxSale: { $max: { $toDouble: "$amount" } }
    }
  }
])
```

**Abre `starter/ejercicio.js`** y descomenta el bloque del Paso 4.

---

## Checklist de verificación

- [ ] ¿El Paso 1 muestra 3 grupos (electronics, accessories, furniture)?
- [ ] ¿El Paso 2 incluye solo ventas con status "completed"?
- [ ] ¿`avgRating` en el Paso 3 es un número decimal correcto?
- [ ] ¿El Paso 4 devuelve un único documento con el total general?

## Solución

Compara tu trabajo con `solution/ejercicio.js`.
