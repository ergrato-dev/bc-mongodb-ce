# Proyecto Semana 09 — Aggregation Pipeline en tu Dominio

## Objetivo

Aplicar `$match`, `$project`, `$group`, `$sort`, `$limit` y `$skip` sobre
la colección de tu dominio asignado para obtener resúmenes y análisis útiles.

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga los datos:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
4. Implementa los pipelines en `starter/proyecto.js`.

---

## Descripción

Tienes la colección de tu dominio asignado con al menos 15 documentos.
Debes implementar los pipelines de análisis que se describen abajo.

> **Adapta** los nombres de campos y colecciones a tu dominio.
>
> Ejemplos:
> - Biblioteca → analizar préstamos por género, miembros activos por mes
> - Farmacia → ventas por medicamento, stock mínimo por categoría
> - Restaurante → platos más pedidos, ingresos por mesa

---

## Pipelines requeridos

### Pipeline 1 — Filtro + Proyección

Obtén una vista resumida de los elementos activos de tu dominio,
mostrando solo los campos más relevantes, sin `_id`.

### Pipeline 2 — Top N con $sort + $limit

Encuentra los 5 elementos con mayor valor numérico (precio, cantidad,
calificación, etc.) de tu dominio.

### Pipeline 3 — Agrupación por categoría

Agrupa los documentos por una propiedad categórica (tipo, estado,
categoría) y calcula el conteo y un total numérico por grupo.

### Pipeline 4 — Resumen total

Calcula el total general de documentos, la suma de un campo numérico,
el promedio, el máximo y el mínimo usando `_id: null`.

### Pipeline 5 — Paginación

Implementa paginación (2 páginas de 5 elementos) ordenados por fecha
o valor numérico.

---

## Criterios de Evaluación

| Criterio | Peso |
|---|---|
| Datos del dominio (mínimo 15 docs, tipos BSON correctos) | 15% |
| Pipeline 1: $match + $project sin _id | 20% |
| Pipeline 2: top N con $sort + $limit | 15% |
| Pipeline 3: $group con $sum y $count | 25% |
| Pipeline 4: resumen total con _id: null | 15% |
| Comentarios explicativos en cada etapa | 10% |
