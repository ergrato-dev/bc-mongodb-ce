# Proyecto Semanal — Semana 14: Índices de Texto y Geoespaciales

## Descripción

Implementa búsquedas de texto completo y consultas geoespaciales sobre
las colecciones de tu dominio asignado.

## Diagramas de referencia

- [Text Index](../0-assets/01-text-index.svg)
- [Geospatial Index](../0-assets/02-geospatial-index.svg)

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
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
4. Conecta e interactúa:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Requisitos del proyecto

### TODO 1 — Índice de texto en campo descriptivo

Identifica en tu dominio un campo con texto descriptivo (descripción,
notas, comentarios, título, instrucciones). Crea un índice `text` en ese
campo y realiza al menos 2 búsquedas relevantes para tu dominio.

### TODO 2 — Ordenar resultados por relevancia

Usa `$meta: "textScore"` para ordenar resultados de búsqueda de texto
por relevancia. Incluye el score en la proyección.

### TODO 3 — Índice `2dsphere` y consulta `$near`

Agrega coordenadas GeoJSON (`location: { type: "Point", coordinates: [...] }`)
a los documentos de tu colección principal. Crea el índice `2dsphere` y
ejecuta una consulta `$near` con `$maxDistance` relevante para tu dominio.

### TODO 4 — Combinar texto y geoespacial con filtros

Combina al menos una búsqueda de texto O geoespacial con un filtro
adicional de tu dominio (por estado, categoría, fecha, etc.).

---

## Criterios de evaluación

| Criterio                                          | Puntos |
|---------------------------------------------------|--------|
| Índice text en campo descriptivo del dominio      | 25 pts |
| Resultados ordenados por textScore correctamente  | 25 pts |
| Índice 2dsphere funcional con $near               | 25 pts |
| Combinación de geo/texto con filtro del dominio   | 25 pts |

---

## Nota para el aprendiz

Adapta las colecciones del `setup.js` a tu dominio asignado.
Asegúrate de que las coordenadas GeoJSON sean realistas para el
contexto geográfico de tu dominio.
