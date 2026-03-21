# Ejercicio 01 — createIndex(), getIndexes(), dropIndex()

Semana 07 · Índices Básicos y explain()

## Objetivo

Crear, listar y eliminar índices simples, y observar el cambio de
COLLSCAN a IXSCAN en los planes de ejecución usando `explain()`.

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga los datos:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Abre mongosh:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Paso 1: Estado inicial — sin índice (COLLSCAN)

Observa los índices existentes y el comportamiento sin índice:

```js
db.listings.getIndexes()
db.listings.find({ city: "Bogotá" }).explain("executionStats")
// Busca: stage: "COLLSCAN" en el resultado
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 1.

---

## Paso 2: Crear índice y verificar IXSCAN

Crea el índice y vuelve a ejecutar explain para confirmar el cambio:

```js
db.listings.createIndex({ city: 1 })
db.listings.find({ city: "Bogotá" }).explain("executionStats")
// Ahora busca: stage: "IXSCAN"
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 2.

---

## Paso 3: Índice en subdocumento y array (multikey)

MongoDB indexa automáticamente cada elemento del array cuando el campo
indexado es un array:

```js
db.listings.createIndex({ "host.email": 1 })  // dot notation
db.listings.createIndex({ amenities: 1 })     // multikey automático
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 3.

---

## Paso 4: Índice único y dropIndex()

Elimina índices por nombre o por definición del campo:

```js
db.listings.dropIndex("host.email_1")
db.listings.createIndex(
  { "host.email": 1 },
  { unique: true, name: "listings_host_email_unique" }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 4.
