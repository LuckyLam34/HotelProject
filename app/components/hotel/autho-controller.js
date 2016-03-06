'use strict';

var AuthoController = (function() {
    /*@ngInject*/
  function AuthoController(FirebaseService) {
      this.FirebaseService = FirebaseService;
  }

  AuthoController.prototype.loadDefaultData = function() {
    
  }
  
  return AuthoController;
})(); 

module.exports = AuthoController;