# Índices TTL — Expiración Automática de Documentos

## Objetivos

- Crear índices TTL para eliminar documentos automáticamente
- Configurar el tiempo de expiración con `expireAfterSeconds`
- Entender las restricciones y casos de uso del TTL

## Diagrama

![Índices TTL](../0-assets/02-ttl-indexes.svg)

## 1. ¿Qué es un índice TTL?

TTL (Time To Live) es un índice especial en un campo de tipo `Date` que
MongoDB usa para **eliminar documentos automáticamente** después de cierto tiempo:

```js
// Crear sesiones que expiran en 30 minutos (1800 segundos)
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 1800 }
)

// Insertar una sesión — se creará y borrará automáticamente
db.sessions.insertOne({
  userId: "user-123",
  token: "abc456",
  createdAt: new Date()   // TTL empieza a contar desde aquí
})
```

MongoDB ejecuta el proceso de limpieza cada **60 segundos** (no en tiempo exacto).

## 2. TTL con fecha de expiración exacta

Fijando `expireAfterSeconds: 0`, el TTL usa el valor del campo como
**fecha exacta de expiración**:

```js
db.notifications.createIndex(
  { expiresAt: 1 },
  { expireAfterSeconds: 0 }
)

// El documento se borra cuando expiresAt sea pasado
db.notifications.insertOne({
  message: "Tu suscripción vence pronto",
  userId: "user-42",
  expiresAt: new Date("2024-12-31")   // fecha exacta de expiración
})
```

## 3. Restricciones importantes

- Solo funciona con campos de tipo `Date`
- No se puede crear en campos de arrays con múltiples fechas (usa solo el primero)
- No se puede combinar con índices únicos (`unique: true`)
- No es compatible con `Capped Collections`

## 4. Casos de uso típicos

- Sesiones de usuario (`sessions`)
- Tokens de autenticación temporales
- Logs o eventos de auditoría con retención limitada
- Caché de datos calculados
- Notificaciones con fecha de vencimiento

## Checklist

- ¿Cada cuánto tiempo MongoDB limpia los documentos TTL expirados?
- ¿Qué tipo de campo debe ser el campo indexado con TTL?
- ¿Cuál es la diferencia entre TTL con `expireAfterSeconds: 1800` vs `expireAfterSeconds: 0`?
- ¿Puedes combinar TTL con un índice único?

## Referencias

- [TTL Indexes — MongoDB Docs](https://www.mongodb.com/docs/manual/core/index-ttl/)
- [Expire Data from Collections — MongoDB Docs](https://www.mongodb.com/docs/manual/tutorial/expire-data/)
