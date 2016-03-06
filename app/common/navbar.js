'use strict';

var NavbarController = (function() {
  /*@ngInject*/
  function NavbarController(FirebaseService, $state) {
    this.$state = $state;
    this.FirebaseService = FirebaseService;
    this.auth = this.FirebaseService.auth();
    this.authData;
    var self = this;
    this.auth.$onAuth(function(authData) {
      self.authData = authData;
      self.reload();
    });
  }
  
  NavbarController.prototype.hi = function() {
    alert('hi');
  }
  
  NavbarController.prototype.reload = function() {
      this.$state.reload();
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

