'use strict';

var DashboardController = (function() {
  /*@ngInject*/
  function DashboardController(FirebaseService, $state) {
    this.viewTab = 'tab1';
    this.FirebaseService = FirebaseService;
  }
  DashboardController.prototype.changeTab = function(tab) {
    this.viewTab = tab;
  };
  
  DashboardController.prototype.checkLoginedStage = function() {
//    this.NavbarController.auth.$onAuth(function(authData) {
//      if (!authData) {
//        console.log('Please log in!');
//      }
//    });
  }
  
  return DashboardController;
})();

module.exports = DashboardController;