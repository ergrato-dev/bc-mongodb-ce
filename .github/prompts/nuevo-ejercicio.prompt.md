---
name: "Nuevo ejercicio práctico"
description: "Crea un ejercicio guiado para 2-practicas/ con el patrón de código comentado para descomentar. El estudiante aprende descomentando queries MongoDB, NO implementando desde cero."
argument-hint: "Semana (ej: week-09), nombre del ejercicio (ej: ejercicio-01-match-y-group), concepto a practicar y colecciones de datos necesarias"
mode: "agent"
---

# Nuevo ejercicio práctico — Bootcamp MongoDB CE

Crea un ejercicio guiado para `2-practicas/` usando el patrón de código comentado.

## ⚠️ REGLA FUNDAMENTAL: Patrón de Descomentar

Los ejercicios son **tutoriales guiados**, NO tareas con TODOs.

```js
// ✅ CORRECTO — query comentada para descomentar
// El estudiante aprende descomentando estas líneas:
// db.orders.aggregate([
//   { $match: { status: "completed" } },
//   { $group: { _id: "$customerId", total: { $sum: "$amount" } } }
// ])

// ❌ INCORRECTO — esto es para PROYECTOS, no ejercicios
db.orders.aggregate([
  { $match: { status: "completed" } }
  // TODO: Agregar $group para sumar por cliente
])
```

## Estructura de carpetas del ejercicio

```
2-practicas/ejercicio-XX-nombre/
├── README.md          # Instrucciones paso a paso con el código explicado
└── starter/
    ├── setup.js       # Inserta datos de prueba en bootcamp_db
    └── ejercicio.js   # Queries comentadas para descomentar por pasos
```

> ⚠️ **Sin carpeta `solution/`**: Los ejercicios NO tienen solución oculta.
> El código comentado ES la solución — basta con descomentarlo.

## Formato del README.md del ejercicio

```markdown
# Ejercicio XX — [Título del Ejercicio]

## 🎯 Objetivo

Aprender [concepto específico] de MongoDB 7.0.

## 📋 Prerrequisitos

- [Concepto de la semana anterior]
- [Tema de teoría relacionado]

## ⏱️ Tiempo estimado: [30-60] minutos

## Cómo ejecutar

1. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
2. Conéctate a mongosh:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
3. Abre `starter/ejercicio.js` y copia/pega cada sección descomentada en mongosh.

---

### Paso 1: [Nombre del Concepto]

Explicación del concepto con ejemplo:

```js
// Descripción de lo que hace esta query
db.products.find(
  { category: "electronics", price: { $lt: 500 } },
  { name: 1, price: 1, _id: 0 }
)
```

**Abre `starter/ejercicio.js`** y descomenta la sección del Paso 1.

Deberías ver documentos con los campos `name` y `price` de la categoría electronics.

---

### Paso 2: [Siguiente Concepto]

...
```

## Formato del starter/setup.js

```js
// ============================================
// Semana XX: Tema — Datos de prueba
// ============================================
// Ejecutar antes del ejercicio para insertar datos en bootcamp_db.
// Comando:
//   docker compose -f scripts/docker-compose.yml exec -T mongodb \
//     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
//     bootcamp_db --file /dev/stdin < starter/setup.js

// Limpiar colecciones previas
db.products.drop()
db.orders.drop()

// Insertar datos de prueba representativos
db.products.insertMany([
  {
    name: "Laptop Pro",
    category: "electronics",
    price: Decimal128("899.99"),
    stock: NumberInt(15),
    isActive: true,
    createdAt: new Date("2024-01-10")
  },
  // ... más documentos realistas
])

print("✅ Datos de prueba cargados correctamente")
print(`   products: ${db.products.countDocuments()} documentos`)
```

## Formato del starter/ejercicio.js

```js
// ============================================
// Semana XX: Tema — Ejercicio XX
// ============================================

// ============================================
// PASO 1: Nombre del Concepto
// ============================================

// Descripción breve del concepto.
// Descomenta las siguientes líneas:

// db.products.find(
//   { category: "electronics", price: { $lt: 500 } },
//   { name: 1, price: 1, _id: 0 }
// )

// ============================================
// PASO 2: Siguiente Concepto
// ============================================

// Descripción breve del concepto.
// Descomenta las siguientes líneas:

// db.products.find(
//   {
//     $or: [
//       { category: "electronics" },
//       { price: { $gt: 1000 } }
//     ]
//   }
// )
```

## Instrucciones para el agente

1. Crear la carpeta `bootcamp/week-XX/2-practicas/ejercicio-XX-nombre/`
2. Crear `README.md` con pasos numerados y ejemplos explicativos del concepto
3. Crear `starter/setup.js` con datos de prueba realistas (no `foo`, `bar`, `test1`)
4. Crear `starter/ejercicio.js` con código completamente comentado por secciones (PASO 1, PASO 2…)
5. El README incluye el código correcto para que el estudiante lo entienda antes de descomentar
6. Incluir el bloque "Cómo ejecutar" con comandos Docker exactos del proyecto
7. Usar tipos BSON correctos en `setup.js`: `Decimal128` para montos, `NumberInt` para enteros, `new Date()` para fechas
8. No crear carpeta `solution/`
9. El ejercicio debe poder completarse en 30-60 minutos
10. Verificar que toda la sintaxis sea compatible con MongoDB 7.0 / mongosh

## Datos del ejercicio a crear

$input
