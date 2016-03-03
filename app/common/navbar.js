'use strict';

var NavbarController = (function() {
  /*@ngInject*/
  function NavbarController($rootScope) {
    this.$rootScope = $rootScope;    
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

