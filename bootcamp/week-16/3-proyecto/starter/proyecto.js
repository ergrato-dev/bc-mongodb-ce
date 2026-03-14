// Semana 16: Validación de Esquemas y Transacciones — Proyecto Semanal
// ============================================
// Implementa los TODOs adaptando el dominio a tu caso asignado.
// ============================================

// ============================================
// TODO 1: Intentar insertar documento inválido
// ============================================
// Inserta en la colección principal de tu dominio un documento
// que viole al menos 2 reglas del $jsonSchema (tipo incorrecto,
// campo required ausente o enum violado).
// Captura el error con try/catch.

// TODO: Implementar intento de inserción inválida y captura del error


// ============================================
// TODO 2: Modificar el validator con collMod
// ============================================
// Agrega un nuevo campo opcional al $jsonSchema de tu colección
// principal usando collMod. Por ejemplo un campo "notes" de tipo string.
// Verifica con listCollections que el cambio se aplicó.

// TODO: Implementar collMod para agregar campo al schema


// ============================================
// TODO 3: Transacción exitosa
// ============================================
// Implementa una transacción multi-documento relevante para tu dominio.
// Ejemplos:
//   Biblioteca  → préstamo: insertOne en loans + $inc copies -1 en books
//   Farmacia    → venta: insertOne en sales + $inc stock -N en medicines
//   Acuario     → ticket: insertOne en aquarium_tickets + $inc registered +1 en aquarium_exhibits
//
// Usa try/catch/finally con commitTransaction y endSession.

// TODO: Implementar transacción exitosa con commit


// ============================================
// TODO 4: Transacción abortada
// ============================================
// Implementa la misma transacción pero con una condición de negocio
// que debe fallar (ej: capacidad llena, stock insuficiente, ítem no disponible).
// Verifica con una condición before el updateOne/insertOne y lanza un Error.
// Captura con catch y llama abortTransaction.

// TODO: Implementar transacción abortada por condición de negocio
