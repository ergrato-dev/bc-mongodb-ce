# Semana 16 — Validación de Esquemas y Transacciones ACID

## Descripción

Esta semana cubre dos mecanismos fundamentales para garantizar la integridad de datos en MongoDB: la **validación de esquemas con `$jsonSchema`** y las **transacciones multi-documento ACID**.

## Objetivos de aprendizaje

- Definir reglas de validación de esquemas con `$jsonSchema` y `validator`
- Aplicar niveles de validación (`strict`, `moderate`) y acción (`error`, `warn`)
- Iniciar, confirmar y abortar transacciones multi-documento con sesiones
- Identificar cuándo usar transacciones vs. modelado atómico

## Distribución del tiempo

| Actividad | Tiempo |
|---|---|
| Teoría: $jsonSchema y collMod | 1.5 h |
| Teoría: Transacciones ACID | 1 h |
| Ejercicio 01: Validación de esquema | 1.5 h |
| Ejercicio 02: Transacciones | 1.5 h |
| Proyecto semanal | 2 h |
| **Total** | **7.5 h** |

## Contenido

```
week-16/
├── 0-assets/
│   ├── 01-jsonschema-validation.svg
│   └── 02-acid-transactions.svg
├── 1-teoria/
│   ├── 01-jsonschema.md
│   ├── 02-collmod-validator.md
│   ├── 03-transactions-basics.md
│   └── 04-transactions-patterns.md
├── 2-practicas/
│   ├── ejercicio-01/   ← $jsonSchema en colecciones
│   └── ejercicio-02/   ← Transacciones con sesión
├── 3-proyecto/
├── 4-recursos/
└── 5-glosario/
```

## Requisitos previos

- Semana 15: Patrones de modelado avanzado
- Conocimiento de CRUD y operadores de actualización

## Navegación

← [Semana 15 — Patrones de Modelado Avanzado](../week-15/README.md)
→ [Semana 17 — Optimización de Rendimiento](../week-17/README.md)
