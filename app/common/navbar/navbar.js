'use strict';

var NavbarController = (function() {
  /*@ngInject*/
  function NavbarController(FirebaseService, LocalStorageService, $state, $rootScope) {
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.isAdmin;
    this.LocalStorageService = LocalStorageService;
    this.FirebaseService = FirebaseService;
    this.auth = this.FirebaseService.auth();
    this.authData;
    var self = this;
    
    this.auth.$onAuth(function(authData) {
      self.authData = authData;
      if (authData && authData.uid === 'google:104658983305316665305') {
        self.$rootScope.$broadcast('isAdmin', true);
        self.isAdmin = true;
        self.LocalStorageService.saveAdminState();
      }
     
      self.reload();
    });
  }
  
  NavbarController.prototype.goHome = function() {
    this.$state.go('hotel');
  }
  
  NavbarController.prototype.logOut = function() {
    this.$rootScope.$broadcast('isAdmin', false);
    this.isAdmin = false;
    this.LocalStorageService.clearAdminState();
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
    templateUrl: 'app/common/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'navbar'
  };
}

module.exports = navbar;

