'use strict';

var angular         = require('angular');

require('firebase');
require('angularfire');
var FirebaseService = require('./firebase-service'); 

angular
  .module('myApp.services', ['firebase'])
  .service('FirebaseService', FirebaseService); 
