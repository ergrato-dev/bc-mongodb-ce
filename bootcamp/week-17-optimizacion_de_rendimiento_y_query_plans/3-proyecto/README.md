# Proyecto Semana 17 — Optimización de Consultas

## Descripción

Aplica `explain("executionStats")`, índices compuestos y covered queries
a la colección principal de tu dominio asignado.

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Carga el esquema de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta e implementa los TODOs:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

## Tareas

### TODO 1: Identificar COLLSCAN
Ejecuta `explain("executionStats")` en la consulta de filtrado principal
de tu dominio. Captura los valores de `stage`, `totalDocsExamined` y
`nReturned`. Comprueba que hay un `COLLSCAN`.

### TODO 2: Crear índice compuesto
Diseña un índice compuesto que cubra los campos más usados en los filtros
de tu dominio. Verifica con `explain()` que el stage cambió a `IXSCAN`.

### TODO 3: Covered query
Construye una covered query con proyección limitada a los campos del índice.
Verifica `totalDocsExamined: 0`.

### TODO 4: hint() comparativo
Crea un segundo índice alternativo y usa `hint()` para comparar ambos planes.
Documenta cuál es más eficiente para tu caso de uso.

## Entrega

- Script `proyecto.js` con los 4 TODOs implementados
- Salida de `explain()` antes y después de cada optimización (captura con comentarios)
- Justificación del diseño del índice compuesto elegido
