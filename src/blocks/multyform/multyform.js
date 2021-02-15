/* global document */

// const ready = require('../../js/utils/documentReady.js');

// ready(function(){
//   
// });
function multyform() {
var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');
var submit  = document.getElementById('multyform__submit');
prevBtn.addEventListener('click', prevClick);
nextBtn.addEventListener('click', nextClick)


var steps = [];
steps.push(document.getElementById('step_1'));
steps.push(document.getElementById('step_2'));
steps.push(document.getElementById('step_3'));

var StepIndex = 0;

function prevClick(){
    nextBtn.classList.remove('hidden');
    submit.classList.add('hidden');
    if(StepIndex === 0){
     prevBtn.classList.add('hidden');
     event.preventDefault();    
    }
    else{
     steps[StepIndex].classList.remove('open');
    StepIndex --;
    steps[StepIndex].classList.add('open');
    event.preventDefault();
    }
}
function nextClick(){
    prevBtn.classList.remove('hidden');
    
    if(StepIndex === (steps.length - 1)){
        nextBtn.classList.add('hidden');
        event.preventDefault();
    }
    else{
    if(StepIndex === 1){
    nextBtn.classList.add('hidden');
    submit.classList.remove('hidden');
    }
    steps[StepIndex].classList.remove('open');
    StepIndex ++;
    steps[StepIndex].classList.add('open');
    event.preventDefault();
    }
}

}
multyform()
function toggleInput(){
var viber = document.getElementById('multyform-viber');
var el = document.getElementById('viber-input');
var tel = document.getElementById('multyform-tel');
var elt = document.getElementById('tel-input');
viber.addEventListener('click', viberClick);
tel.addEventListener('click', telClick);
function viberClick(){
el.classList.toggle("hidden");
event.preventDefault();
}
function telClick(){
elt.classList.toggle("hidden");
event.preventDefault();
}

}
toggleInput();


var forms = document.querySelectorAll(".ajax-form");

function submit() {
  var request = new XMLHttpRequest();
  request.onload = function () {
    if (request.status == 200) {
      alert("Thank you!")
    }
  };
  request.open(this.method, this.action, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  var event = this.querySelector('[name="event"]');
  var flower = this.querySelector('[name="flower"]');
  var viber = this.querySelector('[name="viber"]');
  var phone = this.querySelector('[name="phone"]');
  request.send('event=' + encodeURIComponent(event.value) + '&flower='  + encodeURIComponent(flower.value)+ '&viber='  + encodeURIComponent(viber.value)+ '&phone='  + encodeURIComponent(phone.value));
  return false;
}

for (var i = 0; i < forms.length; i++) {
  forms[i].onsubmit = submit;
}
    
