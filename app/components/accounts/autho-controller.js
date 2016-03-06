'use strict';

var AuthoController = (function() {
    /*@ngInject*/
  function AuthoController(FirebaseService, $state) {
    this.FirebaseService = FirebaseService;

  }

  AuthoController.prototype.loadDefaultData = function() {
    
  }
  
  return AuthoController;
})(); 

module.exports = AuthoController;