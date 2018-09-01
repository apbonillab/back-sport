'use strict'

const sportList = require('../../assets/sports.json');
const athletsList = require('../../assets/Athlets.json');

module.exports.getAllSport = function(success,error){
    success(sportList);
}

module.exports.getAllAthlets = function(success,error){
    success(athletsList);
}