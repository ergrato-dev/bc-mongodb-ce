# Proyecto Semana 18 — Patrones de Esquema Avanzados II

## Descripción

Aplica los patrones Polymorphic, Attribute y Document Versioning
a la colección principal de tu dominio asignado.

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Carga el esquema de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta e implementa los TODOs:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

## Tareas

### TODO 1: Colección polimórfica
Diseña una colección única para al menos 3 tipos de entidad de tu dominio.
Usa un campo discriminador y crea el índice compuesto correspondiente.

### TODO 2: Patrón Attribute
Elige una entidad de tu dominio con atributos variables y modifícala para
usar el array `attrs: [{k, v}]`. Crea el índice multikey y verifica con `explain()`.

### TODO 3: Schema Versioning
Simula tener documentos de dos versiones (algunos con `schemaVersion`, otros sin él).
Implementa la migración batch con aggregation pipeline update.

### TODO 4: Document Versioning
Implementa el flujo completo: archivar versión actual → actualizar doc → verificar historial.
Deja al menos 2 versiones en la colección `*_history`.

## Entrega

- `proyecto.js` con los 4 TODOs implementados y ejecutables
- Comentarios explicando qué problema resuelve cada patrón en tu dominio
- Colección `*_history` con al menos 2 registros de versión archivados
