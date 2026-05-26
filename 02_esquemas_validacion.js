use("dann_alpes");

db.runCommand({
  collMod: "reseñas",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["hotel_id", "ciudad_id", "cliente_id", "reserva_id", "calificacion", "texto", "fecha_creacion", "estado", "destacada", "votos_utilidad"],
      additionalProperties: false,
      properties: {
        _id: { bsonType: "objectId" },
        hotel_id: { bsonType: "int" },
        ciudad_id: { bsonType: "int" },
        cliente_id: { bsonType: "int" },
        reserva_id: { bsonType: "int" },
        calificacion: { bsonType: "double", minimum: 1.0, maximum: 5.0 },
        texto: { bsonType: "string", minLength: 10, maxLength: 2000 },
        fecha_creacion: { bsonType: "date" },
        fecha_modificacion: { bsonType: ["date", "null"] },
        estado: { bsonType: "string", enum: ["publicada", "eliminada"] },
        destacada: { bsonType: "bool" },
        respuesta_admin: {
          bsonType: ["object", "null"],
          required: ["id_admin", "texto", "fecha_respuesta"],
          additionalProperties: false,
          properties: {
            id_admin: { bsonType: "int" },
            texto: { bsonType: "string", minLength: 5, maxLength: 1000 },
            fecha_respuesta: { bsonType: "date" },
            fecha_modificacion: { bsonType: ["date", "null"] }
          }
        },
        votos_utilidad: {
          bsonType: "object",
          required: ["total", "votantes"],
          additionalProperties: false,
          properties: {
            total: { bsonType: "int", minimum: 0 },
            votantes: { bsonType: "array", items: { bsonType: "int" } }
          }
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});

db.runCommand({
  collMod: "hoteles",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "nombre", "ciudad_id", "ciudad_nombre"],
      additionalProperties: false,
      properties: {
        _id: { bsonType: "int" },
        nombre: { bsonType: "string", minLength: 1, maxLength: 200 },
        ciudad_id: { bsonType: "int" },
        ciudad_nombre: { bsonType: "string", minLength: 1, maxLength: 100 }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});
