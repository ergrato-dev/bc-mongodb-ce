# Proyecto Semanal — Semana 11

**$lookup y $unwind — Joins en MongoDB**

## Objetivo

Modelar dos colecciones relacionadas por referencia (ObjectId/ID) en el
dominio asignado e implementar pipelines con `$lookup` y `$unwind`
para obtener análisis cruzados de datos.

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
     bootcamp_db --file /dev/stdin < bootcamp/week-11-lookup_y_unwind_joins/3-proyecto/starter/setup.js
   ```
4. Conecta e implementa:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Instrucciones

Adapta las colecciones genéricas (`catalog`, `transactions`) a tu dominio.
Los datos de prueba usan nombres neutrales — renombra según corresponda.

**Ejemplos de adaptación:**

| Dominio | Colección principal | Colección referenciada |
|---------|--------------------|-----------------------|
| Biblioteca | `loans` | `books` |
| Farmacia | `sales` | `medicines` |
| Gimnasio | `sessions` | `trainers` |
| Restaurante | `orders` | `dishes` |

---

## Requisitos del Proyecto

Implementa los siguientes **4 pipelines** en `starter/proyecto.js`:

### Pipeline 1 — $lookup básico

Une las dos colecciones con `$lookup` simple usando `localField`
y `foreignField`. Usa `$unwind` para aplanar el array resultado
y aplica `$project` para mostrar solo los campos relevantes.

### Pipeline 2 — $unwind sobre array embebido

Si tu colección principal tiene un campo que es array (por ejemplo
`items`, `services`, `subjects`), usa `$unwind` para descomponer
en documentos individuales y luego agrupa para obtener totales.

### Pipeline 3 — $lookup con pipeline interno

Usa la forma avanzada de `$lookup` con `let` y `pipeline` para
filtrar los documentos de la colección referenciada durante el join
(por ejemplo: solo categorías activas, solo registros del año actual).

### Pipeline 4 — Pipeline complejo (4+ etapas)

Responde una pregunta de negocio real de tu dominio encadenando:
`$lookup` → `$unwind` → `$match` → `$group` → `$sort`

Ejemplos de preguntas:
- ¿Cuáles son los [entidades] que más [transacciones] han generado?
- ¿Cuál es el [métrica] promedio por [categoría]?

---

## Criterios de Evaluación

- ✅ Dos colecciones relacionadas por referencia (no embed innecesario)
- ✅ `$lookup` con `localField`/`foreignField` correcto
- ✅ `$unwind` aplana correctamente el array de `$lookup`
- ✅ `$lookup` con pipeline filtra durante el join
- ✅ Pipeline complejo responde pregunta de negocio clara
- ✅ Índice en el campo de referencia (`createIndex({ fieldId: 1 })`)
- ✅ Comentarios en español, campos en inglés
