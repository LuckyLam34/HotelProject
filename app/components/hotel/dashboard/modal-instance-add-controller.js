'use strict'

var ModalInstanceAddController = (function() {
  /*@ngInject*/
  function ModalInstanceAddController($uibModalInstance, item) {
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
  
  ModalInstanceAddController.prototype.makeItemObject = function(nameProperty, listName) {
    var object = {}
    
    if (listName !== 'roomList') {
      
      for (var i = 0; i < this[listName].list.length; i ++) {
        var prop = nameProperty + i;
        object[prop] = this[listName].list[i];
      }
    } else {
      for (var i = 0; i < this[listName].length; i ++) {
        var prop = nameProperty + i;
        object[prop] = this[listName][i];
      }
    }
    
    return object;
  }
  
  ModalInstanceAddController.prototype.ok = function() {
    var choice = this.getRoomChoicesObject();
    this.roomList.push(choice);
    console.log(choice);
    
    this.item.hotel_overview.hotel_main_amenties = this.makeItemObject('amenity', 'mainAmenities');
    this.item.hotel_overview.hotel_what_arround = this.makeItemObject('around', 'around');
    this.item.hotel_information.hotel_size = this.makeItemObject('hotelSize', 'hotelSize');
    this.item.hotel_information.arriving_leaving = this.makeItemObject('arrivingLeaving', 'arrivingLeaving');
    this.item.hotel_information.required_at_checkin = this.makeItemObject('requireAtCheckinList', 'requireAtCheckinList');
    this.item.hotel_room_choices = this.makeItemObject('roomList', 'roomList');
    
    
    this.$uibModalInstance.close(this.item);
  }
  
  ModalInstanceAddController.prototype.cancel = function() {
    this.$uibModalInstance.dismiss('cancel');
  }
  
  ModalInstanceAddController.prototype.push = function(item, p) {
    p.list.push(item);
    console.log(this.mainAmenities.list);
  }
  
  ModalInstanceAddController.prototype.clearList = function(p) {
    p.list = [];
  }
  
  ModalInstanceAddController.prototype.show = function(p) {
    console.log('clicked');
    console.log(p.list);
  }
  
  ModalInstanceAddController.prototype.getRoomChoicesObject = function() {
    var objectRoomInfo = {
      entertainment: this.makeItemObject('entertainment', 'entertainment'),
      food_and_drink: this.makeItemObject('foodAndDrink', 'foodAndDrink'),
      practical: this.makeItemObject('practical', 'practical'),
      sleep: this.makeItemObject('sleep', 'sleep'),
      bathroom: this.makeItemObject('bathRoom', 'bathRoom'),
      comfort: this.makeItemObject('comfort', 'comfort')
    };
    
    var choice = {
      room_available: this.selectedRoomAvai,
      room_average_nightly_price: this.selectedRoomPrice,
      room_max: this.selectedRoomMax,
      room_type: this.makeItemObject('roomTypes', 'roomTypes'),
      room_information: objectRoomInfo 
    };
    
    return choice;
  }
  
  ModalInstanceAddController.prototype.addMoreRoom = function() {

    
    //choice1 is a object
    var choice = this.getRoomChoicesObject();
    
    //reset input fields
    this.selectedRoomAvai = '';
    this.selectedRoomPrice = '';
    this.selectedRoomMax = '';
    this.clearList(this.roomTypes);
    this.clearList(this.bathRoom);
    this.clearList(this.comfort);
    this.clearList(this.entertainment);
    this.clearList(this.foodAndDrink);
    this.clearList(this.practical);
    this.clearList(this.sleep);
    

    this.roomList.push(choice);
    alert('Input your new room type');
  }
  
  ModalInstanceAddController.prototype.isObject = function(input) {
    return angular.isObject(input);
  }
  
  return ModalInstanceAddController;
})();

module.exports = ModalInstanceAddController;