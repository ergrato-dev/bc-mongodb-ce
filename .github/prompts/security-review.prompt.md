---
name: "Security review"
description: "Revisa el código de una semana o archivo específico aplicando OWASP Top 10 en contexto de MongoDB CE. Detecta vulnerabilidades en queries, configuración y scripts, y sugiere correcciones concretas."
argument-hint: "Ruta del archivo o carpeta a revisar (ej: bootcamp/week-09/3-proyecto/starter)"
mode: "agent"
---

# Security Review — OWASP Top 10 para MongoDB CE

Revisa el código indicado aplicando los 10 riesgos de seguridad más críticos según
OWASP, adaptados al stack del bootcamp (MongoDB 7.0, Node.js, mongosh).

## OWASP A01 — Broken Access Control

**Riesgos en MongoDB:**

- Usuarios con rol `root` o `dbAdmin` donde solo se necesita `readWrite`
- Colecciones sin autenticación habilitada en el contenedor
- Rutas de API (si hay Node.js) sin verificación de permisos antes de operar

**Checklist:**

- [ ] ¿Los scripts usan el usuario `bootcamp` con `readWrite` (no `root`)?
- [ ] ¿El contenedor Docker tiene `--auth` habilitado?
- [ ] ¿No hay operaciones `db.dropDatabase()` accesibles sin rol explícito?
- [ ] ¿Los archivos `.env` no se commitean al repositorio?

**Ejemplo de corrección:**

```js
// ❌ Conectar como root en scripts de ejercicios
mongosh -u root -p rootpassword --authenticationDatabase admin

// ✅ Usar usuario con mínimos privilegios
mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin bootcamp_db
```

---

## OWASP A02 — Cryptographic Failures

**Riesgos en MongoDB:**

- Contraseñas almacenadas en texto plano en documentos
- Secretos hardcodeados en scripts `.js` o en `docker-compose.yml`
- Credenciales reales en `.env.example` (en lugar de placeholders)

**Checklist:**

- [ ] ¿Los documentos de prueba usan `passwordHash` (nunca `password` en plano)?
- [ ] ¿El `docker-compose.yml` usa variables de entorno desde `.env`?
- [ ] ¿El `.env.example` tiene solo placeholders (no valores reales)?
- [ ] ¿El `.env` está en `.gitignore`?

**Ejemplo de corrección:**

```js
// ❌ Contraseña en texto plano
db.users.insertOne({ email: "user@example.com", password: "secret123" })

// ✅ Hash de contraseña (bcrypt en producción)
db.users.insertOne({ email: "user@example.com", passwordHash: "$2b$10$..." })
```

---

## OWASP A03 — Injection

**Riesgos en MongoDB:**

- Construcción de queries con concatenación de strings (NoSQL Injection)
- Uso de `$where` con input del usuario (ejecución de JavaScript del servidor)
- Uso de `mapReduce` con código generado dinámicamente

**Checklist:**

- [ ] ¿No hay queries construidas con concatenación de strings?
- [ ] ¿Se evita `$where` con datos del usuario?
- [ ] ¿Los filtros de ejemplo usan valores literales, no variables sin sanitizar?
- [ ] ¿En código Node.js, los inputs se validan antes de pasarlos a queries?

**Ejemplo de corrección:**

```js
// ❌ NoSQL Injection — input del usuario concatenado
const userInput = '{ $gt: "" }'  // input malicioso
db.users.find({ password: JSON.parse(userInput) })  // bypass de auth

// ✅ Validar tipo y usar valores literales
db.users.find({ email: "user@example.com" })

// ❌ $where con input del usuario
db.products.find({ $where: `this.price > ${userPrice}` })

// ✅ Usar operadores nativos
db.products.find({ price: { $gt: NumberInt(100) } })
```

---

## OWASP A04 — Insecure Design

**Riesgos en MongoDB:**

- Sin paginación en consultas a colecciones grandes (exfiltración de datos)
- Pipelines que exponen campos sensibles sin proyección
- Colecciones sin índices en campos de consulta frecuente (DoS por COLLSCAN)

**Checklist:**

- [ ] ¿Las queries de ejemplo incluyen `.limit()` o `$limit` cuando aplica?
- [ ] ¿Las proyecciones excluyen campos sensibles (`passwordHash`, tokens)?
- [ ] ¿Las colecciones de datos de prueba tienen índices en campos de búsqueda?

---

## OWASP A05 — Security Misconfiguration

**Riesgos en MongoDB:**

- Puerto 27017 expuesto a internet sin autenticación
- `mongod` corriendo sin `--auth` en la configuración
- Binds a `0.0.0.0` sin firewall en entornos distintos al local

**Checklist:**

- [ ] ¿El `docker-compose.yml` expone el puerto solo a `127.0.0.1`?
- [ ] ¿Está habilitada la autenticación en el contenedor?
- [ ] ¿No hay configuración `bindIp: 0.0.0.0` sin protección adicional?

**Ejemplo de corrección:**

```yaml
# ❌ Puerto expuesto a todas las interfaces
ports:
  - "27017:27017"

# ✅ Solo accesible desde localhost
ports:
  - "127.0.0.1:27017:27017"
```

---

## OWASP A06 — Vulnerable and Outdated Components

**Riesgos en MongoDB:**

- Imagen Docker de MongoDB sin versión fija (usando `latest`)
- Drivers de Node.js con CVEs conocidos
- Versiones flotantes en `package.json` de proyectos starter

**Checklist:**

- [ ] ¿El `docker-compose.yml` usa `mongo:7.0` (no `mongo:latest`)?
- [ ] ¿Los `package.json` de starter/solution usan versiones exactas (sin `^`, `~`)?
- [ ] ¿`pnpm audit --audit-level moderate` pasa sin vulnerabilidades?

---

## OWASP A07 — Identification and Authentication Failures

**Riesgos en MongoDB:**

- Credenciales por defecto sin cambiar en producción
- Sin roles RBAC definidos para usuarios de aplicación
- Acceso como `admin` desde la aplicación cuando solo se necesita `readWrite`

**Checklist:**

- [ ] ¿Las credenciales de desarrollo (`bootcamp`/`bootcamp123`) están claramente marcadas como solo para entorno local?
- [ ] ¿Los scripts de producción (si los hay) usan variables de entorno?
- [ ] ¿No hay usuarios creados sin contraseña?

---

## OWASP A08 — Software and Data Integrity Failures

**Riesgos en MongoDB:**

- `$jsonSchema` ausente en colecciones que lo requieren
- Sin validación de tipos BSON en inserciones masivas
- CI/CD que despliega sin revisar the integridad de scripts

**Checklist:**

- [ ] ¿Las colecciones importantes tienen validación `$jsonSchema`?
- [ ] ¿Los `setup.js` usan tipos BSON correctos (`Decimal128`, `NumberInt`, `new Date()`)?
- [ ] ¿El pipeline de CI incluye verificación de sintaxis de scripts?

---

## OWASP A09 — Security Logging and Monitoring Failures

**Riesgos en MongoDB:**

- Sin logs de operaciones de autenticación fallidas
- Logs con datos sensibles (contraseñas, tokens en queries)
- Sin monitorización de operaciones lentas (slow query log)

**Checklist:**

- [ ] ¿El `docker-compose.yml` habilita el slow query log (`--slowms`)?
- [ ] ¿Los scripts de ejemplo no loguean valores sensibles con `print()`?

---

## OWASP A10 — Server-Side Request Forgery (SSRF)

**Riesgos en MongoDB:**

- Change Streams o webhooks que aceptan URLs externas sin validación
- Atlas Data Federation con fuentes de datos no validadas

**Checklist:**

- [ ] ¿Los ejemplos de Change Streams no exponen endpoints sin autenticación?
- [ ] ¿No hay ejemplos que hagan fetch a URLs proporcionadas por el usuario?

---

## Instrucciones para el agente

1. Leer todos los archivos en la ruta indicada
2. Para cada riesgo OWASP, verificar los ítems del checklist
3. Reportar los **problemas encontrados** con:
   - Archivo y línea donde ocurre
   - Descripción del riesgo
   - Código actual problemático
   - Código corregido sugerido
4. Si no hay problemas en un área, indicar "✅ Sin problemas detectados"
5. Ordenar por severidad: Alto → Medio → Bajo
6. Al final, dar un **resumen ejecutivo** con el número de issues por categoría

## Ruta a revisar

$input
