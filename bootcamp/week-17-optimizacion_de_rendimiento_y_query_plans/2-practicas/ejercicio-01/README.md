# Ejercicio 01 — explain() y COLLSCAN

## Objetivo

Identificar consultas ineficientes con `explain("executionStats")`, crear un índice
compuesto para resolverlas y verificar el cambio de `COLLSCAN` a `IXSCAN`.

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

### Paso 1: Identificar COLLSCAN sin índice

La colección `sales_perf` tiene registros de ventas con campos `status` y `region`.
Sin índice, cualquier consulta de filtrado realiza un `COLLSCAN`.

```js
db.sales_perf.find(
  { status: "completed", region: "north" }
).explain("executionStats")
```

Busca en la salida:
- `stage: "COLLSCAN"` → recorre toda la colección
- `totalDocsExamined` >> `nReturned` → ineficiente

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 1.

---

### Paso 2: Crear índice compuesto

Los campos `status` y `region` se usan juntos en los filtros más frecuentes.
Un índice compuesto cubre ambos simultáneamente.

```js
db.sales_perf.createIndex(
  { status: 1, region: 1 },
  { name: "sales_status_region" }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 2.

---

### Paso 3: Verificar IXSCAN después del índice

Ejecuta la misma query con `explain()` y compara los campos clave.

```js
db.sales_perf.find(
  { status: "completed", region: "north" }
).explain("executionStats")
```

Resultado esperado:
- `stage: "IXSCAN"` → usa el índice compuesto
- `totalDocsExamined` ≈ `nReturned` → eficiente
- `executionTimeMillis` significativamente menor

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 3.

---

### Paso 4: Inspeccionar estadísticas del índice

`$indexStats` muestra cuántas veces se usó cada índice desde el inicio del proceso.

```js
db.sales_perf.aggregate([
  { $indexStats: {} }
])
```

El índice `sales_status_region` debería mostrar accesos en `accesses.ops`.

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 4.
