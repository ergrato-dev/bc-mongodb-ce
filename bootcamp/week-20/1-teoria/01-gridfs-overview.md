# GridFS — Qué es y Cómo Funciona

## Objetivos
1. Entender el límite de 16 MB de BSON y por qué existe GridFS
2. Conocer las dos colecciones internas de GridFS: `fs.files` y `fs.chunks`
3. Ver la relación entre un archivo y sus chunks
4. Identificar los casos de uso adecuados para GridFS

---

## 1. El límite de 16 MB

Un documento BSON en MongoDB no puede superar **16 MB**. Para archivos más grandes:
imágenes de alta resolución, PDFs, videos, backups, modelos de ML → se usa **GridFS**.

> GridFS no es una colección especial. Es una **convención** que usa dos colecciones
> estándar para dividir y almacenar archivos de cualquier tamaño.

## 2. fs.files — Metadata del archivo

Cada archivo subido crea **un documento** en `fs.files`:

```js
{
  _id: ObjectId("..."),
  filename: "informe-anual.pdf",
  length: 52428800,         // tamaño en bytes (50 MB)
  chunkSize: 261120,        // 255 KB por chunk
  uploadDate: ISODate("2025-04-01T10:00:00Z"),
  contentType: "application/pdf",
  metadata: {
    uploadedBy: "user-101",
    tags: ["informe", "2025"]
  }
}
```

## 3. fs.chunks — Los datos del archivo

El archivo se divide en bloques de 255 KB. Cada bloque es **un documento** en `fs.chunks`:

```js
// Chunk 0 (primeros 255 KB)
{ _id: ObjectId("..."), files_id: ObjectId("..."), n: 0, data: BinData(0,"...") }

// Chunk 1 (siguientes 255 KB)
{ _id: ObjectId("..."), files_id: ObjectId("..."), n: 1, data: BinData(0,"...") }

// Chunk N (último bloque — puede ser menor a 255 KB)
{ _id: ObjectId("..."), files_id: ObjectId("..."), n: 47, data: BinData(0,"...") }
```

La relación entre `fs.files` y `fs.chunks` es: `fs.chunks.files_id → fs.files._id`.

## 4. Índice automático en fs.chunks

GridFS crea automáticamente un índice compuesto único en `fs.chunks`:

```js
{ files_id: 1, n: 1 }  // unique: true
```

Este índice garantiza el orden correcto de los chunks al reconstruir el archivo.

## Checklist
- ¿Cuál es el límite de tamaño de un documento BSON en MongoDB?
- ¿Qué información guarda `fs.files` vs `fs.chunks`?
- ¿Cuál es el tamaño por defecto de cada chunk en GridFS?
- ¿Qué campo relaciona `fs.chunks` con su archivo en `fs.files`?

## Referencias
- [GridFS — MongoDB Docs](https://www.mongodb.com/docs/manual/core/gridfs/)
- [fs.files Collection](https://www.mongodb.com/docs/manual/core/gridfs/#the-files-collection)
