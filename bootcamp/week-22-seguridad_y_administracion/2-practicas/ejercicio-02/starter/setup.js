// ============================================
// Semana 22: Seguridad y Administración
// Ejercicio 02 — setup.js
// ============================================

// Crear colección CON validación $jsonSchema
// La colección 'employees' requiere campos obligatorios y tipos correctos

// Primero, eliminar si ya existe
db.employees.drop()

// Crear colección con validador
db.createCollection("employees", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["firstName", "lastName", "email", "salary", "department"],
      properties: {
        firstName: {
          bsonType: "string",
          minLength: 2,
          description: "Nombre — string mínimo 2 caracteres, requerido"
        },
        lastName: {
          bsonType: "string",
          minLength: 2,
          description: "Apellido — string mínimo 2 caracteres, requerido"
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+\\..+$",
          description: "Email — debe tener formato válido, requerido"
        },
        salary: {
          bsonType: "decimal",
          minimum: 0,
          description: "Salario — decimal >= 0, requerido"
        },
        department: {
          enum: ["engineering", "sales", "hr", "finance"],
          description: "Área — debe ser uno de los valores permitidos"
        },
        isActive: {
          bsonType: "bool",
          description: "Estado activo — booleano, opcional"
        }
      }
    }
  },
  validationAction: "error"
})

print("setup.js: colección 'employees' con $jsonSchema creada")
print("Colecciones actuales: " + db.getCollectionNames())
