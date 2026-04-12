---
name: "Nuevo proyecto semanal"
description: "Crea el proyecto integrador de una semana en 3-proyecto/. Usa TODOs (a diferencia de los ejercicios) con dominio genérico adaptable. Incluye starter/ con setup.js y proyecto.js con código base."
argument-hint: "Semana (ej: week-09), tema integrador (ej: aggregation pipeline con $group y $lookup), conceptos a demostrar"
mode: "agent"
---

# Nuevo proyecto semanal — Bootcamp MongoDB CE

Crea el proyecto integrador para `3-proyecto/` con TODOs genéricos adaptables
a cualquier dominio.

## Diferencia clave vs ejercicios

| Ejercicio (`2-practicas/`)        | Proyecto (`3-proyecto/`)                 |
| --------------------------------- | ---------------------------------------- |
| Código comentado para descomentar | TODOs para implementar                   |
| Concepto único y guiado           | Integra múltiples conceptos              |
| Sin `solution/`                   | Con `solution/` (oculto en `.gitignore`) |
| 30-60 minutos                     | 2-3 horas                                |
| El código completo ya existe      | El estudiante lo implementa              |

## Estructura de carpetas del proyecto

```
3-proyecto/
├── README.md            # Instrucciones genéricas adaptables al dominio
└── starter/
    ├── setup.js         # Esquema genérico con datos adaptables
    └── proyecto.js      # TODOs para implementar
```

> ⚠️ **`solution/`** está en `.gitignore`. No la crees en el repositorio.

## 🏛️ Política de Dominios Únicos (Anticopia)

Las instrucciones del proyecto deben ser **genéricas y adaptables** a cualquier dominio.
Los ejemplos de código NO deben usar los dominios de la lista de la clase.

- ❌ No usar: Biblioteca, Farmacia, Gimnasio, Escuela, Restaurante, Hospital, Hotel, etc.
- ✅ Usar ejemplos con: Museo, Acuario, Planetario, o entidades genéricas (`items`, `records`)

## Formato del README.md del proyecto

````markdown
# Proyecto Semana XX — [Título Genérico]

## 🎯 Objetivo

Implementar [concepto de la semana] aplicado a tu dominio asignado.

## 📋 Tu Dominio Asignado

> **El instructor te asignará tu dominio.** Ejemplos:
>
> - 📖 Biblioteca → books, members, loans
> - 💊 Farmacia → medicines, sales, inventory
> - 🏋️ Gimnasio → members, routines, attendance
> - 🍽️ Restaurante → dishes, tables, orders

## ✅ Requisitos Funcionales

Implementa las siguientes queries (adapta los nombres a tu dominio):

1. **[Requisito 1]**: [descripción genérica]
2. **[Requisito 2]**: [descripción genérica]
3. **[Requisito 3]**: [descripción genérica]

## 💡 Cómo adaptar el código

El código starter usa `items` y `records` como colecciones genéricas. Reemplaza:

- `items` → la colección principal de tu dominio
- Los campos del schema → los campos propios de tu entidad
- Los comentarios → los adecuados para tu contexto

## Cómo ejecutar

1. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
````

2. Conecta e implementa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

## 📊 Criterios de Evaluación

| Criterio     | Peso | Descripción                             |
| ------------ | ---- | --------------------------------------- |
| Conocimiento | 30%  | Quiz sobre los conceptos de la semana   |
| Desempeño    | 40%  | Ejercicios prácticos completados        |
| Producto     | 30%  | Este proyecto funcional y bien adaptado |

Para aprobar necesitas mínimo **70%** en cada criterio.

## 🛠️ Entregables

1. `proyecto.js` adaptado a tu dominio con todos los TODOs implementados
2. Screenshots o output de las queries en mongosh
3. `setup.js` adaptado con datos de tu dominio (mínimo 10 documentos por colección)

````

## Formato del starter/setup.js

```js
// ============================================
// PROYECTO SEMANAL: [Título Genérico]
// Semana XX — [Tema]
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado.
// Ejemplos:
//   Biblioteca  → books, members, loans
//   Farmacia    → medicines, sales, inventory
//   Gimnasio    → members, routines, attendance
//   Restaurante → dishes, tables, orders

// TODO: Renombrar las colecciones según tu dominio
// TODO: Ajustar los campos según las entidades de tu dominio

db.items.drop()
db.records.drop()

// Colección principal — adaptar al dominio
db.items.insertMany([
  {
    // TODO: Definir los campos de tu entidad principal
    name: "Item de ejemplo",
    category: "general",
    value: Decimal128("100.00"),
    quantity: NumberInt(10),
    isActive: true,
    createdAt: new Date()
  }
])

// Colección secundaria — adaptar al dominio
db.records.insertMany([
  {
    // TODO: Definir los campos de tu entidad secundaria
    itemId: db.items.findOne()._id,
    type: "record",
    amount: Decimal128("50.00"),
    date: new Date()
  }
])

print("✅ Datos de prueba cargados")
print(`   items: ${db.items.countDocuments()} documentos`)
print(`   records: ${db.records.countDocuments()} documentos`)
````

## Formato del starter/proyecto.js con TODOs

```js
// ============================================
// PROYECTO SEMANAL: [Título Genérico]
// Semana XX — [Tema]
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta cada query a tu dominio asignado.
// Los comentarios indican QUÉ debe hacer cada query.

// ============================================
// PARTE 1: [Primer requisito]
// ============================================

// TODO: Implementar la query que [descripción del requisito 1]
// Debe incluir: [operadores o stages requeridos]
// Colección: items (o la de tu dominio)

// ============================================
// PARTE 2: [Segundo requisito]
// ============================================

// TODO: Implementar la query que [descripción del requisito 2]
// Debe incluir: [operadores o stages requeridos]
// Colección: records (o la de tu dominio)

// ============================================
// PARTE 3: [Tercer requisito — integrador]
// ============================================

// TODO: Implementar la query que une ambas colecciones
// Debe incluir: $lookup entre items y records
// Resultado esperado: [descripción del output]
```

## Instrucciones para el agente

1. Crear `bootcamp/week-XX/3-proyecto/` con la estructura indicada
2. El README usa `items` / `records` como nombres genéricos — el aprendiz los adapta a su dominio
3. En `starter/setup.js`: datos de ejemplo con tipos BSON correctos (Decimal128, NumberInt, Date)
4. En `starter/proyecto.js`: TODOs claros con instrucciones de qué implementar y qué operadores usar
5. **`solution/` NO se debe crear** — ya está en `.gitignore` como `**/solution/`
6. El proyecto debe poder completarse en 2-3 horas
7. Integrar los conceptos clave de la semana (no solo uno)
8. Los ejemplos del README no deben usar dominios de la lista de la clase (Anticopia)
9. Incluir siempre el bloque "Cómo ejecutar" con comandos Docker exactos
10. Verificar sintaxis compatible con MongoDB 7.0 / mongosh

## Datos del proyecto a crear

$input
