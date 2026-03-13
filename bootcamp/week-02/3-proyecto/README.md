# Proyecto Semana 02 — Poblar y Consultar tu Colección Principal

**Semana 02 · CRUD I: Inserción y Lectura**

## Objetivo

Diseñar e insertar la colección principal de tu dominio asignado y construir
consultas de lectura con proyecciones y métodos de cursor.

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga tu esquema:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Ejecuta tu proyecto:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/proyecto.js
   ```

## Instrucciones

1. **Adapta el `setup.js`** — renombra la colección y los campos según tu dominio.
2. **Completa los TODOs en `proyecto.js`** — implementa las queries descritas.
3. Cada query debe correr sin errores en `mongosh`.

## Dominios de ejemplo

```
Biblioteca   → books, members, loans
Farmacia     → medicines, sales, inventory
Gimnasio     → members, routines, attendance
Restaurante  → dishes, tables, orders
```

> Adapta el esquema del `setup.js` a las entidades de **tu** dominio asignado.
