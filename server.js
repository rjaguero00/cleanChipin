//import block
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

//set up express
var app = express();
var PORT = process.env.PORT || 8080;

//syncing models
var db = require("./models");

// set up body parser in express.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(routes);
//static directory
app.use(express.static("public"));

//Routes
// require("./routes/apiroutes.js")(app);

//Syncing sequelize models then starting our app.
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});