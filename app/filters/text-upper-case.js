'use strict';

var UpperCase = (function() {
  /*@ngInject*/
  function UpperCase(input) {
    
    return function(input) {
      input = input.replace(/([A-Z])/g, ' $1');
      
      return input[0].toUpperCase();
    }
  };
  
  return UpperCase;
})();

module.exports = UpperCase;