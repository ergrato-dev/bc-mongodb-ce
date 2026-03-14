# 01. RBAC — Control de Acceso Basado en Roles

> **Semana 22 · Etapa 2 · MongoDB 7.0**
> Referencia visual: `../0-assets/01-rbac-roles.svg`

## Objetivos

- Entender el modelo de RBAC en MongoDB
- Identificar los roles built-in más importantes
- Aplicar el principio de mínimo privilegio

---

## 1. ¿Qué es RBAC?

**Role-Based Access Control** es el sistema de permisos de MongoDB. En lugar de dar permisos directamente a un usuario, se asignan **roles** que agrupan acciones sobre recursos (colecciones o bases de datos).

```
Usuario → tiene Roles → los roles tienen Acciones sobre Recursos
```

---

## 2. Roles Built-in por Base de Datos

| Rol | Permisos | Uso típico |
|-----|----------|------------|
| `read` | find, listCollections | Apps de solo lectura, reportes |
| `readWrite` | read + insert, update, delete | Aplicaciones backend normales |
| `dbAdmin` | índices, stats, reIndex, profiling | DBA operativo |
| `userAdmin` | crear/modificar usuarios | Administración de accesos |
| `dbOwner` | readWrite + dbAdmin + userAdmin | Control total de una BD |

> **Roles globales** (aplicados en la base de datos `admin`): `root` (superadmin), `readAnyDatabase`, `readWriteAnyDatabase`.

---

## 3. Principio de Mínimo Privilegio

```
✅ Una app web → rol readWrite en su BD específica
✅ Un dashboard de analytics → rol read en su BD
❌ Una app web → nunca usar root o dbOwner en admin
```

Cada servicio/aplicación debe tener su propio usuario con solo los permisos necesarios.

---

## 4. Ver Roles y Usuarios Existentes

```js
// Ver todos los usuarios de la BD actual
db.getUsers()

// Ver los roles disponibles
db.getRoles({ showBuiltinRoles: true })

// Ver información de un usuario específico
db.getUser("app_user")
```

---

## Checklist

- [ ] ¿Qué diferencia hay entre `readWrite` y `dbOwner`?
- [ ] ¿Para qué sirve el rol `dbAdmin`?
- [ ] ¿Por qué no se debe usar `root` para aplicaciones?
- [ ] ¿Cómo se listan los usuarios actuales de una base de datos?

## Referencias

- [Built-in Roles — MongoDB Docs](https://www.mongodb.com/docs/manual/reference/built-in-roles/)
- [Role-Based Access Control](https://www.mongodb.com/docs/manual/core/authorization/)
