// Semana 14: Índices de Texto y Geoespaciales
// Proyecto Semanal — Implementa búsquedas de texto y geoespaciales
// ============================================================

// INSTRUCCIONES:
// 1. Carga setup.js primero para insertar los datos de prueba
// 2. Adapta los campos y colecciones a tu dominio asignado
// 3. Implementa cada TODO completamente
// 4. Verifica los resultados con las queries de validación

// ============================================================
// TODO 1: Índice de texto en campo descriptivo
// ============================================================

// Identifica los campos con texto descriptivo en tu dominio.
// Crea un índice text en title y description (o los equivalentes).

// TODO: Crea el índice de texto
// db.listings.createIndex(
//   { title: "text", description: "text" },
//   { default_language: "spanish" }
// )

// TODO: Busca al menos 2 términos relevantes en tu dominio
// db.listings.find({ $text: { $search: "/* término 1 */" } })
// db.listings.find({ $text: { $search: "/* término 2 */" } })

// ============================================================
// TODO 2: Ordenar por relevancia con textScore
// ============================================================

// Busca un término y muestra los resultados ordenados por score.

// TODO: Búsqueda con textScore
// db.listings.find(
//   { $text: { $search: "/* término */" } },
//   { title: 1, score: { $meta: "textScore" }, _id: 0 }
// ).sort({ score: { $meta: "textScore" } })

// ============================================================
// TODO 3: Índice 2dsphere y consulta $near
// ============================================================

// Crea el índice geoespacial y busca venues cercanas a un punto.

// TODO: Crea el índice 2dsphere
// db.venues.createIndex({ location: "2dsphere" })

// TODO: Busca venues a menos de N metros de un punto de referencia
// db.venues.find({
//   location: {
//     $near: {
//       $geometry: {
//         type: "Point",
//         coordinates: [ /* longitud */, /* latitud */ ]
//       },
//       $maxDistance: /* metros */
//     }
//   }
// },
// { name: 1, type: 1, _id: 0 })

// ============================================================
// TODO 4: Combinar búsqueda con filtro de dominio
// ============================================================

// Combina la búsqueda de texto O geoespacial con un filtro adicional.

// TODO: Texto + filtro (ejemplo: solo "premium" con "soporte")
// db.listings.find({
//   $text: { $search: "/* término */" },
//   category: "/* categoría */"
// })

// TODO: Geo + filtro (ejemplo: solo venues activas cercanas)
// db.venues.find({
//   location: { $near: { $geometry: { ... }, $maxDistance: ... } },
//   isActive: true
// })
