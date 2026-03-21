# Glosario — Semana 03

Términos MongoDB introducidos esta semana, ordenados alfabéticamente.

---

**$eq** (equal)
Operador de comparación que selecciona documentos donde el valor del campo es igual al valor especificado. Es el operador implícito al escribir `{ campo: valor }`.

**$exists**
Operador de elemento que filtra documentos según si el campo existe (`true`) o no existe (`false`) en el documento. Un campo con valor `null` existe; un campo ausente no existe.

**$gt** (greater than)
Operador de comparación que selecciona documentos donde el valor del campo es mayor al valor especificado.

**$gte** (greater than or equal)
Operador de comparación que selecciona documentos donde el valor del campo es mayor o igual al valor especificado.

**$in**
Operador de comparación que selecciona documentos donde el campo contiene alguno de los valores del array especificado. En campos array, coincide si algún elemento del array del documento está en la lista.

**$lt** (less than)
Operador de comparación que selecciona documentos donde el valor del campo es menor al valor especificado.

**$lte** (less than or equal)
Operador de comparación que selecciona documentos donde el valor del campo es menor o igual al valor especificado.

**$ne** (not equal)
Operador de comparación que selecciona documentos donde el valor del campo NO es igual al valor especificado.

**$nin** (not in)
Operador de comparación que selecciona documentos donde el campo NO contiene ninguno de los valores del array especificado. Complemento de `$in`.

**$type**
Operador de elemento que selecciona documentos donde el campo es de un tipo BSON específico. Acepta alias de cadena como `"string"`, `"int"`, `"decimal"`, `"bool"`, `"date"`, `"objectId"`, `"array"`.

**AND implícito**
Comportamiento por defecto de MongoDB cuando el objeto filtro tiene múltiples campos: el documento debe cumplir TODAS las condiciones para ser retornado.

**Operador de consulta** (query operator)
Expresión en mongosh que modifica la búsqueda de documentos. Se distinguen por el prefijo `$`. Categorías: comparación, lógico, elemento, array, evaluación.

**Rango de valores**
Patrón de query que combina `$gte` y `$lte` (o `$gt` y `$lt`) en el mismo campo para seleccionar documentos con valores dentro de un intervalo numérico o de fecha.
