# Proyecto Final Capstone — Semana 24

## Objetivo

Implementa un sistema completo para tu dominio asignado aplicando **todos**
los conocimientos del bootcamp: modelado con patrones avanzados, aggregation
pipeline complejo, índices, transacciones y Node.js.

## Dominio Asignado

> Adapta cada TODO al dominio que te fue asignado por el instructor.
> Ejemplos:
> - Biblioteca → books, members, loans
> - Farmacia → medicines, sales, inventory
> - Gimnasio → members, routines, attendance
> - Restaurante → dishes, tables, orders

## Requisitos del Proyecto

| Función                  | Descripción                                                         |
|--------------------------|---------------------------------------------------------------------|
| `insertarDominioCompleto()` | Inserta colecciones principales con al menos 1 patrón avanzado   |
| `pipelineComplejo()`        | Pipeline de 5+ etapas con `$match`, `$lookup`, `$group`, `$sort` |
| `ejecutarTransaccion()`     | `withTransaction()` con 2+ operaciones en 2 colecciones          |
| `crearIndices()`            | Crea índice compuesto + parcial o TTL apropiado al dominio       |

## Patrones Requeridos

Implementa **al menos 2** de los siguientes patrones:

- **Extended Reference**: embed campos frecuentes del doc referenciado
- **Bucket Pattern**: agrupa eventos por período en un array
- **Computed Pattern**: pre-calcula totales en escritura

## Cómo ejecutar

1. Levanta Docker:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Instala dependencias:
   ```bash
   cd bootcamp/week-24-proyecto_final_capstone && npm install
   ```
3. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < 3-proyecto/starter/setup.js
   ```
4. Ejecuta el proyecto:
   ```bash
   node 3-proyecto/starter/proyecto.js
   ```

## Criterios de Evaluación

- Al menos 2 patrones de diseño implementados con justificación en comentarios
- Pipeline con `$lookup` entre 2 colecciones y `$group` con `$sum` o `$avg`
- Transacción con `withTransaction()` que modifica 2 colecciones
- Índice compuesto usando regla ESR para al menos 1 query del dominio
- Todo el código ejecuta sin errores en Node.js con `mongodb@^6.0.0`
