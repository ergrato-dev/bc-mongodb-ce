# Proyecto Semana 20 — GridFS y Time Series en Tu Dominio

## Descripción

Aplica GridFS y Time Series Collections a tu dominio asignado.
Primero almacena archivos relacionados con tu dominio usando la estructura de GridFS,
y luego modela datos temporales de alta frecuencia con una Time Series collection.

## Objetivos del Proyecto

1. Crear una Time Series collection adecuada para tu dominio con los campos correctos
2. Insertar al menos 10 documentos temporales con datos realistas
3. Construir un pipeline de agregación que analice tendencias por período
4. Simular el almacenamiento de archivos del dominio en `fs.files` + `fs.chunks`

## Contexto de Negocio

Los datos de series de tiempo están en todas partes: lecturas de sensores en
hospitales, precios históricos en bancos, registros de asistencia en gimnasios,
estados de pedidos en restaurantes. MongoDB Time Series está optimizado para
estas cargas de trabajo con compresión y bucketing automáticos.

## Instrucciones — Adapta a Tu Dominio

> **Nota**: Los ejemplos usan el dominio "Planetario" para no coincidir con
> los dominios asignados. Adapta los nombres a **tu dominio asignado**.

Ejemplos de adaptación:

| Dominio | Time Series collection | timeField | metaField |
|---|---|---|---|
| Hospital | `patient_vitals` | `measuredAt` | `{ patientId, wardId }` |
| Banco | `account_balances` | `recordedAt` | `{ accountId, branchId }` |
| Gimnasio | `machine_usage` | `sessionAt` | `{ machineId, zoneId }` |
| Restaurante | `order_events` | `eventAt` | `{ tableId, serverid }` |

Ejemplos de archivos para GridFS:

| Dominio | Tipos de archivos |
|---|---|
| Hospital | Radiografías, informes PDF, ecografías |
| Banco | Contratos escaneados, estados de cuenta PDF |
| Cine | Afiches, trailers (metadata), guiones |
| Farmacia | Fichas técnicas, certificados de lote |

## Cómo ejecutar

1. Levanta el contenedor:
   ```bash
   docker compose -f scripts/docker-compose.yml up -d
   ```
2. Carga los datos de prueba:
   ```bash
   docker compose -f scripts/docker-compose.yml exec -T mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
     bootcamp_db --file /dev/stdin < starter/setup.js
   ```
3. Conecta e implementa:
   ```bash
   docker compose -f scripts/docker-compose.yml exec mongodb \
     mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
   ```

## Estructura del Proyecto

```
3-proyecto/
├── README.md
└── starter/
    ├── setup.js      ← Crea la TS collection e inserta datos de prueba
    └── proyecto.js   ← TODOs a implementar
```

## Criterios de Evaluación

| Criterio | Puntaje |
|---|---|
| Time Series collection creada con opciones correctas | 10 pts |
| Mínimo 10 documentos con `timeField` válido | 5 pts |
| Pipeline de tendencia por período (hora/día) | 10 pts |
| fs.files con al menos 2 archivos simulados del dominio | 5 pts |
| Adaptación coherente al dominio asignado | 10 pts |

**Total**: 40 puntos
