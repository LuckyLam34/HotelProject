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
//          console.log(data);
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
    
    console.log(this.$firebaseAuth(ref));
    return this.$firebaseAuth(ref);
//    return ref.authWithOAuthPopup('google', function(error, authData) {
//      if (error) {
//        console.log('Login Failed', error);
//      } else {
//        console.log('Authenticated successfully with payload:', authData);
//        
//      }
//    }, {
//      remember: 'sessionOnly',
//      scope: 'email'
//    });
    
    
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