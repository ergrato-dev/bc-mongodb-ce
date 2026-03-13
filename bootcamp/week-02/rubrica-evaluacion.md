# Rúbrica de Evaluación — Semana 02

## CRUD I: Inserción y Lectura

**Puntaje total**: 100 puntos
**Mínimo aprobatorio**: 70 puntos en cada tipo de evidencia

---

## 🧠 Conocimiento (30 pts)

| Criterio | Excelente (30) | Satisfactorio (21) | En progreso (15) |
| -------- | -------------- | ------------------ | ---------------- |
| insertOne vs insertMany | Explica la diferencia, el campo `insertedId`/`insertedIds` y la opción `ordered` | Conoce ambos métodos pero no menciona el valor de retorno | Solo conoce `insertOne()` |
| Cursor vs documento | Explica que `find()` retorna un cursor iterable y `findOne()` retorna un objeto o `null` | Identifica la diferencia pero no puede explicar qué es un cursor | Confunde ambos métodos |
| Proyecciones | Distingue inclusión (`1`) y exclusión (`0`), sabe que no se pueden mezclar (excepto `_id`) | Aplica proyecciones básicas con alguna imprecisión | No entiende la diferencia entre inclusión y exclusión |

---

## 💪 Desempeño (40 pts)

| Criterio | Excelente (40) | Satisfactorio (28) | En progreso (20) |
| -------- | -------------- | ------------------ | ---------------- |
| Inserción | Inserta con `insertOne()` e `insertMany()`, verifica con `find()`, usa `ordered: false` | Inserta correctamente pero sin verificar ni usar opciones | No puede insertar múltiples documentos |
| Proyecciones | Aplica inclusión, exclusión y oculta `_id` en el mismo ejercicio | Aplica uno de los dos modos | Solo usa `find()` sin proyección |
| Cursor methods | Combina `.sort()`, `.limit()` y `.skip()` en una misma consulta | Usa al menos dos métodos correctamente | Solo conoce `.limit()` |
| `findOne()` | Usa `findOne()` con filtro y verifica resultado `null` cuando no hay coincidencia | Usa `findOne()` correctamente con filtro simple | Solo ejecuta `findOne()` sin argumento |

---

## 📦 Producto (30 pts)

| Criterio | Excelente (30) | Satisfactorio (21) | En progreso (15) |
| -------- | -------------- | ------------------ | ---------------- |
| Inserción del dominio | Inserta mínimo 8 documentos representativos del dominio con tipos BSON adecuados | 5–7 documentos con tipos parcialmente correctos | Menos de 5 documentos o datos genéricos |
| Queries de lectura | Mínimo 4 queries: con filtro, con proyección, con cursor methods y `findOne()` | 3 queries funcionales | Solo `db.collection.find({})` |
| Adaptación al dominio | Los campos y datos reflejan el negocio asignado de manera coherente | Esquema funcional pero con campos genéricos | Campos de ejemplo no adaptados al dominio |

---

_Semana 02 · Bootcamp MongoDB CE_
