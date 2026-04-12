# Ejercicio 01 — Explorando el Replica Set

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
4. Copia y ejecuta cada sección de `starter/ejercicio.js`

---

## Pasos del Ejercicio

### Paso 1: Estado del Replica Set

`rs.status()` reporta el estado en tiempo real de cada miembro del set. Los campos más importantes son `stateStr` (rol actual del nodo) y `health` (disponibilidad):

```js
rs.status()
```

Busca en la salida:
- `set: "rs0"` — nombre del Replica Set de este bootcamp
- `members[0].stateStr: "PRIMARY"` — nuestro único nodo Docker
- `members[0].health: 1` — nodo disponible

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 1.

---

### Paso 2: Configuración del Set

`rs.conf()` muestra la configuración estructural: prioridad de cada nodo para ser elegido Primary, capacidad de voto y si el nodo está oculto para clientes:

```js
rs.conf()
```

Observa:
- `members[0].priority: 1` — puede ser Primary
- `members[0].votes: 1` — participa en elecciones
- `members[0].hidden: false` — visible para readPreference

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 2.

---

### Paso 3: Leer el Oplog

El oplog registra cada escritura del Primary. Vive en la base de datos `local`, en la colección `oplog.rs`. El nombre tiene un punto, por eso usamos notación de corchetes:

```js
use("local")
db["oplog.rs"].find(
  { ns: /bootcamp_db/ }
).sort({ $natural: -1 }).limit(5)
```

Interpreta los campos:
- `op: "i"` → insert, `"u"` → update, `"d"` → delete
- `ns` → namespace `bootcamp_db.logistics`
- `o` → el documento afectado

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 3.

---

### Paso 4: ¿Quién Es el Primary?

`db.isMaster()` informa sobre el nodo conectado y el conjunto completo:

```js
db.isMaster()
```

Campos clave:
- `ismaster: true` — estamos conectados al Primary
- `setName: "rs0"` — nombre del Replica Set
- `hosts` — lista completa de miembros

**Abre `starter/ejercicio.js`** y descomenta la sección del PASO 4.
