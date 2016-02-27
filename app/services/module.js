'use strict';

var angular         = require('angular');
var HotelService    = require('./hotel');
require('firebase');
require('angularfire');
var FirebaseService = require('./firebase-service'); 

angular
  .module('myApp.services', ['firebase'])
  .service('HotelService', HotelService)
  .service('FirebaseService', FirebaseService); 
