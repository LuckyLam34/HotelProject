'use strict';
require('firebase');
require('angularfire');

var FirebaseService = (function() {
  /*@ngInject*/
  function FirebaseService($firebaseObject, $firebaseArray) {
    this.$firebaseObject = $firebaseObject;
    this.$firebaseArray = $firebaseArray;
//    this.ref = new Firebase('https://shining-fire-8539.firebaseio.com/hotels/');
    
    this.link = 'https://shining-fire-8539.firebaseio.com/hotels/';
//    var data = [];
//    data = this.$firebaseObject(this.ref);
//    this.data = data;
  }
  
  FirebaseService.prototype.getDefaultData = function() {
//    alert('hey');
    var hotelRef = new Firebase(this.link);
    var tempData = [];
    var data = [];
    var query = hotelRef.limitToLast(6);
    tempData = this.$firebaseArray(query);
    tempData.$loaded().then(function() {
      console.log(tempData);
      for(var i = 0;i < tempData.length; i++) {
        if (tempData[i]) {
          console.log(i);
          data.push(tempData[i]);
        }
      }
      console.log('my data:', data);
      
    }).catch(function(error) {
      console.log('Error:', error);
    });
    
    return data;
  }
  
  return FirebaseService;
})();

module.exports = FirebaseService;