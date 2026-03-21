# Glosario — Semana 04

Términos MongoDB introducidos esta semana, ordenados alfabéticamente.

---

**$all**
Operador de array que selecciona documentos donde el campo array contiene todos los valores especificados en el array del operador. El orden no importa: `{ tags: { $all: ["a","b"] } }` coincide si el array contiene "a" y "b", en cualquier posición.

**$and** (explícito)
Operador lógico que une múltiples expresiones con AND. Necesario cuando se requieren dos condiciones `$or` independientes sobre el mismo objeto, ya que dos claves iguales se sobrescriben. Sintaxis: `{ $and: [ expr1, expr2 ] }`.

**$elemMatch**
Operador de array que selecciona documentos donde al menos un elemento del campo array cumple **todas** las condiciones especificadas en la misma expresión. Diferencia clave con `$in`: `$elemMatch` aplica múltiples condiciones al mismo elemento.

**$nor**
Operador lógico que selecciona documentos que **no cumplen ninguna** de las condiciones del array. Equivalente a NOT(A OR B). Sintaxis: `{ $nor: [ expr1, expr2 ] }`.

**$not**
Operador lógico que niega una expresión de operador. Se aplica a un campo específico y envuelve una expresión de operador (no un valor directo). Ejemplo: `{ price: { $not: { $gt: 100 } } }`.

**$or**
Operador lógico que selecciona documentos que cumplen **al menos una** de las condiciones del array. Sintaxis: `{ $or: [ expr1, expr2 ] }`.

**$size**
Operador de array que selecciona documentos donde el campo array tiene exactamente el número de elementos especificado. Solo acepta valores exactos; no admite comparadores como `$gt`.

**AND implícito**
Comportamiento del objeto filtro de MongoDB: múltiples campos en el mismo objeto se combinan con AND. El documento debe cumplir todas las condiciones. Ver semana 03.

**Operador de array**
Categoría de operadores de consulta que trabajan sobre campos de tipo array: `$elemMatch`, `$all`, `$size`. Permiten filtrar documentos según el contenido o tamaño de sus arrays.

**Operador lógico**
Categoría de operadores que combinan o niegan condiciones: `$and`, `$or`, `$not`, `$nor`. Operan sobre expresiones completas, no sobre valores individuales de campo.
