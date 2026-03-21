# Ejercicio 02 — `$in`, `$nin`, `$exists`, `$type`

**Semana 03 · CRUD II — Operadores de Consulta**

## Cómo ejecutar

1. Asegúrate de haber ejecutado el `setup.js` del ejercicio-01 primero.
2. Carga los datos adicionales:
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

### Paso 1: `$in` — Pertenencia a lista

`$in` acepta un array de valores. El documento coincide si el campo tiene
**cualquiera** de esos valores:

```js
// Categorías seleccionadas
db.products.find({ category: { $in: ["monitors", "tablets"] } })
```

`$in` también funciona en **campos de tipo array**: si el campo es un array
y alguno de sus elementos coincide con la lista, el documento se incluye:

```js
db.products.find({ tags: { $in: ["usb-c", "wireless"] } })
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 1.

---

### Paso 2: `$nin` — Exclusión de lista

Complemento de `$in`. Incluye documentos donde el campo NO es ninguno de los valores:

```js
db.products.find({ category: { $nin: ["audio", "storage"] } })
```

**Descomenta la sección del Paso 2.**

---

### Paso 3: `$exists` — Campo presente o ausente

`$exists: true` — el campo existe en el documento (incluso si su valor es `null`).  
`$exists: false` — el campo no existe en absoluto.

```js
// Campo existe (puede ser null)
db.products.find({ discount: { $exists: true } })

// Campo con valor real (no null)
db.products.find({ discount: { $exists: true, $ne: null } })
```

**Descomenta la sección del Paso 3.**

---

### Paso 4: `$type` y Combinaciones

`$type` filtra por tipo BSON del campo, usando alias de string:

```js
db.products.find({ price: { $type: "decimal" } })
```

Combina `$in`, `$exists` y comparaciones en una sola query:

```js
db.products.find({
  category: { $in: ["accessories", "peripherals"] },
  tags: { $in: ["usb-c", "wireless"] },
  inStock: true,
  price: { $lt: Decimal128("60") }
})
```

**Descomenta la sección del Paso 4.**
