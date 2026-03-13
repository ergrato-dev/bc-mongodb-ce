# Glosario — Semana 01

## Introducción a MongoDB y NoSQL

Términos clave ordenados alfabéticamente.

---

**BSON** (Binary JSON)
Formato binario de serialización usado por MongoDB para almacenar documentos.
Extiende JSON con tipos adicionales: `ObjectId`, `Date`, `Decimal128`, `NumberInt`, etc.

---

**Colección** (Collection)
Agrupación de documentos dentro de una base de datos MongoDB.
Equivalente a una tabla en SQL, pero sin esquema fijo predefinido.

---

**Cursor**
Objeto que retorna `find()`. Permite iterar sobre los documentos resultado
y encadenar métodos como `.sort()`, `.limit()` y `.skip()`.

---

**Decimal128**
Tipo BSON para valores de punto flotante de alta precisión.
Se usa para montos monetarios y valores donde la precisión decimal es crítica.
Ejemplo: `Decimal128("1299.99")`

---

**Documento** (Document)
Unidad básica de datos en MongoDB. Es un objeto JSON/BSON con pares campo-valor.
Equivalente a una fila en SQL, pero puede contener subdocumentos y arrays.

---

**find()**
Método principal de lectura en MongoDB. Retorna un cursor con todos los
documentos que coinciden con el filtro. Equivalente a `SELECT` en SQL.

---

**findOne()**
Variante de `find()` que retorna solo el primer documento que coincide.
Útil cuando se espera un único resultado.

---

**mongosh**
Shell interactivo de MongoDB para ejecutar queries y administrar la base de datos.
Reemplaza al antiguo `mongo` shell desde MongoDB 5.0.

---

**NoSQL**
Término que agrupa bases de datos no relacionales. Incluye bases de datos
documentales (MongoDB), clave-valor, columnar y de grafos.

---

**NumberInt**
Tipo BSON para enteros de 32 bits. Se usa para valores como stock, edad o año.
Ejemplo: `NumberInt(42)`

---

**ObjectId**
Tipo BSON de 12 bytes usado como `_id` por defecto en MongoDB.
Contiene timestamp, identificador de máquina y número aleatorio.
Garantiza unicidad sin coordinación centralizada.

---

**Proyección** (Projection)
Segundo argumento de `find()` que controla qué campos se devuelven.
`1` incluye un campo, `0` lo excluye.
Ejemplo: `{ name: 1, price: 1, _id: 0 }`

---

**Subdocumento** (Embedded Document)
Documento anidado dentro de otro documento. Permite representar objetos
jerárquicos sin necesidad de JOINs.
Ejemplo: `specs: { ram: "16GB", storage: "512GB" }`

---

**_id**
Campo obligatorio en todo documento MongoDB. Si no se especifica al insertar,
MongoDB lo genera automáticamente como `ObjectId`.

---

_Semana 01 · Bootcamp MongoDB CE_
