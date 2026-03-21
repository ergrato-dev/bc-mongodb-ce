# 04. Backup y Restore con mongodump / mongorestore

> **Semana 22 · Etapa 2 · MongoDB 7.0**

## Objetivos

- Realizar backups lógicos con `mongodump`
- Restaurar backups con `mongorestore`
- Entender cuándo usar backups lógicos vs snapshots

---

## 1. mongodump — Exportar la Base de Datos

`mongodump` genera una copia lógica en formato BSON de una base de datos o colección:

```bash
# Exportar toda la base de datos bootcamp_db
docker compose -f _scripts/docker-compose.yml exec mongodb \
  mongodump \
  -u bootcamp -p bootcamp123 \
  --authenticationDatabase admin \
  --db bootcamp_db \
  --out /tmp/backup_$(date +%Y%m%d)

# Exportar solo una colección
docker compose -f _scripts/docker-compose.yml exec mongodb \
  mongodump \
  -u bootcamp -p bootcamp123 \
  --authenticationDatabase admin \
  --db bootcamp_db \
  --collection orders \
  --out /tmp/backup_orders
```

El resultado es una carpeta con archivos `.bson` (datos) y `.metadata.json` (índices y opciones).

---

## 2. mongorestore — Restaurar Datos

```bash
# Restaurar la base de datos completa
docker compose -f _scripts/docker-compose.yml exec mongodb \
  mongorestore \
  -u bootcamp -p bootcamp123 \
  --authenticationDatabase admin \
  --db bootcamp_db \
  /tmp/backup_20250301/bootcamp_db
```

---

## 3. Tipos de Backup

| Tipo | Herramienta | Ventaja | Desventaja |
|------|-------------|---------|------------|
| Lógico | `mongodump` | Simple, portable | Lento en BD grandes |
| Snapshot | Volumen Docker / LVM | Rápido, consistente | Requiere infraestructura |
| Atlas | MongoDB Atlas Backup | Automático, point-in-time | Solo en Atlas |

> Para este bootcamp con Docker, usamos `mongodump` dentro del contenedor. Los archivos quedan en el filesystem del contenedor.

---

## Checklist

- [ ] ¿Qué formatos genera `mongodump` como salida?
- [ ] ¿Cómo se exporta solo una colección específica?
- [ ] ¿Cuándo sería preferible un snapshot sobre `mongodump`?
- [ ] ¿Qué flag usa `mongorestore` para especificar la BD de destino?

## Referencias

- [mongodump](https://www.mongodb.com/docs/database-tools/mongodump/)
- [mongorestore](https://www.mongodb.com/docs/database-tools/mongorestore/)
