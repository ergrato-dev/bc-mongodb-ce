# 01. MongoClient — Conectar a MongoDB desde Node.js

> **Semana 23 · Etapa 2 · MongoDB 7.0**
> Referencia visual: `../0-assets/01-nodejs-architecture.svg`

## Objetivos

- Instalar y configurar el driver `mongodb` para Node.js
- Crear una conexión con `MongoClient` usando URI de conexión
- Obtener referencias a base de datos y colección

---

## 1. Instalación del Driver

```bash
npm install mongodb
# Versión recomendada: mongodb@6.x
```

---

## 2. URI de Conexión

```js
// URI con autenticación para el entorno Docker del bootcamp
const uri =
  "mongodb://bootcamp:bootcamp123@localhost:27017/bootcamp_db?authSource=admin"
```

La estructura del URI es:
```
mongodb://[usuario:password@]host:puerto/[database][?opciones]
```

---

## 3. Crear y Usar MongoClient

```js
const { MongoClient } = require("mongodb")

const client = new MongoClient(uri)

async function main() {
  try {
    await client.connect()

    // Obtener referencia a la BD y colección
    const db = client.db("bootcamp_db")
    const collection = db.collection("orders")

    // Usar la colección...
    const count = await collection.countDocuments()
    console.log("Total documentos:", count)

  } finally {
    // Siempre cerrar la conexión
    await client.close()
  }
}

main().catch(console.error)
```

---

## 4. Singleton de Conexión

En aplicaciones reales, el `MongoClient` se crea una sola vez y se reutiliza:

```js
// db.js — módulo de conexión
let client

async function getDb() {
  if (!client) {
    client = new MongoClient(uri)
    await client.connect()
  }
  return client.db("bootcamp_db")
}

module.exports = { getDb }
```

> La llamada a `client.connect()` es opcional en versiones recientes del driver — la primera operación establece la conexión automáticamente.

---

## Checklist

- [ ] ¿Qué información va en el URI de conexión de MongoDB?
- [ ] ¿Por qué se debe cerrar la conexión en un bloque `finally`?
- [ ] ¿Qué es el patrón singleton de conexión y para qué sirve?
- [ ] ¿Qué parámetro `authSource` hay que incluir en el URI?

## Referencias

- [MongoDB Node.js Driver](https://www.mongodb.com/docs/drivers/node/current/)
- [Connection String](https://www.mongodb.com/docs/manual/reference/connection-string/)
