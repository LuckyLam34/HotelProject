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
    this.roomChoices = [];
    this.loadRoomChoices();
    
    //demo
    this.dataSetDemo = [];
    this.loadSetDemo();
  };
  
  HotelDetailController.prototype.loadDetailData = function() {
    this.detailData = this.FirebaseService.getDetailData(this.$stateParams.id);
  };
  
//  HotelDetailController.prototype.getAmentiesWhataround = function() {
//    var data = this.detailData;
//    var amenties = [];
//    var overview = {};
//    for (var prop in data) {
//      if (prop === 'hotel_overview') {
//        overview = data[prop];
//        for (var p in overview) {
//          if (p === 'hotel_main_amenties') {
//            for (var i = 0; i < overview[p].length; i ++) {
//              amenties.push(overview[p][i]);
//            }
//          }
//        }
//        
//        return [overview, 'yeah'];
//      }
//    }
//    
//    
//  };
  
  HotelDetailController.prototype.loadAmentiesWhatAround = function(amentiesOrWhatAround, id) {
    return this.FirebaseService.getAmentiesWhatAround(amentiesOrWhatAround, id);
  };
  
  HotelDetailController.prototype.loadHotelInfo = function() {
    
    return this.FirebaseService.getHotelInfo(this.$stateParams.id);
  }
  
  HotelDetailController.prototype.loadRoomChoices = function() {
    this.roomChoices = this.FirebaseService.getRoomChoices(this.$stateParams.id);
  };
  
  //demo
  HotelDetailController.prototype.loadSetDemo = function() {
    this.dataSetDemo = this.FirebaseService.setDemo();
  }
  
  return HotelDetailController;
})(); 

module.exports = HotelDetailController;