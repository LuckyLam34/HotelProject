'use strict';

var angular               = require('angular');
var HotelController       = require('./hotel-controller');
var HotelDetailController = require('./hoteldetail-controller');

angular
  .module('myApp.hotel', [])
  .controller('HotelController', HotelController)
  .controller('HotelDetailController', HotelDetailController)
  .filter('labelCase', function() {
    return function(input) {
      input = input.replace(/([A-Z_-])/g, ' $1').replace(/[_-]/g, ' ');

      return input[0].toUpperCase() + input.slice(1);
    };
  })
  .filter('dollarSign', function() {
    return function(input) {
      return input + '$';
    };
  })
  .config(/*@ngInject*/function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state({
        name: 'hotel',
        url: '/',
        templateUrl: 'app/components/hotel/hotel-main.html',
        controller: 'HotelController',
        controllerAs: 'hotel'
      })
      .state({
        name: 'hotelDetail',
        url: '/:id',
        templateUrl: 'app/components/hotel/hotel-detail.html',
        controller: 'HotelDetailController',
        controllerAs: 'hotelDetail'
      });
    $urlRouterProvider.otherwise('/');
  });