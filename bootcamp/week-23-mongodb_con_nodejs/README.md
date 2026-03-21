# Semana 23 — MongoDB con Node.js

## Descripción

Esta semana integra MongoDB con **Node.js** usando el driver oficial. Aprenderás
a conectar una aplicación, realizar operaciones CRUD, manejar la connection pool
y estructurar el código con `async/await`.

## Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Conectar una aplicación Node.js a MongoDB con `MongoClient`
- ✅ Ejecutar operaciones CRUD desde Node.js con el patrón `async/await`
- ✅ Gestionar la connection pool y cerrar conexiones correctamente
- ✅ Manejar errores de MongoDB en aplicaciones Node.js

## Distribución del Tiempo (8 horas)

| Actividad | Tiempo |
|-----------|--------|
| Teoría (4 archivos) | 2 horas |
| Ejercicio 01 — Conexión y CRUD básico | 1.5 horas |
| Ejercicio 02 — Queries avanzadas y manejo de errores | 1.5 horas |
| Proyecto integrador | 2 horas |
| Recursos y glosario | 30 minutos |

## Contenido de la Semana

### Teoría
1. [MongoClient — Conectar a MongoDB](1-teoria/01-mongoclient-connect.md)
2. [CRUD con el Driver Node.js](1-teoria/02-crud-driver.md)
3. [Connection Pool y Buenas Prácticas](1-teoria/03-connection-pool.md)
4. [Manejo de Errores](1-teoria/04-error-handling.md)

### Prácticas
- [Ejercicio 01 — Conexión y operaciones básicas](2-practicas/ejercicio-01/README.md)
- [Ejercicio 02 — Queries y aggregation desde Node.js](2-practicas/ejercicio-02/README.md)

### Proyecto
- [Proyecto Semana 23 — API de datos con Node.js](3-proyecto/README.md)

## Navegación

← [Semana 22 — Seguridad y Administración](../week-22-seguridad_y_administracion/README.md)
→ [Semana 24 — Proyecto Final Capstone](../week-24-proyecto_final_capstone/README.md)

## Prerequisitos

```bash
# Asegúrate de tener Node.js instalado
node --version   # >= 18.x recomendado

# Instalar el driver de MongoDB
npm install mongodb
```

## Cómo ejecutar

1. Levanta Docker:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Instala dependencias:
   ```bash
   cd bootcamp/week-23-mongodb_con_nodejs && npm install
   ```
3. Ejecuta los scripts:
   ```bash
   node 2-practicas/ejercicio-01/starter/ejercicio.js
   ```
