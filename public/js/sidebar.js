(function(){

  var burgerLink = document.getElementById('burger');
  var menu = document.getElementById('menu');
  var closeLink = document.getElementById('close');
  var overlay = document.getElementsByClassName('content')[0];

  // When click event happen on the burguer button
  // shows the nav, and hide the close element
  burgerLink.addEventListener('click', function(){
    toggleNav('show');
  }, false);

  // When click event happen on the close button
  // shows the burguer button and hide the menu bar
  closeLink.addEventListener('click', function(){
    toggleNav('hide');
  }, false);

  // Recieve the click event on the overlay layer, then hide the nav
  overlay.addEventListener('click', function(){
    if (this.classList.contains('overlay')){
      toggleNav('hide');
    }
  }, false);

  // Toggle the nav-bar
  function toggleNav(action){
    if (action === 'show'){
      slideIn();
      closeLink.setAttribute('style', 'display:block;');
      document.getElementsByClassName('content')[0].classList.toggle('overlay');
    } else {
      slideOut();
      closeLink.removeAttribute('style');
      document.getElementsByClassName('content')[0].classList.toggle('overlay');
    }
  }

  // Slide the nav-bar from right to left adding 20px until is completly shown
  function slideIn() {
    var slidingDiv = document.getElementsByClassName('nav-content')[0];
    var stopPosition = 0;
    if (parseInt(slidingDiv.style.left, 10) < stopPosition) {
      slidingDiv.style.left = parseInt(slidingDiv.style.left, 10) + 20 + 'px';
      setTimeout(slideIn, .050);
    }
  }

  // Slide the nav-bar from left to right
  function slideOut() {
    var slidingDiv = document.getElementsByClassName('nav-content')[0];
    var stopPosition = -380;
    if (parseInt(slidingDiv.style.left, 10) > stopPosition) {
      slidingDiv.style.left = parseInt(slidingDiv.style.left, 10) - 20 + 'px';
      setTimeout(slideOut, .050);
    }
  }

})();
