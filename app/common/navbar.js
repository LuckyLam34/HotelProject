'use strict';

var NavbarController = (function() {
  /*@ngInject*/
  function NavbarController(FirebaseService,  $rootScope) {
    this.FirebaseService = FirebaseService;
    this.$rootScope = $rootScope;
//    this.data = FirebaseService.getData();
    
  }
  NavbarController.prototype.hi = function() {
    
  }
  
  NavbarController.prototype.showData = function() {

    return this.data;
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
  }
}

module.exports = navbar;

