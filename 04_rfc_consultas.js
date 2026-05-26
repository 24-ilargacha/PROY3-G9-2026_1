db.reseñas.aggregate([

{
    $group: {
        _id: "$hotel_nombre",

        promedio_calificacion: {
            $avg: "$calificacion"
        },

        total_reseñas: {
            $sum: 1
        }
    }
},

{
    $sort: {
        promedio_calificacion: -1
    }
},

{
    $limit: 10
}

])



db.reseñas.aggregate([

{
    $match: {
        hotel_nombre: "Dann Carlton Bogotá"
    }
},

{
    $group: {

        _id: {
            año: { $year: "$fecha_creacion" },
            mes: { $month: "$fecha_creacion" }
        },

        promedio_calificacion: {
            $avg: "$calificacion"
        },

        total_reseñas: {
            $sum: 1
        }
    }
},

{
    $sort: {
        "_id.año": 1,
        "_id.mes": 1
    }
}

])



db.reseñas.aggregate([

{
    $match: {
        ciudad: "Bogotá"
    }
},

{
    $group: {

        _id: "$hotel_nombre",

        promedio_calificacion: {
            $avg: "$calificacion"
        },

        total_reseñas: {
            $sum: 1
        },

        reseñas_con_respuesta: {
            $sum: {
                $cond: [
                    { $ifNull: ["$respuesta_admin", false] },
                    1,
                    0
                ]
            }
        },

        reseñas_destacadas: {
            $sum: {
                $cond: [
                    { $eq: ["$destacada", true] },
                    1,
                    0
                ]
            }
        }
    }
},

{
    $project: {

        promedio_calificacion: 1,

        total_reseñas: 1,

        porcentaje_respuesta_admin: {
            $multiply: [
                {
                    $divide: [
                        "$reseñas_con_respuesta",
                        "$total_reseñas"
                    ]
                },
                100
            ]
        },

        porcentaje_destacadas: {
            $multiply: [
                {
                    $divide: [
                        "$reseñas_destacadas",
                        "$total_reseñas"
                    ]
                },
                100
            ]
        }
    }
}

])

