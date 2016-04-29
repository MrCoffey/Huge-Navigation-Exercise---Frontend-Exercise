(function(){
  'use strict';

  // SLIDEBAR DEFINITION
  // =========================

  var burgerLink = document.getElementById('burger');
  var menu = document.getElementById('menu');
  var closeLink = document.getElementById('close');
  var overlay = document.getElementsByClassName('content')[0];

  // Slide the nav-bar from right to left adding 20px until is completly shown
  function slideIn(){
    var slidingDiv = document.getElementsByClassName('nav-content')[0];
    var stopPosition = 0;

    if (parseInt(slidingDiv.style.left, 10) < stopPosition) {
      slidingDiv.style.left = parseInt(slidingDiv.style.left, 10) + 20 + 'px';
      setTimeout(slideIn, 0.50);
    }
  }

  // Slide the nav-bar from left to right
  function slideOut(){
    var slidingDiv = document.getElementsByClassName('nav-content')[0];
    var stopPosition = -380;

    if (parseInt(slidingDiv.style.left, 10) > stopPosition) {
      slidingDiv.style.left = parseInt(slidingDiv.style.left, 10) - 20 + 'px';
      setTimeout(slideOut, 0.50);
    }

  }

  // Toggle the nav-bar
  function toggleNav(action){
    if (action === 'show'){
      slideIn();
      closeLink.setAttribute('style', 'display:block;');
    } else {
      slideOut();
      closeLink.removeAttribute('style');
    }
    document.getElementsByClassName('content')[0].classList.toggle('overlay');
  }


  burgerLink.addEventListener('click', function(){
    toggleNav('show');
  }, false);


  closeLink.addEventListener('click', function(){
    toggleNav('hide');
  }, false);


  overlay.addEventListener('click', function(){
    if (this.classList.contains('overlay')){
      toggleNav('hide');
    }
  }, false);

})();
