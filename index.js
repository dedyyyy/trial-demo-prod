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
var title = process.env.APP_TITLE;
var candidateName = process.env.APP_CANDIDATE_NAME;
var startDate = process.env.APP_CURRENT_DATE;
var endDate = process.env.APP_TRIAL_START_DATE;
console.log(title);


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
app.get("/", (req,res) => {
    res.render("index", {
        title: title,
        osPlatform: osdata.platform,
        osRelease: osdata.release,
        candidateName: candidateName,
        trialStartDate: startDate,
        currentDate: endDate,
    });
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});