# 02. Elecciones y el Oplog

> **Semana 21 · Etapa 2 · MongoDB 7.0**
> Referencia visual: `../0-assets/02-election-write-concerns.svg`

## Objetivos

- Entender cuándo y cómo se inicia una elección de Primary
- Conocer el rol del oplog en la replicación entre nodos
- Interpretar operaciones del oplog con sus códigos `op`

---

## 1. Cuándo Se Inicia una Elección

Una elección ocurre cuando:

1. El Primary no responde heartbeats durante **~10 segundos**
2. El Primary ejecuta `rs.stepDown()` voluntariamente
3. Un Secondary reinicia y detecta que el Primary ha cambiado

El nodo con **mayor `priority`** es el candidato preferido. Un nodo con `priority: 0` nunca puede convertirse en Primary.

---

## 2. Proceso de Votación

```txt
Secondary A (priority:1) → solicita votos al resto
Secondary B (priority:1) → vota SÍ si Candidate tiene optime ≥ el suyo
                        ← mayoría alcanzada → nuevo Primary electo
```

Para un set de 3 nodos se necesitan **mínimo 2 votos** (mayoría). En nuestro Docker el set tiene 1 nodo, así que `rs.isMaster().ismaster === true` siempre.

---

## 3. El Oplog — `local.oplog.rs`

El **oplog** (operations log) es una colección capped en la base de datos `local` que registra cada escritura del Primary. Los Secondary aplican estas entradas para mantenerse sincronizados.

```js
use local
db["oplog.rs"].find().sort({ $natural: -1 }).limit(3)
// {
//   op: "i",              ← tipo de operación
//   ns: "bootcamp_db.orders",
//   o: { _id: ObjectId(...), total: 150 },
//   ts: Timestamp(...)
// }
```

---

## 4. Códigos de Operación del Oplog

| `op` | Operación | Descripción |
|------|-----------|-------------|
| `i`  | insert    | Documento insertado |
| `u`  | update    | Documento actualizado (`o2` = filtro) |
| `d`  | delete    | Documento eliminado |
| `c`  | command   | DDL: createCollection, drop, createIndex |
| `n`  | no-op     | Heartbeat / registro vacío |

> El campo `o2` en operaciones `u` contiene el filtro `{ _id: ... }` del documento actualizado.

---

## Checklist

- [ ] ¿Cuáles son las 3 condiciones que disparan una elección?
- [ ] ¿Qué valor de `priority` impide que un nodo sea Primary?
- [ ] ¿En qué base de datos vive el oplog y cómo se llama la colección?
- [ ] ¿Qué significa `op: "c"` en el oplog?

## Referencias

- [Replica Set Elections](https://www.mongodb.com/docs/manual/core/replica-set-elections/)
- [Replica Set Oplog](https://www.mongodb.com/docs/manual/core/replica-set-oplog/)
