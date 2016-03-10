'use strict'

var CommentController = (function() {
  
  /*@ngInject*/
  function CommentController(FirebaseService, $stateParams, $sce) {
    this.FirebaseService = FirebaseService;
    this.$sce = $sce;
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
        return false;
      } else if (!this.messages) {
        alert('Your message is empty');
        
        return false;
      } else {
        this.FirebaseService.addComment(this.authData.uid, this.authData.google.cachedUserProfile.name, this.messages, this.$stateParams.id, this.authData.google.profileImageURL); 
        this.messages = '';
      }
  }
  
  CommentController.prototype.renderHTML = function(htmlCode) {
    return this.$sce.trustAsHtml(htmlCode);
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