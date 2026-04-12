# Proyecto Semana 05 — Gestión de Inventario con Actualizaciones

Semana 05 · CRUD III — Actualización y Eliminación

## Descripción

Implementa un sistema de gestión de inventario que simule operaciones
reales de actualización: modificar precios, ajustar cantidades, gestionar
etiquetas de productos y aplicar eliminación lógica (soft delete).

> **Adapta este proyecto a tu dominio asignado.**
> Renombra colecciones y campos según las entidades de tu dominio.

## Objetivo

Demostrar dominio de los operadores de actualización y eliminación para
mantener datos consistentes en una aplicación real.

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   ```
2. Carga los datos base:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Implementa las operaciones en `starter/proyecto.js` y ejecuta:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/proyecto.js
   ```

## Requerimientos

Implementa las siguientes operaciones en `starter/proyecto.js`:

### Actualizaciones de campos (30 pts)
1. Actualiza el precio de al menos 3 ítems específicos usando `$set`
2. Elimina un campo opcional de todos los documentos donde no aplique (`$unset`)
3. Aplica un incremento de stock a todos los ítems de una categoría (`$inc`)

### Operaciones en arrays (30 pts)
4. Agrega una nueva etiqueta a ítems seleccionados sin duplicar (`$addToSet`)
5. Elimina una etiqueta obsoleta de todos los documentos que la tengan (`$pull`)

### Eliminación y soft delete (20 pts)
6. Elimina permanentemente los ítems sin stock y marcados como discontinuos
7. Aplica soft delete (campo `isDeleted: true`) a los ítems inactivos que
   deben conservarse para historial

### Verificación (20 pts)
8. Muestra con `find()` el estado final del inventario activo
   (excluye `isDeleted: true`)
9. Muestra el conteo de documentos activos vs eliminados

## Criterios de evaluación

| Criterio                              | Puntos |
|---------------------------------------|--------|
| Operadores $set, $unset, $inc correctos | 30   |
| Operadores $addToSet, $pull correctos | 30     |
| Delete y soft delete implementados    | 20     |
| Verificaciones finales con find()     | 20     |
| **Total**                             | **100** |
