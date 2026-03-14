# Rúbrica de Evaluación — Semana 11

**$lookup y $unwind: Joins en MongoDB**

## Criterios de Evaluación

### 🧠 Conocimiento (30%)

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| Explica `$lookup` | 10 | Describe correctamente localField, foreignField, from, as |
| Explica `$unwind` | 10 | Describe correctamente el efecto de descomponer arrays |
| Embed vs Reference | 10 | Identifica cuándo usar cada estrategia de modelado |
| **Total** | **30** | |

### 💪 Desempeño (40%)

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| $lookup básico | 15 | Join correcto entre dos colecciones con campo de unión |
| $unwind en array resultado | 15 | Descompone correctamente el array generado por $lookup |
| Pipeline $lookup + $unwind + $group | 10 | Encadena las tres etapas sin errores |
| **Total** | **40** | |

### 📦 Producto (30%)

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| Setup.js ejecuta sin errores | 5 | Datos de prueba bien insertados |
| Pipeline 1 — join básico | 5 | $lookup funcional con datos reales del dominio |
| Pipeline 2 — $unwind + acumuladores | 5 | Descompone el array y aplica $sum/$count |
| Pipeline 3 — join complejo | 5 | Usa $lookup con pipeline (lookup avanzado) o múltiples etapas |
| Pipeline 4 — análisis completo | 5 | Pipeline 4+ etapas respondiendo pregunta de negocio |
| Calidad de código | 5 | Comentarios en español, campos en inglés, indentación correcta |
| **Total** | **30** | |

## Nota Mínima de Aprobación

- Mínimo **70%** en cada tipo de evidencia (21/30, 28/40, 21/30)
- Scripts funcionales en MongoDB 7.0
- Dominio asignado implementado con originalidad
