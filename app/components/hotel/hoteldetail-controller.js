'use strict';
require('firebase');
require('angularfire');

var HotelDetailController = (function() { 
  /*@ngInject*/
  function HotelDetailController(FirebaseService, $stateParams) {
    this.FirebaseService = FirebaseService;
    this.detailData = {};
    this.$stateParams = $stateParams;
    this.loadDetailData();
    
    
    //demo
    this.dataSetDemo = [];
//    this.addData();
  };
  
  HotelDetailController.prototype.loadDetailData = function() {
    this.detailData = this.FirebaseService.getDetailData(this.$stateParams.id);
  };

  //demo add data in AngularFire way
  HotelDetailController.prototype.addData = function() {
    
    console.log('in');
    this.dataSetDemo = this.FirebaseService.setDemo();
    
  }
  
  return HotelDetailController;
})(); 

module.exports = HotelDetailController;