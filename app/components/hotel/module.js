'use strict';

var angular         = require('angular');
var HotelController = require('./hotel');

angular
  .module('myApp.hotel', [])
  .controller('HotelController', HotelController)
 .config(/*@ngInject*/function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state({
        name: 'hotel',
        url: '/',
        templateUrl: 'app/components/hotel/hotel_main.html',
        controller: 'HotelController',
        controllerAs: 'hotel'
      });
    $urlRouterProvider.otherwise('/');
  });