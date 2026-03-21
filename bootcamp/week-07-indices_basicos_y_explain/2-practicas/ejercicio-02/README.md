# Ejercicio 02 — explain(): Diagnóstico y Optimización de Queries

## Objetivo

Usar `explain("executionStats")` para detectar queries lentas (COLLSCAN),
crear los índices apropiados y verificar la mejora de rendimiento.

## Colección

Usa la colección `listings` del ejercicio-01. No es necesario recargar datos.

## Cómo ejecutar

1. Asegúrate de que el contenedor está corriendo:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Conéctate a `mongosh`:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
3. Abre `starter/ejercicio.js` y descomenta cada sección en orden.

---

## Paso 1: Restablecer — sin índices adicionales

Elimina los índices creados en el ejercicio anterior para observar el
comportamiento sin índices:

```js
db.listings.dropIndexes()
```

---

## Paso 2: Detectar queries lentas

Con `explain("executionStats")` puedes ver cómo MongoDB ejecuta una query.
Presta atención a `winningPlan.stage` y `totalDocsExamined`:

```js
// Query sin índice — COLLSCAN: revisa todos los documentos
db.listings.find({ type: "apartment" }).explain("executionStats")
```

Campos clave en la respuesta:

| Campo | Qué indica |
|---|---|
| `winningPlan.stage` | `COLLSCAN` = sin índice |
| `totalDocsExamined` | Documentos leídos por MongoDB |
| `nReturned` | Documentos que cumplieron el filtro |
| `executionTimeMillis` | Tiempo total de ejecución |

Cuando `totalDocsExamined >> nReturned`, hay oportunidad de crear un índice.

**Abre `starter/ejercicio.js`** y descomenta el bloque del Paso 2.

---

## Paso 3: Crear índices y re-analizar

Crea el índice en el campo con COLLSCAN y ejecuta `explain()` nuevamente:

```js
db.listings.createIndex({ type: 1 })
db.listings.find({ type: "apartment" }).explain("executionStats")
```

Con el índice, `winningPlan.stage` cambia a `IXSCAN` y `totalDocsExamined`
se reduce drasticamente.

**Abre `starter/ejercicio.js`** y descomenta el bloque del Paso 3.

---

## Paso 4: Interpretar y comparar resultados

Compara los valores antes y después del índice para cada query:

```
Sin índice: stage=COLLSCAN, totalDocsExamined=50, nReturned=17
Con índice: stage=IXSCAN,   totalDocsExamined=17, nReturned=17
```

**Abre `starter/ejercicio.js`** y descomenta el bloque del Paso 4.

---

## Checklist de verificación

- [ ] ¿Qué valor tiene `winningPlan.stage` antes y después de crear el índice?
- [ ] ¿La diferencia entre `totalDocsExamined` y `nReturned` bajó después del índice?
- [ ] ¿Cambió `executionTimeMillis` con el índice?
- [ ] ¿Cuántos índices tiene ahora la colección según `getIndexes()`?

## Solución

Compara tu trabajo con `solution/ejercicio.js`.
