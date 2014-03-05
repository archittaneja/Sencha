new Ext.application({
name: 'Chat',
launch: function() {
var hello = new Ext.Container({
fullscreen: true,
html: '<div id="hello">My first app Hello World </div>'
  });

Ext.application.viewport = hello;
  }
});
