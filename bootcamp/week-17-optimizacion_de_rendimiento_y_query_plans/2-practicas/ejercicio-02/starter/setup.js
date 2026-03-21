// ============================================
// Semana 17 — Ejercicio 02: hint() y Covered Queries
// setup.js — Reutiliza sales_perf y agrega índices múltiples
// ============================================

// Verificar que sales_perf existe (ejecutar ejercicio-01/setup.js primero)
const count = db.sales_perf.countDocuments()
if (count === 0) {
  print("⚠ Ejecuta primero el setup.js del ejercicio-01")
} else {
  print("✓ sales_perf tiene " + count + " documentos")
}

// Crear índices adicionales para simular escenario con múltiples índices
// Índice simple en status (podría ser elegido por MongoDB en lugar del compuesto)
db.sales_perf.createIndex(
  { status: 1 },
  { name: "sales_status_simple" }
)

// Índice compuesto para covered query
db.sales_perf.createIndex(
  { status: 1, region: 1, amount: 1 },
  { name: "sales_covered_idx" }
)

print("✓ Índices creados:")
db.sales_perf.getIndexes().forEach(idx => print("  - " + idx.name))
