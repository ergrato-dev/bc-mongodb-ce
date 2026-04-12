<p align="center">
  <img src="assets/bootcamp-header.svg" alt="Bootcamp MongoDB CE — From Zero to Hero" width="900">
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-00ED64.svg" alt="License CC BY-NC-SA 4.0"></a>
  <a href="#"><img src="https://img.shields.io/badge/weeks-24-f59e0b.svg" alt="24 Weeks"></a>
  <a href="#"><img src="https://img.shields.io/badge/hours-192-f97316.svg" alt="192 Hours"></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-7.0-00ED64?logo=mongodb&logoColor=white" alt="MongoDB 7.0"></a>
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/Docker-required-2496ED?logo=docker&logoColor=white" alt="Docker"></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-≥18-339933?logo=nodedotjs&logoColor=white" alt="Node.js"></a>
  <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"><img src="https://img.shields.io/badge/commercial%20use-prohibited-red?style=flat-square" alt="Commercial use prohibited"></a>
</p>

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/🇨🇴_Español-DC143C?style=for-the-badge&logoColor=white" alt="Versión en Español"></a>
</p>

---

## 📋 Description

Intensive **24-week (~6-month)** bootcamp to master MongoDB Community Edition from
scratch. Designed to take students from zero NoSQL knowledge to **MongoDB Junior
Developer** or **Junior Backend Developer** level, with focus on real-world data
modeling, query optimization, and professional best practices.

> 🏛️ **Unique Domain Policy (Anti-Copying)**: Each learner works on a unique
> business domain assigned by the instructor (Library, Pharmacy, Gym, Restaurant,
> Hospital, etc.). This guarantees original implementations and prevents copying
> between classmates.

### 🎯 Objectives

Upon completing the bootcamp, students will be able to:

- ✅ Understand MongoDB's document and collection model
- ✅ Perform complete CRUD operations with `mongosh` and the Node.js driver
- ✅ Design schemas with advanced patterns (Extended Reference, Bucket, Computed)
- ✅ Build complex aggregation pipelines with `$lookup`, `$group`, `$unwind`
- ✅ Create and manage indexes to optimize query performance
- ✅ Implement multi-document ACID transactions with `withTransaction()`
- ✅ Configure Replica Sets and understand high availability
- ✅ Apply security best practices (RBAC, `$jsonSchema`, environment variables)
- ✅ Integrate MongoDB in Node.js applications with the official driver

### 🚀 Why MongoDB Community Edition?

> **Real MongoDB from day 1** — No complex installations, MongoDB 7.0 available
> in minutes with Docker.

This bootcamp uses MongoDB CE via Docker for all 24 weeks. No Atlas, no cloud
services. A reproducible local environment that works on Linux, macOS, and Windows,
and can be reset in seconds with `docker compose down -v`.

---

## 🗓️ Bootcamp Structure

|                 Stage                  | Weeks | Hours | Main Topics |
| :------------------------------------: | :---: | :---: | ----------- |
| **Stage 0** — MongoDB Fundamentals     | 01–08 | 64 h  | BSON, full CRUD, query and update operators, `find()`, simple indexes, `explain()` |
| **Stage 1** — Intermediate MongoDB     | 09–16 | 64 h  | Aggregation Pipeline, `$lookup`, `$unwind`, advanced indexes, data modeling, transactions |
| **Stage 2** — Advanced MongoDB & Node.js | 17–24 | 64 h | Replication, RBAC security, Node.js driver, ACID transactions, Change Streams, Capstone |

**Total: 24 weeks** | **~192 hours** of intensive training

---

## 📚 Weekly Content

Each week includes:

```
bootcamp/week-XX/
├── README.md                 # Description and objectives
├── rubrica-evaluacion.md     # Evaluation criteria
├── 0-assets/                 # SVG diagrams (dark theme)
├── 1-teoria/                 # Theoretical material (.md)
├── 2-practicas/              # Guided exercises
│   └── ejercicio-XX/
│       ├── README.md
│       ├── starter/          # setup.js + commented ejercicio.js
│       └── solution/         # uncommented ejercicio.js
├── 3-proyecto/               # Weekly integrative project
│   └── starter/
│       ├── setup.js          # Generic test data
│       └── proyecto.js       # TODOs to implement
├── 4-recursos/               # Ebooks, videos, references
└── 5-glosario/               # Key MongoDB terms (A–Z)
```

### 🔑 Key Components

- 📖 **Theory**: Concepts with real examples executable in `mongosh`
- 💻 **Practice**: Commented queries to uncomment — no TODOs in exercises
- 📝 **Assessment**: Evidence of knowledge, performance, and product
- 🎓 **Glossary**: Key terms for each week, ordered A–Z

---

## 🛠️ Tech Stack

| Technology  | Version | Use                                       |
| ----------- | ------- | ----------------------------------------- |
| MongoDB CE  | 7.0     | Database engine (weeks 1–24)              |
| Docker      | 24+     | Reproducible MongoDB container            |
| mongosh     | 2.x     | Interactive shell for queries and scripts |
| Node.js     | ≥ 18    | Official driver (weeks 23–24)             |
| Git         | 2.30+   | Version control                           |

---

## 🚀 Quick Start

### Prerequisites

- **Docker** and **Docker Compose** installed
- **Git** to clone the repository
- **Node.js ≥ 18** (required only for weeks 23–24)

### 1. Clone the Repository

```bash
git clone https://github.com/ergrato-dev/bc-mongodb-ce.git
cd bc-mongodb-ce
```

### 2. Start MongoDB 7.0

```bash
docker compose -f scripts/docker-compose.yml up -d
```

### 3. Connect with mongosh

```bash
docker compose -f scripts/docker-compose.yml exec mongodb \
  mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
```

### 4. Load Sample Data (Week 01)

```bash
docker compose -f scripts/docker-compose.yml exec -T mongodb \
  mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
  bootcamp_db --file /dev/stdin < bootcamp/week-01-introduccion_a_mongodb_y_nosql/2-practicas/ejercicio-01/starter/setup.js
```

---

## 📊 Learning Methodology

### Teaching Strategies

- 🎯 **Project-Based Learning (PBL)**
- 🧩 **Deliberate Practice** — queries of increasing complexity
- 🔄 **Spaced Repetition** — key concepts present across multiple weeks
- 👥 **Peer Code Review**
- 🎮 **Live Coding** with real-time data modeling

### Time Distribution (8 h/week)

- **Theory**: 2–2.5 hours
- **Practice**: 3–3.5 hours
- **Project**: 2–2.5 hours

### Assessment

Each week includes three types of evidence:

1. **Knowledge 🧠** (30%): Quizzes and theoretical assessments on MongoDB
2. **Performance 💪** (40%): Practical exercises executed correctly
3. **Product 📦** (30%): Deliverable project adapted to the assigned domain

**Passing criteria**: Minimum 70% in each type of evidence

---

## 🤝 Contributing

This project is licensed under **CC BY-NC-SA 4.0**: you can share and adapt it
with attribution, non-commercially, and under the same license.

### How to Contribute

1. Fork the repository
2. Create your branch (`git checkout -b feat/new-feature`)
3. Commit with [Conventional Commits](https://www.conventionalcommits.org/) (`git commit -m 'feat: add exercise'`)
4. Push to the branch (`git push origin feat/new-feature`)
5. Open a Pull Request

### 📋 Contribution Areas

- ✨ Additional exercises
- 📚 Documentation improvements
- 🐛 Query bug fixes
- 🎨 SVG diagrams
- 🌐 Translations
- 📹 Learning resources

---

## 📞 Support

- 💬 Discussions: [GitHub Discussions](https://github.com/ergrato-dev/bc-mongodb-ce/discussions)
- 🐛 Issues: [GitHub Issues](https://github.com/ergrato-dev/bc-mongodb-ce/issues)
- 📧 Email: [Contact](mailto:tu-email@ejemplo.com)

---

## 📄 License

This project is licensed under **CC BY-NC-SA 4.0** (Creative Commons
Attribution-NonCommercial-ShareAlike 4.0 International).

- ✅ You can share and adapt the material with attribution
- ✅ Educational forks allowed under the same license
- ❌ Commercial use not permitted

See [LICENSE](LICENSE) or https://creativecommons.org/licenses/by-nc-sa/4.0/ for details.

---

## 🏆 Acknowledgments

- [MongoDB Docs](https://www.mongodb.com/docs/) — For the best NoSQL database documentation
- [MongoDB University](https://learn.mongodb.com/) — For free courses and certifications
- MongoDB Community — For resources, examples, and forum support
- All contributors

---

## 📚 Additional Documentation

- [🤖 Copilot Instructions](.github/copilot-instructions.md)
- [🔒 Security Policy](SECURITY.md)
- [📋 Curriculum Plan](docs/plan-curricular.md)

---

## ⚠️ Disclaimer

This repository and all its contents are provided **for educational purposes only**, without warranty of any kind, express or implied.

- All material, scripts, and code examples are provided "as-is", with no guarantee of fitness for any particular purpose.
- Use of content from this repository in production environments or systems with real data is the **sole responsibility of the user**.
- The authors and contributors shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this material.
- Sample credentials included in the scripts (`bootcamp` / `bootcamp123`) are **intended exclusively for local learning environments** and must never be used in production.
- This project is not affiliated with, sponsored by, or endorsed by **MongoDB, Inc.**
- Third-party product names, trademarks, and logos are the property of their respective owners.

---

<p align="center">
  <strong>🎓 Bootcamp MongoDB CE — From Zero to Hero</strong><br>
  <em>From zero to MongoDB Junior Developer in ~6 months</em>
</p>

<p align="center">
  <a href="bootcamp/week-01-introduccion_a_mongodb_y_nosql">Start Week 1</a> •
  <a href="docs/plan-curricular.md">View Curriculum</a> •
  <a href="https://github.com/ergrato-dev/bc-mongodb-ce/issues">Report Issue</a> •
  <a href="LICENSE">License CC BY-NC-SA 4.0</a>
</p>

<p align="center">
  Made with ❤️ for the developer community
</p>
