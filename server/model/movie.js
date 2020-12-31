const mongoose = require('mongoose')


const movieSchema = new mongoose.Schema({
    movieName:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    language:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Movie',movieSchema);