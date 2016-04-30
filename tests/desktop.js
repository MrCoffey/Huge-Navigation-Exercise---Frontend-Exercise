// Helpers
var multiLevelLists = ['#About', '#Careers', '#Ideas', '#Contact'];
var singleList = ['#Work', '#News', '#Events'];

function clickEachLI(ids, client){
  client.click(id, function(){
    this.expect.element('#nested-About').to.not.be.visible.before(1000);
  });
}

// Spec definitions
module.exports = {

  beforeEach : function(client){
    client
      .url('http://localhost:3000')
      .pause(500)
  },

  after : function(client){
    client.end();
  },

  // The Navbar should contain the <li> elements that we pull from the API
  'Navbar Content' : function(client){
    var lists = multiLevelLists.concat(singleList);

    client.expect.element('#main-list').to.be.present;
    client.expect.element('.collapsible-body').to.have.css('display', 'none');

    lists.forEach(function(id){
      client.expect.element(id).to.be.present;
    });
  },

  // When user clicks in a <li> with nested elements
  'Navbar' : function(client){
    client
      .click('#About')

    client.assert.cssClassNotPresent('.collapsible-body', 'selected');

    multiLevelLists.forEach(function(id){

      client.click(id, function(){
        this.expect.element('#nested-' + id.substr(1)).to.be.visible.before(100);
      })

      client.click(id, function(){
        this.expect.element('.collapsible-body').to.not.be.visible.before(100);
      })

    });
   }
};
