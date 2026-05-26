use("dann_alpes");

db.createCollection("reseñas");
db.createCollection("hoteles");

db.reseñas.createIndex({ hotel_id: 1, estado: 1, fecha_creacion: -1 });
db.reseñas.createIndex({ hotel_id: 1, estado: 1, "votos_utilidad.total": -1 });
db.reseñas.createIndex({ cliente_id: 1, fecha_creacion: -1 });
db.reseñas.createIndex({ reserva_id: 1 }, { unique: true });
db.reseñas.createIndex({ hotel_id: 1, destacada: 1 });
db.reseñas.createIndex({ estado: 1, fecha_creacion: 1, calificacion: 1 });
db.reseñas.createIndex({ ciudad_id: 1, estado: 1, hotel_id: 1 });
