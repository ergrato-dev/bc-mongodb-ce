# Proyecto Semana 06 — Catálogo con Datos Enriquecidos

Semana 06 · Tipos BSON y Subdocumentos

## Descripción

Construye un catálogo de entidades de tu dominio usando tipos BSON
correctos y subdocumentos anidados para modelar datos complejos.

> **Adapta este proyecto a tu dominio asignado.**
> Usa las colecciones y campos de las entidades de tu dominio.

## Objetivo

Demostrar capacidad de diseñar documentos con tipos BSON apropiados
y consultar subdocumentos usando dot notation.

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   ```
2. Carga los datos:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Implementa las queries en `starter/proyecto.js`.

## Requerimientos

### Esquema (30 pts)
1. Crea una colección con al menos 10 documentos
2. Cada documento debe incluir:
   - Un campo `Date` (fecha de creación, registro, compra, etc.)
   - Un campo `Decimal128` (precio, monto, costo)
   - Al menos un subdocumento con 3 o más campos (dirección, contacto, etc.)
   - Un array con al menos 2 elementos

### Consultas con dot notation (40 pts)
3. Filtra documentos por un campo dentro del subdocumento
4. Usa dot notation para proyectar solo 2 campos del subdocumento
5. Combina dot notation con un operador de comparación (`$gte`, `$lt`)
6. Actualiza un campo dentro del subdocumento con `$set` y dot notation

### Consultas avanzadas (30 pts)
7. Busca documentos donde el array contenga un elemento específico
8. Usa `$elemMatch` si el array contiene subdocumentos con múltiples condiciones
9. Verifica tipos almacenados con `$type` en al menos 2 campos

## Criterios de evaluación

| Criterio                                  | Puntos |
|-------------------------------------------|--------|
| Esquema con tipos BSON correctos          | 30     |
| Queries con dot notation funcionales      | 40     |
| $elemMatch y $type aplicados correctamente| 30     |
| **Total**                                 | **100** |
