'use strict';

var angular               = require('angular');
var HotelController       = require('./hotel-controller');
var HotelDetailController = require('./hoteldetail-controller');
var DashboardController   = require('./dashboard/dashboard-controller');
var ModalInstanceController = require('./dashboard/modal-instance-controller');
var ModalInstanceAddController = require('./dashboard/modal-instance-add-controller');



angular
  .module('myApp.hotel', [])
  .controller('HotelController', HotelController)
  .controller('HotelDetailController', HotelDetailController)
  .controller('DashboardController', DashboardController)
  .controller('ModalInstanceController', ModalInstanceController)
  .controller('ModalInstanceAddController', ModalInstanceAddController)
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
        controllerAs: 'hotel',
        data: { isAdmin: false }
      })
      .state({
        name: 'hotelDetail',
        url: '/hotels/:id',
        data: { isAdmin: false },
        templateUrl: 'app/components/hotel/hotel-detail.html',
        controller: 'HotelDetailController',
        controllerAs: 'hotelDetail'
      })
      .state({
        name: 'compare',
        url: '/compare/:id1/:id2',
        templateUrl: 'app/components/hotel/hotel-compare.html',
        controller: 'HotelDetailController',
        controllerAs: 'hotelDetail',
        data: { isAdmin: false }
      })
      .state({
        name: 'dashboard',
        url: '/dashboard/admin',
        templateUrl: 'app/components/hotel/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard',
        data: { isAdmin: true }
      });
    $urlRouterProvider.otherwise('/');
  });