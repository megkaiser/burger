//require express, method-override, body-parser

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = 3000;

var app = express();

//Serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false}));

//override with POST having ?_method=DELETE -- DO NOT FULLY UNDERSTAND THIS??
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);

//NOTE: do I need to require mysql here?
//do I need this? -- var connection = require("./config/connection.js");
//or this? var orm = require("./config/orm.js");
//or app.get and app.post ???