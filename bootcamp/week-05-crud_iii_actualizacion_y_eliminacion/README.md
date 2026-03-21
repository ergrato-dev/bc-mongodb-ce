# Semana 05 — CRUD III: Actualización y Eliminación

## ¿Qué aprenderás esta semana?

- Modificar documentos con `updateOne()`, `updateMany()` y operadores de actualización
- Usar `$set`, `$unset`, `$inc`, `$push`, `$pull`, `$addToSet`
- Eliminar documentos con `deleteOne()` y `deleteMany()`

**Etapa**: 0 — Fundamentos · **Semana**: 05 de 24

---

## 📚 Contenido

| # | Tema | Archivo |
|---|------|---------|
| 1 | `updateOne()` y `updateMany()` + `$set`, `$unset` | [1-teoria/01-update-set-unset.md](1-teoria/01-update-set-unset.md) |
| 2 | `$inc`, `$mul`, `$rename` | [1-teoria/02-inc-mul.md](1-teoria/02-inc-mul.md) |
| 3 | Operadores de array: `$push`, `$pull`, `$addToSet` | [1-teoria/03-push-pull.md](1-teoria/03-push-pull.md) |
| 4 | `deleteOne()`, `deleteMany()` y `findOneAndUpdate()` | [1-teoria/04-delete-find-update.md](1-teoria/04-delete-find-update.md) |

---

## 🛠️ Prácticas

- [Ejercicio 01 — update con $set, $unset e $inc](2-practicas/ejercicio-01/README.md)
- [Ejercicio 02 — Arrays con $push, $pull, $addToSet y delete](2-practicas/ejercicio-02/README.md)

## 🏆 Proyecto Semanal

- [Gestión Completa de Datos](3-proyecto/README.md)

---

## ⏱️ Distribución del tiempo (8 horas)

| Actividad | Tiempo |
|---|---|
| Teoría (4 archivos) | 2 h |
| Ejercicio 01 | 1.5 h |
| Ejercicio 02 | 1.5 h |
| Proyecto semanal | 2 h |
| Revisión + commit | 1 h |

---

## Cómo ejecutar

1. Asegúrate de tener Docker corriendo
2. Levanta el contenedor:
   ```bash
   docker compose -f _scripts/docker-compose.yml up -d
   ```
3. Carga los datos de prueba:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < 2-practicas/ejercicio-01/starter/setup.js
   ```
4. Conecta e interactúa:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Navegación

← [Semana 04 — Operadores Lógicos y de Array](../week-04-operadores_logicos_y_de_array/README.md)
→ [Semana 06 — Tipos BSON y Subdocumentos](../week-06-tipos_bson_y_subdocumentos/README.md)
