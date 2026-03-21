// Semana 15: Patrones de Modelado Avanzado — Bucket y Computed
// ============================================
// SETUP — Carga de datos de prueba
// ============================================
// Ejecutar con:
// docker compose -f _scripts/docker-compose.yml exec -T mongodb \
//   mongosh -u bootcamp -p bootcamp123 --authenticationDatabase admin \
//   bootcamp_db --file /dev/stdin < starter/setup.js
// ============================================

db.sensor_buckets.drop()
db.customers_comp.drop()
db.orders_comp.drop()

// sensor_buckets empieza vacía — se llenará con upserts en el ejercicio
print("Colección sensor_buckets creada (vacía, lista para upserts).")

// Clientes con campos calculados precomputados
db.customers_comp.insertMany([
  {
    customerId: "cust-01",
    name: "Laura Mendoza",
    email: "laura.mendoza@example.com",
    totalRevenue: Decimal128("1250.75"),
    orderCount: NumberInt(8),
    lastOrderDate: new Date("2024-03-15")
  },
  {
    customerId: "cust-02",
    name: "Marcos Delgado",
    email: "marcos.delgado@example.com",
    totalRevenue: Decimal128("520.00"),
    orderCount: NumberInt(3),
    lastOrderDate: new Date("2024-02-20")
  },
  {
    customerId: "cust-03",
    name: "Sandra Pinto",
    email: "sandra.pinto@example.com",
    totalRevenue: Decimal128("3780.50"),
    orderCount: NumberInt(22),
    lastOrderDate: new Date("2024-04-28")
  },
  {
    customerId: "cust-04",
    name: "Felipe García",
    email: "felipe.garcia@example.com",
    totalRevenue: Decimal128("98.99"),
    orderCount: NumberInt(1),
    lastOrderDate: new Date("2024-04-01")
  },
  {
    customerId: "cust-05",
    name: "Patricia Suárez",
    email: "patricia.suarez@example.com",
    totalRevenue: Decimal128("2100.25"),
    orderCount: NumberInt(14),
    lastOrderDate: new Date("2024-05-05")
  }
])

// Órdenes existentes que corresponden a los campos calculados anteriores
db.orders_comp.insertMany([
  { orderId: "ord-100", customerId: "cust-01", amount: Decimal128("450.00"), status: "completed", createdAt: new Date("2024-01-10") },
  { orderId: "ord-101", customerId: "cust-01", amount: Decimal128("800.75"), status: "completed", createdAt: new Date("2024-03-15") },
  { orderId: "ord-102", customerId: "cust-02", amount: Decimal128("120.00"), status: "completed", createdAt: new Date("2024-02-05") },
  { orderId: "ord-103", customerId: "cust-02", amount: Decimal128("400.00"), status: "completed", createdAt: new Date("2024-02-20") },
  { orderId: "ord-104", customerId: "cust-03", amount: Decimal128("1200.50"), status: "completed", createdAt: new Date("2024-04-28") }
])

print("Setup semana 15 - ejercicio 02 completado.")
print("sensor_buckets : " + db.sensor_buckets.countDocuments() + " documentos (vacía)")
print("customers_comp : " + db.customers_comp.countDocuments() + " documentos")
print("orders_comp    : " + db.orders_comp.countDocuments() + " documentos")
