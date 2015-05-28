var gui = require('nw.gui');
var win = gui.Window.get();
var nativeMenuBar = new gui.Menu({ type: 'menubar' });
nativeMenuBar.createMacBuiltin('Eattle 저수준 개발자 도구', {
  hideEdit: true,
  hideWindow: true
});
win.menu = nativeMenuBar;