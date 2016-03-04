'use strict';

var NavbarController = (function() {
  /*@ngInject*/
  function NavbarController($rootScope, FirebaseService) {
    this.$rootScope = $rootScope;    
    this.FirebaseService = FirebaseService;
    this.auth = this.FirebaseService.auth();
    this.authData;
    var self = this;
    this.auth.$onAuth(function(authData) {
      self.authData = authData;
    });
  }
  
//  NavbarController.prototype.onLogin = function() {
//    return this.auth.$onAuth(function(authData) {
//      this.authData = authData;
//    });
//  }
  
  NavbarController.prototype.hi = function() {
    alert('hi');
  }
  return NavbarController;
})();

var navbar = function() {

  return {
    replace: true,
    restrict: 'AE',
    templateUrl: 'app/common/navbar.html',
    controller: NavbarController,
    controllerAs: 'navbar'
  };
}

module.exports = navbar;

