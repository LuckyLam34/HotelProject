'use strict';

var HotelController = (function() {
    /*@ngInject*/
  function HotelController(FirebaseService) {
      this.FirebaseService = FirebaseService;
      this.data = FirebaseService.getDefaultData();
  }

  HotelController.prototype.showDefaultData = function() {
    
    var mydata = [];
    mydata = this.data;
    return mydata;
    
  }
  
  return HotelController;
})(); 

module.exports = HotelController;