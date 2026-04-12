# Ejercicio 01 — $lookup Básico

**Semana 11 — $lookup y $unwind**

## Objetivo

Aprender a unir dos colecciones con `$lookup` y aplanar el array
resultado con `$unwind` para acceder a los campos del documento unido.

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
     bootcamp_db --file /dev/stdin < bootcamp/week-11-lookup_y_unwind_joins/2-practicas/ejercicio-01/starter/setup.js
   ```
4. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Pasos del Ejercicio

### Paso 1: $lookup básico

`$lookup` une documentos de otra colección buscando coincidencias
entre `localField` (en la colección actual) y `foreignField` (en la remota).

```js
db.orders.aggregate([
  {
    $lookup: {
      from: "products",       // colección a unir
      localField: "productId", // campo en orders
      foreignField: "_id",     // campo en products
      as: "productInfo"        // nombre del array resultado
    }
  }
])
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 1.

---

### Paso 2: $lookup + $unwind

El resultado de `$lookup` es siempre un **array**. Para acceder a los
campos del documento unido directamente (sin corchetes), usa `$unwind`.

```js
db.orders.aggregate([
  { $lookup: { from: "products", localField: "productId",
               foreignField: "_id", as: "productInfo" } },
  { $unwind: "$productInfo" },
  // Ahora productInfo es un objeto: $productInfo.name, etc.
])
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 2.

---

### Paso 3: $lookup + $unwind + campo calculado

Tras `$unwind`, puedes usar `$addFields` para calcular nuevos campos
basados en datos de ambas colecciones.

```js
// Calcular el total del pedido usando precio del producto
{ $addFields: {
    orderTotal: { $multiply: [{ $toDouble: "$productInfo.price" }, "$quantity"] }
} }
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 3.

---

### Paso 4: $lookup + $unwind + $group

El patrón completo: join → aplanar → filtrar → agrupar → ordenar.

```js
db.orders.aggregate([
  { $lookup: { … } },
  { $unwind: "$productInfo" },
  { $match: { status: "completed" } },
  { $group: { _id: "$productInfo.category", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 4.

---

## ¿Qué deberías ver?

- **PASO 1**: 5 pedidos, cada uno con `productInfo: [{ ... }]` (array)
- **PASO 2**: 5 pedidos con `productInfo.name`, `productInfo.price` como campos directos
- **PASO 3**: Pedidos completados con `orderTotal` calculado
- **PASO 4**: 3 categorías con `totalOrders`, `totalRevenue`, `productsSold`

## Colecciones disponibles

- `db.orders.find()` — 10 pedidos con referencia `productId`
- `db.products.find()` — 6 productos con `_id` como string ("prod-001", …)
