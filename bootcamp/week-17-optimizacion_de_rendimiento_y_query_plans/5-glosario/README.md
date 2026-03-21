# Glosario — Semana 17

## A

**allPlansExecution**: Modo de `explain()` que muestra el plan ganador y todos los
planes candidatos con sus estadísticas de ejecución. Útil para comparar opciones.

## C

**COLLSCAN**: Stage en `explain()` que indica que MongoDB recorrió toda la colección.
Señal de que no hay un índice adecuado para el filtro. Muy costoso en colecciones grandes.

**Covered query**: Consulta cuya proyección y filtro solo usan campos contenidos en un
índice. MongoDB responde sin acceder al documento completo. Resultado: `totalDocsExamined: 0`.

## D

**docsExamined**: Campo en `executionStages` que indica cuántos documentos completos
leyó ese stage. Distinto de `totalDocsExamined` que es el acumulado de todos los stages.

## E

**executionStats**: Modo de `explain()` que ejecuta realmente la query y devuelve
estadísticas de tiempo, documentos examinados y retornados.

**executionTimeMillis**: Tiempo total en milisegundos que tardó la ejecución de la query.
Incluye tiempo de índice + fetch + procesamiento.

## F

**FETCH**: Stage en `explain()` que recupera el documento completo desde el almacenamiento.
Aparece después de `IXSCAN` cuando la proyección incluye campos fuera del índice.

## H

**hint()**: Método de cursor que fuerza a MongoDB a usar un índice específico,
ignorando la selección automática del query optimizer.

## I

**IDHACK**: Stage que aparece cuando la query filtra exactamente por `_id`. Es la
búsqueda más eficiente posible, sin `IXSCAN` explícito.

**IXSCAN**: Stage que indica que MongoDB recorrió un índice B-tree para resolver la
query. Eficiente: solo examina entradas relevantes del índice.

## K

**keysExamined**: Entradas del árbol de índice revisadas en un stage `IXSCAN`.
En una covered query, `keysExamined > 0` pero `docsExamined = 0`.

## N

**nReturned**: Número de documentos devueltos por un stage o por la query completa.

## P

**Plan de ejecución**: Estrategia elegida por el query optimizer de MongoDB para
resolver una consulta. Se inspecciona con `explain()`.

## Q

**queryPlanner**: Modo por defecto de `explain()`. Muestra el plan elegido pero no
ejecuta la query. Más rápido que `executionStats`.

## R

**Rejected plans**: Planes candidatos que el optimizador descartó en favor del
`winningPlan`. Visibles en modo `allPlansExecution`.

## S

**Stage**: Cada paso en el árbol de ejecución de una query MongoDB. Los stages se
anidan: el outer stage consume la salida del inner stage.

## T

**totalDocsExamined**: Número total de documentos completos leídos durante toda la
ejecución. `0` en una covered query perfecta.

**totalKeysExamined**: Total de entradas de índice recorridas en toda la ejecución.
Siempre mayor o igual a `nReturned` cuando se usa un índice.

## W

**winningPlan**: El plan de ejecución elegido por el optimizer como el de menor costo
estimado. Visible en la salida de cualquier modo de `explain()`.
