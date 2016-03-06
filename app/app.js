'use strict';

var angular = require('angular');
require('./common/module');
require('./services/module');
require('./components/hotel/module');
require('./filters/module');
require('./components/accounts/module');

angular
  .module('myApp', [
    require('angular-animate'),
    require('angular-ui-bootstrap'),
    require('angular-ui-router'),
    'myApp.services',
    'myApp.common',
    'myApp.hotel',
    'myApp.filters',
    'myApp.accounts'
  ])
 .config(/*@ngInject*/function($compileProvider) {
//    $locationProvider.html5Mode(true);
    $compileProvider.debugInfoEnabled(false);
  });

angular.element(document).ready(function() {
  angular.bootstrap(document, ['myApp']);
});
