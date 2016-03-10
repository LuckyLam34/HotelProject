'use strict';

var angular   = require('angular');
var navbar    = require('./navbar');
var searchbar = require('./searchbar');
var hotel     = require('./latest-hotels');
var comment   = require('./comment/comment');

angular
  .module('myApp.common', [])
  .directive('navbar', navbar)
  .directive('searchbar', searchbar)
  .directive('latestHotel', hotel)
  .directive('comment', comment);

