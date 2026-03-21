# Proyecto Semana 22 — Seguridad y Administración

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta e interactúa:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
4. Implementa los TODOs en `starter/proyecto.js`

---

## Objetivo

Aplicar los conceptos de seguridad y administración de MongoDB en tu dominio asignado:

- Crear usuarios con roles diferenciados (mínimo privilegio)
- Definir un `$jsonSchema` para la colección principal del dominio
- Documentar una estrategia de backup

---

## Entidades del Dominio

Adapta la colección genérica a tu dominio:

| Dominio | Colección principal | Campos clave |
|---------|--------------------|-----------| 
| Biblioteca | `books` | title, author, isbn, availableCopies |
| Farmacia | `medicines` | name, activeIngredient, price, expiryDate |
| Gimnasio | `members` | firstName, lastName, email, membershipType |
| Hospital | `patients` | firstName, lastName, dateOfBirth, medicalRecordId |

---

## TODOs a Implementar

### TODO 1 — Usuarios con RBAC (10 pts)

Crea al menos 2 usuarios para tu dominio con roles diferenciados:
- Un usuario de solo lectura (ej: `reports_user` con rol `read`)
- Un usuario de aplicación (ej: `app_user` con rol `readWrite`)
- Verifica con `db.getUsers()`

### TODO 2 — $jsonSchema en la colección principal (10 pts)

Define un validador `$jsonSchema` para la entidad principal de tu dominio:
- Mínimo 4 campos en `required[]`
- Usar tipos BSON correctos (`bsonType`)
- Incluir al menos una restricción (`minLength`, `minimum`, `enum` o `pattern`)
- Probar con un documento válido y uno inválido

### TODO 3 — Plan de Backup (10 pts)

Documenta un script de backup para tu dominio:
- Comando `mongodump` para exportar la BD principal
- Comentarios explicando: qué exporta, dónde se guarda, cuándo ejecutarlo
- Añade el comando complementario de `mongorestore` para recuperación
