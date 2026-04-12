# Ejercicio 02 — hint() y Covered Queries

## Objetivo

Dominar el uso de `hint()` para forzar un índice específico y construir
covered queries que logran `totalDocsExamined: 0`.

## Prerequisito

Ejecutar primero el `setup.js` del **ejercicio-01** para tener la colección
`sales_perf` con datos.

## Cómo ejecutar

1. Carga los índices adicionales:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
2. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

### Paso 1: Verificar qué índice elige MongoDB

Con múltiples índices disponibles, MongoDB puede elegir uno subóptimo.
Inspecciona el campo `winningPlan` para descubrir cuál usó.

```js
db.sales_perf.find(
  { status: "completed", region: "north" }
).explain("executionStats")
```

Busca: `queryPlanner.winningPlan.inputStage.indexName`

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 1.

---

### Paso 2: Forzar índice con hint()

Si el índice elegido no es el más completo, `hint()` permite forzar otro.

```js
db.sales_perf.find(
  { status: "completed", region: "north" }
).hint({ status: 1, region: 1, amount: 1 })
  .explain("executionStats")
```

El `indexName` en el `winningPlan` debe cambiar a `"sales_covered_idx"`.

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 2.

---

### Paso 3: Construir una covered query

Para que sea covered, la proyección debe contener **solo** los campos del índice
y excluir `_id` explícitamente.

```js
db.sales_perf.find(
  { status: "completed" },
  { status: 1, region: 1, amount: 1, _id: 0 }
).hint({ status: 1, region: 1, amount: 1 })
  .explain("executionStats")
```

Verifica: `totalDocsExamined: 0` en los `executionStats`.

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 3.

---

### Paso 4: Confirmar sin hint()

La covered query bien definida debería funcionar sin `hint()` si el índice
es el más selectivo para esa combinación de filtro + proyección.

```js
db.sales_perf.find(
  { status: "completed" },
  { status: 1, region: 1, amount: 1, _id: 0 }
).explain("executionStats")
```

Si `totalDocsExamined: 0` → MongoDB eligió el índice correcto automáticamente.

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 4.
