const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        // Esta propiedad corta los espacios en blanco repetidos entre palabras
        trim: true,
        unique: true
    }
}, {
    timestamp: true 
});
// Se exporta el modelo de nombre "User" basado en el esquema creado "userSchema"
module.exports = model('User', userSchema)