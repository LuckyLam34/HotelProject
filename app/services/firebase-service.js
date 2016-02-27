'use strict';
require('firebase');
require('angularfire');

var FirebaseService = (function() {
  /*@ngInject*/
  function FirebaseService($firebaseObject) {
    this.$firebaseObject = $firebaseObject;
    this.ref = new Firebase('https://shining-fire-8539.firebaseio.com/hotels/1/hotel_address');
    var data = [];
    data = this.$firebaseObject(this.ref);
    this.data = data;
  }
  
  FirebaseService.prototype.getData = function() {
//    alert('hey');
    return this.$firebaseObject(this.ref);
  }
  
  return FirebaseService;
})();

module.exports = FirebaseService;