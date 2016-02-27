'use strict';
require('firebase');
require('angularfire');

var FirebaseService = (function() {
  /*@ngInject*/
  function FirebaseService($firebaseArray) {
    this.$firebaseArray = $firebaseArray;
    this.ref = new Firebase('https://shining-fire-8539.firebaseio.com');
    this.data = this.$firebaseArray(this.ref);
  }
  
  FirebaseService.prototype.getData = function() {
    var data = [];
    data = this.data;
    console.log(data);
    
    for (var prop in data) {
      console.log(data[prop]);
    }
    return data;
  }
  
  return FirebaseService;
})();

module.exports = FirebaseService;