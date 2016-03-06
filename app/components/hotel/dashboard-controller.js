'use strict';

var DashboardController = (function() {
  /*@ngInject*/
  function DashboardController(FirebaseService, $state, $rootScope) {
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.viewTab = 'tab1';
    this.FirebaseService = FirebaseService;
    this.checkLoginedStage();
  }
  DashboardController.prototype.changeTab = function(tab) {
    this.viewTab = tab;
  };
  
  DashboardController.prototype.checkLoginedStage = function() {
    var self = this;
    
//    self.FirebaseService.auth().$onAuth(function(authData) {
//      if (!authData) {
//        self.$state.go('notAuthorized');
//      }
//      
//       if (authData) {
//         if (authData.uid !== 'google:104658983305316665305') {
//           
//            self.$state.go('notAuthorized');
//            console.log(authData.uid);
//          }
//        }
//      
//       
//    });
  }
  
  return DashboardController;
})();

module.exports = DashboardController;