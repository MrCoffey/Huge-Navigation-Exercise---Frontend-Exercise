window.onclick = function(event) {
  'use strict';

  // TOGGLE CLASSES IN ORDER TO SHOW/HIDE THE SIDE NAV
  // ======================

  if (event.target.matches('.toggle') || event.target.matches('a')) {
    var elements = document.getElementsByClassName('toggle');

    for(let i = 0; i < elements.length; i++){
      elements[i].onclick = function(){

        if(this.children.length < 1) return;

        this.children[2].classList.toggle('selected');
        this.classList.toggle('nav-content--selected');
      };
    }
    // FIXME: This overlay doesn't work acordently when the nav is open
    // document.getElementsByClassName('content')[0].classList.add('overlay');
  } else {
    var showedLists = document.getElementsByClassName('collapsible-body');

    for(let i = 0; i < showedLists.length; i++) {

      if(showedLists[i].classList.contains('selected')) {
        showedLists[i].classList.remove('selected');
        showedLists[i].parentElement.classList.remove('nav-content--selected');
      }

    }
    // FIXME: This overlay doesn't work acordently when the nav is open
    // document.getElementsByClassName('content')[0].classList.remove('overlay');
  }

};
