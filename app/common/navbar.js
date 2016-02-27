'use strict';

var NavbarController = (function() {
  /*@ngInject*/
  function NavbarController(HotelService, FirebaseService,  $rootScope) {
    this.HotelService = HotelService;
    this.FirebaseService = FirebaseService;
    this.$rootScope = $rootScope;
    
  }
  NavbarController.prototype.hi = function() {
    return this.HotelService.hello;
  }
  
  NavbarController.prototype.showData = function() {
    var data = this.FirebaseService.getData();
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

