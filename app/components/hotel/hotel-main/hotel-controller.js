'use strict';

var HotelController = (function() {
    /*@ngInject*/
  function HotelController(FirebaseService) {
      this.FirebaseService = FirebaseService;
      this.data = [];
      this.loadDefaultData();
  }

  HotelController.prototype.loadDefaultData = function() {
    this.data = this.FirebaseService.getDefaultData();
  }
  
  return HotelController;
})(); 

module.exports = HotelController;