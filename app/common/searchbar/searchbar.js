'use strict';

var SearchbarController = (function() {
  /*@ngInject*/
  function SearchbarController($rootScope, FirebaseService, $state) {
    this.$rootScope = $rootScope;
    this.FirebaseService = FirebaseService;
    this.$state = $state;
    this.data = [];
    this.loadAllHotelNames();
    this.selected;
    this.modelOptions = {
      debounce: {
        default: 500,
        blur: 250
      },
      getterSetter: true
    };
    this.$item;
    this.$label;
    this.$model;
  };
  
  SearchbarController.prototype.loadAllHotelNames = function() {
    this.data = this.FirebaseService.getAllHotelNames();
  };
  
  SearchbarController.prototype.ngModelOptionsSelected = function(value) {
    if (arguments.length) {
      this.selected = value;
    } else {
      return this.selected;
    }
  };
  
  SearchbarController.prototype.hotelSelected = function($item, $model, $label) {

    //$item from typeahead-on-search
    this.$state.go('hotelDetail', {id: $item.id});
  }
  
  return SearchbarController;
})();

var searchbar = function() {
  
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'app/common/searchbar/searchbar.html',
    controller: SearchbarController,
    controllerAs: 'searchbar'
  };
}

module.exports = searchbar;