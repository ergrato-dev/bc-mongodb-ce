# Checklist de Producción y Arquitectura Final

> MongoDB 7.0 — Semana 24

## Objetivos

- Identificar los puntos críticos antes de ir a producción con MongoDB
- Aplicar la lista de verificación en el proyecto capstone
- Conocer los siguientes pasos de aprendizaje post-bootcamp

## 1. Connection Pool y cliente singleton

```js
// db.js — singleton reutilizable en toda la app
import { MongoClient } from "mongodb"

let client
export async function getDb() {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI, {
      maxPoolSize: 10,
      connectTimeoutMS: 5000,
      serverSelectionTimeoutMS: 5000
    })
    await client.connect()
  }
  return client.db(process.env.DB_NAME)
}
```

## 2. Variables de entorno

```js
// ❌ NUNCA hardcodear credenciales
const uri = "mongodb://bootcamp:bootcamp123@localhost:27017/..."

// ✅ Usar variables de entorno
const uri = process.env.MONGODB_URI
```

Usa `.env` con `dotenv` o las variables de entorno del sistema.

## 3. Checklist antes de producción

| Área              | Verificación                                                  |
|-------------------|---------------------------------------------------------------|
| Conexión          | `maxPoolSize` configurado, singleton pattern implementado     |
| Índices           | Todas las queries de `find()` y `$match` tienen índice        |
| Errores           | `try/catch` en todas las operaciones, `finally` con `.close()`|
| Seguridad         | URI en variables de entorno, usuario con rol mínimo           |
| Esquema           | `$jsonSchema` en colecciones críticas                         |
| Backup            | `mongodump` programado, retención definida                    |
| Monitoreo         | `db.serverStatus()`, alertas de opcounters y connections      |

## 4. Hoja de ruta post-bootcamp

- **MongoDB Atlas**: deploy en la nube con M0 (free tier)
- **Atlas Search**: full-text search avanzado con Lucene
- **Atlas Triggers**: funciones serverless en respuesta a cambios
- **Mongoose (Node.js)**: ODM para esquemas declarativos
- **Certificación**: MongoDB Associate Developer (Python o Node.js)

## Checklist

1. ¿Dónde deben almacenarse las credenciales de MongoDB en producción?
2. ¿Qué opción de `MongoClient` define el máximo de conexiones simultáneas?
3. ¿Qué herramienta usarías para buscar un `COLLSCAN` en producción?
4. ¿Qué es Atlas y cómo se diferencia de MongoDB CE?

## Referencias

- https://www.mongodb.com/docs/manual/administration/production-checklist-operations/
- https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/
