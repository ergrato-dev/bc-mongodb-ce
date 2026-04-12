# Ejercicio 02 — $unwind sobre Arrays y $lookup Avanzado

**Semana 11 — $lookup y $unwind**

## Objetivo

Practicar `$unwind` sobre arrays embebidos en documentos y usar la
forma avanzada de `$lookup` con `pipeline` para filtrar durante el join.

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
     bootcamp_db --file /dev/stdin < bootcamp/week-11-lookup_y_unwind_joins/2-practicas/ejercicio-02/starter/setup.js
   ```
4. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Pasos del Ejercicio

### Paso 1: $unwind sobre array de items

Cada pedido en `orders_multi` tiene un campo `items` que es un array
con varios productos. `$unwind` crea un documento por cada ítem.

```js
db.orders_multi.aggregate([
  { $unwind: "$items" },
  { $project: { orderId: 1, "items.name": 1, "items.qty": 1 } }
])
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 1.

---

### Paso 2: $unwind + $group — ventas por producto

Después de `$unwind`, cada documento tiene un solo item.
Agrupa para obtener el total vendido de cada producto.

```js
db.orders_multi.aggregate([
  { $match: { status: "completed" } },
  { $unwind: "$items" },
  { $group: { _id: "$items.productId", total: { $sum: "$items.qty" } } }
])
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 2.

---

### Paso 3: $lookup con pipeline — join con filtro

La forma avanzada de `$lookup` con `let` y `pipeline` permite filtrar
los documentos de la colección remota durante el join.

```js
$lookup: {
  from: "customers",
  let: { cid: "$customerId" },   // variable local
  pipeline: [
    { $match: { $expr: {
        $and: [
          { $eq: ["$$cid", "$_id"] },     // condition: match ID
          { $eq: ["$isActive", true] }     // condition: only active
        ]
    }}}
  ],
  as: "customer"
}
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 3.

---

### Paso 4: Pipeline complejo — doble $unwind

Este paso encadena `$lookup` → `$unwind(customer)` → `$unwind(items)` → `$group`.
El doble `$unwind` es necesario cuando quieres agrupar por información
del cliente _y_ por cada ítem del pedido.

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 4.

---

## ¿Qué deberías ver?

- **PASO 1**: Pedidos expandidos — 1 doc por item (total ~12 docs de 6 pedidos)
- **PASO 2**: 5 productos con `totalQuantity` y `totalRevenue`
- **PASO 3**: Solo pedidos de clientes activos (Miguel Torres excluido)
- **PASO 4**: 2-3 clientes con `totalSpent` y `orderCount`

## Colecciones disponibles

- `db.customers.find()` — 4 clientes (1 inactivo: Miguel Torres)
- `db.orders_multi.find()` — 6 pedidos, cada uno con array `items`
