'use strict';
require('firebase');
require('angularfire');

var FirebaseService = (function() {
  /*@ngInject*/
  function FirebaseService($firebaseObject, $firebaseArray, $firebaseAuth) {
    this.$firebaseObject = $firebaseObject;
    this.$firebaseArray = $firebaseArray;
    this.$firebaseAuth = $firebaseAuth;
    this.link = 'https://shining-fire-8539.firebaseio.com/myhotels/'; 
    this.originalLink = 'https://shining-fire-8539.firebaseio.com';
  }
  
  FirebaseService.prototype.getDefaultData = function() {
    var hotelRef = new Firebase(this.link);
    var tempData = [];
    var data = [];
    var query = hotelRef.limitToLast(6);
    tempData = this.$firebaseArray(query);
    
    tempData.$loaded().then(function() {
      for(var i = 0;i < tempData.length; i++) {
        if (tempData[i]) {
          data.push(tempData[i]);
        }
      }
    }).catch(function(error) {
      console.log('Error:', error);
    });
    
    return data;
  };
  
  FirebaseService.prototype.getAllHotelNames = function() {
    
    var ref = new Firebase(this.link);
    var tempData = [];
    var data = [];
    tempData = this.$firebaseArray(ref);
    
    tempData.$loaded().then(function() {
      for(var i = 0; i < tempData.length; i++) {
        if (tempData[i].hotel_name) {
          data.push({
            name: tempData[i].hotel_name,
            id: tempData[i].$id
          }); 
        }
      }
    }).catch(function(error) {
      console.log('Error:', error);
    });
    
    return data;
  }
  
  FirebaseService.prototype.getDetailData = function(id) {
    var link = this.link + id;
    var ref = new Firebase(link);
    
    return this.$firebaseObject(ref);
  };
  
  FirebaseService.prototype.auth = function() {
    console.log('hey');
    var ref = new Firebase(this.originalLink);
    
    return this.$firebaseAuth(ref);
  };
  
  return FirebaseService;
})();

module.exports = FirebaseService;