'use strict';
require('firebase');
require('angularfire');

var FirebaseService = (function() {
  /*@ngInject*/
  function FirebaseService($firebaseObject, $firebaseArray, $http, $q) {
    this.$firebaseObject = $firebaseObject;
    this.$firebaseArray = $firebaseArray;
    this.link = 'https://shining-fire-8539.firebaseio.com/myhotels/'; 
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
  
  //demo
  FirebaseService.prototype.setDemo = function() {
    var myId = '';
    var ref = new Firebase('https://sunshine-333.firebaseio.com/users');

    var data = this.$firebaseArray(ref);
    data.$add({
        FUCKKKK: {
          friends: { brinchen: true },
          name: {
						name1: {
									though1:"great",
									though2:"good"
								}
					},
          
          widgets: { one: true, three: true }
        }}).then(function(ref) {
          var id = ref.key();
          console.log("added record with id " + id);
          myId = id;
          console.log(data.$indexFor(id)); // returns location in the array
        });
    
        console.log('my id:', myId);
        
        return myId;
//    var newRef = ref.push();
//    newRef.set({
//        FUCK: {
//          friends: { brinchen: true },
//          name: {
//						name1: {
//									though1:"great",
//									though2:"good"
//								}
//					},
//          
//          widgets: { one: true, three: true }
//        }});
//    var postID = newRef.key();
//    return postID;  
  }
  
  return FirebaseService;
})();

module.exports = FirebaseService;