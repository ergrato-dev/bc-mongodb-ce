// Semana 14: Índices de Texto y Geoespaciales
// Ejercicio 01 — Búsquedas de Texto con $text
// ============================================================

// ============================================================
// PASO 1: Crear el índice de texto
// ============================================================

// Un índice de texto tokeniza el contenido de los campos para permitir
// búsquedas de palabras clave. Solo puede haber 1 por colección.
// Descomenta las siguientes líneas:

// // Crear índice text en title y body con idioma español
// db.articles.createIndex(
//   { title: "text", body: "text" },
//   { default_language: "spanish" }
// )

// // Verificar el índice creado
// db.articles.getIndexes()
// // Observa: key con "title": "text", "body": "text"

// ============================================================
// PASO 2: Buscar con $text y $search
// ============================================================

// $text busca documentos que tengan las palabras en el campo indexado.
// MongoDB aplica stemming (reduce palabras a su raíz).
// Descomenta las siguientes líneas:

// // Buscar artículos que contengan "rendimiento"
// db.articles.find(
//   { $text: { $search: "rendimiento" } },
//   { title: 1, category: 1, _id: 0 }
// )

// // Buscar artículos sobre "mongodb" que NO hablen de "cluster"
// db.articles.find(
//   { $text: { $search: "mongodb -cluster" } },
//   { title: 1, _id: 0 }
// )

// // Buscar una frase exacta usando comillas
// db.articles.find(
//   { $text: { $search: '"alta disponibilidad"' } },
//   { title: 1, _id: 0 }
// )

// ============================================================
// PASO 3: Ordenar por relevancia con textScore
// ============================================================

// MongoDB calcula un puntaje de relevancia para cada resultado.
// Cuanto más veces aparece la palabra buscada, mayor el score.
// Descomenta las siguientes líneas:

// // Buscar y ordenar por relevancia descendente
// db.articles.find(
//   { $text: { $search: "mongodb rendimiento indices" } },
//   { title: 1, score: { $meta: "textScore" }, _id: 0 }
// ).sort({ score: { $meta: "textScore" } })

// ============================================================
// PASO 4: Combinar $text con otros filtros
// ============================================================

// $text puede combinarse con filtros normales en el mismo find().
// Descomenta las siguientes líneas:

// // Artículos con "mongodb" publicados en 2024
// db.articles.find(
//   {
//     $text: { $search: "mongodb" },
//     publishedYear: 2024
//   },
//   { title: 1, author: 1, publishedYear: 1, _id: 0 }
// )

// // Artículos sobre "rendimiento", solo de categoría "performance" o "aggregation"
// db.articles.find(
//   {
//     $text: { $search: "rendimiento" },
//     category: { $in: ["performance", "aggregation"] }
//   },
//   { title: 1, category: 1, _id: 0 }
// )
