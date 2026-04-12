# Proyecto Semana 15 — Patrones de Modelado Avanzado

## Descripción

Implementa los cuatro patrones de modelado avanzado en el dominio que te asignó tu instructor: **Extended Reference**, **Subset**, **Bucket** y **Computed**.

> **Nota**: Los ejemplos genéricos usan un dominio de Museo. Adapta las colecciones y campos a tu dominio asignado.

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
5. Implementa los TODOs en `starter/proyecto.js`

## Criterios de evaluación

| Criterio | Puntaje |
|---|---|
| Extended Reference: campos correctamente embebidos | 20 pts |
| Subset Pattern: `$push` + `$slice` funcional | 20 pts |
| Bucket Pattern: upsert acumula count/min/max | 20 pts |
| Computed Pattern: `$inc` actualiza campo en escritura | 20 pts |
| Coherencia con el dominio asignado | 20 pts |

## Dominios de ejemplo para mapeo

- Biblioteca → `books` (con `authorInfo` embebido), `reviews`, `loan_buckets` (préstamos por mes), `member_stats`
- Farmacia → `medicines` (con `supplierInfo`), `ratings`, `sale_buckets`, `supplier_stats`
- Gimnasio → `classes` (con `trainerInfo`), `feedback`, `attendance_buckets`, `member_stats`
- Restaurante → `dishes` (con `chefInfo`), `reviews`, `order_buckets`, `table_stats`
