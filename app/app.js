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
    $compileProvider.debugInfoEnabled(false);
  })
  .run(/*@ngInject*/function($rootScope, FirebaseService, $state) {
  
    var authenticated;
    
//    FirebaseService.auth().$onAuth(function(authData) {
//      authenticated = true;
//    });
//  
    $rootScope.$on('isAuthenticated', function(event, data) {
      console.log(data);
      authenticated = data;
    });
    
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (toState.data.isAdmin === true && !authenticated) {
        alert('not admin');
        event.preventDefault();
        $state.go('notAuthorized');
        return false;
      }
    });
  });

angular.element(document).ready(function() {
  angular.bootstrap(document, ['myApp']);
});
