# Resume Tokens — Reanudación de Streams

## Objetivos
1. Entender qué es el resume token y dónde se almacena
2. Reanudar un Change Stream desde un evento específico con `resumeAfter`
3. Distinguir `resumeAfter`, `startAfter` y `startAtOperationTime`
4. Persistir tokens correctamente para recuperación ante fallos

---

## 1. Qué es el resume token

Cada evento de un Change Stream tiene un campo `_id` que actúa como **resume token**:

```js
const cs = db.orders.watch()
const evt = cs.next()

// evt._id es el resume token — no lo modifiques
printjson(evt._id)
// Ejemplo:
// {
//   "_data": "826839A12F000000012B042C0100296E5A1004..."
// }
```

El token es un valor opaco generado por el oplog. Guárdalo tal cual.

## 2. resumeAfter — reanudar desde un token

Permite reabrir un stream y recibir eventos desde justo después del token:

```js
// Guardar el token
const savedToken = evt._id

// Reabrir el stream desde ese punto
const cs2 = db.orders.watch([], {
  resumeAfter: savedToken
})

// El próximo evt será el evento que vino DESPUÉS del token guardado
const nextEvt = cs2.next()
```

## 3. startAfter vs resumeAfter

```js
// resumeAfter: funciona para cualquier evento excepto invalidate
const cs = db.orders.watch([], { resumeAfter: savedToken })

// startAfter: puede reanudar incluso después de un evento invalidate
const cs2 = db.orders.watch([], { startAfter: savedToken })
```

> En la mayoría de casos, `resumeAfter` es suficiente. Usa `startAfter` si el stream
> fue invalidado por un drop o rename y necesitas continuar.

## 4. startAtOperationTime

Reanuda el stream desde un timestamp de reloj, no desde un token:

```js
const cs = db.orders.watch([], {
  startAtOperationTime: new Timestamp(1700000000, 1)
})
```

Útil cuando no tienes un token guardado pero sí sabes la hora del último evento procesado.

## 5. Persistir el token

La mejor práctica es guardar el token en una colección MongoDB:

```js
const cs = db.orders.watch()

while (cs.hasNext()) {
  const evt = cs.next()

  // Procesar el evento
  procesarEvento(evt)

  // Persistir el token para recuperación
  db.stream_tokens.updateOne(
    { streamName: "orders_stream" },
    { $set: { token: evt._id, savedAt: new Date() } },
    { upsert: true }
  )
}
```

Al reiniciar la aplicación, leer el token y reanudar:

```js
const tokenDoc = db.stream_tokens.findOne({ streamName: "orders_stream" })

const cs = db.orders.watch([], {
  resumeAfter: tokenDoc ? tokenDoc.token : undefined
})
```

> El token es válido mientras esté dentro de la ventana del oplog (por defecto ~24 horas).

## Checklist
- ¿En qué campo del evento se encuentra el resume token?
- ¿Cuál es la diferencia práctica entre `resumeAfter` y `startAfter`?
- ¿Por qué es importante persistir el token en almacenamiento durable?
- ¿Qué ocurre si usas un token más antiguo que la ventana del oplog?

## Referencias
- [Resume a Change Stream](https://www.mongodb.com/docs/manual/changeStreams/#resume-a-change-stream)
- [Resume Token](https://www.mongodb.com/docs/manual/reference/change-events/#resume-token)
