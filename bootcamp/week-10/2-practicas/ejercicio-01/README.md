# Ejercicio 01 — $first, $last, $push y $addToSet

**Semana 10 — Aggregation Pipeline II**

## Objetivo

Practicar los acumuladores avanzados de `$group` para recopilar
y analizar datos dentro de cada grupo.

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
     bootcamp_db --file /dev/stdin < bootcamp/week-10/2-practicas/ejercicio-01/starter/setup.js
   ```
4. Conecta e interactúa:
   ```bash
   docker compose -f _scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

---

## Pasos del Ejercicio

### Paso 1: $first y $last — primer y último valor del grupo

`$first` y `$last` recuperan el primer y último valor dentro de cada grupo.
Para obtener resultados deterministas, **siempre agrega un `$sort` antes del `$group`**.

```js
// Primer y último producto vendido por ciudad (por fecha)
db.sales.aggregate([
  { $sort: { saleDate: 1 } },
  {
    $group: {
      _id: "$city",
      firstProduct: { $first: "$product" },
      lastProduct: { $last: "$product" }
    }
  }
])
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 1.

---

### Paso 2: $push — lista completa de valores

`$push` crea un array con **todos** los valores del campo en el grupo,
incluyendo duplicados.

```js
// Todos los productos vendidos por cada vendedor
db.sales.aggregate([
  {
    $group: {
      _id: "$salesperson",
      allProducts: { $push: "$product" }
    }
  }
])
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 2.

---

### Paso 3: $addToSet — valores únicos

`$addToSet` crea un array con los valores **únicos** del campo en el grupo.
Ideal cuando quieres saber qué valores distintos existen en cada grupo.

```js
// Categorías únicas por vendedor (sin repetir)
db.sales.aggregate([
  {
    $group: {
      _id: "$salesperson",
      uniqueCategories: { $addToSet: "$category" }
    }
  }
])
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 3.

---

### Paso 4: Combinando múltiples acumuladores

En un solo `$group` puedes usar todos los acumuladores a la vez.
Cada uno opera de forma independiente sobre los documentos del mismo grupo.

```js
// Resumen por ciudad con todos los acumuladores avanzados
db.sales.aggregate([
  { $sort: { saleDate: 1 } },
  {
    $group: {
      _id: "$city",
      firstProduct: { $first: "$product" },
      lastProduct: { $last: "$product" },
      allProducts: { $push: "$product" },
      uniqueCategories: { $addToSet: "$category" }
    }
  }
])
```

**Abre `starter/ejercicio.js`** y descomenta la sección PASO 4.

---

## ¿Qué deberías ver?

- **PASO 1**: 3 documentos (uno por ciudad) con `firstProduct` y `lastProduct`
- **PASO 2**: 4 documentos (uno por vendedor) con `allProducts` como array
- **PASO 3**: 4 documentos con `uniqueCategories` sin valores repetidos
- **PASO 4**: 3 documentos con todos los campos combinados

## Diferencia clave: $push vs $addToSet

| Acumulador | Duplicados | Caso de uso |
|------------|------------|-------------|
| `$push` | ✅ Incluye | Historial completo de valores |
| `$addToSet` | ❌ Elimina | Conjunto de valores únicos |
