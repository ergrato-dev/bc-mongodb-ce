# Semana 11 — $lookup y $unwind: Joins en MongoDB

## Descripción

MongoDB no es una base de datos relacional, pero el Aggregation Pipeline
permite combinar datos de múltiples colecciones usando `$lookup` (join) y
descomponer arrays con `$unwind`.

## Objetivos de Aprendizaje

- Realizar joins entre colecciones con `$lookup`
- Descomponer arrays de documentos embebidos con `$unwind`
- Combinar `$lookup` + `$unwind` + `$group` en pipelines complejos
- Comprender las diferencias entre Embed y Reference en consultas reales

## Distribución del Tiempo (8 horas)

| Actividad | Tiempo |
|-----------|--------|
| Teoría (`1-teoria/`) | 2 horas |
| Práctica 01 — $lookup básico | 1.5 horas |
| Práctica 02 — $unwind + joins complejos | 1.5 horas |
| Proyecto integrador | 2 horas |
| Revisión y glosario | 1 hora |

## Contenido

```
week-11-lookup_y_unwind_joins/
├── README.md
├── rubrica-evaluacion.md
├── 0-assets/
│   ├── 01-lookup-flow.svg
│   ├── 02-unwind-stages.svg
│   ├── 03-lookup-pipeline.svg
│   └── 04-embed-vs-reference.svg
├── 1-teoria/
│   ├── 01-lookup-basico.md
│   ├── 02-unwind.md
│   ├── 03-lookup-pipeline.md
│   └── 04-embed-vs-reference.md
├── 2-practicas/
│   ├── ejercicio-01/   ← $lookup básico
│   └── ejercicio-02/   ← $unwind + joins complejos
├── 3-proyecto/
├── 4-recursos/
└── 5-glosario/
```

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
     bootcamp_db --file /dev/stdin < bootcamp/week-11-lookup_y_unwind_joins/2-practicas/ejercicio-01/starter/setup.js
   ```
4. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

## Navegación

- ← [Semana 10 — Aggregation Pipeline II](../week-10-aggregation_pipeline_ii_acumuladores_avanzados/README.md)
- → [Semana 12 — Aggregation Pipeline III](../week-12-aggregation_pipeline_iii_facet_bucket_replaceroot_merge/README.md)
