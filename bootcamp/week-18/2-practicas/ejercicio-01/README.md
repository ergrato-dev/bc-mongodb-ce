# Ejercicio 01 — Polymorphic + Attribute

## Objetivo

Modelar entidades heterogéneas en una colección mediante el patrón Polymorphic
e implementar atributos variables con el patrón Attribute y un índice multikey.

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

### Paso 1: Polymorphic — queries unificadas

La colección `vehicles` contiene autos, camiones y motocicletas en un solo lugar.
El campo `vehicleType` es el discriminador.

```js
// Todos los vehículos disponibles bajo $25,000
db.vehicles.find(
  { isAvailable: true, price: { $lt: Decimal128("25000.00") } },
  { vehicleType: 1, make: 1, model: 1, price: 1, _id: 0 }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 1.

---

### Paso 2: Índice en colección polimórfica

Un índice compuesto en `{vehicleType, price}` permite filtrar eficientemente
por tipo y precio. Un índice sparse en `payloadTons` solo indexa trucks.

```js
db.vehicles.createIndex({ vehicleType: 1, price: 1 })
db.vehicles.createIndex({ payloadTons: 1 }, { sparse: true })
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 2.

---

### Paso 3: Attribute — índice multikey

La colección `products_attr` usa un array `attrs: [{k, v}]`. Un solo índice
compuesto sobre `attrs.k` y `attrs.v` cubre **todos** los atributos posibles.

```js
db.products_attr.createIndex({ "attrs.k": 1, "attrs.v": 1 })
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 3.

---

### Paso 4: Consultar atributos con $elemMatch

`$elemMatch` garantiza que `k` y `v` pertenezcan al **mismo elemento** del array.

```js
db.products_attr.find({
  attrs: { $elemMatch: { k: "waterproof", v: true } }
})
```

Verifica con `explain()` que usa el índice multikey (IXSCAN).

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 4.
