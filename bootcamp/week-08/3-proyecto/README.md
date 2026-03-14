# Proyecto Integrador — Etapa 0

## Objetivo

Diseñar e implementar un sistema completo de gestión de datos para tu
**dominio asignado**, aplicando todos los conceptos aprendidos en las
semanas 01–07.

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta e interactúa:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
4. Implementa las tareas en `starter/proyecto.js`.

---

## Descripción

Este es el proyecto final de la **Etapa 0** del bootcamp. Debes construir
el modelo de datos completo de tu dominio asignado, que incluya:

- Al menos **2 colecciones** relacionadas
- Mínimo **15 documentos** en la colección principal
- Uso correcto de tipos BSON: `ObjectId`, `Date`, `Decimal128`, `NumberInt`
- Subdocumentos embebidos en al menos una colección
- Al menos un campo de tipo array

> **Dominios de ejemplo** (no uses los dominios de otros aprendices):
> - Biblioteca → `books`, `members`, `loans`
> - Farmacia → `medicines`, `sales`, `inventory`
> - Restaurante → `dishes`, `tables`, `orders`

---

## Requisitos

### Sección 1 — Diseño del esquema

- [ ] 2 colecciones con campos descriptivos y tipos BSON correctos
- [ ] Al menos una relación entre colecciones (via `ObjectId`)
- [ ] Al menos un subdocumento embebido
- [ ] Al menos un campo de array

### Sección 2 — Operaciones CRUD

- [ ] `insertOne()` e `insertMany()` para cargar datos
- [ ] `find()` con proyecciones, `.sort()`, `.limit()`, `.skip()`
- [ ] Al menos 4 operadores distintos en queries
- [ ] `updateOne()` o `updateMany()` con `$set`, `$inc` o `$push`
- [ ] `deleteOne()` o `deleteMany()` con filtro justificado

### Sección 3 — Índices y optimización

- [ ] Mínimo 2 índices creados con comentario explicando por qué
- [ ] `explain("executionStats")` antes y después de al menos un índice
- [ ] Comparación COLLSCAN → IXSCAN documentada en comentarios

---

## Entregables

- `starter/setup.js` — colecciones y datos del dominio asignado
- `starter/proyecto.js` — CRUD completo + índices + análisis

---

## Criterios de Evaluación

Ver [rúbrica de evaluación](../rubrica-evaluacion.md) para el desglose de puntajes.
