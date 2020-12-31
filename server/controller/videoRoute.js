const express = require('express')
const router = express.Router()
const Video = require('../model/movievideo')


router.post('/movieVideo',(req,res)=>{
    const video = new Video({
        videoUrl:req.body.videoUrl,
        title:req.body.title
    })
    video.save()
    .then(data=>{
        res.json(data)
    })
})

router.get('/allmovievideo',(req,res)=>{
    Video.find()
    .then(data=>{
        res.json(data)
    })
})




module.exports = router;