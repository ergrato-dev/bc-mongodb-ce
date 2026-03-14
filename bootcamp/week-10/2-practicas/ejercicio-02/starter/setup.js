// Semana 10: Aggregation Pipeline II — Acumuladores Avanzados
// setup.js — ejercicio-02: reutiliza la colección sales

// ============================================
// NOTA: Este ejercicio usa la misma colección "sales".
// Si ya ejecutaste setup.js del ejercicio-01, puedes
// saltarte este archivo.
// Si no, ejecuta este script para cargar los datos.
// ============================================

db.sales.drop()

db.sales.insertMany([
  {
    product: "Laptop",
    category: "electronics",
    city: "Bogotá",
    salesperson: "Ana García",
    amount: NumberDecimal("1200.00"),
    quantity: NumberInt(2),
    status: "completed",
    rating: NumberInt(5),
    saleDate: new Date("2024-01-15")
  },
  {
    product: "Mouse",
    category: "accessories",
    city: "Bogotá",
    salesperson: "Carlos Ruiz",
    amount: NumberDecimal("25.00"),
    quantity: NumberInt(10),
    status: "completed",
    rating: NumberInt(4),
    saleDate: new Date("2024-01-18")
  },
  {
    product: "Monitor",
    category: "electronics",
    city: "Medellín",
    salesperson: "Sofía López",
    amount: NumberDecimal("450.00"),
    quantity: NumberInt(3),
    status: "completed",
    rating: NumberInt(4),
    saleDate: new Date("2024-01-20")
  },
  {
    product: "Teclado",
    category: "accessories",
    city: "Medellín",
    salesperson: "Miguel Torres",
    amount: NumberDecimal("75.00"),
    quantity: NumberInt(5),
    status: "cancelled",
    rating: NumberInt(2),
    saleDate: new Date("2024-01-22")
  },
  {
    product: "Laptop",
    category: "electronics",
    city: "Cali",
    salesperson: "Ana García",
    amount: NumberDecimal("950.00"),
    quantity: NumberInt(1),
    status: "completed",
    rating: NumberInt(5),
    saleDate: new Date("2024-02-03")
  },
  {
    product: "Webcam",
    category: "accessories",
    city: "Cali",
    salesperson: "Carlos Ruiz",
    amount: NumberDecimal("120.00"),
    quantity: NumberInt(4),
    status: "completed",
    rating: NumberInt(3),
    saleDate: new Date("2024-02-07")
  },
  {
    product: "Silla Ergonómica",
    category: "furniture",
    city: "Bogotá",
    salesperson: "Sofía López",
    amount: NumberDecimal("600.00"),
    quantity: NumberInt(1),
    status: "completed",
    rating: NumberInt(5),
    saleDate: new Date("2024-02-10")
  },
  {
    product: "Escritorio",
    category: "furniture",
    city: "Medellín",
    salesperson: "Ana García",
    amount: NumberDecimal("800.00"),
    quantity: NumberInt(2),
    status: "completed",
    rating: NumberInt(4),
    saleDate: new Date("2024-02-14")
  },
  {
    product: "Auriculares",
    category: "accessories",
    city: "Bogotá",
    salesperson: "Miguel Torres",
    amount: NumberDecimal("200.00"),
    quantity: NumberInt(3),
    status: "completed",
    rating: NumberInt(4),
    saleDate: new Date("2024-02-18")
  },
  {
    product: "Tablet",
    category: "electronics",
    city: "Cali",
    salesperson: "Sofía López",
    amount: NumberDecimal("350.00"),
    quantity: NumberInt(2),
    status: "cancelled",
    rating: NumberInt(3),
    saleDate: new Date("2024-02-22")
  },
  {
    product: "Impresora",
    category: "electronics",
    city: "Bogotá",
    salesperson: "Carlos Ruiz",
    amount: NumberDecimal("280.00"),
    quantity: NumberInt(1),
    status: "completed",
    rating: NumberInt(3),
    saleDate: new Date("2024-03-01")
  },
  {
    product: "Cable HDMI",
    category: "accessories",
    city: "Medellín",
    salesperson: "Miguel Torres",
    amount: NumberDecimal("15.00"),
    quantity: NumberInt(20),
    status: "completed",
    rating: NumberInt(4),
    saleDate: new Date("2024-03-05")
  },
  {
    product: "Estante",
    category: "furniture",
    city: "Cali",
    salesperson: "Ana García",
    amount: NumberDecimal("320.00"),
    quantity: NumberInt(1),
    status: "completed",
    rating: NumberInt(4),
    saleDate: new Date("2024-03-10")
  },
  {
    product: "Hub USB",
    category: "accessories",
    city: "Bogotá",
    salesperson: "Sofía López",
    amount: NumberDecimal("45.00"),
    quantity: NumberInt(8),
    status: "completed",
    rating: NumberInt(5),
    saleDate: new Date("2024-03-15")
  },
  {
    product: "Smartphone",
    category: "electronics",
    city: "Medellín",
    salesperson: "Carlos Ruiz",
    amount: NumberDecimal("700.00"),
    quantity: NumberInt(2),
    status: "completed",
    rating: NumberInt(5),
    saleDate: new Date("2024-03-20")
  }
])

// Insertar un documento con campo opcional faltante (para practicar $ifNull)
db.sales.insertOne({
  product: "Producto sin ciudad",
  category: "electronics",
  salesperson: "Ana García",
  amount: NumberDecimal("500.00"),
  quantity: NumberInt(1),
  status: "completed",
  rating: NumberInt(3),
  saleDate: new Date("2024-03-25")
  // campo "city" intencionalmente ausente
})

print("✅ Colección 'sales' cargada con 16 documentos")
print("   (el último tiene campo 'city' ausente para practicar $ifNull)")
