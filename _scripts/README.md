# Scripts — Bootcamp MongoDB CE

Configuración de Docker para levantar MongoDB 7.0 Community Edition
en el entorno local de aprendizaje.

---

## Archivos

| Archivo               | Descripción                                          |
| --------------------- | ---------------------------------------------------- |
| `docker-compose.yml`  | Servicio MongoDB 7.0 CE con volumen persistente      |
| `.env.example`        | Variables de entorno de ejemplo (copiar como `.env`) |

---

## Prerrequisitos

- [Docker](https://docs.docker.com/get-docker/) 24+
- [Docker Compose](https://docs.docker.com/compose/) (incluido en Docker Desktop)

Verifica la instalación:

```bash
docker --version
docker compose version
```

---

## Inicio rápido

### 1. (Opcional) Crear archivo `.env`

```bash
cp _scripts/.env.example _scripts/.env
```

Si no creates el `.env`, se usan los valores por defecto definidos en
`docker-compose.yml`.

### 2. Levantar MongoDB en background

```bash
docker compose -f _scripts/docker-compose.yml up -d
```

### 3. Verificar que el contenedor está corriendo

```bash
docker compose -f _scripts/docker-compose.yml ps
```

### 4. Conectar con `mongosh`

```bash
docker compose -f _scripts/docker-compose.yml exec mongodb \
  mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
```

---

## Comandos frecuentes

### Ejecutar un archivo `.js` del bootcamp

```bash
docker compose -f _scripts/docker-compose.yml exec -T mongodb \
  mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
  bootcamp_db --file /dev/stdin < bootcamp/week-01/2-practicas/ejercicio-01/starter/setup.js
```

### Ver logs del contenedor

```bash
docker compose -f _scripts/docker-compose.yml logs -f mongodb
```

### Detener el contenedor (conserva los datos)

```bash
docker compose -f _scripts/docker-compose.yml down
```

### Reset completo — elimina el volumen de datos

```bash
docker compose -f _scripts/docker-compose.yml down -v
```

> ⚠️ `down -v` elimina **todos los datos** almacenados en MongoDB.
> Úsalo para empezar un ejercicio desde cero.

---

## Credenciales por defecto

| Variable    | Valor         | Descripción                          |
| ----------- | ------------- | ------------------------------------ |
| Username    | `bootcamp`    | Usuario root de MongoDB              |
| Password    | `bootcamp123` | Contraseña del usuario               |
| Database    | `bootcamp_db` | Base de datos del bootcamp           |
| Puerto host | `27017`       | Puerto expuesto en tu máquina local  |

> ⚠️ Estas credenciales son **exclusivamente para el entorno local de aprendizaje**.
> Nunca las uses en producción.

---

## Conexión desde Node.js (semanas 23–24)

```js
// Usar siempre variables de entorno — nunca hardcodear credenciales
const { MongoClient } = require('mongodb')

const uri = process.env.MONGODB_URI
// MONGODB_URI=mongodb://bootcamp:bootcamp123@localhost:27017/bootcamp_db?authSource=admin

const client = new MongoClient(uri)
```

Crea un `.env` en la carpeta del ejercicio (`bootcamp/week-23/...`):

```
MONGODB_URI=mongodb://bootcamp:bootcamp123@localhost:27017/bootcamp_db?authSource=admin
```

---

## Solución de problemas

### Puerto 27017 en uso

Edita `_scripts/.env` y cambia `MONGO_PORT`:

```
MONGO_PORT=27018
```

Luego actualiza `MONGODB_URI` en los ejercicios de Node.js con el nuevo puerto.

### El contenedor no pasa el healthcheck

```bash
# Revisar logs de inicio
docker compose -f _scripts/docker-compose.yml logs mongodb

# Forzar reconstrucción
docker compose -f _scripts/docker-compose.yml down -v
docker compose -f _scripts/docker-compose.yml up -d
```

### Versión de Docker Compose obsoleta

Este proyecto usa la sintaxis de Compose v2 (`docker compose`, sin guión).
Si tienes una versión antigua, actualiza Docker o usa `docker-compose` (con guión).
