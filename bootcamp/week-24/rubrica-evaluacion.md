# Rúbrica de Evaluación — Semana 24: Proyecto Final Capstone

## Distribución de Puntaje

| Tipo de Evidencia     | Peso | Descripción                                           |
|-----------------------|------|-------------------------------------------------------|
| Conocimiento 🧠       | 30%  | Comprensión de patrones, transacciones e índices      |
| Desempeño 💪          | 40%  | Ejercicios ejecutados correctamente                   |
| Producto 📦           | 30%  | Proyecto capstone entregable y funcional              |

---

## Conocimiento 🧠 (30 puntos)

| Criterio                                                                       | Puntaje |
|--------------------------------------------------------------------------------|---------|
| Explica cuándo usar Extended Reference vs. Bucket pattern                      | 10      |
| Describe las garantías ACID de las transacciones multi-documento en MongoDB    | 10      |
| Identifica qué índices cubren el pipeline de agregación de su dominio          | 10      |

### Niveles de logro

| Nivel    | Descripción                                                          |
|----------|----------------------------------------------------------------------|
| Excelente (9–10) | Explicación precisa con ejemplos del dominio propio         |
| Satisfactorio (7–8) | Explicación correcta pero sin ejemplos concretos         |
| En proceso (5–6) | Explicación parcial o con errores menores                   |
| Insuficiente (0–4) | No demuestra comprensión del concepto                     |

---

## Desempeño 💪 (40 puntos)

| Criterio                                                                       | Puntaje |
|--------------------------------------------------------------------------------|---------|
| Ejercicio 01: Implementa 2 patrones de diseño correctamente en `mongosh`       | 15      |
| Ejercicio 02: Transacción multi-documento con `withTransaction()` en Node.js   | 15      |
| Ambos ejercicios ejecutan sin errores en MongoDB 7.0                           | 10      |

### Niveles de logro

| Nivel    | Descripción                                                          |
|----------|----------------------------------------------------------------------|
| Excelente (9–10) | Scripts executables, bien comentados, resultado correcto      |
| Satisfactorio (7–8) | Ejecuta con resultado correcto, comentarios mínimos        |
| En proceso (5–6) | Ejecuta con errores menores o resultado parcial              |
| Insuficiente (0–4) | No ejecuta o resultado incorrecto                           |

---

## Producto 📦 (30 puntos)

| Criterio                                                                       | Puntaje |
|--------------------------------------------------------------------------------|---------|
| Proyecto con al menos 5 colecciones modeladas con patrones avanzados           | 10      |
| Pipeline de agregación de 5+ etapas con `$lookup` y `$group`                  | 10      |
| Integración Node.js: CRUD + transacciones + manejo de errores completo         | 10      |

### Niveles de logro

| Nivel    | Descripción                                                          |
|----------|----------------------------------------------------------------------|
| Excelente (9–10) | Proyecto complete, coherente con el dominio, sin errores       |
| Satisfactorio (7–8) | Todas las funciones implementadas, algunas optimizaciones faltantes |
| En proceso (5–6) | Funciones parciales o pipeline sin `$lookup`                 |
| Insuficiente (0–4) | Proyecto no funcional o sin relación con el dominio          |

---

## Criterios de Aprobación Final

- Mínimo **70%** en cada tipo de evidencia (21/30, 28/40, 21/30)
- Todos los scripts `.js` ejecutan sin errores en `mongosh` o Node.js
- El proyecto está adaptado **coherentemente** al dominio asignado
- No hay copia de implementaciones de otros aprendices
- Entrega dentro del plazo establecido por el instructor

---

## Nota Final

$$\text{Nota} = \frac{(Conocimiento \times 0.30) + (Desempeño \times 0.40) + (Producto \times 0.30)}{100} \times 5$$
