const express = require("express");
const router = express.Router();
const path = require('path');
const db = require("./models");

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})
router.get('/exercise', (req,res) => {
    res.sendFile(path.join(__dirname, './public/exercise.html'))
})
router.get('/stats', (req,res) => {
    res.sendFile(path.join(__dirname, './public/stats.html'))
})
router.get('/api/workouts', (req,res) => {
    db.find().then(data => {
        res.json(data);
    }) 
})
router.post('/api/workouts', (req, res) => {
    db.create({}).then(data => {
        res.json(data);
    }).catch(err=>console.log(err))
})
router.put('/api/workouts/:greg', (req,res)=>{
    console.log(req.body)
    db.findByIdAndUpdate(req.params.greg, {$push: {exercises: req.body}}).then(data=>res.json(data))
})


module.exports = router;

