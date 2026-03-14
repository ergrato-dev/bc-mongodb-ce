# Semana 17 — Optimización de Rendimiento y Query Plans

## Descripción

Esta semana profundizamos en el análisis de rendimiento de consultas con `explain()`, la lectura de planes de ejecución, el uso de `hint()` para forzar índices específicos, y las estrategias para maximizar el rendimiento de los índices existentes.

## Objetivos de aprendizaje

- Interpretar los planes de ejecución con `explain("executionStats")`
- Distinguir entre `COLLSCAN`, `IXSCAN` e `IDHACK`
- Usar `hint()` para controlar el índice que MongoDB utiliza
- Identificar y optimizar consultas con índices de cobertura

## Distribución del tiempo

| Actividad | Tiempo |
|---|---|
| Teoría: explain() y planes de ejecución | 1.5 h |
| Teoría: hint() y optimización de índices | 1 h |
| Ejercicio 01: explain() paso a paso | 1.5 h |
| Ejercicio 02: hint() y covered queries | 1.5 h |
| Proyecto semanal | 2 h |
| **Total** | **7.5 h** |

## Contenido

```
week-17/
├── 0-assets/
│   ├── 01-explain-stages.svg
│   └── 02-query-plans.svg
├── 1-teoria/
│   ├── 01-explain-basics.md
│   ├── 02-execution-stats.md
│   ├── 03-hint-index-selection.md
│   └── 04-covered-queries.md
├── 2-practicas/
│   ├── ejercicio-01/   ← explain() y detección de COLLSCAN
│   └── ejercicio-02/   ← hint() y covered queries
├── 3-proyecto/
├── 4-recursos/
└── 5-glosario/
```

## Requisitos previos

- Semana 13: Índices compuestos, TTL, parciales
- Semana 14: Text e índices geoespaciales
- Conocimiento de `createIndex()` y `dropIndex()`

## Navegación

← [Semana 16 — Validación y Transacciones](../week-16/README.md)
→ [Semana 18 — Patrones de Esquema Adicionales](../week-18/README.md)
