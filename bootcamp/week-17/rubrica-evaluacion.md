# Rúbrica de Evaluación — Semana 17

## Conocimiento 🧠 (30%)

| Criterio | Puntaje |
|---|---|
| Explica qué indica `totalDocsExamined` y por qué debe minimizarse | 10 pts |
| Describe la diferencia entre `COLLSCAN` e `IXSCAN` en el plan de ejecución | 10 pts |
| Explica cuándo un índice de cobertura evita acceder al documento completo | 10 pts |

## Desempeño 💪 (40%)

| Criterio | Puntaje |
|---|---|
| Identifica `COLLSCAN` en explain() y crea el índice que lo resuelve | 15 pts |
| Usa `hint()` para forzar un índice específico y verifica el cambio en el plan | 10 pts |
| Implementa una covered query donde `totalDocsExamined: 0` | 15 pts |

## Producto 📦 (30%)

| Criterio | Puntaje |
|---|---|
| Optimize al menos 2 consultas del dominio asignado con índices y explain() | 15 pts |
| Covered query funcional en la colección principal del dominio | 15 pts |

**Puntaje mínimo de aprobación**: 70 puntos sobre 100
