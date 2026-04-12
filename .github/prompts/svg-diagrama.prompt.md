---
name: "Diagrama SVG"
description: "Crea un diagrama SVG para 0-assets/ con tema dark, paleta MongoDB (#00ED64), sin degradés, fuentes sans-serif. Útil para modelo de documentos, pipeline de agregación, replica set, flujo de índices y modelo embed vs reference."
argument-hint: "Tipo de diagrama (ej: document-model, aggregation-pipeline, embed-vs-reference, replica-set), semana destino (ej: week-09) y descripción del contenido"
mode: "agent"
---

# Diagrama SVG — Bootcamp MongoDB CE

Crea un diagrama SVG siguiendo los estándares visuales del bootcamp.

## Estándares visuales obligatorios

| Propiedad          | Valor                                              |
| ------------------ | -------------------------------------------------- |
| Tema               | Dark (sin opción light)                            |
| Fondo              | `#001E2B`                                          |
| Sin degradés       | Colores sólidos únicamente                         |
| Fuente principal   | `system-ui, -apple-system, sans-serif`             |
| Lenguaje de labels | Inglés (código) / Español (conceptos pedagógicos)  |

## Paleta de colores

```
FONDO:
  bg-primary:    #001E2B   (fondo del SVG)
  bg-surface:    #023430   (cajas, tarjetas)
  bg-elevated:   #00261F   (elementos destacados)

TEXTO:
  text-primary:  #FFFFFF   (texto principal)
  text-secondary: #B8C4C2  (texto secundario, etiquetas)
  text-muted:    #6B7F7C   (notas, metadata)

ACENTO MongoDB:
  accent:        #00ED64   (verde MongoDB — bordes principales, flechas de acción)
  accent-light:  #71F6BA   (nodos activos, hover)
  accent-dark:   #00684A   (fondos de nodos principales)

ESTADO:
  success:       #00ED64   (operaciones exitosas, documentos insertados)
  warning:       #FFC010   (advertencias, operaciones lentas)
  error:         #F85149   (errores, operaciones fallidas)
  info:          #58A6FF   (información, notas)

BORDES:
  border:        #00684A   (bordes default)
  border-strong: #00ED64   (bordes con énfasis)
```

## Estructura SVG requerida

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="800"
  height="500"
  viewBox="0 0 800 500"
  role="img"
  aria-labelledby="title desc"
>
  <!-- Accesibilidad obligatoria -->
  <title id="title">Nombre del Diagrama</title>
  <desc id="desc">Descripción completa del diagrama para lectores de pantalla</desc>

  <!-- 1. Fondo -->
  <rect width="800" height="500" fill="#001E2B" rx="12"/>

  <!-- 2. Definiciones de marcadores (flechas) -->
  <defs>
    <marker id="arrow-green" markerWidth="10" markerHeight="7"
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#00ED64"/>
    </marker>
    <marker id="arrow-muted" markerWidth="10" markerHeight="7"
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6B7F7C"/>
    </marker>
  </defs>

  <!-- 3. Contenido del diagrama -->
  <!-- ... nodos, flechas, labels ... -->

  <!-- 4. Leyenda (si aplica) -->
</svg>
```

## Tipos de diagramas del bootcamp

### 1. Modelo de Documento (document-model)

Representa la estructura de una colección con sus campos anidados y tipos BSON.

```
┌─────────────────────────────────┐
│  orders (Collection)            │
│─────────────────────────────────│
│  _id:        ObjectId           │
│  customerId: ObjectId  ──────── │──→ customers
│  status:     String             │
│  items: [                       │
│    { productId: ObjectId,       │
│      name: String,              │
│      price: Decimal128 }        │
│  ]                              │
│  createdAt:  Date               │
└─────────────────────────────────┘
```

- Documentos: `bg-surface` (#023430) con borde `accent` (#00ED64)
- Campos tipo ObjectId con referencia: flecha `accent` (#00ED64)
- Arrays embebidos: sangría visual con borde `border` (#00684A)

### 2. Pipeline de Agregación (aggregation-pipeline)

Muestra el flujo de datos etapa por etapa: `$match → $group → $sort → $project`.

- Cada stage: caja `bg-elevated` (#00261F), borde `accent` (#00ED64)
- Flechas entre stages: `accent` (#00ED64)
- Colección de entrada: `bg-surface` (#023430)
- Resultado final: borde `success` (#00ED64) más grueso

### 3. Embed vs Reference (embed-vs-reference)

Compara el patrón de embebido vs referencia con ventajas/desventajas.

```
EMBED                           REFERENCE
┌───────────┐                   ┌───────────┐   ┌───────────┐
│  orders   │                   │  orders   │   │ customers │
│ customer: │                   │customerId:│──→│ _id       │
│  { name,  │                   │           │   │ name      │
│    email }│                   │           │   │ email     │
└───────────┘                   └───────────┘   └───────────┘
```

- Embed: fondo `accent-dark` (#00684A)
- Reference: flechas punteadas `info` (#58A6FF)

### 4. Replica Set (replica-set)

Muestra la topología Primary → Secondary → Secondary con Arbiter opcional.

- Primary: borde `accent` (#00ED64) más grueso
- Secondaries: borde `border` (#00684A)
- Arbiter: borde `warning` (#FFC010)
- Flechas de replicación: `accent-light` (#71F6BA)

### 5. Flujo de Índices (index-flow)

Compara COLLSCAN vs IXSCAN con `explain()`.

- COLLSCAN (lento): borde y flechas `error` (#F85149)
- IXSCAN (rápido): borde y flechas `success` (#00ED64)

## Reglas de tipografía

```xml
<!-- Título del diagrama -->
<text font-family="system-ui, sans-serif" font-size="18" font-weight="700"
      fill="#FFFFFF" text-anchor="middle">Título</text>

<!-- Labels de nodos -->
<text font-family="system-ui, sans-serif" font-size="14" font-weight="600"
      fill="#FFFFFF" text-anchor="middle">Label</text>

<!-- Subtítulos / notas -->
<text font-family="system-ui, sans-serif" font-size="12" font-weight="400"
      fill="#B8C4C2" text-anchor="middle">nota</text>

<!-- Campos de documento (monospace visual) -->
<text font-family="ui-monospace, monospace" font-size="12"
      fill="#B8C4C2">fieldName: Type</text>
```

## Reglas de borde y esquinas

- Cajas principales: `rx="8"` (bordes redondeados suaves)
- Cajas de documento: `rx="4"`
- Fondo del SVG: `rx="12"`
- **Sin `filter: drop-shadow`** ni efectos de sombra
- **Sin `linearGradient` ni `radialGradient`**

## Nombre y ubicación del archivo

```
bootcamp/week-XX/0-assets/NN-nombre-diagrama.svg
```

Donde `NN` es el orden de lectura:
`01-document-model.svg`, `02-aggregation-pipeline.svg`, `03-embed-vs-reference.svg`.

## Instrucciones para el agente

1. Crear el SVG en `bootcamp/week-XX/0-assets/` con nombre descriptivo en kebab-case
2. Respetar la paleta de colores exacta (verificar que no hay degradés)
3. Incluir `<title>` y `<desc>` para accesibilidad
4. Definir marcadores de flecha en `<defs>` para flechas consistentes
5. Fuente: siempre `system-ui, -apple-system, sans-serif`
6. Tamaño recomendado: 800×500 o 800×600 (ajustar según complejidad)
7. Después de crear el SVG, agregar la referencia en el archivo de teoría correspondiente:
   ```markdown
   ![Nombre del diagrama](../0-assets/NN-nombre.svg)
   ```
8. Validar que el SVG es XML válido (sin errores de sintaxis)

## Datos del diagrama a crear

$input
