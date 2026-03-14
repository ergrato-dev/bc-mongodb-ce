# Repaso de Patrones de Diseño Avanzados

> MongoDB 7.0 — Semana 24

## Objetivos

- Identificar cuándo aplicar Extended Reference, Bucket y Computed
- Diferenciar los trade-offs de cada patrón
- Combinar patrones en un mismo esquema de dominio

## Diagrama

![Arquitectura Capstone](../0-assets/01-capstone-architecture.svg)

## 1. Extended Reference

Copia los campos más leídos de un documento referenciado directamente
en el documento que lo necesita:

```js
// En lugar de hacer $lookup en cada lectura:
{
  orderId: "ORD-001",
  customerId: ObjectId("..."),
  // Campos copiados desde customers:
  customerName: "Ana Torres",
  customerEmail: "ana@example.com",
  total: 120.00
}
```

Úsalo cuando: el documento referenciado cambia poco y se lee frecuentemente
junto al documento principal. Evita `$lookup` caro en producción.

## 2. Bucket Pattern

Agrupa documentos de series temporales en un solo documento por período
(hora, día, mes), embebiendo los registros como array:

```js
{
  sensorId: "SENSOR-01",
  hour: ISODate("2025-01-15T14:00:00Z"),
  readings: [
    { ts: ISODate("2025-01-15T14:00:12Z"), value: 23.4 },
    { ts: ISODate("2025-01-15T14:01:05Z"), value: 23.7 }
  ],
  count: 60,
  avgValue: Decimal128("23.5")
}
```

Úsalo cuando: tienes eventos frecuentes por entidad (IoT, logs, métricas).
Reduce el número de documentos hasta 60× vs. un documento por registro.

## 3. Computed Pattern

Pre-calcula y almacena valores derivados en el momento de la escritura,
evitando cálculos repetidos en cada lectura:

```js
// Actualiza daily_stats al registrar una venta:
db.daily_stats.updateOne(
  { date: today },
  {
    $inc: { totalRevenue: saleAmount, totalSales: 1 },
    $max: { maxSale: saleAmount }
  },
  { upsert: true }
)
```

Úsalo cuando: tienes dashboards o reportes leídos frecuentemente con
cálculos agregados sobre muchos documentos.

## Checklist

1. ¿Qué patrón reduce `$lookup` embebiendo campos frecuentemente leídos?
2. ¿Cuándo conviene usar Bucket en lugar de un documento por evento?
3. ¿Qué ventaja tiene Computed en dashboards de alto tráfico?
4. ¿Qué riesgo tiene Extended Reference si el documento fuente cambia?

## Referencias

- https://www.mongodb.com/blog/post/building-with-patterns-a-summary
- https://www.mongodb.com/docs/manual/data-modeling/
