/* global document */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });
const ready = require('../../js/utils/documentReady.js');  
ready(function(){
    var language = document.getElementById('header-menu__language');
    var languageList = document.getElementById('language-list');
    var arrow = document.getElementById('arrow_down');
    language.addEventListener('click', showlanguageTarget);
   
    function showlanguageTarget() {
        languageList.classList.toggle('header-menu__language-list--open');
        arrow.classList.toggle('arrow_down--open');
        
    }
   
    });
