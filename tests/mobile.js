// Id lists
var multiLevelLists = ['#About', '#Careers', '#Ideas', '#Contact'];
var singleList = ['#Work', '#News', '#Events'];

// Test Behaviour when the viewport width is < 768px
module.exports = {

  beforeEach : function(client){
    client
      .url('http://localhost:3000')
      .pause(500)
      .resizeWindow(767, 1000);
  },

  after : function(client){
    client.end();
  },

  'Mobile size content' : function(client){
    client.expect.element('#close').to.not.be.visible;
    client.expect.element('#burger').to.be.visible;
    client.expect.element('#logo').to.not.be.visible;
    client.expect.element('.overlay').to.not.be.present;
  },

  'Toggle navbar' : function(client){

    // User clicks menu link #burger
    client.click('#burger', function(){
      client.expect.element('#close').to.be.visible;
      client.expect.element('#logo').to.be.visible;
      client.expect.element('.overlay').to.be.present;
    });

    // User clicks Close link #close
    client.click('#close', function(){
      client.expect.element('#close').to.not.be.visible;
      client.expect.element('.overlay').to.not.be.present;
    });

  },

  'Mobile ' : function(client){
    client
      .click("#burger");

    // User clicks the overlay area after the navbar shown
    client.click('.overlay', function(){
      client.expect.element('#close').to.not.be.visible;
      client.expect.element('#logo').to.not.be.visible;
      client.expect.element('.overlay').to.not.be.present;
    });
  }
};
