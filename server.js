//Required NPM packages

const express = require ('express');
const path = require ('path');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

//initialize express
const app = express();


//PUBLIC SETTINGS 
app.use(express.static(__dirname+'/public'))
const PORT = process.env.PORT || 3000;

//connect to mongo
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/NewsScrape";
mongoose.connect(MONGODB_URI,(err) => {
    if(err) throw err;
    console.log('database connected')
});

//BODYPARSER
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());

//Express HBS setup
const exphbs = require ('express-handlebars');

//Set up handlebar for VIEWS
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes 
var routes = require ('./routes/routes.js');
app.use('/', routes);

//Start Server
app.listen (PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
})