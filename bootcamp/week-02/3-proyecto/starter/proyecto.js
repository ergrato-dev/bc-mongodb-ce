// ============================================
// PROYECTO SEMANA 02: Poblar y Consultar
// Semana 02 — CRUD I: Inserción y Lectura
// ============================================

// TODO: Reemplaza "items" por la colección de tu dominio en todos los queries


// ============================================
// QUERY 1: Insertar un ítem individualment con insertOne()
// Verificar el _id retornado con print()
// ============================================

// TODO: Implementar la inserción de un documento representativo de tu dominio
// Debe incluir tipos BSON adecuados (Decimal128 para montos, NumberInt para enteros,
// Date para fechas, boolean para estado, array y subdocumento)


// ============================================
// QUERY 2: Listar todos los ítems activos
// Proyección: mostrar solo nombre, precio y estado (sin _id)
// ============================================

// TODO: Implementar la consulta con proyección de inclusión sin _id


// ============================================
// QUERY 3: Top 3 ítems más recientes
// Ordenar por fecha de creación descendente, limitar a 3
// ============================================

// TODO: Implementar con .sort() y .limit()


// ============================================
// QUERY 4: Paginación — página 1 y página 2
// 4 ítems por página, ordenados por nombre ascendente
// ============================================

// TODO: Implementar página 1 (skip 0) y página 2 (skip 4)


// ============================================
// VERIFICAR: Total de documentos en la colección
// ============================================

// TODO: Usar countDocuments() para verificar el total
