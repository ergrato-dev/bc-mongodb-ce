# 📋 Plan Curricular — Bootcamp MongoDB CE de Cero a Héroe

**Duración**: 24 semanas (~6 meses)  
**Dedicación**: 8 horas semanales  
**Total**: ~192 horas  
**Nivel de entrada**: Cero (sin experiencia previa en bases de datos NoSQL)  
**Nivel de salida**: MongoDB Developer Junior / Backend Developer Junior  
**Motor único**: MongoDB 7.0 Community Edition vía Docker (semanas 1–24)

---

## Etapa 0 — Fundamentos de MongoDB · Semanas 1–8 · 64h

| Semana | Título                                | Temas clave                                                                        | Horas |
| ------ | ------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| 01     | Introducción a MongoDB y NoSQL        | SQL vs NoSQL, documentos/colecciones/BSON, Docker setup, primeras queries `find()` | 8h    |
| 02     | CRUD I — Inserción y Lectura          | `insertOne()`, `insertMany()`, `find()`, `findOne()`, proyecciones, cursor methods | 8h    |
| 03     | CRUD II — Operadores de Consulta      | `$eq`, `$ne`, `$gt`, `$lt`, `$gte`, `$lte`, `$in`, `$nin`, `$exists`, `$type`     | 8h    |
| 04     | Operadores Lógicos y Arrays           | `$and`, `$or`, `$not`, `$nor`, `$elemMatch`, `$all`, `$size`                       | 8h    |
| 05     | CRUD III — Actualización y Eliminación| `updateOne()`, `updateMany()`, `$set`, `$unset`, `$inc`, `$push`, `$pull`, `$addToSet`, `deleteOne()` | 8h |
| 06     | Tipos BSON y Subdocumentos            | `ObjectId`, `Date`, `Decimal128`, `NumberInt`, dot notation, queries en subdocumentos | 8h  |
| 07     | Índices Básicos y explain()           | `createIndex()`, `dropIndex()`, `getIndexes()`, `explain()`, COLLSCAN vs IXSCAN    | 8h    |
| 08     | Proyecto Integrador Etapa 0           | Esquema completo, CRUD + operadores + subdocumentos + índices simples               | 8h    |

---

## Etapa 1 — MongoDB Intermedio · Semanas 9–16 · 64h

| Semana | Título                                | Temas clave                                                                                      | Horas |
| ------ | ------------------------------------- | ------------------------------------------------------------------------------------------------ | ----- |
| 09     | Aggregation Pipeline I                | `$match`, `$project`, `$group`, `$sort`, `$limit`, `$skip`, orden de stages                      | 8h    |
| 10     | Aggregation Pipeline II — Acumuladores| `$sum`, `$avg`, `$min`, `$max`, `$count`, `$first`, `$last`, expresiones aritméticas             | 8h    |
| 11     | `$lookup` y `$unwind`                 | Joins entre colecciones, `$lookup` simple y con pipeline, `$unwind` preserveNullAndEmptyArrays   | 8h    |
| 12     | Aggregation Pipeline III — Avanzado   | `$addFields`, `$replaceRoot`, `$facet`, `$bucket`, `$bucketAuto`, pipelines anidados             | 8h    |
| 13     | Índices Avanzados                     | Índices compuestos, multikey, TTL, sparse, únicos, índices parciales                             | 8h    |
| 14     | Índices de Texto y Geoespaciales      | `$text`, `$search`, índices `2dsphere`, `$near`, `$geoWithin`, `$geoIntersects`                  | 8h    |
| 15     | Modelado de Datos                     | Embed vs. Reference, patrones Bucket, Outlier, Computed, Extended Reference, cardinalidades      | 8h    |
| 16     | Validación y Transacciones            | `$jsonSchema`, `collMod validator`, transacciones multi-documento, sesiones, `withTransaction()`  | 8h    |

---

## Etapa 2 — MongoDB Avanzado · Semanas 17–24 · 64h

| Semana | Título                                | Temas clave                                                                                           | Horas |
| ------ | ------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----- |
| 17     | Optimización de Rendimiento           | `explain("executionStats")`, índices de cobertura, selectividad, covered queries, `hint()`            | 8h    |
| 18     | Patrones de Esquema Avanzados         | Schema Versioning, Subset, Approximation, Tree Structures, Anti-patterns comunes                      | 8h    |
| 19     | Change Streams                        | `watch()`, pipeline de filtros, eventos de cambio, casos de uso en tiempo real                        | 8h    |
| 20     | GridFS y Colecciones Time-Series      | GridFS upload/download, metadatos de archivos, `timeseries` collections, granularidad, compresión     | 8h    |
| 21     | Replicación y Alta Disponibilidad     | Replica Sets, elecciones, read/write concerns, `readPreference`, failover, `rs.status()`              | 8h    |
| 22     | Seguridad y Administración            | Autenticación, RBAC, roles personalizados, `mongodump`/`mongorestore`, monitoreo con `mongostat`      | 8h    |
| 23     | MongoDB con Aplicaciones              | Driver Node.js / Python, connection pooling, manejo de errores, time-series analytics, Atlas Search   | 8h    |
| 24     | Proyecto Final — Capstone             | Esquema completo con patrones avanzados, pipelines, índices, transacciones, seguridad y documentación | 8h    |

---

## Resumen de Distribución del Tiempo por Semana

| Actividad  | Horas/semana |
| ---------- | ------------ |
| Teoría     | 2–2.5h       |
| Prácticas  | 3–3.5h       |
| Proyecto   | 2–2.5h       |
| **Total**  | **8h**       |

---

## Motor Único: MongoDB 7.0 vía Docker

A diferencia de bootcamps SQL (que migran de SQLite a PostgreSQL), este bootcamp
usa **MongoDB 7.0 Community Edition vía Docker desde la semana 1**. Esto garantiza:

| Etapa   | Semanas | Motor                               |
| ------- | ------- | ----------------------------------- |
| Etapa 0 | 1–8     | MongoDB 7.0 CE vía Docker           |
| Etapa 1 | 9–16    | MongoDB 7.0 CE vía Docker           |
| Etapa 2 | 17–24   | MongoDB 7.0 CE vía Docker           |

> ⚠️ Docker es obligatorio desde la **semana 1**. Asegúrate de tenerlo instalado
> antes de comenzar el bootcamp.

---

## Progresión de Habilidades

```
Semana 01–04  →  Leer y filtrar documentos
Semana 05–06  →  Escribir, actualizar y eliminar documentos
Semana 07–08  →  Indexar y analizar rendimiento básico
Semana 09–12  →  Construir pipelines de agregación
Semana 13–14  →  Dominar índices avanzados
Semana 15–16  →  Diseñar esquemas y validar datos
Semana 17–18  →  Optimizar rendimiento y aplicar patrones
Semana 19–20  →  Tiempo real, archivos y series temporales
Semana 21–22  →  Alta disponibilidad y seguridad
Semana 23–24  →  Integración con aplicaciones y Capstone
```

---

_Última actualización: Marzo 2026_
