// ============================================
// Semana 19: Change Streams — Ejercicio 01
// Setup: colección notifications
// ============================================

// Limpiar colección antes de cada ejecución
db.notifications.drop()

// Insertar documentos de prueba
db.notifications.insertMany([
  {
    notificationId: "ntf-001",
    type: "info",
    message: "Sistema iniciado correctamente",
    userId: "user-101",
    isRead: false,
    createdAt: new Date("2025-04-01T08:00:00Z")
  },
  {
    notificationId: "ntf-002",
    type: "alert",
    message: "Espacio en disco al 80%",
    userId: "user-102",
    isRead: false,
    createdAt: new Date("2025-04-01T09:15:00Z")
  },
  {
    notificationId: "ntf-003",
    type: "info",
    message: "Backup completado",
    userId: "user-101",
    isRead: true,
    createdAt: new Date("2025-04-01T10:30:00Z")
  }
])

print("Setup completado: 3 documentos insertados en notifications")
print("Replica set requerido para Change Streams")
print("Ejecuta el ejercicio desde dos terminales separadas")
