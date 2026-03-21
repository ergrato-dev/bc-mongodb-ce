# Glosario — Semana 06

Tipos BSON y Subdocumentos

## Términos A–Z

**BSON**
Binary JSON. Formato binario de serialización usado por MongoDB para almacenar
documentos. Extiende JSON con tipos adicionales como `ObjectId`, `Date`,
`Decimal128`, `NumberInt` y `NumberLong`.

**Decimal128**
Tipo BSON de alta precisión (128 bits) para valores monetarios y cálculos
que requieren exactitud decimal. Evita los errores de redondeo del float:
`Decimal128("49.99")`.

**Dot notation**
Sintaxis para acceder a campos dentro de subdocumentos usando el punto (`.`)
como separador: `"address.city"`, `"contact.phone.mobile"`. Siempre entre
comillas en object keys.

**ObjectId**
Tipo BSON de 12 bytes que MongoDB asigna automáticamente al campo `_id`.
Garantiza unicidad global y contiene la fecha de creación del documento
(accesible con `.getTimestamp()`).

**NumberInt**
Constructor BSON para enteros de 32 bits (Int32). Uso recomendado para
cantidades, edades, años: `NumberInt(42)`.

**NumberLong**
Constructor BSON para enteros de 64 bits (Int64). Para valores grandes como
IDs externos o contadores de alto volumen: `NumberLong(1500000)`.

**Subdocumento**
Documento JSON anidado como valor de un campo en otro documento. Permite
modelar datos relacionados que siempre se leen juntos:
`address: { city: "Bogotá", country: "Colombia" }`.

**$type**
Operador de consulta que filtra documentos por el tipo BSON de un campo:
`{ salary: { $type: "decimal" } }`.
