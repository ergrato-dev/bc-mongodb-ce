# 03. Connection Pool y Buenas Prácticas

> **Semana 23 · Etapa 2 · MongoDB 7.0**

## Objetivos

- Entender qué es la connection pool y por qué importa
- Configurar `maxPoolSize` correctamente
- Identificar los antipatrones más comunes al usar el driver

---

## 1. ¿Qué es la Connection Pool?

El driver Node.js mantiene un **pool de conexiones TCP** abiertas con MongoDB. En lugar de abrir y cerrar una conexión por operación, el driver reutiliza las conexiones del pool — esto reduce latencia y carga en el servidor.

```js
const client = new MongoClient(uri, {
  maxPoolSize: 10,      // máximo de conexiones simultáneas (default: 10)
  minPoolSize: 2,       // mínimo a mantener abiertas
  connectTimeoutMS: 5000  // timeout de conexión inicial
})
```

---

## 2. Crear el Cliente una Vez

```js
// ✅ BIEN — cliente creado una vez, reutilizado en toda la app
const client = new MongoClient(uri)
await client.connect()
// ... usar client.db() en múltiples funciones

// ❌ MAL — nueva conexión por cada operación
async function getUser(id) {
  const client = new MongoClient(uri)  // ← no hacer esto
  await client.connect()
  // ...
  await client.close()
}
```

---

## 3. Cerrar la Conexión Correctamente

```js
async function main() {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    // ... operaciones
  } catch (err) {
    console.error("Error de MongoDB:", err)
    throw err
  } finally {
    await client.close()  // se ejecuta siempre, incluso si hay error
  }
}
```

---

## 4. Antipatrones a Evitar

| Antipatrón | Problema | Corrección |
|------------|----------|------------|
| Nueva conexión por request | Agota conexiones disponibles | Usar cliente singleton |
| No cerrar conexiones | Conexiones huérfanas | Usar `finally` |
| `maxPoolSize` muy bajo | Cuellos de botella bajo carga | Ajustar según concurrencia |
| URI hardcodeado en código | Credenciales expuestas | Usar variables de entorno |

---

## Checklist

- [ ] ¿Para qué sirve `maxPoolSize`?
- [ ] ¿Dónde se debe crear la instancia de `MongoClient` en una aplicación?
- [ ] ¿Por qué se usa `finally` para cerrar la conexión?
- [ ] ¿Cómo se debe almacenar el URI de conexión en producción?

## Referencias

- [Connection Pool — Node.js Driver](https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connection-options/)
