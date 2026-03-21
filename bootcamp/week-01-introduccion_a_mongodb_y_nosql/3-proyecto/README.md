# Proyecto Semana 01 — Mi Primera Colección MongoDB

**Semana 01 · Introducción a MongoDB y NoSQL**

## Objetivo

Diseñar e insertar la colección principal de tu dominio asignado y escribir
consultas básicas con `find()`, proyecciones y cursor methods.

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Carga tu esquema:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < bootcamp/week-01-introduccion_a_mongodb_y_nosql/3-proyecto/starter/setup.js
   ```
3. Conéctate y ejecuta las consultas:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

## Instrucciones

1. **Abre `starter/setup.js`**: renombra la colección y adapta los campos a tu dominio.
2. **Inserta al menos 5 documentos** realistas con tipos BSON correctos.
3. **Abre `starter/proyecto.js`**: implementa las consultas solicitadas.

## Entregables

- `setup.js` funcional con tu colección y datos de tu dominio
- `proyecto.js` con las 4 consultas implementadas y comentadas
- Captura de pantalla o log de las queries ejecutadas en `mongosh`

## Rúbrica

Ver [rubrica-evaluacion.md](../rubrica-evaluacion.md)

---

_Semana 01 · Bootcamp MongoDB CE_
