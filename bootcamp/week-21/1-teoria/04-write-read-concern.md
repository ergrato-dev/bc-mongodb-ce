# 04. writeConcern y readConcern

> **Semana 21 · Etapa 2 · MongoDB 7.0**
> Referencia visual: `../0-assets/02-election-write-concerns.svg`

## Objetivos

- Configurar `writeConcern` para controlar la durabilidad de escrituras
- Aplicar `readConcern` para controlar el nivel de consistencia en lecturas
- Balancear el tradeoff entre rendimiento y durabilidad

---

## 1. writeConcern — Cuántos Nodos Deben Confirmar

```js
// w:1 — solo el Primary confirma (default)
db.orders.insertOne(
  { total: 250, status: "new" },
  { writeConcern: { w: 1 } }
)

// w:"majority" — la mayoría del set confirma (recomendado en producción)
db.orders.insertOne(
  { total: 250, status: "new" },
  { writeConcern: { w: "majority" } }
)

// w:0 — sin confirmación (fire and forget — máxima velocidad, sin durabilidad)
db.logs.insertOne(
  { event: "page_view", ts: new Date() },
  { writeConcern: { w: 0 } }
)
```

El campo `j: true` instruye a MongoDB a esperar que la escritura sea **guardada en el journal de disco**:

```js
db.payments.insertOne(
  { amount: 500 },
  { writeConcern: { w: "majority", j: true } }
)
```

---

## 2. readConcern — Qué Versión Leer

| Nivel | Descripción | Uso |
|-------|-------------|-----|
| `"local"` | Último dato del Primary (default) | Lecturas rápidas normales |
| `"majority"` | Solo datos confirmados por mayoría | Evitar leer datos que pueden ser revertidos |
| `"linearizable"` | Más fuerte: espera acknowledgement de todos — alta latencia | Operaciones críticas single-doc |
| `"snapshot"` | Vista consistente al inicio de transacción | Dentro de transacciones multi-documento |

```js
// Leer solo datos confirmados por la mayoría del Replica Set
db.orders.find(
  { status: "paid" },
  { readConcern: { level: "majority" } }
)
```

---

## 3. Tradeoff: Durabilidad vs Rendimiento

```
Mayor durabilidad ←——————————————————————→ Mayor rendimiento
  w:"majority"  w:1  w:0 (fire and forget)
  j:true        j:false
  readConcern:  readConcern:
  "linearizable"  "local"
```

> Para **aplicaciones financieras**: `w:"majority", j:true, readConcern:"majority"`
> Para **logs o métricas**: `w:0` o `w:1` sin journal

---

## Checklist

- [ ] ¿Qué diferencia hay entre `w:1` y `w:"majority"`?
- [ ] ¿Para qué sirve el campo `j: true` en `writeConcern`?
- [ ] ¿En qué caso usarías `readConcern: "majority"`?
- [ ] ¿Cuál es el tradeoff al usar `writeConcern: { w: 0 }`?

## Referencias

- [Write Concern](https://www.mongodb.com/docs/manual/reference/write-concern/)
- [Read Concern](https://www.mongodb.com/docs/manual/reference/read-concern/)
