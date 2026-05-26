db.reseñas.insertMany([

{
    hotel_id: 1,
    hotel_nombre: "Dann Carlton Bogotá",
    ciudad: "Bogotá",
    cliente_id: 101,
    reserva_id: 1001,
    calificacion: 5,
    comentario: "Excelente servicio y habitaciones muy cómodas",
    fecha_creacion: new Date("2025-01-10"),
    utiles: 12,
    estado: "publicada",
    destacada: true,
    respuesta_admin: {
        texto: "Muchas gracias por hospedarte con nosotros",
        fecha: new Date("2025-01-11")
    }
},

{
    hotel_id: 1,
    hotel_nombre: "Dann Carlton Bogotá",
    ciudad: "Bogotá",
    cliente_id: 102,
    reserva_id: 1002,
    calificacion: 4,
    comentario: "Muy buena atención",
    fecha_creacion: new Date("2025-02-15"),
    utiles: 5,
    estado: "publicada",
    destacada: false
},

{
    hotel_id: 2,
    hotel_nombre: "Dann Avenida 19",
    ciudad: "Bogotá",
    cliente_id: 103,
    reserva_id: 1003,
    calificacion: 3,
    comentario: "La comida puede mejorar",
    fecha_creacion: new Date("2025-03-01"),
    utiles: 3,
    estado: "publicada",
    destacada: false,
    respuesta_admin: {
        texto: "Gracias por tus comentarios",
        fecha: new Date("2025-03-02")
    }
},

{
    hotel_id: 3,
    hotel_nombre: "Dann Cali",
    ciudad: "Cali",
    cliente_id: 104,
    reserva_id: 1004,
    calificacion: 5,
    comentario: "Muy limpio y organizado",
    fecha_creacion: new Date("2025-02-20"),
    utiles: 15,
    estado: "publicada",
    destacada: false
},

{
    hotel_id: 3,
    hotel_nombre: "Dann Cali",
    ciudad: "Cali",
    cliente_id: 105,
    reserva_id: 1005,
    calificacion: 2,
    comentario: "Demora en el check in",
    fecha_creacion: new Date("2025-04-12"),
    utiles: 1,
    estado: "publicada",
    destacada: false
}

])