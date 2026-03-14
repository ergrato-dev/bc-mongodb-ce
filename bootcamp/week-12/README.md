# Semana 12: Aggregation Pipeline III — `$facet`, `$bucket`, `$replaceRoot`, `$merge`

## Descripción

Esta semana expandes tu dominio del Aggregation Pipeline con cuatro etapas avanzadas
que permiten análisis multidimensional, agrupación por rangos, reestructuración de
documentos y persistencia de resultados.

## Objetivos

Al finalizar esta semana serás capaz de:

- Ejecutar múltiples pipelines en paralelo con `$facet`
- Agrupar documentos en rangos numéricos con `$bucket` y `$bucketAuto`
- Reestructurar la raíz de un documento con `$replaceRoot`
- Persistir resultados de un pipeline en una colección con `$merge` y `$out`

## Distribución del Tiempo (8 horas)

| Actividad          | Tiempo estimado |
| ------------------ | --------------- |
| Teoría             | 2 horas         |
| Prácticas          | 3 horas         |
| Proyecto           | 3 horas         |

## Estructura

```
week-12/
├── README.md
├── rubrica-evaluacion.md
├── 0-assets/              # Diagramas SVG
├── 1-teoria/              # Material teórico
│   ├── 01-facet.md
│   ├── 02-bucket.md
│   ├── 03-replaceroot.md
│   └── 04-merge-out.md
├── 2-practicas/
│   ├── ejercicio-01/      # $facet y $bucket
│   └── ejercicio-02/      # $replaceRoot y $merge
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

- [← Semana 11](../week-11/README.md) — $lookup y $unwind
- [→ Semana 13](../week-13/README.md) — Índices Avanzados
