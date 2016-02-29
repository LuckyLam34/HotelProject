'use strict';

var angular               = require('angular');
var HotelController       = require('./hotel-controller');
var HotelDetailController = require('./hoteldetail-controller');

angular
  .module('myApp.hotel', [])
  .controller('HotelController', HotelController)
  .controller('HotelDetailController', HotelDetailController)
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