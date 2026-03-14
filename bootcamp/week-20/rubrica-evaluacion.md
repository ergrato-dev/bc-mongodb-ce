# Rúbrica de Evaluación — Semana 20

## GridFS y Time Series Collections

### Distribución por Tipo de Evidencia

| Tipo | Porcentaje | Puntos |
|---|---|---|
| Conocimiento 🧠 | 30% | 30 pts |
| Desempeño 💪 | 40% | 40 pts |
| Producto 📦 | 30% | 30 pts |

---

### Conocimiento 🧠 (30 pts)

| Criterio | Indicador de logro | Puntos |
|---|---|---|
| Límite BSON y GridFS | Explica por qué existe GridFS y describe `fs.files` vs `fs.chunks` | 10 pts |
| Time Series creation | Define `timeField`, `metaField` y `granularity` correctamente | 10 pts |
| Diferencias colección normal vs TS | Articula ventajas de Time Series para datos temporales de alta frecuencia | 10 pts |

---

### Desempeño 💪 (40 pts)

| Criterio | Indicador de logro | Puntos |
|---|---|---|
| Ejercicio 01: subir archivo con GridFS | `insertOne` de metadata + chunks simulados correctamente | 15 pts |
| Ejercicio 01: consultar y eliminar archivos | `find` en `fs.files` y `deleteOne` correctos | 10 pts |
| Ejercicio 02: Time Series insert + aggregate | Crea colección TS, inserta docs con timeField y agrupa por período | 15 pts |

---

### Producto 📦 (30 pts)

| Criterio | Indicador de logro | Puntos |
|---|---|---|
| Setup de colección TS del dominio | Time Series collection creada con campos correctos | 10 pts |
| Pipeline de análisis temporal | `$match` + `$group` por período con métricas calculadas | 10 pts |
| Adaptación al dominio asignado | Nombres de colecciones y campos coherentes con el dominio | 10 pts |

---

### Escala de Calificación

| Rango | Calificación |
|---|---|
| 90–100 pts | Excelente — supera los criterios |
| 75–89 pts | Satisfactorio — cumple los criterios |
| 60–74 pts | En proceso — requiere ajustes |
| < 60 pts | Insuficiente — revisar conceptos base |

**Mínimo para aprobar**: 70 pts (70%)
