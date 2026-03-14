# executionStats — Interpretando Métricas

## Objetivos
1. Leer e interpretar los campos de `executionStats`
2. Calcular la eficiencia de una consulta con ratios simples
3. Identificar consultas lentas por `executionTimeMillis` alto
4. Reconocer índices efectivos vs ineficientes por sus métricas

---

## 1. Campos de executionStats

```js
db.sales.find({ status: "completed", region: "north" })
  .explain("executionStats")
```

Salida relevante:

```js
{
  executionStats: {
    executionSuccess: true,
    nReturned: 12,
    executionTimeMillis: 45,
    totalKeysExamined: 12,
    totalDocsExamined: 12,
    executionStages: {
      stage: "IXSCAN",
      nReturned: 12,
      keysExamined: 12,
      docsExamined: 12,
      indexName: "status_1_region_1"
    }
  }
}
```

## 2. Ratios de eficiencia

**Ratio de selectividad**:
```
totalDocsExamined / nReturned
```
- `= 1` → ideal: cada doc examinado fue devuelto
- `> 10` → revisar si existe un índice más selectivo
- `= 10000 / 12` → consulta sin índice adecuado

**Ratio de índice**:
```
totalKeysExamined / nReturned
```
- `= 1` → índice muy selectivo
- `>> 1` → el índice existe pero no es el más óptimo

## 3. Señales de alerta

| Señal | Diagnóstico |
|---|---|
| `stage: "COLLSCAN"` | No hay índice para este filtro |
| `totalDocsExamined >> nReturned` | Índice poco selectivo o inexistente |
| `executionTimeMillis > 100` | Posible COLLSCAN o dataset muy grande |
| `stage: "SORT"` sin índice | Ordenamiento en memoria — costoso |

## 4. Ejemplo comparativo

```js
// Antes del índice
{ nReturned: 12, totalDocsExamined: 5000, executionTimeMillis: 67 }

// Después de: db.sales.createIndex({ status: 1, region: 1 })
{ nReturned: 12, totalDocsExamined: 12, executionTimeMillis: 1 }
```

## 5. executionStages anidadas

En consultas con índice + fetch, los stages se anidan:

```js
executionStages: {
  stage: "FETCH",          // recupera doc completo
  inputStage: {
    stage: "IXSCAN",       // primero busca en el índice
    indexName: "status_1"
  }
}
```

> `FETCH` aparece cuando la proyección incluye campos fuera del índice.
> Una covered query elimina `FETCH` por completo.

## Checklist
- ¿Qué ratio indica que un índice es altamente selectivo?
- ¿Qué diferencia hay entre `keysExamined` y `docsExamined` en los stages?
- ¿Cuándo aparece el stage `FETCH` y cuándo puede eliminarse?
- ¿Qué valor de `totalDocsExamined` indica una covered query?

## Referencias
- [Analyze Query Performance](https://www.mongodb.com/docs/manual/tutorial/analyze-query-plan/)
- [executionStats Output Fields](https://www.mongodb.com/docs/manual/reference/explain-results/)
