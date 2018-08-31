'use strict'

const sportList = require('../../assets/sports.json');

module.exports.getAllSport = function(success,error){
    success(sportList);
}