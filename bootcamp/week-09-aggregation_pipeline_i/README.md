# Semana 09 — Aggregation Pipeline I

## ¿De qué trata esta semana?

La **Aggregation Pipeline** es el sistema de transformación de datos de MongoDB.
A diferencia de `find()`, permite encadenar etapas para filtrar, agrupar,
ordenar y proyectar documentos en una sola operación.

## Objetivos de Aprendizaje

1. Comprender el concepto de pipeline y etapas secuenciales
2. Usar `$match`, `$project`, `$sort`, `$limit` y `$skip` en pipelines
3. Agrupar documentos con `$group` y calcular totales simples
4. Comparar cuándo usar `find()` vs `aggregate()`

## Diagrama

![Pipeline de Agregación](0-assets/01-pipeline-flow.svg)

## Distribución del Tiempo

| Actividad | Tiempo estimado |
|---|---|
| Teoría: pipeline y etapas básicas | 2 h |
| Ejercicio 01: $match, $project, $sort | 1.5 h |
| Ejercicio 02: $group con acumuladores simples | 1.5 h |
| Proyecto semanal | 2 h |
| Revisión y entrega | 1 h |
| **Total** | **8 h** |

## Estructura

```
week-09-aggregation_pipeline_i/
├── README.md
├── rubrica-evaluacion.md
├── 0-assets/
│   ├── 01-pipeline-flow.svg
│   ├── 02-match-project.svg
│   ├── 03-group-stages.svg
│   └── 04-find-vs-aggregate.svg
├── 1-teoria/
│   ├── 01-que-es-pipeline.md
│   ├── 02-match-project.md
│   ├── 03-sort-limit-skip.md
│   └── 04-group.md
├── 2-practicas/
│   ├── ejercicio-01/
│   └── ejercicio-02/
├── 3-proyecto/
├── 4-recursos/
└── 5-glosario/
```

## Navegación

| | Enlace |
|---|---|
| ← Semana anterior | [Semana 08 — Proyecto Integrador](../week-08-proyecto_integrador_etapa_0/README.md) |
| → Semana siguiente | [Semana 10 — Aggregation Pipeline II](../week-10-aggregation_pipeline_ii_acumuladores_avanzados/README.md) |
| Inicio | [Bootcamp MongoDB](../../README.md) |
