# Rúbrica de Evaluación — Semana 14

## Conocimiento 🧠 (30%)

| Criterio | Indicador | Puntos |
|----------|-----------|--------|
| Explica la diferencia entre índice text y 2dsphere | Menciona tipo de dato e índice apropiado | 10 pts |
| Describe qué es `textScore` | Explica relevancia y uso de `$meta` | 10 pts |
| Diferencia `$near` vs `$geoWithin` | Respuesta vs distancia vs área | 10 pts |

## Desempeño 💪 (40%)

| Criterio | Indicador | Puntos |
|----------|-----------|--------|
| Índice de texto con `$text` funcional | `explain()` muestra TEXT índice | 15 pts |
| Búsqueda ordenada por `textScore` | Resultados en orden de relevancia | 10 pts |
| Índice `2dsphere` creado correctamente | `getIndexes()` muestra `2dsphere` | 15 pts |

## Producto 📦 (30%)

| Criterio | Indicador | Puntos |
|----------|-----------|--------|
| Índice text aplicado al dominio | Campo descriptivo en colección propia | 10 pts |
| Consulta `$near` funcional con dominio | Resultado con `$maxDistance` real | 10 pts |
| Proyección con `textScore` incluida | Documentos ordenados por relevancia | 10 pts |

**Mínimo para aprobar: 70% en cada categoría**
