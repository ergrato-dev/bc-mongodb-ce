# Ejercicio 02 — $addFields, $cond e $ifNull

**Semana 10 — Aggregation Pipeline II**

## Objetivo

Dominar el enriquecimiento de documentos con `$addFields` y la lógica
condicional con `$cond` e `$ifNull` para construir pipelines más expresivos.

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
     bootcamp_db --file /dev/stdin < bootcamp/week-10/2-practicas/ejercicio-02/starter/setup.js
   ```
4. Conecta e interactúa:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Pasos del Ejercicio

### Paso 1: $addFields — enriquecer sin perder campos

`$addFields` agrega nuevos campos calculados al documento.
A diferencia de `$project`, **preserva todos los campos existentes**.

```js
// Agregar totalValue (monto total) y año de la venta
db.sales.aggregate([
  {
    $addFields: {
      totalValue: { $multiply: [{ $toDouble: "$amount" }, "$quantity"] },
      saleYear: { $year: "$saleDate" }
    }
  },
  { $limit: 3 }
])
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 1.

---

### Paso 2: $cond — clasificación condicional

`$cond` es el operador ternario de MongoDB: evalúa una condición
y devuelve uno de dos valores según sea verdadera o falsa.

```js
// Etiquetar ventas como "premium" o "standard"
{ $cond: { if: { $gt: ["$amount", 500] }, then: "premium", else: "standard" } }

// Forma compacta equivalente
{ $cond: [ { $gt: ["$amount", 500] }, "premium", "standard" ] }
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 2.

---

### Paso 3: $ifNull — valor por defecto

`$ifNull` devuelve el valor del campo si existe y no es `null`,
o un valor por defecto si el campo falta o es `null`.

```js
// Reemplazar ciudad ausente con "Sin asignar"
{ $ifNull: ["$city", "Sin asignar"] }
```

El `setup.js` de este ejercicio inserta un documento sin el campo `city`
para que puedas ver `$ifNull` en acción.

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 3.

---

### Paso 4: Pipeline complejo — 4 etapas encadenadas

Combina todo lo aprendido en un único pipeline de 4 etapas:
1. `$addFields` → calcular `totalValue`, `tier`, `cityNormalized`
2. `$match` → filtrar solo ventas completadas
3. `$group` → agrupar por tier y ciudad
4. `$sort` → ordenar por ingresos totales

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 4.

---

## ¿Qué deberías ver?

- **PASO 1**: Documentos con 2 campos nuevos (`totalValue`, `saleYear`) además de todos los originales
- **PASO 2**: Documentos con `tier: "premium"` o `tier: "standard"` según el monto
- **PASO 3**: El último documento muestra `cityNormalized: "Sin asignar"` (campo `city` ausente)
- **PASO 4**: Grupos por `{ tier, city }` con `totalRevenue` calculado y ordenado descendente

## Diferencia clave: $cond vs $ifNull

| Operador | Cuándo usar |
|----------|-------------|
| `$cond` | Lógica if/then/else sobre cualquier condición |
| `$ifNull` | Solo para manejar campos nulos o ausentes |
