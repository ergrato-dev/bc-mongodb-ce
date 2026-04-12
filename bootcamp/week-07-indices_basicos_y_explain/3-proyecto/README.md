# Proyecto Semana 07 — Optimización de Queries con Índices

## Objetivo

Aplicar `createIndex()` y `explain("executionStats")` para detectar queries
lentas en tu dominio asignado y documentar la mejora de rendimiento.

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   ```
2. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
4. Implementa las tareas en `starter/proyecto.js`.

---

## Descripción

Tienes una colección de tu dominio con al menos 20 documentos. Tu tarea es:

1. **Identificar 3 queries lentas** — ejecuta `explain()` y confirma COLLSCAN
2. **Crear el índice apropiado** para cada query
3. **Verificar la mejora** — vuelve a ejecutar `explain()` y confirma IXSCAN
4. **Documentar los resultados** en comentarios dentro del archivo

> **Nota**: Adapta los campos y colecciones a tu dominio asignado.
> El archivo `starter/setup.js` incluye un esquema genérico de ejemplo.
>
> Ejemplos de adaptación:
> - Biblioteca → `members`, campo `status`, `memberSince`
> - Farmacia → `medicines`, campo `category`, `expirationDate`
> - Gimnasio → `members`, campo `plan`, `joinDate`

---

## Requisitos

### Funcionales

- [ ] Colección con mínimo 20 documentos del dominio asignado
- [ ] Mínimo 3 queries con `explain("executionStats")` antes de crear índices
- [ ] Mínimo 3 índices creados (al menos uno simple, uno con opciones)
- [ ] Mínimo 3 queries con `explain()` después de crear índices
- [ ] Comparación documentada (comentarios en el archivo) de COLLSCAN → IXSCAN

### Técnicos

- [ ] Al menos un índice único (`{ unique: true }`)
- [ ] Al menos un índice en un array (multikey) o en un subdocumento
- [ ] Uso correcto de `dropIndexes()` y `getIndexes()`
- [ ] Comentarios explicando cada decisión de indexación

---

## Entregables

- `starter/setup.js` con los datos de tu dominio (mínimo 20 docs)
- `starter/proyecto.js` con las queries, índices y comparaciones implementadas
- Comentarios en el archivo explicando qué mejoró y por qué

---

## Criterios de Evaluación

| Criterio | Peso |
|---|---|
| Datos del dominio asignado (coherentes, mínimo 20 docs) | 20% |
| 3 queries analizadas con explain() antes de índices | 25% |
| Índices creados correctamente (simple, único, multikey) | 30% |
| Verificación con explain() después de índices | 15% |
| Comentarios y documentación en el archivo | 10% |
