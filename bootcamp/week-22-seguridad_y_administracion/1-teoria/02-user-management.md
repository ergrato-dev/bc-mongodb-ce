# 02. Gestión de Usuarios en MongoDB

> **Semana 22 · Etapa 2 · MongoDB 7.0**

## Objetivos

- Crear usuarios con `createUser()` en la base de datos correcta
- Asignar, revocar y modificar roles con `grantRolesToUser()` / `revokeRolesFromUser()`
- Eliminar usuarios con `dropUser()`

---

## 1. Crear un Usuario

Los usuarios se crean **en la base de datos donde tendrán su autenticación**. Para usuarios de aplicación, esto suele ser la BD de la aplicación o `admin`:

```js
// Crear usuario de solo lectura para analytics
db.createUser({
  user: "analytics_user",
  pwd: "Analytics2025!",
  roles: [{ role: "read", db: "bootcamp_db" }]
})

// Crear usuario completo para la aplicación backend
db.createUser({
  user: "app_user",
  pwd: "AppPass2025!",
  roles: [{ role: "readWrite", db: "bootcamp_db" }]
})
```

---

## 2. Modificar Roles

```js
// Agregar un rol adicional a un usuario existente
db.grantRolesToUser(
  "app_user",
  [{ role: "dbAdmin", db: "bootcamp_db" }]
)

// Revocar un rol
db.revokeRolesFromUser(
  "app_user",
  [{ role: "dbAdmin", db: "bootcamp_db" }]
)
```

---

## 3. Actualizar y Eliminar Usuarios

```js
// Cambiar contraseña
db.updateUser("analytics_user", {
  pwd: "NuevaPass2025!"
})

// Eliminar usuario
db.dropUser("analytics_user")
```

---

## 4. Verificar Acceso

Después de crear un usuario, verifica que solo puede realizar las acciones de su rol:

```js
// Como analytics_user (solo read):
db.products.find({})         // ✅ permitido
db.products.insertOne({})    // ❌ no autorizado
```

> Al crear usuarios con credenciales, recuerda que las contraseñas hardcodeadas no son seguras para producción — usar variables de entorno o un gestor de secretos.

---

## Checklist

- [ ] ¿En qué base de datos se deben crear los usuarios de aplicación?
- [ ] ¿Cómo se agrega un rol adicional a un usuario ya creado?
- [ ] ¿Qué comando lista todos los usuarios de una base de datos?
- [ ] ¿Qué pasa si un usuario intenta una acción para la que no tiene permiso?

## Referencias

- [db.createUser()](https://www.mongodb.com/docs/manual/reference/method/db.createUser/)
- [db.grantRolesToUser()](https://www.mongodb.com/docs/manual/reference/method/db.grantRolesToUser/)
