---
name: "Nuevo archivo de teoría"
description: "Crea un archivo de teoría completo para 1-teoria/ siguiendo la estructura estándar del bootcamp: máx 120 líneas, en español, con ejemplos de queries en inglés y referencias a docs oficiales de MongoDB."
argument-hint: "Semana (ej: week-09), nombre del tema (ej: 02-operadores-acumuladores), conceptos clave a cubrir y nivel de dificultad relativo a la semana anterior"
mode: "agent"
---

# Nuevo archivo de teoría — Bootcamp MongoDB CE

Crea un archivo de teoría para `1-teoria/` siguiendo los estándares del bootcamp.

## Reglas de extensión

- **Objetivo**: ~100 líneas por archivo
- **Máximo**: 120 líneas — si se supera, dividir en archivos temáticos
- **Mínimo**: 60 líneas para que el contenido sea completo
- Dividir por sub-temas: `01-introduccion.md`, `02-operadores.md`, `03-avanzado.md`

## Convenciones obligatorias

- **Idioma**: español (explicaciones, títulos, comentarios pedagógicos)
- **Código**: inglés (colecciones, campos, variables)
- **Comentarios de código**: español cuando explican conceptos de aprendizaje
- **Sin ASCII art**: usar SVG para diagramas (referenciar desde `../0-assets/`)
- **Fuentes oficiales**: enlazar siempre a docs de MongoDB 7.0
- **Máximo 2 ejemplos de código por sección**
- **Sin output de documentos** después de cada query de ejemplo

## Estructura requerida del archivo

```markdown
# [Título del Tema]

## 🎯 Objetivos

Al finalizar este archivo, comprenderás:

- Concepto 1
- Concepto 2
- Concepto 3

## 1. [Primer concepto]

Explicación en español...

```js
// Explicación del concepto en comentario
// Colecciones y campos siempre en inglés
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } }
])
```

## 2. [Segundo concepto]

...

## 3. Ejemplos Prácticos

Caso de uso real (e-commerce, inventario, analytics):

```js
// Ejemplo del mundo real con comentario en español
...
```

## 4. Casos de Uso Frecuentes

Cuándo usar [concepto] en un proyecto real...

## ⚠️ Errores Comunes

- Error 1: [descripción + cómo evitarlo]
- Error 2: ...

## 📚 Referencias

- [MongoDB Docs — Tema](https://www.mongodb.com/docs/...)
- [mongosh Docs](https://www.mongodb.com/docs/mongodb-shell/)

## ✅ Checklist

Antes de continuar a las prácticas, verifica que puedes responder:

- [ ] ¿Para qué sirve [concepto 1]?
- [ ] ¿Cuándo usarías [concepto 2]?
- [ ] ¿Qué diferencia hay entre [A] y [B]?
- [ ] ¿Cómo afecta [concepto] al rendimiento?
```

## Estilo de los ejemplos de código

Los ejemplos deben ser **educativos**, no solo descriptivos:

```js
// ✅ CORRECTO — comenta para enseñar
// $group agrupa documentos por el campo _id.
// Todos los documentos con el mismo valor de _id quedan en un solo grupo.
// $sum: 1 cuenta cuántos documentos hay en cada grupo.
db.orders.aggregate([
  {
    $group: {
      _id: "$status",          // campo por el que agrupamos
      count: { $sum: 1 },      // contador de documentos
      total: { $sum: "$amount" } // suma de montos
    }
  }
])
```

```js
// ❌ INCORRECTO — sin comentarios educativos
db.orders.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }])
```

## Cómo referenciar assets SVG

Si el tema necesita un diagrama, referenciar el SVG de `0-assets/`:

```markdown
![Diagrama del pipeline de agregación](../0-assets/01-aggregation-pipeline.svg)
```

Si el SVG no existe, indicar que debe crearse con el prompt `svg-diagrama`.

## Instrucciones para el agente

1. Crear el archivo en `bootcamp/week-XX/1-teoria/NN-nombre-tema.md`
2. Respetar el límite de máx 120 líneas — dividir si el tema lo requiere
3. Incluir obligatoriamente: Objetivos (3-4 ítems), secciones numeradas (4-6), Errores Comunes, Referencias (2-3), Checklist (4 ítems como preguntas)
4. Todos los ejemplos de código en JavaScript para mongosh
5. Nunca incluir output de documentos después de las queries
6. Referenciar documentación oficial de MongoDB 7.0
7. Si el tema requiere diagrama, indicar nombre del SVG a generar con el prompt `svg-diagrama`
8. Verificar que la sintaxis sea compatible con MongoDB 7.0 / mongosh

## Datos del archivo de teoría a crear

$input
