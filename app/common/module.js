'use strict';

var angular = require('angular');
var navbar  = require('./navbar');

angular
  .module('myApp.common', [])
  .directive('navbar', navbar);

