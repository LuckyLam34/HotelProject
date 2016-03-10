'use strict';
require('firebase');
require('angularfire');

var FirebaseService = (function() {
  /*@ngInject*/
  function FirebaseService($firebaseObject, $firebaseArray, $firebaseAuth, $window, $state) {
    this.$firebaseObject = $firebaseObject;
    this.$firebaseArray = $firebaseArray;
    this.$firebaseAuth = $firebaseAuth;
    
    this.link = 'https://shining-fire-8539.firebaseio.com/myhotels/'; 
    this.originalLink = 'https://shining-fire-8539.firebaseio.com';
    
    this.$window = $window;
    this.$state = $state;
  }
  
  FirebaseService.prototype.getDefaultData = function() {
    var hotelRef = new Firebase(this.link);
    var tempData = [];
    var data = [];
    tempData = this.$firebaseArray(hotelRef);
    
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
    var ref = new Firebase(this.originalLink);
    
    return this.$firebaseAuth(ref);
  };
  
  FirebaseService.prototype.getLatestHotels = function(total) {
    var hotelRef = new Firebase(this.link);
    var tempData = [];
    var data = [];
    var query = hotelRef.limitToLast(total);
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
  }
  
  FirebaseService.prototype.removeHotel = function(id) {
    var removeHotel = this.$window.confirm('Are you sure you want to delete?');
    
    if (removeHotel) {
      var ref = new Firebase(this.link + id);
      var object = this.$firebaseObject(ref);

      object.$remove().then(function(ref) {
        console.log('hotel is removed');
      }, function(error) {
        console.log('Error on removing:', error);
      });
    }
  };
  
  FirebaseService.prototype.updateHotel = function(hotel) {
    var ref = new Firebase(this.link);
    var data = {};
  
    var onComplete = function(error) {
      if (error) {
        console.log('Synchronization failed');
      } else {
        console.log('Synchronization succeeded');
      }
    };
    
    for (var prop in hotel) {
      if (prop !== '$id' && prop !== '$priority') {
        data[prop] = hotel[prop];
      }
    }
    
    ref.child(hotel.$id).set(data);
  };
  
  FirebaseService.prototype.addHotel = function(hotel) {
    var ref = new Firebase(this.link);
    var list = this.$firebaseArray(ref);
    
    list.$add(hotel).then(function(ref) {
      var id = ref.key();
      console.log('Added record with id:' + id);
      
      list.$indexFor(id);
    });
  };
  
  FirebaseService.prototype.addComment = function(uid, username, messages, id, avata) {
    var link = 'https://shining-fire-8539.firebaseio.com/myhotels/' + id + '/hotel_comments';
    var ref = new Firebase(link);
    var list = this.$firebaseArray(ref);
    var data = {
      created: (new Date()).toLocaleString(),
      from: username,
      id: uid,
      messages: messages,
      profile_picture: avata
    };
    
    list.$add(data).then(function(ref) {
      var id = ref.key();
      alert('Your messages is added');
      list.$indexFor(id);
    });
  }
  
  return FirebaseService;
})();

module.exports = FirebaseService;