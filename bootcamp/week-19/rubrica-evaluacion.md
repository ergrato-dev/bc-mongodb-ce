# Rúbrica de Evaluación — Semana 19

## Conocimiento 🧠 (30%)

| Criterio | Puntaje |
|---|---|
| Explica qué es un Change Stream y por qué requiere Replica Set | 10 pts |
| Describe al menos 4 `operationType` distintos y su significado | 10 pts |
| Explica para qué sirve el `resumeToken` y cuándo usarlo | 10 pts |

## Desempeño 💪 (40%)

| Criterio | Puntaje |
|---|---|
| Abre un change stream y captura eventos insert, update y delete | 15 pts |
| Filtra eventos con pipeline `$match` sobre `operationType` y campos | 15 pts |
| Reanuda un change stream usando `resumeAfter` con el token guardado | 10 pts |

## Producto 📦 (30%)

| Criterio | Puntaje |
|---|---|
| Change stream sobre la colección principal del dominio con filtro útil | 15 pts |
| Script que guarda el `resumeToken` y reanuda el stream correctamente | 15 pts |

**Puntaje mínimo de aprobación**: 70 puntos sobre 100
