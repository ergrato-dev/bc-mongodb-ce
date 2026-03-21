# Proyecto Semana 21 — Replicación y Alta Disponibilidad

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta e interactúa:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
4. Implementa las funciones en `starter/proyecto.js`

---

## Objetivo

Aplicar los conceptos de Alta Disponibilidad de MongoDB en tu dominio asignado:

- Script de **diagnóstico del Replica Set** (`rs.status()` + `rs.conf()`)
- Operaciones con distintos niveles de **writeConcern** (`w:1`, `w:"majority"`, `w:0`)
- Lecturas con distintos modos de **readPreference**
- Consulta e interpretación del **oplog**

---

## Entidades del Dominio

Adapta la colección de ejemplo (`items`) a las entidades de tu dominio:

| Dominio | Colecciones sugeridas |
|---------|----------------------|
| Biblioteca | `books`, `members`, `loans` |
| Farmacia | `medicines`, `sales`, `inventory` |
| Gimnasio | `members`, `routines`, `attendance` |
| Hospital | `patients`, `appointments`, `prescriptions` |
| Restaurante | `dishes`, `tables`, `orders` |

---

## TODOs a Implementar

### TODO 1 — Diagnóstico del Replica Set (10 pts)

Ejecuta y documenta (con comentarios) los campos más importantes de:
- `rs.status()`: nombre del set, stateStr de cada miembro, health
- `rs.conf()`: priority y votes de cada miembro

### TODO 2 — Escrituras con writeConcern (10 pts)

Inserta 3 documentos de tu dominio con distintos niveles:
- Primer insert: `{ writeConcern: { w: 1 } }` — Primary ack
- Segundo insert: `{ writeConcern: { w: "majority" } }` — Majority ack
- Tercer insert: `{ writeConcern: { w: 0 } }` — Fire and forget

### TODO 3 — Lecturas con readPreference (10 pts)

Ejecuta 3 consultas sobre tu colección con distintos modos:
- `readPref("primary")` — consistencia estricta
- `readPref("secondaryPreferred")` — distribución de carga
- `readPref("nearest")` — menor latencia

### TODO 4 — Análisis del Oplog (10 pts)

Consulta las 5 operaciones más recientes del oplog para tu base de datos:
- Filtra por `ns: /bootcamp_db/`
- Identifica y comenta qué operación representa cada entrada (`op`: i/u/d/c/n)
