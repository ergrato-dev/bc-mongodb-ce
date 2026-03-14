// ============================================
// Semana 18 — Ejercicio 01: Polymorphic + Attribute
// setup.js — Crea colecciones para ambos patrones
// ============================================

// ============================================
// Colección 1: vehicles (patrón Polymorphic)
// ============================================
db.vehicles.drop()

db.vehicles.insertMany([
  {
    vehicleType: "car",
    make: "Toyota",
    model: "Corolla",
    year: NumberInt(2022),
    numDoors: NumberInt(4),
    transmission: "automatic",
    engineCC: NumberInt(1800),
    price: Decimal128("22000.00"),
    isAvailable: true
  },
  {
    vehicleType: "car",
    make: "Honda",
    model: "Civic",
    year: NumberInt(2023),
    numDoors: NumberInt(4),
    transmission: "manual",
    engineCC: NumberInt(1500),
    price: Decimal128("24500.00"),
    isAvailable: true
  },
  {
    vehicleType: "truck",
    make: "Volvo",
    model: "FH16",
    year: NumberInt(2021),
    payloadTons: NumberInt(20),
    axles: NumberInt(3),
    hasColdStorage: false,
    price: Decimal128("95000.00"),
    isAvailable: false
  },
  {
    vehicleType: "truck",
    make: "Mercedes",
    model: "Actros",
    year: NumberInt(2022),
    payloadTons: NumberInt(18),
    axles: NumberInt(3),
    hasColdStorage: true,
    price: Decimal128("87000.00"),
    isAvailable: true
  },
  {
    vehicleType: "motorcycle",
    make: "Honda",
    model: "CB500",
    year: NumberInt(2023),
    engineCC: NumberInt(471),
    hasSidecar: false,
    ridingStyle: "naked",
    price: Decimal128("8500.00"),
    isAvailable: true
  },
  {
    vehicleType: "motorcycle",
    make: "BMW",
    model: "R1250GS",
    year: NumberInt(2023),
    engineCC: NumberInt(1254),
    hasSidecar: false,
    ridingStyle: "adventure",
    price: Decimal128("21000.00"),
    isAvailable: true
  }
])

// ============================================
// Colección 2: products_attr (patrón Attribute)
// ============================================
db.products_attr.drop()

db.products_attr.insertMany([
  {
    productId: "prod-101",
    name: "Outdoor Jacket",
    category: "clothing",
    basePrice: Decimal128("120.00"),
    attrs: [
      { k: "color",      v: "red" },
      { k: "size",       v: "L" },
      { k: "material",   v: "nylon" },
      { k: "waterproof", v: true },
      { k: "weight_g",   v: NumberInt(850) }
    ]
  },
  {
    productId: "prod-102",
    name: "Trail Backpack",
    category: "gear",
    basePrice: Decimal128("95.00"),
    attrs: [
      { k: "color",       v: "blue" },
      { k: "capacity_L",  v: NumberInt(40) },
      { k: "waterproof",  v: false },
      { k: "weight_g",    v: NumberInt(1200) },
      { k: "hipbelt",     v: true }
    ]
  },
  {
    productId: "prod-103",
    name: "Trekking Boots",
    category: "footwear",
    basePrice: Decimal128("180.00"),
    attrs: [
      { k: "color",       v: "brown" },
      { k: "size_eu",     v: NumberInt(42) },
      { k: "material",    v: "leather" },
      { k: "waterproof",  v: true },
      { k: "sole",        v: "Vibram" }
    ]
  },
  {
    productId: "prod-104",
    name: "Ultralight Tent",
    category: "camping",
    basePrice: Decimal128("350.00"),
    attrs: [
      { k: "color",         v: "green" },
      { k: "capacity_pax",  v: NumberInt(2) },
      { k: "weight_g",      v: NumberInt(1100) },
      { k: "waterproof",    v: true },
      { k: "seasons",       v: NumberInt(3) }
    ]
  }
])

print("✓ vehicles: " + db.vehicles.countDocuments())
print("✓ products_attr: " + db.products_attr.countDocuments())
