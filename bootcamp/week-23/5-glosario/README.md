# Glosario — Semana 23: MongoDB con Node.js

Términos clave del driver oficial de MongoDB para Node.js, ordenados alfabéticamente.

---

## A

**aggregate(pipeline)**
Método del driver Node.js que ejecuta un pipeline de agregación. Retorna un
`AggregationCursor` que debe resolverse con `.toArray()` o iterarse con
`for await...of`.

**AggregationCursor**
Objeto retornado por `collection.aggregate()`. Permite iterar los resultados
del pipeline de forma asíncrona. Llamar `.toArray()` resuelve todos los
documentos en memoria.

**async/await**
Sintaxis de JavaScript para manejar Promesas de forma secuencial y legible.
`async` declara una función asíncrona; `await` pausa la ejecución hasta que
la Promesa se resuelve.

---

## C

**client.close()**
Cierra todas las conexiones abiertas del `MongoClient`. Debe llamarse en el
bloque `finally` para garantizar que se liberen recursos incluso ante errores.

**collection(name)**
Método de `Db` que retorna una referencia a una colección. No crea la
colección hasta que se inserta el primer documento.

**connect()**
Método de `MongoClient` que establece la conexión con el servidor MongoDB.
A partir del driver v4+, la conexión puede ser lazy (automática en la primera
operación), pero llamar `await client.connect()` explícitamente es la práctica
recomendada.

**Cursor**
Objeto que representa un conjunto de resultados de una consulta `find()`.
No carga todos los documentos en memoria hasta que se itera. Métodos comunes:
`.toArray()`, `.forEach()`, `.next()`.

---

## D

**db(name)**
Método de `MongoClient` que retorna una referencia a una base de datos de
MongoDB. No crea la BD hasta que se realiza una operación de escritura.

**driver**
Librería oficial de MongoDB para un lenguaje de programación. Para Node.js:
`npm install mongodb`. Ofrece una API para conectar, consultar y manipular
datos desde código JavaScript/TypeScript.

---

## I

**insertedId**
Propiedad del resultado de `insertOne()`. Contiene el `ObjectId` del documento
recién insertado. Tipo: `ObjectId`.

**insertedIds**
Propiedad del resultado de `insertMany()`. Objeto donde las claves son los
índices del array insertado y los valores son los `ObjectId` generados.

---

## M

**maxPoolSize**
Opción de conexión que define el máximo de conexiones simultáneas en el pool.
Valor por defecto: `100`. Ajustar según la capacidad del servidor MongoDB.

**MongoClient**
Clase principal del driver Node.js. Representa la conexión a un servidor o
clúster MongoDB. Se instancia con el URI de conexión:
`new MongoClient(uri, options)`.

**MongoNetworkError**
Error lanzado cuando hay problemas de red o conectividad con el servidor
MongoDB (timeout, host inaccesible, etc.).

**MongoServerError**
Error lanzado cuando el servidor MongoDB rechaza una operación (validación de
esquema fallida, duplicado en índice único, permisos insuficientes, etc.).
Incluye la propiedad `code` con el código numérico del error.

---

## P

**Promise**
Objeto de JavaScript que representa el resultado eventual de una operación
asíncrona. Las operaciones del driver Node.js retornan Promesas; se resuelven
con `await` o con `.then()/.catch()`.

---

## S

**singleton**
Patrón de diseño donde una clase tiene una única instancia compartida en toda
la aplicación. Para MongoDB: crear `MongoClient` una vez y reutilizarlo en
lugar de abrir una conexión por operación.

---

## T

**toArray()**
Método de `Cursor` y `AggregationCursor` que resuelve todos los documentos
del cursor en un array JavaScript. Usa `await` para esperar la resolución.

---

## U

**URI (Connection String)**
Cadena de texto con el formato `mongodb://usuario:password@host:puerto/db`
que define cómo conectarse a MongoDB. Para autenticación contra la base de
datos `admin`: agregar `?authSource=admin`.

---

## W

**writeConcern (contexto driver)**
Opción que se puede pasar a métodos de escritura del driver (`insertOne`,
`updateMany`, etc.) para definir el nivel de confirmación de escritura:
`{ writeConcern: { w: "majority" } }`.
