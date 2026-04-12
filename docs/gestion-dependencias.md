# Gestión de Dependencias — Reglas de Seguridad

## ⚠️ Regla de Oro: Versiones Exactas (Pinning)

**PROHIBIDO usar rangos de versión en `package.json`:**

```jsonc
// ❌ PROHIBIDO — resuelve a cualquier versión futura sin control
"mongodb": "^7.1.1"
"mongodb": ">=6.0.0"
"mongodb": "~7.1.0"
"mongodb": "*"
"mongodb": "latest"

// ✅ OBLIGATORIO — versión exacta, sin modificadores
"mongodb": "7.1.1"
```

### Motivación

- `^7.1.1` puede instalar `7.99.0` en el futuro incluyendo breaking changes
  o dependencias con CVEs no conocidos al momento de escribir el código.
- Entornos educativos requieren reproducibilidad total: todos los
  estudiantes deben instalar exactamente las mismas versiones.
- Un CVE publicado meses después no afecta instalaciones con versión pinnada
  hasta que haya una revisión explícita y documentada.

---

## 📦 Dependencias del Proyecto

### Semanas 23 y 24 (único ecosistema Node.js del bootcamp)

| Paquete   | Versión pinnada | Fecha de revisión | CVEs conocidos |
| --------- | --------------- | ----------------- | -------------- |
| `mongodb` | `7.1.1`         | 2026-04-04        | **0**          |

#### Dependencias transitivas de `mongodb@7.1.1`

| Paquete                      | Versión  |
| ---------------------------- | -------- |
| `@mongodb-js/saslprep`       | `1.4.6`  |
| `@types/webidl-conversions`  | `7.0.3`  |
| `@types/whatwg-url`          | `13.0.0` |
| `bson`                       | `7.2.0`  |
| `memory-pager`               | `1.5.0`  |
| `mongodb-connection-string-url` | `7.0.1` |
| `punycode`                   | `2.3.1`  |
| `sparse-bitfield`            | `3.0.3`  |
| `tr46`                       | `5.1.1`  |
| `webidl-conversions`         | `7.0.0`  |
| `whatwg-url`                 | `14.2.0` |

**Fuente de auditoría**: `npm audit` contra GitHub Advisory Database
(`found 0 vulnerabilities`, auditando 13 paquetes).

---

## 🔄 Proceso de Actualización de Versiones

Cuando se requiera actualizar una dependencia:

1. Identificar la nueva versión estable: `npm view mongodb dist-tags`
2. Crear un entorno temporal y auditar:
   ```bash
   TMPDIR=$(mktemp -d) && cd "$TMPDIR"
   echo '{"name":"audit","version":"1.0.0","dependencies":{"mongodb":"X.Y.Z"}}' > package.json
   npm install --package-lock-only
   npm audit --json
   cd - && rm -rf "$TMPDIR"
   ```
3. Verificar el changelog del paquete para breaking changes.
4. Actualizar la versión en `package.json` (exacta, sin `^`).
5. Actualizar la tabla de dependencias transitivas en este documento.
6. Actualizar la fecha de revisión.

---

## 🔒 Criterios para Elegir una Versión

Al pinear una nueva versión, preferir:

1. **La última patch release del minor actual**: menor superficie de cambio.
2. **Sin advisories en npm audit**: `found 0 vulnerabilities` obligatorio.
3. **Alineada con el motor del servidor**: el driver `mongodb@7.x` es el
   oficial para MongoDB 7.0 CE (motor del bootcamp).
4. **Node.js engine declarado**: siempre incluir `"engines": {"node": ">=18.0.0"}`
   en todos los `package.json` del proyecto.

---

_Última revisión: 2026-04-04_
_Próxima revisión recomendada: 2026-10-04 o ante publicación de CVE crítico_
