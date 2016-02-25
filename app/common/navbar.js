'use strict';

var NavbarController = (function() {
  function NavbarController(HotelService, $rootScope) {
    this.$rootScope = $rootScope;
    this.HotelService = HotelService;
//    console.log(this);
  };
  
  NavbarController.prototype.hi = function() {
    return this.HotelService.hello;
  }
  
  return NavbarController;
})();

var navbar = function() {
//  console.log(NavbarController);
  return {
    replace: true,
    templateUrl: 'app/common/navbar.html',
    controller: NavbarController,
    controllerAs: 'navbar'
  }
}

module.exports = navbar;
//console.log(navbar);
