(function(){
    var electron = require("electron");
    var app = electron.app;
    var BrowserWindow = electron.BrowserWindow;
    var path = require("path");
    var url = require("url");

    var win;

    function setup(){
        win = new BrowserWindow({
            width: 1000,
            height: 600,
            webPreferences: {
                nodeIntegrationInWorker: true,
            },
            title: "Kabegami",
            icon: "./icon.png",
        });

        // win.setMenu(null);

        win.loadURL(url.format({
            pathname: path.join(__dirname, "/app/index.html"),
            protocol: "file:",
            slashes: true,
        }));

        win.on("closed", function(){
            win = null;
        });
    }

    app.on("ready", setup);
    app.on("activate", function(){
        if (win === null) setup();
    });
})();
