# Proyecto Semanal — Semana 10

**Aggregation Pipeline II — Acumuladores y Transformaciones Avanzadas**

## Objetivo

Construir pipelines de agregación que combinen acumuladores avanzados
(`$first`, `$last`, `$push`, `$addToSet`) con transformaciones condicionales
(`$addFields`, `$cond`, `$ifNull`) sobre el dominio asignado.

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Levanta el contenedor:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   ```
3. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < bootcamp/week-10-aggregation_pipeline_ii_acumuladores_avanzados/3-proyecto/starter/setup.js
   ```
4. Conecta e implementa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Instrucciones

Adapta el proyecto a tu dominio asignado. Los ejemplos genéricos usan
`transactions` y `agents` — renombra según corresponda.

**Ejemplos de adaptación:**

| Dominio | Colección principal | Campo de monto | Campo de agrupación |
|---------|-------------------|----------------|---------------------|
| Biblioteca | `loans` | `fine` | `member` |
| Farmacia | `sales` | `total` | `pharmacist` |
| Gimnasio | `sessions` | `fee` | `trainer` |
| Restaurante | `orders` | `amount` | `waiter` |

---

## Requisitos del Proyecto

Implementa los siguientes **5 pipelines** en `starter/proyecto.js`:

### Pipeline 1 — Enriquecimiento con $addFields

Agrega al menos 2 campos calculados usando `$addFields`:
- Un campo numérico calculado (ej: valor total = precio × cantidad)
- Un campo de clasificación usando `$cond` (ej: nivel del ítem)

### Pipeline 2 — Manejo de datos faltantes con $ifNull

Identifica documentos con campos potencialmente nulos o ausentes
y normaliza esos valores con `$ifNull` para garantizar datos consistentes.

### Pipeline 3 — Acumuladores: $push y $addToSet

Agrupa los documentos por una categoría relevante de tu dominio y genera:
- Un array con **todos** los ítems del grupo (`$push`)
- Un array con los valores **únicos** de otro campo (`$addToSet`)

### Pipeline 4 — Acumuladores: $first y $last

Agrupa por una categoría y obtén el primer y último registro
de cada grupo según una fecha relevante de tu dominio.

### Pipeline 5 — Pipeline complejo (4+ etapas)

Combina al menos 4 etapas encadenadas:
`$addFields` → `$match` → `$group` → `$sort`

El pipeline debe responder una pregunta de negocio real de tu dominio,
por ejemplo: ¿Cuáles son los grupos de mayor ingreso en ventas completadas?

---

## Criterios de Evaluación

- ✅ Scripts ejecutan sin errores en MongoDB 7.0
- ✅ `$addFields` preserva los campos originales del documento
- ✅ `$cond` clasifica correctamente según la condición definida
- ✅ `$ifNull` maneja documentos con campos ausentes
- ✅ `$push` y `$addToSet` producen arrays (con y sin duplicados)
- ✅ `$first` y `$last` son precedidos por `$sort` para determinismo
- ✅ El pipeline complejo responde una pregunta de negocio clara
- ✅ Comentarios explican el propósito de cada etapa del pipeline
