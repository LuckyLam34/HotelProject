'use strict'

var ModalInstanceController = (function() {
  /*@ngInject*/
  function ModalInstanceController($uibModalInstance, item) {
    console.log(item);
    this.$uibModalInstance = $uibModalInstance;
    this.item = item;
    
    this.roomList = [];
    
    this.selectedRoomAvai = '';
    this.selectedRoomPrice = '';
    this.selectedRoomMax = '';
    this.entertainment = {
      title: 'entertainment',
      options: ['Free WiFi and wired Internet access, 32-inch TV, DVD player', '--custome--'],
      selected: '',
      list: [],
      temp: ''
    };
    
    this.foodAndDrink = {
      title: 'foodAndDrink',
      options: ['Kitchen with refrigerator, stovetop, and dishwasher', '--custome--'],
      selected: '',
      list: [],
      temp: ''
    };
    
    this.practical = {
      title: 'practical',
      options: ['Free local calls, iron/ironing board, and desk', '--custome--'],
      selected: '',
      list: [],
      temp: ''
    };
    
    this.sleep = {
      title: 'sleep',
      options: ['Blackout drapes/curtains', '--custome--'],
      selected: '',
      list: [],
      temp: ''
    };
    
    this.arrivingLeaving = {
      title: 'arriving leaving',
      options: ['Check-in time starts at 3 PM', 'Check-out time is Noon', '--custome--'],
      selected: '',
      list: [],
      temp: ''
    };
    
    this.requireAtCheckinList = {
      title: 'require at checkin list',
      options: ['Credit card or cash deposit required', 'Government-issued photo ID required', 'Minimum check-in age is 21', '--custome--'],
      selected: '',
      list: [],
      temp: ''
    };
    
    this.mainAmenities = {
      title: 'main amenities',
      options: ['83 apartments', '24-hour fitness center', '24-hour business center', '24-hour front desk', 'Air conditioning', '--custome--'],
      selected: '',
      list: [],
      temp: ''
    };
    
    this.bathRoom = {
      title: 'bath room',
      options: ['Private bathroom and a hair dryer', '--custome--'],
      selected: '',
      list: [],
      temp: ''
    };
    
    this.comfort = {
      title: 'comfort',
      options: ['Air conditioning, non-smoking', '--custome--'],
      selected: '',
      list: [],
      temp: ''
    };
    
    this.roomTypes = {
      title: 'room type',
      options: ['Room, 1 Queen Bed, Non Smoking', 'Room, 1 Queen Bed, Smoking', '--custome--'],
      selected: '',
      list: [],
      temp: ''
    }
    
     this.hotelSize = {
      title: 'hotel size',
      list: [],
      temp: '',
      selected: ''
    };
    
    this.around = {
      title: 'whats around',
      list: [],
      temp: '',
      selected: ''
    };
    
    this.propHotel = [this.arrivingLeaving, this.requireAtCheckinList, this.mainAmenities];
    this.propHotelInputs = [this.hotelSize, this.around];
    
    this.roomChoices = [this.roomTypes, this.bathRoom, this.comfort, this.entertainment,    this.foodAndDrink, this.practical, this.sleep];
    
  }
  
  ModalInstanceController.prototype.ok = function() {
    this.$uibModalInstance.close(this.item);
  }
  
  ModalInstanceController.prototype.cancel = function() {
    this.$uibModalInstance.dismiss('cancel');
  }
  
  ModalInstanceController.prototype.push = function(item, p) {
    p.list.push(item);
  }
  
  ModalInstanceController.prototype.clearList = function(p) {
    p.list = [];
  }
  
  ModalInstanceController.prototype.show = function(p) {
    console.log('clicked');
    console.log(p.list);
  }
  
  ModalInstanceController.prototype.addMoreRoom = function() {
    var choice1 = {
      roomAvai: this.selectedRoomAvai,
      roomPrice: this.selectedRoomPrice,
      roomMax: this.selectedRoomMax,
      roomType: this.roomTypes.list,
      roomBathRoom: this.bathRoom.list,
      roomComfort: this.comfort.list,
      roomEntertainment: this.entertainment.list,
      roomFoodAndDrink: this.foodAndDrink.list,
      roomPractical: this.practical.list,
      roomSleep: this.sleep.list
    }
    
    this.clearList(this.roomTypes);
    this.clearList(this.bathRoom);
    this.clearList(this.comfort)
    
    this.roomList.push(choice1);
    console.log(this.roomList);
    
    console.log(this.roomTypes);
    console.log(this.bathRoom);
    console.log(this.comfort)
  }
  
  return ModalInstanceController;
})();

module.exports = ModalInstanceController;