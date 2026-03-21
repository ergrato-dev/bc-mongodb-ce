# Política de Seguridad

## 🔒 Versiones Soportadas

Este proyecto educativo está en desarrollo activo. Mantenemos las siguientes ramas:

| Versión | Soportada          |
| ------- | ------------------ |
| main    | ✅                 |
| develop | ✅                 |
| < 1.0   | ❌                 |

---

## 🐛 Reportar una Vulnerabilidad

La seguridad de nuestros estudiantes y contribuidores es nuestra prioridad. Si
descubres una vulnerabilidad en el bootcamp, repórtala de manera responsable.

### ¿Qué es una Vulnerabilidad en este Contexto?

En un proyecto educativo de MongoDB, consideramos vulnerabilidades:

#### 🚨 Críticas

- Credenciales de producción (URI de MongoDB, passwords reales) expuestas en el código
- Ejemplos de queries que demuestren NoSQL Injection sin advertencia didáctica clara
- Configuraciones inseguras presentadas como buenas prácticas
- Scripts que ejecuten operaciones destructivas sin confirmación
- Dependencias con vulnerabilidades conocidas (CVE activos)

#### ⚠️ Moderadas

- Prácticas de código inseguras presentadas como correctas (ej: concatenar strings en queries)
- Falta de variables de entorno en ejemplos con credenciales hardcodeadas
- Configuraciones de MongoDB que expongan el puerto 27017 sin autenticación
- Scripts de setup que otorguen privilegios excesivos sin justificación

#### ℹ️ Informativas

- Mejoras en la enseñanza de seguridad MongoDB
- Sugerencias de mejores prácticas de RBAC
- Actualizaciones de documentación de seguridad

---

## 📧 Cómo Reportar

### Opción 1: GitHub Security Advisory (Preferido para vulnerabilidades críticas)

1. Ve a la pestaña **Security** del repositorio
2. Haz click en **"Report a vulnerability"**
3. Completa el formulario con detalle

### Opción 2: Issue Privado

Para problemas de seguridad moderados:

1. Crea un [Issue](https://github.com/ergrato-dev/bc-mongodb-ce/issues) con la
   etiqueta `security`
2. **NO incluyas credenciales reales o detalles de explotación** en el título
3. Menciona `@ergrato-dev` para atención inmediata

### Opción 3: Email

Para vulnerabilidades críticas o sensibles:
**[Contacto por GitHub](https://github.com/ergrato-dev)**

**Incluye en tu reporte:**

- Descripción de la vulnerabilidad
- Semana y archivo afectado (ej: `bootcamp/week-22-seguridad_y_administracion/2-practicas/ejercicio-01`)
- Pasos para reproducirla
- Impacto potencial sobre los estudiantes
- Sugerencia de corrección (opcional)

---

## ⏱️ Tiempo de Respuesta

| Severidad | Tiempo de Respuesta | Tiempo de Resolución |
| --------- | ------------------- | -------------------- |
| Crítica   | 24 horas            | 48–72 horas          |
| Moderada  | 48 horas            | 1–2 semanas          |
| Baja      | 1 semana            | Próximo release       |

---

## 🔄 Proceso de Manejo

1. **Acuse de Recibo**: Confirmamos la recepción en el tiempo establecido
2. **Evaluación**: Verificamos y reproducimos la vulnerabilidad
3. **Desarrollo de Fix**: Creamos la corrección en una rama privada
4. **Divulgación**: Publicamos la corrección con crédito al reportero (si lo desea)
5. **Reconocimiento**: Incluimos el nombre del reportero en el CHANGELOG

---

## 🛡️ Mejores Prácticas de Seguridad para Estudiantes

### Conexiones a MongoDB

```js
// ❌ NUNCA hardcodear credenciales
const uri = "mongodb://bootcamp:bootcamp123@localhost:27017/bootcamp_db"

// ✅ Usar variables de entorno
const uri = process.env.MONGODB_URI
```

Usa `.env` con `dotenv` y verifica que `.gitignore` incluya `.env`.

### Prevenir NoSQL Injection

```js
// ❌ Construcción insegura con input del usuario
const nombre = req.body.name  // input sin validar
db.users.find({ name: nombre })  // puede ser { $gt: "" }

// ✅ Validar el tipo antes de usar en queries
const nombre = String(req.body.name).trim()
if (!nombre) throw new Error("Nombre requerido")
db.users.find({ name: nombre })
```

### Validación de Esquema con $jsonSchema

```js
// ✅ Validar documentos del lado del servidor
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "role"],
      properties: {
        email: { bsonType: "string", pattern: "^[^@]+@[^@]+$" },
        role: { enum: ["admin", "reader", "writer"] }
      }
    }
  },
  validationAction: "error"
})
```

### Principio de Mínimo Privilegio (RBAC)

```js
// ✅ Usuario con solo los permisos necesarios
db.createUser({
  user: "app_reader",
  pwd: passwordPrompt(),
  roles: [{ role: "read", db: "bootcamp_db" }]
})
```

---

## 📚 Recursos de Seguridad para MongoDB

- [MongoDB Security Checklist](https://www.mongodb.com/docs/manual/administration/security-checklist/)
- [OWASP NoSQL Injection](https://owasp.org/www-community/attacks/NoSQL_Injection)
- [MongoDB RBAC Documentation](https://www.mongodb.com/docs/manual/core/authorization/)
- [Securing MongoDB — Docker](https://www.mongodb.com/docs/manual/tutorial/configure-mongos-for-testing/)

---

## 🔐 Dependencias

El proyecto usa MongoDB driver `^6.0.0` para Node.js (semanas 23–24).
Para revisar vulnerabilidades en las semanas que usan Node.js:

```bash
cd bootcamp/week-23-mongodb_con_nodejs   # o week-24-proyecto_final_capstone
npm audit
```

**Frecuencia de revisión**: Mensual o cuando se publique un CVE crítico.

---

## ⚖️ Divulgación Responsable

Solicitamos:

- **No divulgar públicamente** la vulnerabilidad hasta que hayamos publicado un fix
- **Dar tiempo razonable** para resolver el problema
- **No explotar** la vulnerabilidad más allá de lo necesario para demostrarla

Nos comprometemos a:

- **Responder rápidamente** a tu reporte
- **Mantener comunicación** sobre el progreso
- **Acreditar tu descubrimiento** en el CHANGELOG (si lo deseas)

---

## 🏆 Reconocimiento

Agradecemos a todos los investigadores de seguridad y contribuidores que nos ayudan
a mantener este proyecto seguro para nuestra comunidad de estudiantes.

Los reporteros de vulnerabilidades críticas o moderadas serán listados en el
CHANGELOG con su permiso.

---

*Última actualización: Marzo 2026*
*Versión: 1.0*
