# Proyecto Semana 16 — Validación de Esquemas y Transacciones

## Descripción

Aplica `$jsonSchema` para definir las reglas de validación del dominio asignado, e implementa al menos una transacción multi-documento que refleje una operación de negocio crítica.

> **Nota**: Los ejemplos genéricos usan un dominio de Acuario. Adapta a tu dominio asignado.

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
| `$jsonSchema` con `required` y al menos 3 `properties` correctas | 25 pts |
| Transacción con `commit` exitoso | 25 pts |
| Transacción con `abort` ante condición de negocio | 25 pts |
| Coherencia con el dominio asignado | 25 pts |

## Mapeo de dominios

- Biblioteca → `books` (isbn, title, author, copies — `required`), transacción: préstamo + decremento de copias
- Farmacia → `medicines` (code, name, price, stock), transacción: venta + actualizar inventario
- Gimnasio → `members` (memberId, name, plan, isActive), transacción: inscripción + pago
- Restaurante → `dishes` (code, name, price, available), transacción: pedido + marcar como no disponible
