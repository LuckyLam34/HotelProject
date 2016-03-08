var ModalInstanceController = (function() {
  /*@ngInject*/
  function ModalInstanceController($uibModalInstance, item) {
    this.$uibModalInstance = $uibModalInstance;
    this.item = item;
    this.roomTypes = ['Room, 1 Queen Bed, Non Smoking', 'Room, 1 Queen Bed, Smoking'];
    this.arrivingLeaving = ['Check-in time starts at 3 PM', 'Check-out time is Noon', '--custome--'];
    this.mainAmenities = ['83 apartments', '24-hour fitness center', '24-hour business center', '24-hour front desk', 'Air conditioning', '--custome--'];
    this.selectedArrivingLeaving = '';
    this.selectedHotelSize = '';
    this.selectedAround = '';
    this.selectedMainAmenities = '';
    
    this.requiredAtCheckin = ['Credit card or cash deposit required', 'Government-issued photo ID required', 'Minimum check-in age is 21', '--custome--'];
    this.selectedRequiredAtCheckin;
    
    //to be added to hotel object
    this.arrivingLeavingList = [];
    this.hotelSizeList = [];
    this.aroundList = [];
    this.requireAtCheckinList = [];
    this.mainAmenitiesList = [];
  }
  
  ModalInstanceController.prototype.ok = function() {
    this.$uibModalInstance.close(this.item);
  }
  
  ModalInstanceController.prototype.cancel = function() {
    this.$uibModalInstance.dismiss('cancel');
  }
  
  ModalInstanceController.prototype.push = function(item, list) {
    this[list].push(item);
  }
  
  ModalInstanceController.prototype.clear = function(list) {
    if (list === this.arrivingLeavingList) {
      this.arrivingLeavingList = [];
    }
    
    if (list === this.hotelSizeList) {
      this.hotelSizeList = [];
    }
    
    if (list === this.requireAtCheckinList) {
      this.requireAtCheckinList = [];
    }
    
    if (list === this.mainAmenitiesList) {
      this.mainAmenitiesList = [];
    }
    
    if (list === this.aroundList) {
      this.aroundList = [];
    }
  }
  return ModalInstanceController;
})();

module.exports = ModalInstanceController;