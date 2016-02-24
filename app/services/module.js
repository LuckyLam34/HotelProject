'use strict';

var angular       = require('angular');
var HotelService  = require('./hotel');

angular
  .module('myApp.services', [])
  .service('HotelService', HotelService);
