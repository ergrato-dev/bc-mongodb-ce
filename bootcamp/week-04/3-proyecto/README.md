# Proyecto Semana 04 — Consultas con Lógica Avanzada

**Tema**: Operadores lógicos y de array

## Descripción

Aplica operadores lógicos y de array a tu dominio asignado. El objetivo es
construir queries que combinen múltiples condiciones y trabajen con campos de tipo array.

## Requisitos

1. Colección principal con al menos **12 documentos** de tu dominio
2. Los documentos deben tener al menos **un campo de tipo array** (tags, categorías,
   puntuaciones, participantes, etc.)
3. Al menos **6 queries** implementadas:

| # | Operador(es) | Descripción esperada |
|---|---|---|
| 1 | `$or` | Al menos 2 condiciones alternativas |
| 2 | `$and` implícito + `$or` | Campo fijo + condiciones alternativas |
| 3 | `$not` | Negación de una condición de operador |
| 4 | `$nor` | Excluir múltiples condiciones |
| 5 | `$all` o `$elemMatch` | Condición sobre array |
| 6 | Combinación libre | `$or` + array operator + campo directo |

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga los datos:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Ejecuta el proyecto:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/proyecto.js
   ```

## Criterios de evaluación

- ✅ 12+ documentos representativos del dominio
- ✅ Al menos un campo array con 2+ elementos por documento
- ✅ 6 queries implementadas con los operadores indicados
- ✅ Proyecciones en todas las queries
- ✅ Comentarios descriptivos en español
