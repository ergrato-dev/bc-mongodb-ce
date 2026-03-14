# Semana 06 — Tipos BSON y Subdocumentos

## Descripción

Explora el sistema de tipos de MongoDB (BSON) y aprende a modelar
datos complejos con subdocumentos anidados y dot notation para
consultas precisas.

## Objetivos de Aprendizaje

- Identificar y usar correctamente los tipos BSON principales
- Consultar campos en subdocumentos con dot notation
- Modelar entidades con subdocumentos anidados
- Distinguir cuándo anidar vs referenciar datos

## Distribución del Tiempo (8h)

| Actividad       | Tiempo |
|-----------------|--------|
| Teoría          | 2h     |
| Prácticas       | 3.5h   |
| Proyecto        | 2.5h   |

## Contenido

### Teoría

1. [Tipos BSON: ObjectId, Date, Decimal128](1-teoria/01-tipos-bson.md)
2. [NumberInt, NumberLong y Boolean](1-teoria/02-tipos-numericos.md)
3. [Subdocumentos y dot notation](1-teoria/03-subdocumentos.md)
4. [Consultas en documentos anidados](1-teoria/04-consultas-anidadas.md)

### Assets

- [Mapa de tipos BSON](0-assets/01-bson-types.svg)
- [Modelo con subdocumentos](0-assets/02-subdocumentos.svg)
- [Dot notation en queries](0-assets/03-dot-notation.svg)
- [Modelos de datos: flat vs nested](0-assets/04-flat-vs-nested.svg)

### Prácticas

- [Ejercicio 01: Tipos BSON en documentos reales](2-practicas/ejercicio-01/README.md)
- [Ejercicio 02: Subdocumentos y dot notation](2-practicas/ejercicio-02/README.md)

### Proyecto

- [Proyecto Semana 06: Catálogo con datos enriquecidos](3-proyecto/README.md)

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga los datos:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < 2-practicas/ejercicio-01/starter/setup.js
   ```
3. Conecta:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

## Navegación

← [Semana 05](../week-05/README.md) | [Semana 07](../week-07/README.md) →
