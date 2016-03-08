'use strict';

var LocalStorageService = (function() {
  /*@ngInject*/
  function LocalStorageService() {
    this.data;
  }
  
  LocalStorageService.prototype.saveAdminState = function() {
    sessionStorage.setItem('admin', true);
    console.log('saved to sessionStorage');
  }
  
  LocalStorageService.prototype.getAdminState = function() {
    var value = sessionStorage.getItem('admin');
    console.log('get sessionstorage');
    return value;
  }
  
  LocalStorageService.prototype.clearAdminState = function() {
    sessionStorage.clear('admin');
    console.log('clear sessionstorage');
  }
  
  return LocalStorageService;
})();

module.exports = LocalStorageService;