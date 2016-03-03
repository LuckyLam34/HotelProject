'use strict';

var angular   = require('angular');
var navbar    = require('./navbar');
var searchbar = require('./searchbar');

angular
  .module('myApp.common', [])
  .directive('navbar', navbar)
  .directive('searchbar', searchbar);

