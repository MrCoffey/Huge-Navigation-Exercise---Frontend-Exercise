(function(){
  'use strict';

  // SLIDEBAR DEFINITION
  // =========================

  var burgerLink = document.getElementById('burger');
  var menu = document.getElementById('menu');
  var closeLink = document.getElementById('close');
  var overlay = document.getElementsByClassName('content')[0];

  // Toggle the nav-bar
  function slideNav(action){
    var slidingDiv = document.getElementsByClassName('nav-content')[0];
    var stopPosition;

    if (action === 'show'){
      stopPosition = 0;

      if (parseInt(slidingDiv.style.left, 10) < stopPosition) {
        slidingDiv.style.left = parseInt(slidingDiv.style.left, 10) + 20 + 'px';
        setTimeout(slideNav('show'), 0.50);
      }

    } else {
      stopPosition = -380;

      if (parseInt(slidingDiv.style.left, 10) > stopPosition) {
        slidingDiv.style.left = parseInt(slidingDiv.style.left, 10) - 20 + 'px';
        setTimeout(slideNav('hide'), 0.50);
      }
    }

  }

  // Handle the nav actions
  function handleNav(action){
    if (action === 'show'){
      slideNav(action);
      closeLink.setAttribute('style', 'display:block;');
    } else {
      slideNav(action);
      closeLink.removeAttribute('style');
    }
    document.getElementsByClassName('content')[0].classList.toggle('overlay');
  }

  // Those definitions recieve the events, then
  burgerLink.addEventListener('click', function(){
    handleNav('show');
  }, false);


  closeLink.addEventListener('click', function(){
    handleNav('hide');
  }, false);


  overlay.addEventListener('click', function(){
    if (this.classList.contains('overlay')){
      handleNav('hide');
    }
  }, false);

})();
