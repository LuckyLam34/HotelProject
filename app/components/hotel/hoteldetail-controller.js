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
    this.data = {};
    this.loadTwoComparedHotels();
    
    //demo
    this.dataSetDemo = [];
//    this.addData();
  };
  
  HotelDetailController.prototype.loadDetailData = function() {
    this.detailData = this.FirebaseService.getDetailData(this.$stateParams.id);
  };
  
  HotelDetailController.prototype.loadTwoComparedHotels = function() {
    var hotelOne = {};
    var hotelTwo = {};
    
    hotelOne = this.FirebaseService.getDetailData(this.$stateParams.id1);
    hotelTwo = this.FirebaseService.getDetailData(this.$stateParams.id2);
  
    this.data.hotel1 = hotelOne;
    this.data.hotel2 = hotelTwo;
  }

  //demo add data in AngularFire way
  HotelDetailController.prototype.addData = function() {
    
    console.log('in');
    this.dataSetDemo = this.FirebaseService.setDemo();
    
  }
  
  return HotelDetailController;
})(); 

module.exports = HotelDetailController;