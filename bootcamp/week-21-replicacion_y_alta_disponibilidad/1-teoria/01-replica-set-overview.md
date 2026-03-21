# 01. Replica Sets — Arquitectura y Roles de Nodos

> **Semana 21 · Etapa 2 · MongoDB 7.0**
> Referencia visual: `../0-assets/01-replica-set-architecture.svg`

## Objetivos

- Identificar los tres tipos de nodos en un Replica Set
- Interpretar la salida de `rs.status()` y `rs.conf()`
- Entender el mecanismo de heartbeat y sincronización con el oplog

---

## 1. ¿Qué es un Replica Set?

Un **Replica Set** es un grupo de instancias MongoDB que mantienen el mismo dataset. Proporciona **alta disponibilidad** automática: si el Primary falla, los Secondary eligen uno nuevo sin intervención manual.

```js
// Ver el estado actual del Replica Set
rs.status()
```

---

## 2. Tipos de Nodos

| Nodo | Rol | Datos | Puede ser Primary |
|------|-----|-------|-------------------|
| **Primary** | Recibe todas las escrituras | Sí | Siempre |
| **Secondary** | Replica el oplog del Primary | Sí | Sí (si priority > 0) |
| **Arbiter** | Solo vota en elecciones | No | No |

El mínimo recomendado es **3 nodos** (1 Primary + 2 Secondary) para garantizar mayoría ante fallas.

---

## 3. `rs.status()` — Campos Clave

```js
rs.status()
// Salida relevante:
// {
//   set: "rs0",           ← nombre del Replica Set
//   myState: 1,           ← 1=PRIMARY, 2=SECONDARY, 7=ARBITER
//   members: [
//     {
//       name: "mongo1:27017",
//       stateStr: "PRIMARY",
//       health: 1,         ← 1=OK, 0=inaccesible
//       optime: { ts: Timestamp(...), t: 1 }
//     }
//   ]
// }
```

---

## 4. `rs.conf()` — Configuración del Set

```js
rs.conf()
// {
//   _id: "rs0",
//   members: [
//     {
//       _id: 0,
//       host: "mongo1:27017",
//       priority: 1,     ← mayor priority = candidato preferido
//       votes: 1,
//       hidden: false,   ← hidden:true = no aparece en readPreference
//       arbiterOnly: false
//     }
//   ]
// }
```

> **Heartbeat**: cada nodo envía un ping a los demás cada **2 segundos**. Si después de 10 segundos no hay respuesta, el nodo se marca como no disponible y puede iniciarse una elección.

---

## Checklist

- [ ] ¿Cuál es la diferencia entre un Secondary y un Arbiter?
- [ ] ¿Qué campo de `rs.status()` indica si un nodo está disponible?
- [ ] ¿Para qué sirve el campo `priority` en `rs.conf()`?
- [ ] ¿Con qué frecuencia se envían los heartbeats entre nodos?

## Referencias

- [Replica Sets — MongoDB Docs](https://www.mongodb.com/docs/manual/replication/)
- [rs.status() — mongosh](https://www.mongodb.com/docs/manual/reference/method/rs.status/)
