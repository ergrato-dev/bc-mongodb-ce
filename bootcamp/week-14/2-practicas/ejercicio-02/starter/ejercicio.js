// Semana 14: Índices de Texto y Geoespaciales
// Ejercicio 02 — Consultas Geoespaciales con 2dsphere
// ============================================================

// ============================================================
// PASO 1: Crear el índice 2dsphere
// ============================================================

// El índice 2dsphere permite consultas sobre coordenadas
// en la superficie terrestre usando geometría esférica.
// Requiere que el campo sea un objeto GeoJSON.
// Descomenta las siguientes líneas:

// // Crear índice 2dsphere en el campo location
// db.stores.createIndex({ location: "2dsphere" })

// // Verificar el índice creado
// db.stores.getIndexes()
// // Observa: "key": { "location": "2dsphere" }

// ============================================================
// PASO 2: Buscar tiendas cercanas con $near
// ============================================================

// $near ordena los resultados por distancia al punto de referencia.
// $maxDistance se expresa en METROS.
// Descomenta las siguientes líneas:

// // Tiendas a menos de 1.5 km del punto [-74.0721, 4.7110]
// db.stores.find({
//   location: {
//     $near: {
//       $geometry: {
//         type: "Point",
//         coordinates: [-74.0721, 4.7110]
//       },
//       $maxDistance: 1500  // metros
//     }
//   }
// },
// { name: 1, category: 1, _id: 0 })
// // Los resultados vienen del más cercano al más lejano

// ============================================================
// PASO 3: Filtrar tiendas dentro de un rectángulo
// ============================================================

// $geoWithin con $box define un rectángulo por sus dos esquinas.
// Coordenadas: [esquina inferior izquierda (SW), esquina superior derecha (NE)]
// Descomenta las siguientes líneas:

// // Tiendas dentro del área central de Bogotá
// db.stores.find({
//   location: {
//     $geoWithin: {
//       $box: [
//         [-74.0950, 4.7000],  // esquina SW [longitud, latitud]
//         [-74.0600, 4.7400]   // esquina NE [longitud, latitud]
//       ]
//     }
//   }
// },
// { name: 1, category: 1, _id: 0 })

// ============================================================
// PASO 4: Combinar $near con filtros normales
// ============================================================

// Las queries geoespaciales se pueden combinar con otros filtros.
// Descomenta las siguientes líneas:

// // Tiendas de electrónica a menos de 2 km que estén abiertas
// db.stores.find({
//   location: {
//     $near: {
//       $geometry: {
//         type: "Point",
//         coordinates: [-74.0721, 4.7110]
//       },
//       $maxDistance: 2000
//     }
//   },
//   category: "electronics",
//   isOpen: true
// },
// { name: 1, category: 1, isOpen: 1, _id: 0 })

// // Verificar con explain que usa el índice 2dsphere
// db.stores.find({
//   location: {
//     $near: {
//       $geometry: { type: "Point", coordinates: [-74.0721, 4.7110] },
//       $maxDistance: 2000
//     }
//   }
// }).explain("executionStats")
