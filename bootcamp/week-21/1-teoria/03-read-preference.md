# 03. Read Preference — Dónde Leer en el Replica Set

> **Semana 21 · Etapa 2 · MongoDB 7.0**

## Objetivos

- Identificar los 5 modos de `readPreference`
- Elegir el modo adecuado según el caso de uso
- Comprender el riesgo de lecturas desactualizadas en secundarios

---

## 1. ¿Qué es Read Preference?

`readPreference` controla **desde qué nodo** del Replica Set se leen los datos. Por defecto, todas las lecturas van al **Primary** para mayor consistencia.

---

## 2. Los 5 Modos

| Modo | Lee desde | Cuándo usarlo |
|------|-----------|---------------|
| `primary` | Siempre Primary | Consistencia estricta (default) |
| `primaryPreferred` | Primary si disponible, sino Secondary | Alta disponibilidad con consistencia preferida |
| `secondary` | Siempre Secondary | Analytics, reportes — acepta datos ligeramente desactualizados |
| `secondaryPreferred` | Secondary si disponible, sino Primary | Aliviar carga del Primary con lecturas tolerantes |
| `nearest` | Nodo con menor latencia de red | Aplicaciones geo-distribuidas |

---

## 3. Uso en mongosh

```js
// Leer desde un Secondary (o Primary si no hay Secondary disponible)
db.orders.find({ status: "shipped" }).readPref("secondaryPreferred")

// Leer desde el nodo más cercano
db.analytics.find({ year: 2025 }).readPref("nearest")
```

---

## 4. Stale Reads y maxStalenessSeconds

Un Secondary puede estar algunos segundos por detrás del Primary (replication lag). Para evitar leer datos muy desactualizados:

```js
// No leer de un Secondary rezagado más de 90 segundos
db.orders.find({}).readPref("secondary", [], { maxStalenessSeconds: 90 })
```

> En el entorno Docker con un solo nodo (`rs0`), `secondary` y `secondaryPreferred` **caen back** al Primary automáticamente, pero los comandos no generan error.

---

## Checklist

- [ ] ¿Qué modo de `readPreference` usarías para un dashboard de analytics nocturno?
- [ ] ¿Cuál es el riesgo de usar `readPreference: "secondary"`?
- [ ] ¿Para qué sirve `maxStalenessSeconds`?
- [ ] ¿Qué pasa si usas `readPreference: "secondary"` en un set de un solo nodo?

## Referencias

- [Read Preference — MongoDB Docs](https://www.mongodb.com/docs/manual/core/read-preference/)
- [maxStalenessSeconds](https://www.mongodb.com/docs/manual/core/read-preference/#maxstalenessseconds)
