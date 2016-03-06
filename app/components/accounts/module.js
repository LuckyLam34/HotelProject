'use strict';

var angular         = require('angular');
var AuthoController = require('./autho-controller');

angular
  .module('myApp.accounts', [])
  .controller('AuthoController', AuthoController)
  .config(/*@ngInject*/function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state({
        name: 'notAuthorized',
        url: '/accounts/notAuthorized',
        templateUrl: 'app/components/accounts/not-authorized.html',
        controller: 'AuthoController',
        controllerAs: 'autho',
        data: { isAdmin: false }
      });
  });