# 04. Manejo de Errores en el Driver Node.js

> **Semana 23 · Etapa 2 · MongoDB 7.0**

## Objetivos

- Capturar y clasificar errores de MongoDB en Node.js
- Distinguir errores de conexión de errores de operación
- Implementar reintentos básicos para errores transitorios

---

## 1. Tipos de Errores

```js
const { MongoNetworkError, MongoServerError } = require("mongodb")

try {
  await collection.insertOne({ name: "test" })
} catch (err) {
  if (err instanceof MongoNetworkError) {
    // No se pudo conectar al servidor
    console.error("Error de red:", err.message)
  } else if (err instanceof MongoServerError) {
    // El servidor rechazó la operación (ej: validación, llave duplicada)
    console.error("Error del servidor — código:", err.code, err.message)
  } else {
    throw err  // Error inesperado — re-lanzar
  }
}
```

---

## 2. Códigos de Error Comunes

| Código | Nombre | Causa típica |
|--------|--------|--------------|
| 11000 | DuplicateKey | Insert en campo con índice único que ya existe |
| 121 | DocumentValidationFailure | $jsonSchema rechazó el documento |
| 13 | Unauthorized | Usuario sin permiso para la operación |
| 26 | NamespaceNotFound | Colección o BD inexistente |

---

## 3. Patrón Completo con Errores

```js
async function createUser(userData) {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const col = client.db("bootcamp_db").collection("users")
    const result = await col.insertOne(userData)
    return result.insertedId
  } catch (err) {
    if (err.code === 11000) {
      throw new Error("El email ya está registrado")
    }
    throw err
  } finally {
    await client.close()
  }
}
```

---

## 4. Variables de Entorno para el URI

```js
// ✅ Nunca hardcodear credenciales en el código
const uri = process.env.MONGODB_URI
  || "mongodb://bootcamp:bootcamp123@localhost:27017/bootcamp_db?authSource=admin"

// En producción: crear archivo .env (no versionar)
// MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
```

---

## Checklist

- [ ] ¿Qué diferencia hay entre `MongoNetworkError` y `MongoServerError`?
- [ ] ¿Qué código de error devuelve MongoDB al violar un índice único?
- [ ] ¿Cómo se evita hardcodear credenciales en el código?
- [ ] ¿Qué se debe hacer con errores desconocidos en el `catch`?

## Referencias

- [Error Handling — Node.js Driver](https://www.mongodb.com/docs/drivers/node/current/fundamentals/error/)
- [MongoServerError codes](https://www.mongodb.com/docs/manual/reference/error-codes/)
