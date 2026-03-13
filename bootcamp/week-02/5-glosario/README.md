# Glosario — Semana 02

Términos MongoDB clave de la semana, ordenados A–Z.

---

**acknowledged**
Propiedad del objeto de retorno de `insertOne()` e `insertMany()` que indica si
la operación fue confirmada por el servidor. Valor `true` significa éxito.

---

**cursor**
Puntero al conjunto de resultados de una query `find()`. No carga todos los
documentos en memoria de una vez; los entrega bajo demanda. En `mongosh` se
itera automáticamente mostrando los primeros 20.

---

**find()**
Método que retorna un cursor con todos los documentos que coinciden con el
filtro dado. Acepta filtro y proyección como argumentos.

---

**findOne()**
Método que retorna el primer documento que coincide con el filtro, o `null` si
no hay coincidencias. No retorna un cursor.

---

**insertedId**
Campo del resultado de `insertOne()` que contiene el `ObjectId` del documento
insertado. Para `insertMany()`, el campo se llama `insertedIds` y es un objeto.

---

**insertMany()**
Método que inserta un array de documentos en una sola operación. Acepta la
opción `ordered` (por defecto `true`).

---

**insertOne()**
Método que inserta un único documento en una colección y retorna `acknowledged`
e `insertedId`.

---

**limit()**
Método de cursor que limita el número máximo de documentos retornados.

---

**ordered**
Opción de `insertMany()`. Con `true` (default) detiene el lote al primer error.
Con `false` continúa insertando el resto aunque alguno falle.

---

**proyección**
Segundo argumento de `find()` y `findOne()`. Define qué campos del documento
se incluyen (`1`) o se excluyen (`0`) del resultado.

---

**skip()**
Método de cursor que omite N documentos del inicio del resultado. Se usa junto
con `limit()` para implementar paginación.

---

**sort()**
Método de cursor que ordena los documentos por uno o más campos. `1` = ascendente,
`-1` = descendente.
