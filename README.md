# Bootcamp MongoDB CE — De Cero a Héroe

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-00ED64?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-required-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)

Bootcamp de **24 semanas** para llevar a estudiantes desde cero conocimiento
de bases de datos NoSQL hasta un nivel de **MongoDB Developer Junior**.

## ¿Qué aprenderás?

| Etapa | Semanas | Temas |
|---|---|---|
| **Fundamentos** | 01–08 | CRUD, operadores, tipos BSON, índices básicos |
| **Intermedio** | 09–16 | Aggregation Pipeline, `$lookup`, índices avanzados, modelado |
| **Avanzado** | 17–24 | Replicación, seguridad, Node.js, transacciones, capstone |

## Inicio rápido

**Requisitos:** Docker, Node.js ≥ 18

```bash
# 1. Clona el repositorio
git clone https://github.com/ergrato-dev/bc-mongodb-ce.git
cd bc-mongodb-ce

# 2. Levanta MongoDB 7.0
docker compose -f _scripts/docker-compose.yml up -d

# 3. Conecta con mongosh
docker compose -f _scripts/docker-compose.yml exec mongodb \
  mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
```

## Estructura del repositorio

```
bc-mongodb-ce/
├── bootcamp/
│   ├── week-01/   # Introducción a MongoDB y BSON
│   ├── ...
│   └── week-24/   # Proyecto Final Capstone
├── _assets/       # Recursos visuales globales
├── _docs/         # Plan curricular y documentación
└── _scripts/      # docker-compose y utilidades
```

Cada semana contiene:

```
week-XX/
├── README.md              # Objetivos y guía de la semana
├── rubrica-evaluacion.md  # Criterios de evaluación
├── 0-assets/              # Diagramas SVG
├── 1-teoria/              # Material teórico (.md)
├── 2-practicas/           # Ejercicios guiados
├── 3-proyecto/            # Proyecto integrador semanal
├── 4-recursos/            # Recursos adicionales
└── 5-glosario/            # Términos clave
```

## Contribuir

¿Encontraste un error o quieres mejorar el contenido? Lee la
[guía de contribución](CONTRIBUTING.md).

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).\
El contenido educativo puede usarse y adaptarse libremente con atribución.
