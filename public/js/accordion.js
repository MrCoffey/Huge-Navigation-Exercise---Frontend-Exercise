window.onload = function() {
  var toggle = document.getElementsByClassName('toggle');

  // Iterate througth each class and add the
  // selected class to the node that was clicked
  for(let i = 0; i < toggle.length; i ++ ){
    toggle[i].onclick = function(){
      if(this.children.length > 1){
        this.children[1].classList.toggle('selected');
      }
    };
  }
};
