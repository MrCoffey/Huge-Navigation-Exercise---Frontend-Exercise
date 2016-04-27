function $http(url){ // Get data from the '/api' endpoint

  var response = { // Returns a serialized response from '/api' which later will be parsed into a Json Object
    ajax : function(url){
      var promise = new Promise(function(resolve, reject){  // This promise performs the AJAX request
        var httpClient = new XMLHttpRequest();

        // request a GET request, since we're not using nothing more I just harcoded the method here
        httpClient.open('GET', url);
        httpClient.send();

        httpClient.onload = function (){ // If the response code is 2xx performs resolve.
          if ( this.status >= 200 && this.status < 300 ){
            resolve(this.response);
          } else { // Returns a status explanation so we can debug.
            reject(this.statusText);
          }
        };
        httpClient.onerror = function(){ // Just in case something is broken
          reject(this.statusText);
        };
      });

      return promise;
    }
  };

  // Returns the AJAX
  return response.ajax(url);
}

// Here is where the magic happens.
// Take a id and a Json object, looks for a node with that id and create new lists <li>.
// Then seeds those lists with anchors created using the nested items.
function renderHTML(element, items){
  items.forEach(function(e){
    writteNode(element, '<li id="'+ e.label +'" class="toggle"><a href="' + e.url + '">' + e.label + '</a></li>');

    if (e.items.length > 0) {
      writteNode(e.label, '<div class="collapsible-body"><ul class="dropdown" id="nested-' + e.label + '"></ul></div>');
      for (let position in e.items ){
        writteNode('nested-' + e.label, '<li><a href="' + e.items[position].url + '">' + e.items[position].label + '</a></li>');
      }
    }
  });

  // Append a node to a parent passed as argument
  function writteNode(id ,html){
    document.getElementById(id).insertAdjacentHTML('beforeend', html);
  }
}

// Writte HTML using the JSON data Ajax request was successful
var callback = {
  success : function(data){
    renderHTML('main-list', JSON.parse(data).items);
  },
  error : function(data){
    console.log('error', data);
  }
};

// Callback for $http promise, im calling
// callback error just for debugging proposals
$http('/api')
  .then(callback.success)
  .catch(callback.error);
