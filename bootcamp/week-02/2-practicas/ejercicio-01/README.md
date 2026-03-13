# Ejercicio 01 — Inserción de Documentos

**Semana 02 · CRUD I: Inserción y Lectura**

## Objetivo

Practicar la inserción de documentos individuales y en lote usando `insertOne()` e `insertMany()`.

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
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

---

### Paso 1: Insertar un documento con insertOne()

`insertOne()` retorna un objeto con `acknowledged: true` y el `_id` generado.

```js
let resultado = db.books.insertOne({
  title: "Eloquent JavaScript",
  author: "Marijn Haverbeke",
  year: NumberInt(2018),
  price: Decimal128("31.99"),
  inStock: true,
  tags: ["javascript", "web"]
})
print("_id generado:", resultado.insertedId)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Insertar múltiples documentos con insertMany()

`insertMany()` retorna todos los `_id` generados en un objeto indexado.

```js
let resultado2 = db.books.insertMany([
  { title: "Learning Python", author: "Mark Lutz", year: NumberInt(2013) },
  { title: "Fluent Python",   author: "Luciano Ramalho", year: NumberInt(2022) }
])
print("Insertados:", Object.keys(resultado2.insertedIds).length)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 2.

---

### Paso 3: Insertar con _id personalizado

Puedes definir el `_id` tú mismo. MongoDB lanza error si el `_id` ya existe.

```js
db.books.insertOne({
  _id: "ISBN-978-0-596-51774-8",
  title: "JavaScript: The Good Parts"
})
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 3.

---

### Paso 4: insertMany con ordered: false

Con `ordered: false`, un error en un documento no detiene el resto del lote.

```js
db.books.insertMany(
  [
    { _id: "custom-1", title: "Book A" },
    { _id: "custom-1", title: "Book B" },  // duplicado — falla
    { _id: "custom-2", title: "Book C" }
  ],
  { ordered: false }
)
// Book A y Book C se insertan; Book B falla sin bloquear el lote
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 4.
