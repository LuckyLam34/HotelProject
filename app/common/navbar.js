'use strict';

var NavbarController = (function() {
  function NavbarController(HotelService, $rootScope) {
//    this.$rootScope = $rootScope;
//    this.HotelService = HotelService;
//    $rootScope.hi = 'HotelService.hello;'
//    alert('HotelService.hellooo');
  }
})();

var navbar = function() {
  return {
    replace: true,
    templateUrl: 'app/common/navbar.html',
    controller: NavbarController,
    controllerAs: 'navbar'
  }
}

module.exports = navbar;
