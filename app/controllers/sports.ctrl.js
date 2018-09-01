'use strict'
var express = require('express')
var router = express.Router();
var sportService = require('../services/sport.srv.js');

router.get('/sports',function(req,res){
    sportService.getAllSport(function(sports){
        res.statusCode = 200;
        res.send(sports);
    })
});

router.get('/athlets',function(req,res){
    sportService.getAllAthlets(function(athlets){
        res.statusCode = 200;
        res.send(athlets);
    })
})
module.exports = router;