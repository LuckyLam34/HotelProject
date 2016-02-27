'use strict';

var NavbarController = (function() {
  /*@ngInject*/
  function NavbarController(HotelService, $rootScope, FirebaseService) {
    this.$rootScope = $rootScope;
    this.HotelService = HotelService;
    this.FirebaseService = FirebaseService;
//    console.log(this);
  }
  
  NavbarController.prototype.hi = function() {
    return this.FirebaseService.get();
  }
  
  return NavbarController;
})();

var navbar = function() {
//  console.log(NavbarController);
  return {
    replace: true,
    restrict: 'AE',
    templateUrl: 'app/common/navbar.html',
    controller: NavbarController,
    controllerAs: 'navbar'
  }
}

module.exports = navbar;
//console.log(navbar);
