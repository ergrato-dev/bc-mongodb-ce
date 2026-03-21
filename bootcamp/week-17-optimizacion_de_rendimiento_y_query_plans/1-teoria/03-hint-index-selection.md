# hint() — Selección Manual de Índice

## Objetivos
1. Entender cuándo MongoDB puede elegir un índice subóptimo
2. Usar `hint()` para forzar el uso de un índice específico
3. Verificar el cambio de plan con `explain()`
4. Conocer los casos válidos de uso de `hint()`

---

## 1. El problema: índice subóptimo

Cuando existen múltiples índices, MongoDB evalúa planes candidatos y elige
el de menor costo estimado. Esta estimación puede ser incorrecta para
distribuciones de datos inusuales.

```js
// Índices existentes:
// 1. { status: 1 }
// 2. { status: 1, region: 1, amount: 1 }

// MongoDB puede elegir el índice simple aunque el compuesto sea mejor
db.sales.find({ status: "completed", region: "north" })
  .explain("executionStats")
// → winningPlan.indexName: "status_1"  ← posiblemente subóptimo
```

## 2. hint() — forzar un índice

```js
// Forzar el índice compuesto
db.sales.find({ status: "completed", region: "north" })
  .hint({ status: 1, region: 1, amount: 1 })
  .explain("executionStats")
// → winningPlan.indexName: "status_1_region_1_amount_1"
```

También se puede usar el nombre del índice como string:

```js
db.sales.find({ status: "completed" })
  .hint("status_1_region_1_amount_1")
```

## 3. Forzar COLLSCAN para pruebas

```js
// Forzar escaneo completo independientemente de índices
db.sales.find({ status: "completed" }).hint({ $natural: 1 })
```

## 4. Verificar el winningPlan

```js
const result = db.sales.find(
  { status: "completed", region: "north" }
).hint({ status: 1, region: 1 }).explain("executionStats")

// Verificar que el índice correcto fue usado
print(result.queryPlanner.winningPlan.inputStage.indexName)
```

## 5. Cuándo usar hint()

- Cuando `explain()` muestra que MongoDB eligió un índice ineficiente
- En consultas críticas de producción con distribución de datos sesgada
- Para pruebas de comparación entre dos índices candidatos

> `hint()` es una herramienta de diagnóstico y optimización explícita.
> En la mayoría de los casos, un buen diseño de índices elimina la necesidad de `hint()`.

## Checklist
- ¿Cuándo es necesario usar `hint()` en producción?
- ¿Cómo verificas con `explain()` que `hint()` cambió el índice usado?
- ¿Qué parámetro de `hint()` fuerza un `COLLSCAN`?
- ¿Por qué `hint()` no es siempre la solución correcta?

## Referencias
- [cursor.hint() — MongoDB Docs](https://www.mongodb.com/docs/manual/reference/method/cursor.hint/)
- [Index Selection](https://www.mongodb.com/docs/manual/core/query-plans/#index-filters)
