/* global document */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });

const ready = require('../../js/utils/documentReady.js');

ready(function(){

  var searsh = document.querySelectorAll('.search-toggler');

  for (var i = 0; i < searsh.length; i++) {
    var searsh = searsh[i];
    searsh.addEventListener('click', showSearshTarget);
  }

  function showSearshTarget() {
    var targetId = this.getAttribute('data-target-id');
    var targetClassToggle = this.getAttribute('data-target-class-toggle');
    if (targetId && targetClassToggle) {
      this.classList.toggle('searsh__btn--close');
      document.getElementById(targetId).classList.toggle(targetClassToggle);
    }
  }

});