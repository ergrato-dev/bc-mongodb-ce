# 🤖 Instrucciones para GitHub Copilot

## 📋 Contexto del Bootcamp

Este es un **Bootcamp de MongoDB Community Edition — De Cero a Héroe** estructurado
para llevar a estudiantes desde cero conocimiento de bases de datos no relacionales
hasta un nivel de MongoDB Developer Junior o Backend Developer Junior.

### 📊 Datos del Bootcamp

- **Duración**: 24 semanas (~6 meses)
- **Dedicación semanal**: 8 horas
- **Total de horas**: ~192 horas
- **Nivel de entrada**: Cero (sin experiencia previa en bases de datos NoSQL)
- **Nivel de salida**: MongoDB Developer Junior / Backend Developer Junior
- **Enfoque**: Progresión desde fundamentos absolutos hasta MongoDB avanzado,
  optimización de rendimiento y modelado de datos
- **Motor único**: MongoDB 7.0 Community Edition vía Docker (desde la semana 1)

---

## 🎯 Objetivos de Aprendizaje

Al finalizar el bootcamp, los estudiantes serán capaces de:

- ✅ Comprender el modelo de documentos y colecciones de MongoDB
- ✅ Realizar operaciones CRUD completas con `mongosh` y drivers
- ✅ Diseñar esquemas de documentos con patrones avanzados (Embed vs. Reference)
- ✅ Construir pipelines de agregación complejos con `$lookup`, `$group`, `$unwind`
- ✅ Crear y gestionar índices para optimizar el rendimiento de consultas
- ✅ Implementar transacciones multi-documento (ACID desde MongoDB 4.0)
- ✅ Comprender y configurar replicación y alta disponibilidad
- ✅ Aplicar mejores prácticas de seguridad en MongoDB
- ✅ Modelar datos para casos de uso del mundo real (e-commerce, IoT, analytics)

---

## 📚 Estructura del Bootcamp

### Distribución por Etapas

#### **Etapa 0: Fundamentos de MongoDB (Semanas 1–8)** — 64 horas

- Qué es NoSQL vs SQL: documentos, colecciones, BSON
- Instalación y uso de `mongosh` vía Docker
- CRUD: `insertOne()`, `insertMany()`, `find()`, `updateOne()`, `deleteOne()`
- Operadores de consulta: `$eq`, `$ne`, `$gt`, `$lt`, `$in`, `$nin`, `$exists`
- Operadores lógicos: `$and`, `$or`, `$not`, `$nor`
- Proyecciones, `.sort()`, `.limit()`, `.skip()`
- Tipos BSON: `ObjectId`, `Date`, `NumberInt`, `NumberLong`, `Decimal128`, arrays, subdocumentos
- Consultas en arrays: `$elemMatch`, `$all`, `$size`
- Consultas en subdocumentos y dot notation
- Operadores de actualización: `$set`, `$unset`, `$inc`, `$push`, `$pull`, `$addToSet`
- Índices simples: `createIndex()`, `dropIndex()`, `getIndexes()`
- `explain()` básico para analizar consultas

#### **Etapa 1: MongoDB Intermedio (Semanas 9–16)** — 64 horas

- Aggregation Pipeline: `$match`, `$project`, `$group`, `$sort`, `$limit`, `$skip`
- Operadores de agregación: `$sum`, `$avg`, `$min`, `$max`, `$count`, `$first`, `$last`
- `$lookup` para joins entre colecciones
- `$unwind` para descomponer arrays
- `$addFields`, `$replaceRoot`, `$merge`, `$out`
- `$facet` para múltiples pipelines en una sola consulta
- Índices compuestos, índices de texto (`$text`), índices geoespaciales (`2dsphere`)
- Índices TTL para datos con expiración automática
- Índices únicos y sparse
- Modelado de datos: patrón Embed vs. Reference
- Patrones avanzados: Bucket, Outlier, Computed, Extended Reference
- Validación de esquemas con `$jsonSchema`
- Transacciones multi-documento con sesiones

#### **Etapa 2: MongoDB Avanzado (Semanas 17–24)** — 64 horas

- Optimización de rendimiento: `explain("executionStats")`, índices de cobertura
- Change Streams para aplicaciones en tiempo real
- GridFS para almacenamiento de archivos grandes
- Atlas Search (Full-Text Search avanzado) y operadores `$search`
- Replicación: Replica Sets, elecciones, read/write concerns
- Alta disponibilidad y recuperación ante fallos
- Administración: backups, `mongodump`/`mongorestore`, monitoreo
- Seguridad: autenticación, autorización con RBAC, encriptación
- MongoDB con aplicaciones: patrones de integración con Node.js/Python
- Casos de uso avanzados: time-series collections, OLAP con Atlas Data Federation

---

## 🗂️ Estructura de Carpetas

Cada semana sigue esta estructura estándar:

```
bootcamp/week-XX/
├── README.md                 # Descripción y objetivos de la semana
├── rubrica-evaluacion.md     # Criterios de evaluación detallados
├── 0-assets/                 # Diagramas SVG (modelo de datos, flujo, pipelines)
├── 1-teoria/                 # Material teórico (archivos .md)
├── 2-practicas/              # Ejercicios guiados paso a paso
│   └── ejercicio-XX/
│       ├── README.md         # Instrucciones y pasos
│       ├── starter/
│       │   ├── setup.js      # Crea colecciones e inserta datos de prueba
│       │   └── ejercicio.js  # Queries comentadas para descomentar
│       └── solution/
│           ├── setup.js
│           └── ejercicio.js
├── 3-proyecto/               # Proyecto semanal integrador
│   ├── README.md
│   └── starter/
│       ├── setup.js          # Esquema genérico adaptable al dominio
│       └── proyecto.js       # TODOs para implementar
├── 4-recursos/               # Recursos adicionales
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/               # Términos MongoDB clave (A–Z)
    └── README.md
```

### 📁 Carpetas Raíz

- **`assets/`**: Recursos visuales globales (logos, headers, banners)
- **`docs/`**: Documentación general del bootcamp
- **`scripts/`**: Scripts de automatización, docker-compose y utilidades
- **`bootcamp/`**: Contenido semanal del bootcamp

### 🗂️ Orden de Creación de Cada Semana

Al desarrollar el contenido de una nueva semana, seguir **siempre** este orden:

1. `README.md` — Descripción general, objetivos, distribución del tiempo, navegación
2. `rubrica-evaluacion.md` — Tabla de criterios y puntajes
3. `1-teoria/` — Archivos markdown numerados (`01-`, `02-`, …)
4. `0-assets/` — Diagramas SVG vinculados a la teoría
5. `2-practicas/` — Ejercicios con `starter/` + `solution/`
6. `3-proyecto/` — Proyecto integrador semanal
7. `4-recursos/` — Ebooks gratuitos, videografía, webgrafía
8. `5-glosario/README.md` — Términos MongoDB de la semana ordenados A–Z

---

## 🎓 Componentes de Cada Semana

### 1. Teoría (1-teoria/)

- Archivos markdown con explicaciones conceptuales
- Ejemplos de código MongoDB completos y ejecutables
- Referencia a diagrama SVG al inicio (después de objetivos)
- Referencias a documentación oficial (MongoDB Docs)

#### 📏 Límites de Extensión (NON-NEGOTIABLE)

El público objetivo tiene déficit de atención. Textos extensos generan abandono.

| Elemento           | Límite                                          |
| ------------------ | ----------------------------------------------- |
| Líneas por archivo | **Máximo 120**                                  |
| Objetivos          | 3–4 ítems                                       |
| Secciones          | 4–6 secciones numeradas (`## 1.`, `## 2.`...)   |
| Checklist          | **4 ítems** formulados como preguntas concretas |
| Referencias        | 2–3 links                                       |

**Qué NO incluir en teoría:**

- ❌ Tablas de comparación de más de 4 filas
- ❌ Output de documentos después de cada query de ejemplo
- ❌ Secciones de "Herramientas recomendadas" (van en `4-recursos/`)
- ❌ Notas de compatibilidad extensas (una línea `>` es suficiente)
- ❌ Más de 2 ejemplos de código por sección

### 2. Prácticas (2-practicas/)

Los ejercicios son **tutoriales guiados**, NO tareas con TODOs. El estudiante
aprende descomentando queries de MongoDB.

#### 📋 Formato de Ejercicios

**README.md del ejercicio:**

```markdown
### Paso 1: Nombre del Concepto

Explicación del concepto con ejemplo:

\`\`\`js
// Ejemplo explicativo
db.products.find(
  { category: "electronics", price: { $lt: 500 } },
  { name: 1, price: 1, _id: 0 }
)
\`\`\`

**Abre `starter/ejercicio.js`** y descomenta la sección correspondiente.
```

**starter/ejercicio.js:**

```js
// ============================================
// PASO 1: Nombre del Concepto
// ============================================

// Explicación breve del concepto
// Descomenta las siguientes líneas:

// db.products.find(
//   { category: "electronics", price: { $lt: 500 } },
//   { name: 1, price: 1, _id: 0 }
// )
```

**solution/ejercicio.js:**

```js
// ============================================
// PASO 1: Nombre del Concepto
// ============================================

db.products.find(
  { category: "electronics", price: { $lt: 500 } },
  { name: 1, price: 1, _id: 0 }
)
```

#### ❌ NO usar este formato en ejercicios:

```js
// ❌ INCORRECTO — Este formato es para PROYECTOS, no ejercicios
db.products.find({ category: "electronics" }) // TODO: Agregar filtro de precio
```

#### ✅ Usar este formato en ejercicios:

```js
// ✅ CORRECTO — Query comentada para descomentar
// Descomenta las siguientes líneas:
// db.products.find(
//   { category: "electronics", price: { $lt: 500 } }
// )
```

### 3. Proyecto (3-proyecto/)

A diferencia de los ejercicios, el proyecto SÍ usa TODOs para que el estudiante
implemente desde cero.

**Las instrucciones de los proyectos deben ser genéricas y adaptables a
cualquier dominio.**

#### 🏛️ Política de Dominios Únicos (Anticopia)

**Cada aprendiz recibe un dominio único asignado por el instructor:**

- 📖 Biblioteca
- 💊 Farmacia
- 🏋️ Gimnasio
- 🏫 Escuela
- 🏬 Tienda de mascotas
- 🏪 Restaurante
- 🏦 Banco
- 🚕 Agencia de taxis
- 🏥 Hospital
- 🎥 Cine
- 🏨 Hotel
- ✈️ Agencia de viajes
- 🚗 Concesionario de autos
- 👗 Tienda de ropa
- 🛠️ Taller mecánico
- Y otros dominios únicos según cantidad de aprendices

**Objetivo**: Prevenir copia entre estudiantes y fomentar implementaciones originales.

**⚠️ IMPORTANTE para desarrollo de contenidos:**

- Los ejemplos en los proyectos **NO deben usar dominios de la lista anterior**
- Usar ejemplos genéricos o dominios diferentes (ej: Museo, Planetario, Acuario)
- Esto evita "regalar" soluciones a aprendices con esos dominios asignados

#### 📋 Formato del starter del proyecto:

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

db.items.insertMany([
  {
    // TODO: Definir los campos de tu entidad principal
    name: "Item de ejemplo",
    createdAt: new Date()
  }
])

// TODO: Implementar la consulta o pipeline principal
// Debe incluir: [requisito 1], [requisito 2], [requisito 3]
```

### 4. Recursos (4-recursos/)

- **ebooks-free/**: Libros gratuitos de MongoDB y bases de datos NoSQL
- **videografia/**: Videos tutoriales recomendados
- **webgrafia/**: Documentación oficial, artículos y referencias

### 5. Glosario (5-glosario/)

- Términos MongoDB ordenados alfabéticamente
- Definiciones claras y concisas
- Ejemplos de código cuando aplique

---

## 📝 Convenciones de Código MongoDB

### Estilo de Queries

```js
// ✅ BIEN — camelCase para campos, comentarios en español, indentación clara
// Obtener los 10 productos más vendidos de la categoría electrónica
db.orders.aggregate([
  { $match: { status: "completed", "items.category": "electronics" } },
  { $unwind: "$items" },
  { $match: { "items.category": "electronics" } },
  {
    $group: {
      _id: "$items.productId",
      productName: { $first: "$items.name" },
      totalSold: { $sum: "$items.quantity" },
      totalRevenue: { $sum: { $multiply: ["$items.price", "$items.quantity"] } }
    }
  },
  { $sort: { totalSold: -1 } },
  { $limit: 10 }
])

// ❌ MAL — sin indentación, nombres en español, sin comentarios
db.ordenes.aggregate([{$match:{estado:"completado"}},{$group:{_id:"$productoId",total:{$sum:"$cantidad"}}}])
```

### Reglas de Nomenclatura

- **Colecciones**: snake_case, plural, en inglés (`users`, `product_reviews`, `order_items`)
- **Campos**: camelCase, descriptivos (`firstName`, `createdAt`, `isActive`, `totalAmount`)
- **Base de datos**: snake_case (`bootcamp_db`, `ecommerce_db`)
- **Índices**: `<colección>_<campo>_<tipo>` (ej: `users_email_unique`, `products_name_text`)
- **Variables en scripts**: camelCase en inglés (`userData`, `orderPipeline`)

### Tipos BSON — Uso Correcto

#### ✅ Patrón estándar del bootcamp

| Tipo           | Cuándo usar                                      | Ejemplo                          |
| -------------- | ------------------------------------------------ | -------------------------------- |
| `ObjectId`     | Siempre para `_id` (default automático)          | `_id: ObjectId()`                |
| `Date`         | Fechas y timestamps                              | `createdAt: new Date()`          |
| `NumberInt`    | Enteros pequeños (edad, cantidad, año)           | `age: NumberInt(25)`             |
| `NumberLong`   | Enteros grandes (IDs externos, contadores)       | `views: NumberLong(1000000)`     |
| `Decimal128`   | Valores monetarios (precio, monto)               | `price: Decimal128("19.99")`     |
| `Boolean`      | Flags de estado                                  | `isActive: true`                 |
| `Array`        | Listas de valores o subdocumentos                | `tags: ["mongodb", "nosql"]`     |
| `Object`       | Subdocumentos embebidos                          | `address: { city: "Bogotá" }`   |

> ⚠️ **Regla para Copilot**: En `mongosh` interactivo, los tipos se inferirán.
> En `setup.js` con datos de prueba, usar constructores BSON explícitos para montos
> monetarios (`Decimal128`) y para valores que requieran precisión de tipo.

### Formato de Scripts `.js`

- Comentarios y explicaciones siempre en **español**
- Nombres de colecciones, campos y variables siempre en **inglés**
- Indentación de 2 espacios (estándar JavaScript)
- Cada etapa de un pipeline en su propia línea
- Strings con comillas dobles en objetos JSON, simples en `mongosh`
- Longitud de línea máxima: 80 caracteres

---

## 🌐 Idioma y Nomenclatura

### ⚠️ REGLA CRÍTICA: Inglés Técnico + Español Educativo

**NOMENCLATURA TÉCNICA: SIEMPRE EN INGLÉS**

- ✅ Nombres de colecciones, campos, índices, bases de datos
- ✅ Nombres de variables y funciones en scripts
- ✅ Nombres de archivos (`.js`, `.md`)

**COMENTARIOS Y DOCUMENTACIÓN: SIEMPRE EN ESPAÑOL**

- ✅ Comentarios en scripts (`// comentario`)
- ✅ READMEs y documentación
- ✅ Mensajes de error y validación
- ✅ Explicaciones educativas

### Ejemplos Correctos

```js
// ✅ CORRECTO — Nomenclatura en inglés, comentarios en español
// Obtener el promedio de calificaciones por instructor excluyendo borradores
db.reviews.aggregate([
  { $match: { status: "published", type: "course" } },
  {
    $group: {
      _id: "$instructorId",
      avgRating: { $avg: "$rating" },
      totalReviews: { $sum: 1 }
    }
  },
  { $sort: { avgRating: -1 } }
])
```

---

## 🎨 Recursos Visuales y Estándares de Diseño

### Formato de Assets

- ✅ **Preferir SVG** para todos los diagramas (modelo de datos, pipeline, arquitectura)
- ❌ **NO usar ASCII art** para diagramas o visualizaciones
- ✅ Usar PNG/JPG solo para screenshots

### Tema Visual

- 🌙 **Tema dark** para todos los assets visuales
- ❌ **Sin degradés** (gradients) en diseños
- ✅ Colores sólidos y contrastes claros
- ✅ Paleta base: `#00ED64` (verde MongoDB) como color primario, `#001E2B` (azul oscuro MongoDB)
- Fondos: `#001E2B` y `#023430`
- Acentos: `#00684A`, `#00ED64`

### Tipografía

- ✅ **Fuentes sans-serif** exclusivamente
- ✅ Recomendadas: Inter, Roboto, Open Sans, System UI
- ❌ **NO usar fuentes serif**

---

## 🐳 Entorno MongoDB con Docker

MongoDB CE se usa **desde la semana 1** con Docker para garantizar:

- Versión idéntica en todos los entornos (`mongo:7.0`)
- Sin conflictos con MongoDB instalado en el sistema
- Reset fácil del entorno para repetir ejercicios desde cero
- Reproducibilidad en Linux, macOS y Windows

### Imagen recomendada

```
mongo:7.0
```

### docker-compose.yml

El archivo `scripts/docker-compose.yml` incluye la configuración lista para usar.
Comandos principales:

```bash
# Levantar MongoDB en background
docker compose -f scripts/docker-compose.yml up -d

# Abrir mongosh interactivo
docker compose -f scripts/docker-compose.yml exec mongodb \
  mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db

# Ejecutar un archivo .js contra el contenedor
docker compose -f scripts/docker-compose.yml exec -T mongodb \
  mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
  bootcamp_db --file /dev/stdin < ruta/al/setup.js

# Detener el contenedor (conserva datos)
docker compose -f scripts/docker-compose.yml down

# Reset completo — elimina volumen de datos
docker compose -f scripts/docker-compose.yml down -v
```

### Credenciales de desarrollo

| Variable                      | Valor         |
| ----------------------------- | ------------- |
| `MONGO_INITDB_ROOT_USERNAME`  | `bootcamp`    |
| `MONGO_INITDB_ROOT_PASSWORD`  | `bootcamp123` |
| `MONGO_INITDB_DATABASE`       | `bootcamp_db` |
| Puerto host                   | `27017`       |

> ⚠️ **Solo para entorno local de aprendizaje.** Nunca usar estas
> credenciales en producción.

### Instrucciones para Copilot

Al generar contenido para cualquier semana:

- Incluir el comando de conexión Docker al inicio del README de cada ejercicio y proyecto
- Referenciar siempre `MongoDB 7.0` en menciones de versión
- Verificar que la sintaxis usada sea compatible con MongoDB 7.0 / `mongosh`
- Añadir bloque "Cómo ejecutar" en el README:

````markdown
## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Levanta el contenedor:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   ```
3. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
4. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
````

---

## 🔐 Mejores Prácticas

### ⚠️ Gestión de Dependencias Node.js — Regla de Oro

> Ver documento completo: [`docs/gestion-dependencias.md`](docs/gestion-dependencias.md)

**PROHIBIDO usar rangos de versión en cualquier `package.json` del proyecto:**

```jsonc
// ❌ PROHIBIDO
"mongodb": "^7.1.1"
"mongodb": ">=6.0.0"
"mongodb": "~7.1.0"

// ✅ OBLIGATORIO — versión exacta
"mongodb": "7.1.1"
```

- Versión actual pinnada: `mongodb@7.1.1` (auditada 2026-04-04, 0 CVEs)
- Siempre incluir `"engines": {"node": ">=18.0.0"}` en cada `package.json`
- Al actualizar una dependencia: ejecutar `npm audit` y documentar en
  `docs/gestion-dependencias.md` antes de hacer commit

### Seguridad en MongoDB

- **NUNCA** construir queries con concatenación de strings (prevención de NoSQL Injection)
- Usar siempre autenticación (`--authenticationDatabase admin`) en conexiones
- Aplicar principio de mínimo privilegio con roles de MongoDB (`readWrite`, `read`)
- No exponer el puerto 27017 a internet sin firewall/autenticación
- Enmascarar o hashear datos sensibles (`passwordHash`, nunca `password` en texto plano)
- Validar esquemas del lado del servidor con `$jsonSchema` en colecciones importantes

### Calidad de Código MongoDB

- Evitar `db.collection.find({})` sin proyección en colecciones grandes — siempre especificar campos
- Usar `explain("executionStats")` para detectar `COLLSCAN` innecesarios
- Preferir índices compuestos sobre múltiples índices simples cuando aplique
- Documentar el propósito de cada pipeline stage con comentarios
- Usar `$match` lo más temprano posible en los pipelines de agregación
- Limitar resultados con `.limit()` o `$limit` cuando no se necesiten todos los documentos

### Rendimiento

- Indexar campos usados frecuentemente en queries `find()` y en `$match` de pipelines
- Evitar `$where` y operaciones JavaScript del lado del servidor (lento, inseguro)
- Usar índices de cobertura (covered queries) para proyecciones de alto volumen
- Preferir `$lookup` con índices en los campos `localField`/`foreignField`
- Usar `allowDiskUse: true` en pipelines de agregación con grandes volúmenes

---

## 📊 Evaluación

Cada semana incluye **tres tipos de evidencias**:

1. **Conocimiento 🧠** (30%): Evaluaciones teóricas, cuestionarios sobre MongoDB
2. **Desempeño 💪** (40%): Ejercicios prácticos ejecutados correctamente
3. **Producto 📦** (30%): Proyecto entregable funcional adaptado al dominio asignado

### Criterios de Aprobación

- Mínimo **70%** en cada tipo de evidencia
- Entrega puntual de proyectos
- Scripts funcionales y bien documentados
- **Implementación coherente con el dominio asignado**
- **Originalidad**: Sin copia de implementaciones de otros aprendices

---

## 🚀 Metodología de Aprendizaje

### Estrategias Didácticas

- **Aprendizaje Basado en Proyectos (ABP)**: Proyectos semanales que modelan casos reales
- **Dominios Únicos**: Cada aprendiz aplica conceptos a su dominio asignado
- **Práctica Deliberada**: Ejercicios de complejidad incremental
- **Coding Challenges**: Problemas tipo entrevista técnica en semanas avanzadas
- **Code Review**: Revisión de queries y pipelines entre estudiantes
- **Live Coding**: Sesiones en vivo con modelado de datos en tiempo real

### Distribución del Tiempo (8h/semana)

- **Teoría**: 2–2.5 horas
- **Prácticas**: 3–3.5 horas
- **Proyecto**: 2–2.5 horas

---

## 🤖 Instrucciones para Copilot

### Límites de Respuesta

1. **Divide respuestas largas**
   - ❌ **NUNCA generar respuestas que superen los límites de tokens**
   - ✅ **SIEMPRE dividir contenido extenso en múltiples entregas**
   - ✅ Crear contenido por secciones, esperar confirmación del usuario
   - Para semanas completas: dividir por carpetas (`teoria → practicas → proyecto`)

### Generación de Código MongoDB

1. **Usa siempre el estilo definido**
   - camelCase para campos y variables
   - snake_case para colecciones (plural, inglés)
   - Comentarios en español
   - Una etapa de pipeline por línea con indentación de 2 espacios

2. **Motor único**
   - ✅ **MongoDB 7.0 vía Docker** para todas las semanas (1–24)
   - Indicar claramente si una feature requiere versión mínima específica
   - Incluir siempre el comando de conexión Docker en cada README
   - Ver sección [🐳 Entorno MongoDB con Docker](#-entorno-mongodb-con-docker)

3. **Scripts `.js` estructurados**
   - Incluir siempre un `setup.js` con datos de prueba representativos
   - Comenzar con `// Semana XX: Tema` en el encabezado de cada archivo
   - Usar `// ============================================` como separador de secciones

### Creación de Contenido

1. **Estructura clara y progresiva**
   - De lo simple a lo complejo
   - Conceptos construidos sobre conocimientos previos
   - Repetición espaciada de conceptos clave (ej: `$match` aparece en múltiples semanas)

2. **Ejemplos del mundo real**
   - Casos de uso que un developer encontrará en el trabajo
   - Datos de prueba realistas (no `foo`, `bar`, `test1`)
   - Errores comunes que los estudiantes cometerán (y cómo evitarlos)

3. **Compatibilidad**
   - Indicar explícitamente cuando una feature es solo MongoDB 7.0+ vs versiones anteriores
   - Preferir operadores de aggregation pipeline disponibles desde MongoDB 4.4+

### Diagramas de Modelo de Datos (assets SVG)

- Usar notación de documento (bloques con campos anidados) para colecciones
- Mostrar relaciones Embed vs. Reference con flechas diferenciadas
- Indicar cardinalidad en las relaciones (1:1, 1:N, N:M)
- Tema dark: fondo `#001E2B`, documentos `#023430`, bordes `#00ED64`
- Mostrar solo las colecciones relevantes al tema de la semana

---

## 📚 Referencias Oficiales

- **MongoDB Docs**: https://www.mongodb.com/docs/
- **mongosh Docs**: https://www.mongodb.com/docs/mongodb-shell/
- **MongoDB University (free)**: https://learn.mongodb.com/
- **Aggregation Pipeline Docs**: https://www.mongodb.com/docs/manual/aggregation/
- **Schema Design Patterns**: https://www.mongodb.com/blog/post/building-with-patterns-a-summary
- **MongoDB Docker Hub**: https://hub.docker.com/_/mongo

---

## 🔗 Enlaces Importantes

- **Repositorio**: https://github.com/ergrato-dev/bc-mongodb-ce
- **Documentación general**: [docs/README.md](docs/README.md)
- **Primera semana**: [bootcamp/week-01-introduccion_a_mongodb_y_nosql/README.md](bootcamp/week-01-introduccion_a_mongodb_y_nosql/README.md)

---

## ✅ Checklist para Nuevas Semanas

Cuando crees contenido para una nueva semana:

- [ ] Crear estructura de carpetas completa
- [ ] `README.md` con objetivos, estructura y navegación
- [ ] Material teórico en `1-teoria/`
- [ ] Diagrama SVG en `0-assets/` (mínimo 1 por semana)
- [ ] Ejercicios prácticos en `2-practicas/` (mínimo 2 ejercicios)
- [ ] Proyecto integrador en `3-proyecto/`
- [ ] `setup.js` con datos de prueba en ejercicios y proyecto
- [ ] Recursos adicionales en `4-recursos/`
- [ ] Glosario de términos en `5-glosario/`
- [ ] Rúbrica de evaluación
- [ ] Verificar coherencia con semanas anteriores
- [ ] Revisar progresión de dificultad
- [ ] Probar que todos los `.js` son ejecutables en `mongosh`
- [ ] Verificar bloque "Cómo ejecutar" con Docker en README
- [ ] Confirmar compatibilidad de sintaxis con MongoDB 7.0

---

## 💡 Notas Finales

- **Prioridad**: Claridad sobre brevedad
- **Enfoque**: MongoDB práctico sobre teoría abstracta
- **Objetivo**: Preparar developers listos para trabajar con datos no relacionales reales
- **Filosofía**: Fundamentos sólidos de documentos primero, optimización y escalado después

---

_Última actualización: Marzo 2026_
_Versión: 1.0_
