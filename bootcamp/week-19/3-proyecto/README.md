# Proyecto Semana 19 — Change Streams en Tiempo Real

## Descripción

Implementa un sistema de escucha de cambios en tiempo real sobre una colección
de tu dominio asignado. El sistema debe capturar eventos, filtrarlos por
criticidad y ser capaz de reanudarse ante fallos con un resume token persistido.

## Objetivos del Proyecto

1. Abrir un Change Stream sobre tu colección principal y capturar los tres tipos de eventos básicos
2. Filtrar el stream para recibir solo eventos de alta prioridad
3. Persistir el resume token en una colección para garantizar resiliencia
4. Simular un reinicio de la aplicación y demostrar la reanudación sin pérdida de eventos

## Contexto de Negocio

Los Change Streams son el mecanismo de MongoDB para aplicaciones event-driven:
notificaciones en tiempo real, sincronización entre servicios, pipelines de datos,
auditoría de cambios. Dominar `watch()` y los resume tokens es clave para
arquitecturas reactivas.

## Instrucciones — Adapta a Tu Dominio

> **Nota**: Los ejemplos de este proyecto usan el dominio "Acuario" para no
> coincidir con los dominios asignados a los aprendices.
> Adapta los nombres de colecciones y campos a **tu dominio asignado**.

Ejemplos de adaptación:
- Biblioteca → `book_loans` (préstamos que vencen, devoluciones urgentes)
- Farmacia → `inventory_items` (stock crítico, pedidos urgentes)
- Gimnasio → `attendance_records` (alertas de capacidad, incidentes)
- Restaurante → `orders` (pedidos urgentes, cancelaciones)

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo con replica set activo:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Abre **dos terminales** de `mongosh`:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

## Estructura del Proyecto

```
3-proyecto/
├── README.md          ← Instrucciones (este archivo)
└── starter/
    ├── setup.js       ← Datos de prueba — adapta a tu dominio
    └── proyecto.js    ← TODOs a implementar
```

## Criterios de Evaluación

| Criterio | Puntaje |
|---|---|
| Stream abre y captura insert + update + delete correctamente | 10 pts |
| Pipeline filtra por prioridad alta con `fullDocument: "updateLookup"` | 10 pts |
| Token se persiste en colección `resume_tokens` | 5 pts |
| Reanudación exitosa con `resumeAfter` + token leído de BD | 5 pts |
| Código adaptado al dominio asignado | 10 pts |

**Total**: 40 puntos (ponderado según rúbrica semanal)

## Rúbrica de Entrega

- Scripts ejecutables sin errores en `mongosh`
- Colecciones y campos con nomenclatura en inglés
- Comentarios explicativos en español
- Dominio coherente con el asignado por el instructor
