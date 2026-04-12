# Ejercicio 01 — $set, $unset, $inc, $mul

Semana 05 · CRUD III — Actualización y Eliminación

## Objetivo

Practicar los operadores de actualización de campos escalares:
modifica, elimina e incrementa valores en documentos existentes
usando `$set`, `$unset`, `$inc` y `$mul`.

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   ```
2. Carga los datos de prueba:
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
4. Copia y ejecuta las queries de `starter/ejercicio.js` descomentando
   cada sección.

---

## Paso 1: $set — Modificar y agregar campos

`$set` actualiza los campos indicados y agrega los que no existen,
sin tocar el resto del documento:

```js
db.inventory.updateOne(
  { name: "USB-C Hub" },
  {
    $set: {
      price: Decimal128("29.99"),
      updatedAt: new Date(),
      featured: true
    }
  }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 1.

---

## Paso 2: $unset — Eliminar campos

`$unset` borra el campo del documento. El valor asignado (`""`) no importa:

```js
db.inventory.updateMany(
  { category: "accessories" },
  { $unset: { discount: "" } }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 2.

---

## Paso 3: $inc — Incrementar valores atómicamente

`$inc` suma (o resta con negativo) al valor actual del campo.
Es atómico: seguro en entornos con múltiples usuarios concurrentes.

```js
// Reducir stock tras una venta
db.inventory.updateOne(
  { name: "Wireless Mouse" },
  { $inc: { stock: NumberInt(-5) } }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 3.

---

## Paso 4: $mul — Aplicar factor multiplicador

`$mul` multiplica el campo por el factor dado. Útil para descuentos
o aumentos de precio en masa:

```js
db.inventory.updateMany(
  { category: "audio" },
  { $mul: { price: Decimal128("0.8") } }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 4.

---

## Verificación final

```js
// Confirma los cambios aplicados
db.inventory.find({}, { name: 1, price: 1, stock: 1, rating: 1, _id: 0 })
```
