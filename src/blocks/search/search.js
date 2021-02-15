/* global document */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });

const ready = require('../../js/utils/documentReady.js');  
ready(function(){
    var search = document.getElementById('search-toggler');
    var close = document.getElementById('search-close');
    var searchForm = document.getElementById('search');
    search.addEventListener('click', showSearshTarget);
    close.addEventListener('click', closeSearshTarget);
    function showSearshTarget() {
        searchForm.classList.toggle('search--open');
    }
    function closeSearshTarget() {
        searchForm.classList.remove('search--open');
    }        
    
    });