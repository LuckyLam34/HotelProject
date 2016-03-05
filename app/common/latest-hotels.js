'use strict';

var LatestHotelsController = (function() {
  /*@ngInject*/
  function LatestHotelsController(FirebaseService, $state, $stateParams) {
    this.FirebaseService = FirebaseService;
    this.data = [];
    this.loadLatestHotels(3);
    this.$state = $state;
    this.$stateParams = $stateParams;
  }
  
  LatestHotelsController.prototype.loadLatestHotels = function(total) {
    this.data = this.FirebaseService.getLatestHotels(total);
  }
  
  return LatestHotelsController;
})();

var hotel = function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'app/common/latest-hotels.html',
    controller: LatestHotelsController,
    controllerAs: 'latestHotels'
  }
};

module.exports = hotel;