# Rúbrica de Evaluación — Semana 03

## CRUD II: Operadores de Consulta

**Puntaje total**: 100 puntos  
**Mínimo aprobatorio**: 70 puntos en cada tipo de evidencia

---

## 🧠 Conocimiento (30 pts)

| Criterio | Excelente (30) | Satisfactorio (21) | En progreso (15) |
| -------- | -------------- | ------------------ | ---------------- |
| Comparación | Explica y distingue los 6 operadores ($eq, $ne, $gt, $lt, $gte, $lte) con ejemplos | Conoce al menos 4 operadores correctamente | Solo conoce $gt y $lt |
| $in / $nin | Explica cuándo usar $in/$nin y la diferencia con igualdad simple | Usa $in correctamente pero no $nin | No diferencia $in de $eq |
| $exists / $type | Explica $exists para campos opcionales y $type con códigos BSON | Usa $exists pero no $type | No conoce ninguno de los dos |

---

## 💪 Desempeño (40 pts)

| Criterio | Excelente (40) | Satisfactorio (28) | En progreso (20) |
| -------- | -------------- | ------------------ | ---------------- |
| Comparación numérica | Filtra por rango con $gt/$lt y verifica con explain() | Filtra correctamente con 1-2 operadores | Solo igualdad directa |
| $in con múltiples valores | Usa $in con 3+ valores y combina con otros filtros | Usa $in básico con 2 valores | No usa $in |
| $exists | Encuentra documentos con y sin campo específico | Usa $exists: true correctamente | No puede usar $exists |
| Combinación | Combina 3+ operadores en una sola query correctamente | Combina 2 operadores | Queries con un solo operador |

---

## 📦 Producto (30 pts)

| Criterio | Excelente (30) | Satisfactorio (21) | En progreso (15) |
| -------- | -------------- | ------------------ | ---------------- |
| Queries de rango | Al menos 2 queries con rangos usando $gt/$lt/$gte/$lte | 1 query de rango funcional | No hay queries de rango |
| $in aplicado al dominio | Usa $in para filtrar por categorías/estados del dominio | $in con valores hardcodeados sin contexto | No usa $in |
| Queries combinadas | Mínimo 2 queries con 2+ operadores combinados | 1 query combinada | Todas las queries con operador único |

---

_Semana 03 · Bootcamp MongoDB CE_
