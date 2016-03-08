'use strict';

var angular               = require('angular');

require('firebase');
require('angularfire');

var FirebaseService       = require('./firebase-service'); 
var LocalStorageService   = require('./localstorage-service');

angular
  .module('myApp.services', ['firebase'])
  .service('FirebaseService', FirebaseService)
  .service('LocalStorageService', LocalStorageService);
