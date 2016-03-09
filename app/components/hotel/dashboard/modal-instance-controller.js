
var ModalInstanceController = (function() {
  /*@ngInject*/
  function ModalInstanceController($uibModalInstance, item) {
    this.$uibModalInstance = $uibModalInstance;
    this.item = item;
  }
  
  ModalInstanceController.prototype.ok = function() {
    this.$uibModalInstance.close(this.item);
  }
  
  ModalInstanceController.prototype.cancel = function() {
    this.$uibModalInstance.dismiss('cancel');
  }
  
  ModalInstanceController.prototype.isObject = function(input) {
    return angular.isObject(input);
  }
  
  return ModalInstanceController;
})();

module.exports = ModalInstanceController;