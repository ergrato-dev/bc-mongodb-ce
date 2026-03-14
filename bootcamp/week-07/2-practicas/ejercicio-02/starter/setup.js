// Semana 07: Índices Básicos y explain()
// setup.js — Ejercicio 02: Reutiliza la colección "listings".
// Si ya ejecutaste setup.js del ejercicio-01, los datos ya están cargados.

print("ℹ️  Este ejercicio usa la colección 'listings' del ejercicio-01.")
print("   Documentos actuales: " + db.listings.countDocuments())
print("   Índices actuales:")
printjson(db.listings.getIndexes())
