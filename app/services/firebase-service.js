'use strict';

require('firebase');

var FirebaseService = (function() {
  
  
  /*@ngInject*/
  function FirebaseService() {
    
    var myFirebase = new Firebase('https://shining-fire-8539.firebaseio.com/');
  
    var data = [];
    var temp = [];
    myFirebase.on('value', function(snapshot) {
      data = snapshot.val();
      temp = data;
      }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    
    console.log(temp);
    this.hotels = temp;

//    setInterval(function() {console.log(data);}, 500);
//    this.hotels = data;
  }
  
  FirebaseService.prototype.get = function() {
    alert('hey');
    var data = this.hotels;

  }

  
  return FirebaseService;
})();

module.exports = FirebaseService;