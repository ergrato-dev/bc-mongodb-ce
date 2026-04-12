# Semana 19 — Change Streams

## Descripción

Aprende a escuchar cambios en tiempo real en colecciones, bases de datos
y despliegues de MongoDB con Change Streams. Domina los eventos de cambio,
pipelines de filtrado y tokens de reanudación.

## Objetivos

1. Abrir un change stream sobre una colección con `watch()`
2. Filtrar eventos de cambio con un aggregation pipeline
3. Usar resume tokens para reanudar un stream interrumpido
4. Identificar casos de uso reales de Change Streams

## Distribución del tiempo (8h)

| Actividad | Tiempo |
|---|---|
| Teoría (4 archivos) | 2 h |
| Ejercicio 01 — watch() y operationTypes | 2 h |
| Ejercicio 02 — Pipeline + Resume Token | 2 h |
| Proyecto integrador | 2 h |

## Contenido

```
week-19-change_streams/
├── README.md
├── rubrica-evaluacion.md
├── 0-assets/
│   ├── 01-change-stream-flow.svg
│   └── 02-resume-token.svg
├── 1-teoria/
│   ├── 01-watch-basics.md
│   ├── 02-operation-types.md
│   ├── 03-pipeline-filtering.md
│   └── 04-resume-tokens.md
├── 2-practicas/
│   ├── ejercicio-01/
│   └── ejercicio-02/
├── 3-proyecto/
├── 4-recursos/
└── 5-glosario/
```

## Prerequisito

Change Streams requiere **Replica Set** o **Sharded Cluster**.
Para la práctica, usa el entorno Docker configurado con replica set:

```bash
docker compose -f scripts/docker-compose.yml up -d
```

> El `docker-compose.yml` del bootcamp inicia MongoDB con `--replSet rs0`.

## Navegación

← [Semana 18 — Patrones de Esquema Avanzados II](../week-18-patrones_de_esquema_avanzados_ii/README.md)
→ [Semana 20 — GridFS y Time-Series](../week-20-gridfs_y_time_series/README.md)
