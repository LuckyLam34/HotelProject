'use strict';

var angular = require('angular');
require('./common/module');
require('./services/module');
//require('./components/product/module');

angular
  .module('myApp', [
    require('angular-ui-router'),
    'myApp.services',
    'myApp.common'
  ])
  .config(/*@ngInject*/function($logProvider) {
    $logProvider.debugEnabled(true);
  });

angular.element(document).ready(function() {
  angular.bootstrap(document, ['myApp']);
});
