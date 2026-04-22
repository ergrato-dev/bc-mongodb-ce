# Semana 01 · 01 — SQL vs NoSQL

## Objetivos

- Distinguir el modelo relacional del modelo documental
- Comprender por qué existe MongoDB y en qué casos brilla
- Identificar los equivalentes: tabla → colección, fila → documento, columna → campo

![01-sql-vs-nosql.svg](../0-assets/01-sql-vs-nosql.svg)

---

## 1. ¿Por qué existen las bases de datos NoSQL?

Las bases de datos relacionales almacenan datos en **tablas con esquema fijo**.
Funcionan muy bien, pero presentan fricción en estos escenarios:

- Datos con estructura variable (cada registro puede tener campos distintos)
- Objetos JSON anidados que hay que "aplanar" en múltiples tablas
- Escalado horizontal en aplicaciones web de alto volumen

MongoDB resuelve estos casos almacenando datos como **documentos JSON** (BSON internamente).

---

## 2. SQL vs. MongoDB — conceptos equivalentes

| SQL           | MongoDB      |
| ------------- | ------------ |
| Base de datos | Base de datos |
| Tabla         | Colección    |
| Fila          | Documento    |
| Columna       | Campo        |

---

## 3. El documento: unidad central de MongoDB

En lugar de filas, MongoDB trabaja con documentos. Un documento es un objeto
JSON que puede contener campos simples, arrays y subdocumentos anidados:

```js
// Un documento en la colección "products"
{
  _id: ObjectId("64a7f3b2c9e1d5a823f0b4c1"),
  name: "Laptop Pro 15",
  price: Decimal128("1299.99"),
  tags: ["tech", "laptop"],
  specs: { ram: "16GB", storage: "512GB" }
}
```

> A diferencia de una fila SQL, cada documento puede tener campos distintos.
> No hace falta definir un esquema antes de insertar datos.

---

## 4. ¿Cuándo elegir MongoDB?

✅ Datos con estructura variable o que evoluciona frecuentemente
✅ Objetos jerárquicos (documentos anidados, arrays de subdocumentos)
✅ Alta frecuencia de lectura/escritura (e-commerce, IoT, redes sociales)
✅ Prototipado rápido sin migraciones de esquema

❌ Datos altamente relacionales con JOINs complejos y transacciones multi-tabla
❌ Reporting analítico pesado (mejor con herramientas OLAP)

---

## ✅ Checklist

- [ ] ¿Puedo explicar en mis propias palabras qué es un documento en MongoDB?
- [ ] ¿Entiendo por qué MongoDB no requiere definir un esquema previo?
- [ ] ¿Sé cuándo tiene sentido usar MongoDB en lugar de una BD relacional?
- [ ] ¿Puedo identificar los equivalentes: tabla → colección, fila → documento?

---

## 📚 Referencias

- [MongoDB vs. Relational Databases](https://www.mongodb.com/resources/compare/relational-vs-non-relational-databases)
- [Introduction to MongoDB](https://www.mongodb.com/docs/manual/introduction/)
