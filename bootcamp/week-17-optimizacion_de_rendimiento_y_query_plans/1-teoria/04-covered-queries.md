# Covered Queries — Máxima Eficiencia

## Objetivos
1. Definir qué es una covered query y por qué elimina `FETCH`
2. Construir índices y proyecciones que satisfagan una covered query
3. Verificar `totalDocsExamined: 0` en `explain()`
4. Aplicar covered queries a casos de uso de alto volumen

---

## 1. ¿Qué es una covered query?

Una covered query es aquella donde el índice contiene **todos** los campos
necesarios para responder la consulta — tanto el filtro como la proyección.
MongoDB no necesita acceder al documento completo.

```
Sin covered query:  IXSCAN → FETCH → resultado
Con covered query:  IXSCAN → resultado  (sin FETCH)
```

## 2. Condiciones para una covered query

1. Todos los campos del `$match` están en el índice
2. Todos los campos proyectados están en el índice
3. `_id` está excluido (`_id: 0`) o incluido en el índice

```js
// Índice compuesto
db.sales.createIndex({ status: 1, region: 1, amount: 1 })

// Covered query: filtro + proyección solo con campos del índice
db.sales.find(
  { status: "completed", region: "north" },
  { status: 1, region: 1, amount: 1, _id: 0 }
)
```

## 3. Verificación con explain()

```js
db.sales.find(
  { status: "completed" },
  { status: 1, region: 1, amount: 1, _id: 0 }
).explain("executionStats")

// Resultado esperado:
{
  nReturned: 47,
  totalKeysExamined: 47,
  totalDocsExamined: 0   // ← sin acceso al documento
}
```

## 4. Casos de uso ideales

- Dashboards con métricas agregadas de muchos documentos
- APIs que devuelven solo un subconjunto de campos de una colección grande
- Consultas de validación de existencia (`{ field: value }` con proyección mínima)

## 5. Error común: olvidar `_id: 0`

```js
// ❌ No es covered: _id se incluye por defecto y no está en el índice
db.sales.find({ status: "completed" }, { status: 1, region: 1 })

// ✅ Sí es covered: _id excluido explícitamente
db.sales.find({ status: "completed" }, { status: 1, region: 1, _id: 0 })
```

## Checklist
- ¿Qué stage desaparece del plan cuando una query es covered?
- ¿Por qué es necesario incluir `_id: 0` en la proyección?
- ¿Qué valor tiene `totalDocsExamined` en una covered query exitosa?
- ¿Qué campo del índice debe coincidir con el filtro Y con la proyección?

## Referencias
- [Covered Query — MongoDB Docs](https://www.mongodb.com/docs/manual/core/query-optimization/#covered-query)
- [Projection and Indexes](https://www.mongodb.com/docs/manual/tutorial/optimize-query-performance-with-indexes-and-projections/)
