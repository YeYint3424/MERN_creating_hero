const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    photo : {
        type : String,
        require : true 
    },
    bio : {
        type : String,
        require :true
    }
})

const characterModel = mongoose.model('character', CharacterSchema);
module.exports = characterModel;