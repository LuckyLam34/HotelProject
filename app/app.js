'use strict';

var angular = require('angular');
require('./common/module');
require('./services/module');
require('./components/hotel/module');

angular
  .module('myApp', [
    require('angular-ui-bootstrap'),
    require('angular-ui-router'),
    'myApp.services',
    'myApp.common',
    'myApp.hotel'
  ])
  .config(/*@ngInject*/function($locationProvider) {
//    $locationProvider.html5Mode(true);
  });

angular.element(document).ready(function() {
  angular.bootstrap(document, ['myApp']);
});
