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
  
  DashboardController.prototype.open = function (hotel) {
    var self = this;
    
    var modalInstance = this.$uibModal.open({
      templateUrl: 'app/components/hotel/modal-content.html',
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
      self.selected = item;
    }, function() {
//      $log.info('Modal dismissed at: ' + new Date());
      console.log('failed');
    });
  };
  
  return DashboardController;
})();

module.exports = DashboardController;