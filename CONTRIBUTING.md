# Guía de Contribución

¡Gracias por tu interés en mejorar este bootcamp! 🎉

## ¿Cómo contribuir?

### Reportar errores

Abre un [Issue](https://github.com/ergrato-dev/bc-mongodb-ce/issues) con:

- Semana y archivo donde encontraste el error
- Descripción del problema
- Query o comando que produce el error (si aplica)
- Versión de MongoDB / Node.js usada

### Proponer mejoras

1. Haz fork del repositorio
2. Crea una rama descriptiva:
   ```bash
   git checkout -b fix/week-05-crud_iii_actualizacion_y_eliminacion-typo-query
   # o
   git checkout -b feat/week-10-aggregation_pipeline_ii_acumuladores_avanzados-new-exercise
   ```
3. Realiza tus cambios siguiendo las convenciones del proyecto
4. Abre un Pull Request hacia `main`

## Convenciones

- **Colecciones e índices**: `snake_case` en inglés (`product_reviews`)
- **Campos y variables**: `camelCase` en inglés (`createdAt`, `totalAmount`)
- **Comentarios y docs**: siempre en **español**
- **Indentación**: 2 espacios en archivos `.js` y `.md`
- **MongoDB**: compatibilidad con MongoDB **7.0** obligatoria

## Qué NO aceptamos

- Soluciones completas a los proyectos semanales (previenen el aprendizaje)
- Cambios que rompan la progresión didáctica de las semanas
- Dependencias externas no justificadas

## Código de Conducta

Este proyecto sigue el [Código de Conducta](CODE_OF_CONDUCT.md) de Contributor
Convenant v2.1. Revisa el archivo completo antes de contribuir.

Reporta violaciones a través de los canales indicados en
[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
