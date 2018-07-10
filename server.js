//import block
const express = require("express");
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
const bodyParser = require("body-parser");
const routes = require("./routes");
var auth = require('./routes/auth');
var apiRoutes = require('./routes/api-routes');
//set up express
var app = express();
var PORT = process.env.PORT || 8080;

//syncing models
var db = require("./models");
// set up logger for express
app.use(logger('dev'));

// set up body parser in express.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
// parse application/json
app.use(bodyParser.json());
app.use(routes);


//static directory
app.use(express.static(path.join(__dirname, 'build')));
//catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
//error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.sendFile(path.join(__dirname, './build/404.html'));
});
module.exports = app;
//Routes

// require("./routes/apiroutes.js")(app);

//Syncing sequelize models then starting our app.

db.sequelize.sync({ /*force: true*/ }).then(function () {

    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});