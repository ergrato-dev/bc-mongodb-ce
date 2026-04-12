# Semana 20 — GridFS y Time Series Collections

## Descripción

Esta semana exploras dos capacidades especializadas de MongoDB: **GridFS** para
almacenar y recuperar archivos de gran tamaño, y **Time Series Collections** para
datos temporales de alta frecuencia como métricas, logs de sensores y telemetría.

## Objetivos de Aprendizaje

Al finalizar esta semana serás capaz de:

1. Entender cómo GridFS divide archivos en chunks y los almacena en dos colecciones
2. Subir, consultar y eliminar archivos con la API de GridFS en `mongosh`
3. Crear una Time Series collection con `timeField`, `metaField` y `granularity`
4. Insertar y consultar datos temporales aprovechando las optimizaciones nativas

## Distribución del Tiempo (8 horas)

| Actividad | Tiempo estimado |
|---|---|
| Teoría: GridFS (fs.files, fs.chunks, API) | 1.5 h |
| Teoría: Time Series collections | 1.0 h |
| Ejercicio 01: GridFS — upload, query, delete | 2.0 h |
| Ejercicio 02: Time Series — create, insert, aggregate | 2.0 h |
| Proyecto semanal integrador | 1.5 h |

## Temas de la Semana

### GridFS
- Límite de documento BSON: 16 MB — GridFS para archivos más grandes
- Colecciones internas: `fs.files` (metadata) y `fs.chunks` (datos en bloques de 255 KB)
- API: `db.fs.files`, bucket con `new GridFSBucket(db)`
- Operaciones: `uploadFromStream`, `downloadToStream`, `find`, `delete`
- Casos de uso: imágenes, PDFs, videos, backups, modelos ML

### Time Series Collections
- Tipo especial de colección optimizada para datos temporales
- Campos requeridos: `timeField` (timestamp), `metaField` (dimensión/etiqueta)
- `granularity`: `"seconds"`, `"minutes"`, `"hours"` — controla compresión interna
- `expireAfterSeconds`: TTL automático para datos de series de tiempo
- Aggregate: `$match` por tiempo + `$group` por `$dateTrunc` o `$dateToString`

## Estructura de la Semana

```
week-20-gridfs_y_time_series/
├── README.md
├── rubrica-evaluacion.md
├── 0-assets/
│   ├── 01-gridfs-architecture.svg
│   └── 02-timeseries-structure.svg
├── 1-teoria/
│   ├── 01-gridfs-overview.md
│   ├── 02-gridfs-operations.md
│   ├── 03-timeseries-create.md
│   └── 04-timeseries-aggregate.md
├── 2-practicas/
│   ├── ejercicio-01/   ← GridFS
│   └── ejercicio-02/   ← Time Series
├── 3-proyecto/
├── 4-recursos/
└── 5-glosario/
```

## Prerequisitos

- Semana 19 completada (Change Streams, Docker con replica set)
- Docker corriendo con `mongo:7.0`

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   ```
2. Conecta a `mongosh`:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

## Navegación

- ← [Semana 19 — Change Streams](../week-19-change_streams/README.md)
- → [Semana 21 — Replicación y Alta Disponibilidad](../week-21-replicacion_y_alta_disponibilidad/README.md)
