'use strict';

var angular = require('angular');
var UpperCase = require('./text-upper-case');

angular
  .module('myApp.filters', [])
  .filter('UpperCase', UpperCase);