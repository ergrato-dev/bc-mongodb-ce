# Semana 07 — Índices Básicos y explain()

## Descripción

Aprende a crear y gestionar índices en MongoDB para acelerar consultas,
y usa `explain()` para analizar si tus queries aprovechan los índices o
fuerzan un COLLSCAN innecesario.

## Objetivos de Aprendizaje

- Crear y eliminar índices simples con `createIndex()` y `dropIndex()`
- Analizar consultas con `explain("executionStats")`
- Distinguir entre COLLSCAN e IXSCAN en los planes de ejecución
- Aplicar índices únicos y en campos de arrays

## Distribución del Tiempo (8h)

| Actividad       | Tiempo |
|-----------------|--------|
| Teoría          | 2h     |
| Prácticas       | 3.5h   |
| Proyecto        | 2.5h   |

## Contenido

### Teoría

1. [¿Qué es un índice? Estructura B-Tree](1-teoria/01-que-es-indice.md)
2. [createIndex(), dropIndex(), getIndexes()](1-teoria/02-gestion-indices.md)
3. [explain() — Analizando planes de ejecución](1-teoria/03-explain.md)
4. [Índices únicos e índices en arrays](1-teoria/04-indices-especiales.md)

### Assets

- [Estructura B-Tree de un índice](0-assets/01-btree.svg)
- [COLLSCAN vs IXSCAN](0-assets/02-collscan-ixscan.svg)
- [explain() — Campos clave](0-assets/03-explain-stats.svg)
- [Tipos de índices simples](0-assets/04-tipos-indices.svg)

### Prácticas

- [Ejercicio 01: Crear índices y medir impacto](2-practicas/ejercicio-01/README.md)
- [Ejercicio 02: explain() y análisis de rendimiento](2-practicas/ejercicio-02/README.md)

### Proyecto

- [Proyecto Semana 07: Optimización de queries](3-proyecto/README.md)

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga los datos:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < 2-practicas/ejercicio-01/starter/setup.js
   ```
3. Conecta:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

## Navegación

← [Semana 06](../week-06/README.md) | [Semana 08](../week-08/README.md) →
