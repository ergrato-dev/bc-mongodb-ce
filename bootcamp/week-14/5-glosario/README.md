# Glosario — Semana 14: Índices de Texto y Geoespaciales

Términos MongoDB ordenados alfabéticamente.

---

## 2

**`2dsphere`** — Tipo de índice geoespacial en MongoDB para consultas en la
superficie terrestre. Soporta el formato GeoJSON y operadores como `$near`,
`$geoWithin` y `$geoIntersects`.
```js
db.stores.createIndex({ location: "2dsphere" })
```

---

## C

**Coordinates (GeoJSON)** — Array de coordenadas GeoJSON en formato
`[longitud, latitud]`. La longitud va siempre primero.
```js
coordinates: [-74.0721, 4.7110]  // [longitud, latitud]
```

---

## G

**GeoJSON** — Estándar de formato para datos geoespaciales.
Los tipos principales son: `Point`, `Polygon`, `LineString`, `MultiPoint`.
```js
{ type: "Point", coordinates: [-74.08, 4.70] }
```

**`$geoIntersects`** — Operador que retorna documentos cuya geometría
intersecta con la geometría especificada.

**`$geoWithin`** — Operador que retorna documentos cuya geometría está
completamente dentro del área especificada. No requiere índice pero lo usa.
```js
db.stores.find({ location: { $geoWithin: { $box: [[...], [...]] } } })
```

---

## M

**`$maxDistance`** — Opción en `$near` que limita la distancia máxima
en metros desde el punto de referencia.

---

## N

**`$near`** — Operador geoespacial que retorna documentos ordenados por
distancia al punto especificado, del más cercano al más lejano. Requiere
índice `2dsphere`.

---

## S

**`$search`** — Campo dentro de `$text` que contiene la cadena de búsqueda.
Soporta palabras individuales, exclusión con `-`, y frases entre comillas.
```js
$text: { $search: "mongodb -cluster \"alta disponibilidad\"" }
```

**Stemming** — Reducción de palabras a su forma raíz para ampliar resultados
de búsqueda. `"corriendo"`, `"corría"` y `"correr"` coinciden con la búsqueda
de `"correr"`.

**Stop words** — Palabras comunes que MongoDB ignora en búsquedas de texto
(`"de"`, `"la"`, `"en"`, `"the"`, `"and"`).

---

## T

**`$text`** — Operador de consulta para búsqueda de texto completo en campos
con índice `text`. Requiere el subcampo `$search`.
```js
db.articles.find({ $text: { $search: "mongodb rendimiento" } })
```

**Text Index** — Tipo especial de índice que tokeniza el contenido de campos
de texto para búsquedas por palabras clave. Solo puede haber uno por colección.
```js
db.articles.createIndex({ title: "text", body: "text" })
```

**`textScore`** — Puntuación de relevancia calculada por MongoDB para cada
documento en una búsqueda de texto. Se accede con `{ $meta: "textScore" }`.
```js
{ score: { $meta: "textScore" } }
```
