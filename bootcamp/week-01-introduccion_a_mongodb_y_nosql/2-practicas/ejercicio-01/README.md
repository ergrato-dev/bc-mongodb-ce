# Ejercicio 01 — find() y Proyecciones

**Semana 01 · Introducción a MongoDB y NoSQL**

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   ```
2. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < bootcamp/week-01-introduccion_a_mongodb_y_nosql/2-practicas/ejercicio-01/starter/setup.js
   ```
3. Conéctate:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

**Abre `starter/ejercicio.js`** y descomenta cada sección siguiendo los pasos.

---

### Paso 1: Leer todos los documentos

`find()` sin argumentos retorna todos los documentos de la colección:

```js
db.products.find()
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 1.

---

### Paso 2: findOne() — primer documento

`findOne()` retorna solo el primer documento que coincide:

```js
db.products.findOne()
```

**Descomenta la sección del Paso 2.**

---

### Paso 3: Proyección — incluir campos

El segundo argumento de `find()` controla qué campos devolver.
`1` incluye el campo. `_id: 0` lo oculta explícitamente:

```js
db.products.find(
  {},
  { name: 1, brand: 1, price: 1, _id: 0 }
)
```

**Descomenta la sección del Paso 3.**

---

### Paso 4: Proyección — excluir campos

`0` excluye un campo. El resto de campos se incluyen automáticamente:

```js
db.products.find(
  {},
  { specs: 0, tags: 0, createdAt: 0 }
)
```

**Descomenta la sección del Paso 4.**
