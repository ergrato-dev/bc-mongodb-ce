# Rúbrica de Evaluación — Semana 15

## Conocimiento 🧠 (30%)

| Criterio | Indicador | Puntos |
|----------|-----------|--------|
| Explica Extended Reference vs $lookup | Menciona cuándo evitar joins en lectura | 10 pts |
| Describe el patrón Bucket | Menciona N por documento y cálculo de tamaño | 10 pts |
| Explica Computed Pattern | Diferencia entre calcular vs leer precomputado | 10 pts |

## Desempeño 💪 (40%)

| Criterio | Indicador | Puntos |
|----------|-----------|--------|
| Extended Reference implementado | Campos del autor embebidos en posts | 15 pts |
| Bucket insertando medición en array | `$push` a `readings` con `$inc` de count | 10 pts |
| Campo computado actualizado al escribir | `totalRevenue` recalculado en $set | 15 pts |

## Producto 📦 (30%)

| Criterio | Indicador | Puntos |
|----------|-----------|--------|
| Extended Reference adaptado al dominio | Campos frecuentes del maestro embebidos | 10 pts |
| Bucket con un ciclo de inserción completo | Al menos 5 mediciones en un bucket | 10 pts |
| Valor computado correcto en dominio | Campo calculado accesible sin pipeline | 10 pts |

**Mínimo para aprobar: 70% en cada categoría**
