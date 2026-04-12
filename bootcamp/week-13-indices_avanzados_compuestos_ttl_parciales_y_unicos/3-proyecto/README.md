# Proyecto Semanal — Semana 13: Índices Avanzados

## Descripción

Aplica índices compuestos (ESR), TTL, parciales y únicos sobre las
colecciones de tu dominio asignado para optimizar consultas frecuentes
y garantizar la integridad de los datos.

## Diagrama de referencia

Revisa todos los diagramas de esta semana:

- [Índices Compuestos](../0-assets/01-compound-indexes.svg)
- [Índices TTL](../0-assets/02-ttl-indexes.svg)
- [Índices Parciales](../0-assets/03-partial-indexes.svg)
- [Índice Único y Covered Query](../0-assets/04-unique-covered.svg)

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
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
4. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Requisitos del proyecto

Implementa los siguientes tipos de índice sobre las colecciones
de tu dominio:

### TODO 1 — Índice compuesto con regla ESR

Identifica una query frecuente en tu dominio que filtre por igualdad,
ordene resultados, y use un rango. Crea el índice en orden ESR y
verifica con `explain("executionStats")` que usa IXSCAN.

### TODO 2 — Índice TTL

Identifica una colección en tu dominio que tenga datos temporales
(sesiones, eventos, logs, notificaciones, reservas temporales).
Crea un índice TTL apropiado.

### TODO 3 — Índice parcial

Identifica un campo boolean de estado en tu dominio (activo/inactivo,
disponible/no disponible, publicado/borrador). Crea un índice parcial
que solo indexe los documentos "activos" o "relevantes".

### TODO 4 — Índice único

Identifica un campo que debe ser único en tu dominio (código de producto,
número de documento, matrícula, ISBN, placa). Crea el índice único y
demuestra que lanza E11000 al intentar duplicarlo.

---

## Criterios de evaluación

| Criterio                                        | Puntos |
|-------------------------------------------------|--------|
| Índice compuesto con ESR aplicado correctamente | 25 pts |
| TTL funcional en colección de datos temporales  | 25 pts |
| Índice parcial con condición correcta           | 25 pts |
| Índice único con demostración de error E11000   | 25 pts |

---

## Nota para el aprendiz

Adapta las colecciones del `setup.js` a tu dominio asignado.
Los nombres de ejemplo son genéricos — reemplázalos con los de tu dominio.
