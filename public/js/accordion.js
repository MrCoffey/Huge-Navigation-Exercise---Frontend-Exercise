// Iterate througth each class and add the
// selected class to the node that was clicked
window.onclick = function(event) {
  if (event.target.matches('.toggle') || event.target.matches('a')) {
    var elements = document.getElementsByClassName('toggle');
    for(let i = 0; i < elements.length; i ++ ){
      elements[i].onclick = function(){
        if(this.children.length > 1){
          this.children[1].classList.toggle('selected');
          this.classList.toggle('nav-content--selected');
        }
      };
    }
  } else {
    var showedLists = document.getElementsByClassName("collapsible-body");
    for (let i = 0; i < showedLists.length; i++) {
      if (showedLists[i].classList.contains('selected')) {
        showedLists[i].classList.remove('selected');
      }
    }
  }
};
