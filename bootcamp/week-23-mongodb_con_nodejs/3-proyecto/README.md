# Proyecto Semana 23 — Integración MongoDB + Node.js

## Objetivo

Conectar tu aplicación Node.js a MongoDB e implementar operaciones CRUD
completas con manejo de errores, aplicadas a tu dominio asignado.

## Dominio Asignado

> Adapta cada TODO al dominio que te fue asignado por el instructor.
> Ejemplos:
> - Biblioteca → books, members, loans
> - Farmacia → medicines, sales, inventory
> - Gimnasio → members, routines, attendance
> - Restaurante → dishes, tables, orders

## Requisitos

Implementa en `starter/proyecto.js` las siguientes funciones:

| Función             | Descripción                                                         |
| ------------------- | ------------------------------------------------------------------- |
| `conectar()`        | Retorna una referencia a la base de datos con `MongoClient`         |
| `insertarItems()`   | Inserta al menos 5 documentos de tu entidad principal con `insertMany()` |
| `buscarItems()`     | Busca documentos con un filtro, proyección, sort y `.toArray()`     |
| `resumenPorGrupo()` | Pipeline de agregación que agrupa por una categoría y calcula totales |

## Cómo ejecutar

1. Levanta Docker:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   ```
2. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < 3-proyecto/starter/setup.js
   ```
3. Ejecuta el proyecto:
   ```bash
   node 3-proyecto/starter/proyecto.js
   ```

## Criterios de Evaluación

- MongoClient con `try/finally` y `client.close()` en cada función
- `insertMany()` con al menos 5 documentos coherentes con el dominio
- `find()` con filtro significativo, proyección y `.toArray()`
- Pipeline con `$group` + `$sum` o `$avg` + `$sort`
- Console.log de todos los resultados para validar la ejecución
