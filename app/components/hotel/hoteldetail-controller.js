'use strict'

var HotelDetailController = (function() { 
  /*@ngInject*/
  function HotelDetailController(FirebaseService, $stateParams) {
    this.FirebaseService = FirebaseService;
    this.detailData = {};
    this.$stateParams = $stateParams;
    this.loadDetailData();
  }
  
  HotelDetailController.prototype.loadDetailData = function() {
    this.detailData = this.FirebaseService.getDetailData(this.$stateParams.id);
  }; 
  
  return HotelDetailController;
})(); 

module.exports = HotelDetailController;