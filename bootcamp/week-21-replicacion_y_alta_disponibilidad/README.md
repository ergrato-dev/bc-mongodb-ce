# Semana 21 — Replicación y Alta Disponibilidad

## Descripción

Esta semana exploras **Replica Sets** en MongoDB: cómo funcionan las elecciones de
primario, cómo configurar preferencias de lectura, y qué son `writeConcern` y
`readConcern` para controlar la consistencia y durabilidad de las operaciones.

## Objetivos de Aprendizaje

1. Entender la arquitectura de un Replica Set y el rol de cada nodo
2. Comprender el proceso de elección de primario y cómo `priority` lo controla
3. Configurar `readPreference` para distribuir carga de lectura
4. Usar `writeConcern` y `readConcern` para controlar consistencia y durabilidad

## Distribución del Tiempo (8 horas)

| Actividad | Tiempo estimado |
|---|---|
| Teoría: Arquitectura de Replica Sets | 1.5 h |
| Teoría: readPreference, writeConcern, readConcern | 1.5 h |
| Ejercicio 01: Explorar el Replica Set en Docker | 2.0 h |
| Ejercicio 02: readPreference y writeConcern en acción | 2.0 h |
| Proyecto semanal integrador | 1.0 h |

## Temas de la Semana

### Replica Sets
- Nodos: Primary (lectura/escritura), Secondary (replica), Arbiter (solo voto)
- Oplog: `local.oplog.rs` — registro de todas las operaciones de replicación
- Elecciones: mayoría de votos, `priority`, `votes`, heartbeat cada 2 segundos
- `rs.status()`, `rs.conf()`, `rs.isMaster()` — comandos de administración

### Read Preference & Write/Read Concern
- `readPreference`: `primary`, `primaryPreferred`, `secondary`, `secondaryPreferred`, `nearest`
- `writeConcern`: `{ w: 1 }`, `{ w: "majority" }`, `{ w: 0, j: false }`
- `readConcern`: `"local"`, `"majority"`, `"linearizable"`
- Tradeoffs: disponibilidad vs consistencia vs latencia

## Estructura de la Semana

```
week-21-replicacion_y_alta_disponibilidad/
├── README.md
├── rubrica-evaluacion.md
├── 0-assets/
│   ├── 01-replica-set-architecture.svg
│   └── 02-election-write-concerns.svg
├── 1-teoria/
│   ├── 01-replica-set-overview.md
│   ├── 02-elections-oplog.md
│   ├── 03-read-preference.md
│   └── 04-write-read-concern.md
├── 2-practicas/
│   ├── ejercicio-01/   ← Explorar Replica Set
│   └── ejercicio-02/   ← readPreference y writeConcern
├── 3-proyecto/
├── 4-recursos/
└── 5-glosario/
```

## Prerequisitos

- Semana 20 completada
- Docker corriendo con replica set activo (`--replSet rs0`)

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Conecta a `mongosh`:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

## Navegación

- ← [Semana 20 — GridFS y Time Series](../week-20-gridfs_y_time_series/README.md)
- → [Semana 22 — Seguridad y Administración](../week-22-seguridad_y_administracion/README.md)
