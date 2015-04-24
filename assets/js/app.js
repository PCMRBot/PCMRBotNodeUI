var app = {};

app.node = {};
app.node.gui = require('nw.gui');
app.node.win = app.node.gui.Window.get();
app.node.fs = require('fs');
app.node.events = require('events');
app.node.os = require('os');
app.node.win.isMaximized = false;

app.node.win.on('maximize', function() {
    app.node.win.isMaximized = true;
});

app.node.win.on('unmaximize', function() {
    app.node.win.isMaximized = false;
});

app.init = function() {
	app.node.gui.Window.get().moveTo(0,0);
}
	
app.minimize = function() {
	app.node.win.minimize();
}

app.close = function() {
	app.node.win.close();
}

app.maximize = function() {
	app.node.win.maximize();
}

app.unmaximize = function() {
	app.node.win.unmaximize();
}

app.isMaximized = function() {
	return app.node.win.isMaximized;
}

app.openDevConsole = function() {
	app.node.win.showDevTools();
}

app.openExternalPage = function(page) {
	app.node.gui.Shell.openExternal(page);
}

/*$('.external_link').on('click', function(){
	app.node.open(this.href, {
		"nodejs": false,
		"new-instance": false
	});
	return false;
});*/
