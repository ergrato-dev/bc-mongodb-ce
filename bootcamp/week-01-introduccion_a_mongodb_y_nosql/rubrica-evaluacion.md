# Rúbrica de Evaluación — Semana 01

## Introducción a MongoDB y NoSQL

**Puntaje total**: 100 puntos
**Mínimo aprobatorio**: 70 puntos en cada tipo de evidencia

---

## 🧠 Conocimiento (30 pts)

| Criterio | Excelente (30) | Satisfactorio (21) | En progreso (15) |
| -------- | -------------- | ------------------ | ---------------- |
| SQL vs NoSQL | Explica el modelo documental y justifica cuándo usar MongoDB vs un RDBMS | Identifica diferencias principales con alguna imprecisión | Confunde conceptos o no da ejemplos concretos |
| Tipos BSON | Identifica y justifica el uso de `ObjectId`, `Decimal128`, `NumberInt`, `Date` | Conoce los tipos pero confunde cuándo usar cada uno | Solo reconoce `String`; no diferencia los tipos numéricos |
| Jerarquía MongoDB | Describe correctamente: servidor → db → colección → documento | Describe la jerarquía con un error menor | No diferencia colección de documento |

---

## 💪 Desempeño (40 pts)

| Criterio | Excelente (40) | Satisfactorio (28) | En progreso (20) |
| -------- | -------------- | ------------------ | ---------------- |
| Docker y mongosh | Levanta el contenedor, se conecta y navega sin asistencia | Necesita consultar los comandos pero lo logra | No puede conectarse o comete errores de autenticación |
| find() y findOne() | Usa ambos métodos con y sin filtros correctamente | Usa `find()` bien pero confunde `findOne()` | Solo ejecuta `find()` sin argumentos |
| Proyecciones | Aplica inclusión y exclusión de campos, oculta `_id` cuando corresponde | Aplica proyecciones básicas pero mezcla `1` y `0` | No usa proyecciones o genera errores de sintaxis |
| Métodos de cursor | Combina `.sort()`, `.limit()` y `.skip()` correctamente | Usa al menos dos métodos de cursor | Solo usa `.limit()` |

---

## 📦 Producto (30 pts)

| Criterio | Excelente (30) | Satisfactorio (21) | En progreso (15) |
| -------- | -------------- | ------------------ | ---------------- |
| Esquema coherente | Refleja las entidades del dominio asignado con tipos BSON adecuados | Esquema funcional con 1–2 tipos BSON subóptimos | Esquema mínimo sin tipos BSON explícitos |
| Inserción de datos | Mínimo 5 documentos realistas con subdocumentos o arrays | 5 documentos planos sin complejidad | Menos de 5 documentos o datos no realistas |
| Consultas find() | Al menos 3 queries con filtros, proyecciones y cursor methods | 2 queries operativas | Solo `db.collection.find()` sin argumentos |

---

_Semana 01 · Bootcamp MongoDB CE_
