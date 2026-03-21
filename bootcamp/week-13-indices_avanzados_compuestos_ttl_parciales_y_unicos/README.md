# Semana 13: Índices Avanzados — Compuestos, TTL, Parciales y Únicos

## Descripción

Esta semana profundizas en el sistema de índices de MongoDB: aprenderás a crear
índices compuestos, índices con expiración automática (TTL), índices parciales y
únicos para optimizar consultas y garantizar la integridad de los datos.

## Objetivos

Al finalizar esta semana serás capaz de:

- Crear y utilizar índices compuestos respetando el orden ESR
- Configurar índices TTL para datos con expiración automática
- Definir índices parciales que indexan solo un subconjunto de documentos
- Garantizar unicidad con índices únicos y sparse

## Distribución del Tiempo (8 horas)

| Actividad    | Tiempo estimado |
| ------------ | --------------- |
| Teoría       | 2 horas         |
| Prácticas    | 3 horas         |
| Proyecto     | 3 horas         |

## Estructura

```
week-13-indices_avanzados_compuestos_ttl_parciales_y_unicos/
├── README.md
├── rubrica-evaluacion.md
├── 0-assets/              # Diagramas SVG
├── 1-teoria/
│   ├── 01-compound-indexes.md
│   ├── 02-ttl-indexes.md
│   ├── 03-partial-indexes.md
│   └── 04-unique-sparse.md
├── 2-practicas/
│   ├── ejercicio-01/      # Índices compuestos y ESR
│   └── ejercicio-02/      # TTL, parciales y únicos
├── 3-proyecto/
├── 4-recursos/
└── 5-glosario/
```

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
3. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < 2-practicas/ejercicio-01/starter/setup.js
   ```
4. Conecta e interactúa:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

## Navegación

- [← Semana 12](../week-12-aggregation_pipeline_iii_facet_bucket_replaceroot_merge/README.md) — Aggregation Pipeline III
- [→ Semana 14](../week-14-indices_de_texto_y_geoespaciales/README.md) — Índices de Texto y Geoespaciales
