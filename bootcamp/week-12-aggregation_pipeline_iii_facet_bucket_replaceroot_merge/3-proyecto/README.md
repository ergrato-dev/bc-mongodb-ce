# Proyecto Semanal — Semana 12: Aggregation Pipeline III

## Descripción

Aplica `$facet`, `$bucket`, `$replaceRoot` y `$merge` para construir un
sistema de análisis multidimensional adaptado a tu dominio asignado.

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta e interactúa:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

## Requerimientos

### Pipeline 1 — `$facet` multidimensional

Implementa un pipeline que con una **sola query** devuelva:
- Distribución de registros por categoría o tipo
- Estadísticas de precio/valor (avg, min, max)
- Top 3 registros más relevantes del dominio

### Pipeline 2 — `$bucket` por rangos

Clasifica los registros de tu dominio en al menos **4 rangos de valor**
relevantes para el contexto (precio, edad, duración, etc.).
Incluye un bucket `default` para valores fuera de rango.

### Pipeline 3 — `$replaceRoot` con enriquecimiento

Promueve un subdocumento embebido a raíz usando `$replaceRoot` + `$mergeObjects`.
Preserva al menos dos campos del documento padre en el resultado.

### Pipeline 4 — `$merge` incremental

Calcula estadísticas agrupadas por un campo de tiempo (mes, semana, año) y
persiste los resultados en una colección de resumen usando `$merge`.
Verifica que documentos existentes se actualicen y nuevos se inserten.

## Criterios de Evaluación

- `$facet` devuelve un único documento con los tres sub-resultados
- `$bucket` tiene rangos coherentes con el dominio y un `default`
- `$replaceRoot` aplana correctamente el subdocumento
- `$merge` actualiza registros existentes sin borrar el histórico
- Código bien comentado en español con campos en inglés

## NOTA PARA EL APRENDIZ

Adapta las colecciones según tu dominio asignado. Ejemplos:

- Biblioteca → `books` + `loans`
- Farmacia → `medicines` + `dispensations`
- Gimnasio → `plans` + `sessions`
- Restaurante → `menu_items` + `tickets`
