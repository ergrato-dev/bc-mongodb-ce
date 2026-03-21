// ============================================
// PROYECTO SEMANAL: Patrones de Esquema Avanzados II
// Semana 18 — Polymorphic, Attribute, Schema + Document Versioning
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta la colección y los campos a tu dominio asignado.

// ============================================
// TODO 1: Colección polimórfica con discriminador
// ============================================
// Diseña documentos de al menos 3 tipos de entidad en una sola colección.
// Usa un campo discriminador (ej: type, kind, category).
// Crea un índice compuesto: { discriminador: 1, campoComún: 1 }

// TODO: Insertar al menos 2 docs por cada tipo de entidad
// TODO: Crear el índice compuesto
// TODO: Query que filtre por tipo Y por un campo común


// ============================================
// TODO 2: Patrón Attribute con índice multikey
// ============================================
// Elige una entidad con atributos variables.
// Asegura que los docs usen attrs: [{k, v}].
// Crea el índice: { "attrs.k": 1, "attrs.v": 1 }
// Verifica con explain() que la query usa IXSCAN.

// TODO: Crear índice multikey
// TODO: Query con $elemMatch sobre attrs
// TODO: Verificar con explain("executionStats")


// ============================================
// TODO 3: Schema Versioning — migración batch
// ============================================
// Simula docs de versión anterior (sin schemaVersion).
// Implementa updateMany con aggregation pipeline para migrarlos.
// Verifica que todos tienen schemaVersion: 2 al final.

// TODO: Insertar 2 docs sin schemaVersion
// TODO: updateMany para migrar a v2
// TODO: Verificar countDocuments({ schemaVersion: { $exists: false } }) === 0


// ============================================
// TODO 4: Document Versioning — historial completo
// ============================================
// Actualiza el precio/campo principal de 2 ítems.
// Antes de cada actualización, archiva en *_history.
// Consulta el historial ordenado por versión.

// TODO: Archivar versión 1 → actualizar → versión 2
// TODO: Archivar versión 2 → actualizar → versión 3
// TODO: Mostrar historial con find().sort({ version: 1 })
