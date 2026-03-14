# Recursos — Semana 20: GridFS y Time Series

## Documentación Oficial

### GridFS
- [GridFS — MongoDB Docs](https://www.mongodb.com/docs/manual/core/gridfs/)
- [GridFS fs.files Collection](https://www.mongodb.com/docs/manual/core/gridfs/#the-files-collection)
- [GridFS fs.chunks Collection](https://www.mongodb.com/docs/manual/core/gridfs/#the-chunks-collection)
- [Node.js GridFSBucket Driver](https://www.mongodb.com/docs/drivers/node/current/fundamentals/gridfs/)

### Time Series Collections
- [Time Series Collections — MongoDB Docs](https://www.mongodb.com/docs/manual/core/timeseries-collections/)
- [Create Time Series Collection](https://www.mongodb.com/docs/manual/reference/command/create/#mongodb-dbcommand-dbcmd.create)
- [Time Series Aggregation](https://www.mongodb.com/docs/manual/core/timeseries-collections/#aggregation-on-time-series-collections)
- [$dateTrunc](https://www.mongodb.com/docs/manual/reference/operator/aggregation/dateTrunc/)
- [$dateToString](https://www.mongodb.com/docs/manual/reference/operator/aggregation/dateToString/)

---

## Videografía

### YouTube
- **MongoDB** (canal oficial): busca "Time Series Collections MongoDB 7.0"
- **MongoDB** (canal oficial): busca "GridFS MongoDB tutorial"
- Traversy Media: busca "MongoDB file upload Node.js GridFS"

### MongoDB University (gratis)
- [M121: The MongoDB Aggregation Framework](https://learn.mongodb.com/courses/m121-the-mongodb-aggregation-framework)
  — Cubre operadores de fecha usados en Time Series

---

## Webgrafía

### Artículos y Guías

- [Time Series Data with MongoDB — MongoDB Blog](https://www.mongodb.com/blog/post/time-series-data-mongodb)
- [Storing Large Files with GridFS — MongoDB Blog](https://www.mongodb.com/blog/post/storing-large-files-with-gridfs)
- [Time Series Best Practices](https://www.mongodb.com/docs/manual/core/timeseries-collections/#limitations)
- [IoT Data Modeling with MongoDB](https://www.mongodb.com/blog/post/mongodb-iot-data-modeling)

---

## Ebooks Gratuitos

- [MongoDB Time Series Collection Performance Guide (PDF)](https://www.mongodb.com/resources/products/capabilities/time-series)
- [50 MongoDB Tips — MongoDB Official](https://www.mongodb.com/resources/products/capabilities/mongodb-tips-tricks)

---

> **Tip**: Para Time Series en producción, revisa
> [Compression Options](https://www.mongodb.com/docs/manual/core/timeseries-collections/#compression)
> — MongoDB 6.0+ incluye compresión columnar que reduce hasta un 50% el espacio en disco.
