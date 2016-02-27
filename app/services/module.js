'use strict';

var angular         = require('angular');
var HotelService    = require('./hotel');
var FirebaseService = require('./firebase-service');

angular
  .module('myApp.services', [])
  .service('HotelService', HotelService)
  .service('FirebaseService', FirebaseService);
