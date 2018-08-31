'use strict'
var express = require('express')
var router = express.Router();
var sportService = require('../services/sport.srv.js');

router.get('/sports',function(req,rs){
    sportService.getAllSport(function(sports){
        res.statusCode = 200;
        res.send(sports);
    })
});

module.exports = router;