# Rúbrica de Evaluación — Semana 21

## Replicación y Alta Disponibilidad

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
| Arquitectura Replica Set | Describe los roles Primary, Secondary y Arbiter y cuándo se usa cada uno | 10 pts |
| Proceso de elección | Explica qué ocurre cuando el Primary cae y cómo `priority` afecta la elección | 10 pts |
| writeConcern vs readConcern | Diferencia `w:1`, `w:"majority"` y los niveles de `readConcern` | 10 pts |

---

### Desempeño 💪 (40 pts)

| Criterio | Indicador de logro | Puntos |
|---|---|---|
| Ejercicio 01: rs.status() y rs.conf() | Interpreta la salida y describe el estado de cada miembro | 15 pts |
| Ejercicio 01: oplog | Consulta `local.oplog.rs` e identifica operaciones recientes | 10 pts |
| Ejercicio 02: writeConcern y readPreference | Ejecuta operaciones con `writeConcern` explícito y verifica comportamiento | 15 pts |

---

### Producto 📦 (30 pts)

| Criterio | Indicador de logro | Puntos |
|---|---|---|
| Script de diagnóstico | Script que ejecuta `rs.status()` y muestra estado de cada miembro | 10 pts |
| Operaciones con writeConcern | Al menos 2 operaciones con diferentes niveles de `writeConcern` | 10 pts |
| Análisis del oplog | Consulta e interpreta las últimas 5 entradas del oplog del dominio | 10 pts |

---

### Escala de Calificación

| Rango | Calificación |
|---|---|
| 90–100 pts | Excelente |
| 75–89 pts | Satisfactorio |
| 60–74 pts | En proceso |
| < 60 pts | Insuficiente |

**Mínimo para aprobar**: 70 pts (70%)
