# Proyecto Semana 03 — Consultas con Operadores

**Tema**: Operadores de comparación, `$in`, `$nin`, `$exists`, `$type`

## Descripción

Diseña el esquema de datos de tu dominio asignado e implementa una serie
de consultas que demuestren el dominio de los operadores de esta semana.

## Requisitos

Tu proyecto debe incluir:

1. Una colección principal con al menos **12 documentos** que reflejen tu dominio asignado
2. Datos variados: valores en rangos distintos, algunos campos opcionales (presentes en
   algunos documentos, ausentes en otros), arrays de valores
3. Al menos **8 queries** que usen los operadores de la semana

### Queries requeridas

| # | Operador(es) | Descripción esperada |
|---|---|---|
| 1 | `$eq` / implícito | Buscar por un valor exacto de un campo clave |
| 2 | `$ne` | Excluir documentos con un estado o categoría específica |
| 3 | `$gt` + `$lt` | Rango abierto en un campo numérico |
| 4 | `$gte` + `$lte` | Rango cerrado en otro campo numérico |
| 5 | `$in` | Filtrar por pertenencia a una lista de valores |
| 6 | `$nin` | Excluir una lista de valores |
| 7 | `$exists: true` + `$ne: null` | Campo presente y con valor real |
| 8 | Multi-campo | Combinar al menos 3 condiciones distintas |

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

- ✅ Setup con 12+ documentos representativos del dominio
- ✅ 8 queries implementadas (sin TODOs pendientes)
- ✅ Proyecciones aplicadas en todas las queries
- ✅ Comentarios en español explicando cada query
- ✅ Nomenclatura en inglés para colecciones y campos
