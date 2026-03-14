# Semana 22 — Seguridad y Administración en MongoDB

## Descripción

Esta semana cubre los mecanismos de **seguridad** y **administración** de MongoDB:
control de acceso basado en roles (RBAC), gestión de usuarios, validación de esquemas
con `$jsonSchema` y operaciones básicas de backup/restore.

## Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Crear y gestionar usuarios con roles específicos en MongoDB
- ✅ Aplicar el principio de mínimo privilegio con RBAC (`readWrite`, `dbAdmin`, `userAdmin`)
- ✅ Validar esquemas del lado del servidor con `$jsonSchema`
- ✅ Realizar backups y restores con `mongodump` / `mongorestore`

## Distribución del Tiempo (8 horas)

| Actividad | Tiempo |
|-----------|--------|
| Teoría (4 archivos) | 2 horas |
| Ejercicio 01 — RBAC y gestión de usuarios | 1.5 horas |
| Ejercicio 02 — `$jsonSchema` y administración | 1.5 horas |
| Proyecto integrador | 2 horas |
| Recursos y glosario | 30 minutos |

## Contenido de la Semana

### Teoría
1. [RBAC — Roles y Permisos](1-teoria/01-rbac-roles.md)
2. [Gestión de Usuarios](1-teoria/02-user-management.md)
3. [Validación con $jsonSchema](1-teoria/03-jsonschema-validation.md)
4. [Backup y Restore](1-teoria/04-backup-restore.md)

### Prácticas
- [Ejercicio 01 — RBAC: crear usuarios y asignar roles](2-practicas/ejercicio-01/README.md)
- [Ejercicio 02 — $jsonSchema y mongodump](2-practicas/ejercicio-02/README.md)

### Proyecto
- [Proyecto Semana 22 — Seguridad y Administración](3-proyecto/README.md)

## Navegación

← [Semana 21 — Replicación y Alta Disponibilidad](../week-21/README.md)
→ [Semana 23 — MongoDB con Node.js](../week-23/README.md)

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
2. Conecta a MongoDB:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```
