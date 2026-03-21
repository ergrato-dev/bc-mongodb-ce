# Glosario — Semana 21: Replicación y Alta Disponibilidad

Términos clave de MongoDB ordenados alfabéticamente.

---

## A

**Arbiter** — Miembro del Replica Set que solo participa en votaciones. No almacena datos ni puede convertirse en Primary. Útil para mantener número impar de votos sin costo de almacenamiento.

---

## E

**Elección (Election)** — Proceso automático por el cual los Secondary eligen un nuevo Primary cuando el Primary actual deja de responder. Requiere mayoría de votos.

---

## H

**Heartbeat** — Ping periódico (cada 2 segundos) que cada miembro del Replica Set envía a los demás para verificar disponibilidad. Si no hay respuesta en ~10s, se considera que el nodo falló.

**Hidden (member)** — Configuración `hidden: true` en un miembro del Replica Set. Replica datos del Primary pero es invisible para los clientes y no puede recibir lecturas vía readPreference.

---

## J

**Journal (j: true)** — Opción de `writeConcern` que instruye a MongoDB a esperar que la operación sea escrita en el journal del disco antes de confirmar. Garantiza durabilidad ante caídas de servidor.

---

## M

**Majority** — En el contexto de `writeConcern: { w: "majority" }` o `readConcern: "majority"`, se refiere a más de la mitad de los miembros con derecho a voto en el Replica Set.

---

## N

**Nodo** — Cada instancia de MongoDB dentro de un Replica Set. Puede ser Primary, Secondary o Arbiter.

---

## O

**Oplog (Operations Log)** — Colección capped en la base de datos `local` (`local.oplog.rs`) que registra cada operación de escritura del Primary. Los Secondary aplican estas entradas para replicar los datos.

**Optime** — Timestamp de la última operación del oplog aplicada por un miembro. Usado para medir replication lag.

---

## P

**Primary** — Nodo del Replica Set que acepta todas las operaciones de escritura. Solo puede haber un Primary a la vez.

**Priority** — Número en `rs.conf()` que indica la preferencia de un nodo para convertirse en Primary durante una elección. Un valor de `0` significa que el nodo nunca puede ser Primary.

---

## R

**readConcern** — Nivel de consistencia para operaciones de lectura. Niveles: `local` (default), `majority`, `linearizable`, `snapshot` (transacciones).

**readPreference** — Política que determina desde qué nodo del Replica Set un cliente lee. Modos: `primary`, `primaryPreferred`, `secondary`, `secondaryPreferred`, `nearest`.

**Replica Set** — Grupo de instancias MongoDB que mantienen el mismo dataset, proporcionando redundancia y alta disponibilidad automática.

**Replication Lag** — Diferencia de tiempo entre la última operación aplicada por el Primary y la última aplicada por un Secondary. Un lag alto puede causar lecturas desactualizadas.

---

## S

**Secondary** — Nodo del Replica Set que mantiene una copia del dataset primario aplicando continuamente operaciones del oplog. Puede ser promovido a Primary en elecciones.

**stepDown** — Comando `rs.stepDown()` que instruye al Primary a ceder su rol voluntariamente, iniciando una nueva elección. Útil para mantenimiento planificado.

---

## V

**Votes** — Campo `votes: 1` en `rs.conf()` que indica si un miembro participa en las votaciones de elección. El máximo de votantes en un set es 7.

---

## W

**writeConcern** — Nivel de confirmación requerido para operaciones de escritura. Campos: `w` (número de nodos o "majority"), `j` (journal), `wtimeout` (timeout en ms).
