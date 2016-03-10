'use strict'

var CommentController = (function() {
  
  /*@ngInject*/
  function CommentController(FirebaseService, $stateParams) {
    this.FirebaseService = FirebaseService;
    this.data;
    this.loadComment();
    this.id;
    this.auth = this.FirebaseService.auth();
    this.authData;
    this.$stateParams = $stateParams;
    this.messages;
    var self = this;
    this.auth.$onAuth(function(authData) {
      self.authData = authData;
    });
  }
  
  CommentController.prototype.loadComment = function() {
    if (this.id) {
      this.data = this.FirebaseService.getDetailData(this.id);
    } else {
      this.data = this.FirebaseService.getDefaultData();
    };
  };
  
  CommentController.prototype.addComment = function() {
  
      if (!this.authData) {
        alert('Please log in to add your comment');
      } else {
        this.FirebaseService.addComment(this.authData.uid, this.authData.google.cachedUserProfile.name, this.messages, this.$stateParams.id, this.authData.google.profileImageURL); 
      }
  }
  
  return CommentController;
})();

var comment = function() {
  
  return {
    replace: true,
    restrict: 'AE',
    templateUrl: 'app/common/comment/comment.html',
    controller: CommentController,
    controllerAs: 'comment' ,
    scope: {},
    
    //we bind isolated value to our controller
    bindToController: {
      id: '='
    }
  };
};

module.exports = comment;