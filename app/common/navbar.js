'use strict';

var NavbarController = (function() {
  /*@ngInject*/
  function NavbarController(HotelService, FirebaseService,  $rootScope) {
    this.HotelService = HotelService;
    this.FirebaseService = FirebaseService;
    this.$rootScope = $rootScope;
    this.data = FirebaseService.getData();
    
  }
  NavbarController.prototype.hi = function() {
    return this.HotelService.hello;
  }
  
  NavbarController.prototype.showData = function() {
//    var dataTemp = [];
//     
//    for (var prop in this.data) {
//      dataTemp.push(this.data[prop][att]);
//    }
    
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

