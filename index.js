/**
 * Required External Modules
 */
var os = require('os');
var express = require("express");
require('custom-env').env('')
var expressStatusMonitor = require('express-status-monitor')
var mongooseMorgan = require('mongoose-morgan');
var path = require("path");

/**
 * App Variables
 */
var app = express();
var port = process.env.PORT || "3000";
var osdata = {
    platform: os.platform(),
    release: os.release(),
};

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(expressStatusMonitor())


app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */
app.get("/", (res) => {
    res.render("index", {
        title: title,
        osPlatform: osdata.platform,
        osRelease: osdata.release,
    });
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});