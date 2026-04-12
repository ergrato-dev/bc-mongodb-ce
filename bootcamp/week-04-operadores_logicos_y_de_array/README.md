# Semana 04 — Operadores Lógicos y de Array

## ¿Qué aprenderás esta semana?

- Construir queries con lógica explícita: `$and`, `$or`, `$not`, `$nor`
- Dominar la diferencia entre AND implícito y `$or` explícito
- Usar operadores de array: `$elemMatch`, `$all`, `$size`

**Etapa**: 0 — Fundamentos · **Semana**: 04 de 24

---

## 📚 Contenido

| # | Tema | Archivo |
|---|------|---------|
| 1 | `$and` y `$or` explícitos | [1-teoria/01-and-or.md](1-teoria/01-and-or.md) |
| 2 | `$not` y `$nor` | [1-teoria/02-not-nor.md](1-teoria/02-not-nor.md) |
| 3 | Operadores de array: `$elemMatch`, `$all`, `$size` | [1-teoria/03-operadores-array.md](1-teoria/03-operadores-array.md) |
| 4 | Combinando lógica y arrays | [1-teoria/04-combinando-logica.md](1-teoria/04-combinando-logica.md) |

---

## 🛠️ Prácticas

- [Ejercicio 01 — Lógica con $and y $or](2-practicas/ejercicio-01/README.md)
- [Ejercicio 02 — Arrays con $elemMatch, $all y $size](2-practicas/ejercicio-02/README.md)

## 🏆 Proyecto Semanal

- [Consultas con Lógica Avanzada](3-proyecto/README.md)

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
   docker compose -f scripts/docker-compose.yml up -d
   ```
3. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < 2-practicas/ejercicio-01/starter/setup.js
   ```
4. Conecta e interactúa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Navegación

← [Semana 03 — CRUD II: Operadores de Consulta](../week-03-crud_ii_operadores_de_consulta/README.md)
→ [Semana 05 — CRUD III: Actualización y Eliminación](../week-05-crud_iii_actualizacion_y_eliminacion/README.md)
