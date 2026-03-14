// ============================================
// PROYECTO SEMANAL: Seguridad y Administración
// Semana 22 — RBAC, $jsonSchema, Backup
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta todos los ejemplos a tu dominio asignado.
// Renombra colecciones, campos y usuarios según corresponda.
// Ejemplos:
//   Biblioteca  → books, members, loans
//   Farmacia    → medicines, sales, inventory
//   Gimnasio    → members, routines, attendance

// ============================================
// TODO 1: Crear usuarios con RBAC
// ============================================
// Crea al menos 2 usuarios con roles diferenciados para tu dominio.
// Sigue el principio de mínimo privilegio.

// TODO: Usuario de solo lectura para reportes/analytics
// db.createUser({
//   user: "reports_user",
//   pwd: "Reports2025!",
//   roles: [{ role: "read", db: "bootcamp_db" }]
// })

// TODO: Usuario de aplicación con readWrite
// db.createUser({
//   user: "app_user",
//   pwd: "AppPass2025!",
//   roles: [{ role: "readWrite", db: "bootcamp_db" }]
// })

// TODO: Verificar usuarios creados
// db.getUsers()

// ============================================
// TODO 2: Validación $jsonSchema
// ============================================
// Crea la colección principal de tu dominio con un validador.
// Mínimo 4 campos en required[], tipos BSON correctos, una restricción.

// TODO: Eliminar colección existente si aplica
// db.items.drop()

// TODO: Crear colección de tu dominio con $jsonSchema
// db.createCollection("items", {    // ← renombrar al dominio
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: [
//         // TODO: Listar campos obligatorios de tu entidad principal
//       ],
//       properties: {
//         // TODO: Definir tipos y restricciones de cada campo
//         // name: { bsonType: "string", minLength: 2 },
//         // price: { bsonType: "decimal", minimum: 0 },
//       }
//     }
//   },
//   validationAction: "error"
// })

// TODO: Probar con un documento válido
// db.items.insertOne({ /* ... campos válidos ... */ })

// TODO: Probar con un documento inválido (espera error)
// db.items.insertOne({ /* ... campos inválidos ... */ })

// ============================================
// TODO 3: Script de Backup
// ============================================
// Documenta el comando mongodump para tu dominio.
// (Este bloque es para comentarios — mongodump se ejecuta desde la terminal)

// TODO: Escribe aquí el comando mongodump para tu BD:
// /*
// docker compose -f _scripts/docker-compose.yml exec mongodb \
//   mongodump \
//   -u bootcamp -p bootcamp123 \
//   --authenticationDatabase admin \
//   --db bootcamp_db \
//   --out /tmp/backup_$(date +%Y%m%d)
//
// Para restaurar:
// docker compose -f _scripts/docker-compose.yml exec mongodb \
//   mongorestore \
//   -u bootcamp -p bootcamp123 \
//   --authenticationDatabase admin \
//   --db bootcamp_db \
//   /tmp/backup_YYYYMMDD/bootcamp_db
// */
