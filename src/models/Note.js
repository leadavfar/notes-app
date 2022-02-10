const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

//timestamps: crea un campo con fecha de creacion y actualizacion del esquema

module.exports = model('Note', NoteSchema);

//crea el modelo, el primer parametro es el nombre y el segundo es el esquema a utilizar