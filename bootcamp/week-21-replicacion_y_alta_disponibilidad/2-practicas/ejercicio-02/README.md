# Ejercicio 02 — writeConcern y readPreference

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
4. Copia y ejecuta cada sección de `starter/ejercicio.js`

---

## Pasos del Ejercicio

### Paso 1: writeConcern `{ w: 1 }` — Confirmación del Primary

`w:1` es el comportamiento por defecto. El Primary confirma que recibió la escritura. No espera que los Secondary la repliquen:

```js
db.shipments.insertOne(
  { shipmentId: "SHP-2001", origin: "Bucaramanga", destination: "Lima",
    status: "pending", weight: Decimal128("20.00"), createdAt: new Date() },
  { writeConcern: { w: 1 } }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 1.

---

### Paso 2: writeConcern `{ w: "majority" }` — Durabilidad en Mayoría

`w:"majority"` espera que la mayoría del Replica Set confirme la escritura. En nuestro `rs0` de un nodo, la mayoría de 1 es 1, por lo que funciona igual que `w:1`. En producción con 3 nodos, requeriría confirmación de 2 nodos:

```js
db.shipments.insertOne(
  { shipmentId: "SHP-2002", origin: "Barranquilla", destination: "São Paulo",
    status: "pending", weight: Decimal128("33.00"), createdAt: new Date() },
  { writeConcern: { w: "majority" } }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 2.

---

### Paso 3: readPreference `"secondaryPreferred"`

Lee desde un Secondary si hay uno disponible. En nuestro Docker con un solo nodo, cae automáticamente al Primary sin error — el comportamiento es correcto para producción multi-nodo:

```js
db.shipments.find(
  { status: "pending" },
  { shipmentId: 1, origin: 1, destination: 1, _id: 0 }
).readPref("secondaryPreferred")
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 3.

---

### Paso 4: writeConcern `{ w: 1, j: true }` — Journal en Disco

`j: true` instruye a MongoDB a esperar que la escritura sea registrada en el **journal** antes de confirmar. Esto garantiza que la operación sobrevive a un reinicio del servidor:

```js
db.shipments.insertOne(
  { shipmentId: "SHP-2003", origin: "Cartagena", destination: "Buenos Aires",
    status: "pending", weight: Decimal128("55.00"), createdAt: new Date() },
  { writeConcern: { w: 1, j: true } }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 4.
