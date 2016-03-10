'use strict';


var DashboardController = (function() {
  /*@ngInject*/
  function DashboardController(FirebaseService, $state, $uibModal, $log) {
    this.viewTab = 'tab1';
    this.FirebaseService = FirebaseService;
    this.data;
    this.selected;
    this.loadData();
    this.isSuccessAlert = false;
    this.$state = $state;
    this.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
    this.$uibModal = $uibModal;
  }
  
  DashboardController.prototype.changeTab = function(tab) {
    this.viewTab = tab;
  };
  
  DashboardController.prototype.loadData = function() {
    this.data = this.FirebaseService.getDefaultData();
  }
  
  DashboardController.prototype.removeHotel = function(id) {
    this.FirebaseService.removeHotel(id);
    this.$state.reload();
  }
  
  DashboardController.prototype.update = function (hotel) {
    var self = this;
    
    var modalInstance = this.$uibModal.open({
      templateUrl: 'app/components/hotel/dashboard/modal-content.html',
      controller: 'ModalInstanceController',
      controllerAs: 'modalInstance',
      size: 'lg',
      resolve: {
        item: function() {
          return hotel;
        }
      }
    });
    
    modalInstance.result.then(function(item) {
      self.FirebaseService.updateHotel(item);
      alert('Updated successfully');
    }, function() {
      console.log('failed');
    });
  };
  
  DashboardController.prototype.addHotel = function() {
    var self = this;
    var data = {
                hotel_address: '',
                hotel_city: '',
                hotel_comments: '',
                hotel_images: '',
                hotel_information: {
                  arriving_leaving: {
                    arrive1: "Check-in time starts at 3 PM",
                    arrive2: "Check-out time is Noon"
                  },
                  hotel_size: {
                    size1: "This hotel has 83 rooms",
                    size2: "This hotel is arranged over 3 floors"
                  },
                  required_at_checkin: {
                    re1: "Credit card or cash deposit required",
                    re2: "Government-issued photo ID required",
                    re3: "Minimum check-in age is 21"
                  }
                },
                hotel_name: '',
                hotel_overview: {
                  hotel_main_amenties: {
                    amenity: "83 apartments",
                    amenity1: "24-hour fitness center",
                    amenity2: "24-hour business center",
                    amenity3: "24-hour front desk",
                    amenity4: "Air conditioning"
                  },
                  hotel_what_arround: {
                    around1: '',
                    around2: '',
                    around3: '',
                    around4: '',
                    around5: ''
                  }
                },
                hotel_room_choices: {
                  choice1: {
                    room_available: '',
                    room_average_nightly_price: '',
                    room_information: {
                      bathroom: "Private bathroom and a hair dryer",
                      comfort: "Air conditioning, non-smoking",
                      entertainment: "Free WiFi and wired Internet access, 32-inch TV, DVD player",
                      food_and_drink: "Kitchen with refrigerator, stovetop, and dishwasher",
                      practical: "Free local calls, iron/ironing board, and desk",
                      sleep: "Blackout drapes/curtains"
                    },
                    room_max:'',
                    room_type: "Room, 1 Queen Bed, Non Smoking"
                  },
                  choice2: {
                    room_available: '',
                    room_average_nightly_price: '',
                    room_information: {
                      bathroom: "Private bathroom and a hair dryer",
                      comfort: "Air conditioning, non-smoking",
                      entertainment: "Free WiFi and wired Internet access, 32-inch TV, DVD player",
                      food_and_drink: "Kitchen with refrigerator, stovetop, and dishwasher",
                      practical: "Free local calls, iron/ironing board, and desk",
                      sleep: "Blackout drapes/curtains"
                    },
                    room_max: '',
                    room_type: "Room, 2 Queen Bed, Smoking"
                  }
                }
              };
        
    var modalInstance = this.$uibModal.open({
      templateUrl: 'app/components/hotel/dashboard/modal-content-add.html',
      controller: 'ModalInstanceAddController',
      controllerAs: 'modalInstance',
      size: 'lg',
      resolve: {
        item: function() {
          return data;
        }
      }
    });
    
    modalInstance.result.then(function(item) {
      self.FirebaseService.addHotel(item);
      alert('Added successfully');
      self.$state.reload();
    }, function() {
      console.log('failed');
    });
  }
  
  return DashboardController;
})();

module.exports = DashboardController;