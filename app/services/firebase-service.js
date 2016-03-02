'use strict';
require('firebase');
require('angularfire');

var FirebaseService = (function() {
  /*@ngInject*/
  function FirebaseService($firebaseObject, $firebaseArray, $http, $q) {
    this.$firebaseObject = $firebaseObject;
    this.$firebaseArray = $firebaseArray;
    this.link = 'https://shining-fire-8539.firebaseio.com/hotels/';
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
  
  FirebaseService.prototype.getDetailData = function(id) {
    var link = this.link + id;
    var ref = new Firebase(link);
    
    return this.$firebaseObject(ref);
  };
  
  FirebaseService.prototype.getAmentiesWhatAround = function(amentiesOrWhatAround, id) {
    //wrong spelling here *around
    var data = [];
    var type = (amentiesOrWhatAround === 'amenties' ? 'hotel_main_amenties' : 'hotel_what_arround');
    var link = 'https://shining-fire-8539.firebaseio.com/hotels/' + id + '/hotel_overview/' + type;
    var ref = new Firebase(link);

    //using firebase javascript api
    ref.on('value', function(snapshot) {
      data = snapshot.val();
    });
    
    return data;
  };
  
  FirebaseService.prototype.getRoomChoices = function(id) {
    var data = [];
    var tempData = [];
    var link = 'https://shining-fire-8539.firebaseio.com/hotels/' + id + '/hotel_room_choices';
    var ref = new Firebase(link);
    tempData = this.$firebaseArray(ref);
    
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
  
  return FirebaseService;
})();

module.exports = FirebaseService;