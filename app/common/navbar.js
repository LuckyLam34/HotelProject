'use strict';

var NavbarController = (function() {
  /*@ngInject*/
  function NavbarController(FirebaseService, $state, $rootScope) {
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.FirebaseService = FirebaseService;
    this.auth = this.FirebaseService.auth();
    this.authData;
    var self = this;
    this.auth.$onAuth(function(authData) {
      self.authData = authData;
      if (authData) {
        self.$rootScope.$broadcast('isAuthenticated', true);
      }
      self.reload();
    });
  }
  
  NavbarController.prototype.goHome = function() {
    this.$state.go('hotel');
  }
  
  NavbarController.prototype.logOut = function() {
    this.$rootScope.$broadcast('isAuthenticated', false);
    return this.auth.$unauth();
  };
  
  NavbarController.prototype.reload = function() {
      this.$state.reload();
  };
  
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

