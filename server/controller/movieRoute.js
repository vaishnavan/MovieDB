const express = require('express')
const router = express.Router();
const Movie = require('../model/movie')

router.post('/',(req,res)=>{
    const movie = new Movie({
        movieName:req.body.movieName,
        url:req.body.url,
        rating:req.body.rating,
        language:req.body.language
    })
    movie.save()
    .then(data=>{
        res.json(data)
    })
})

router.get('/allmovie',(req,res)=>{
    Movie.find()
    .then(data=>{
        res.json(data)
    })
})






module.exports = router;