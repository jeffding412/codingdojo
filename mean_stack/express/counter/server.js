// Load the express module and store it in the variable express
var express = require("express");
// invoke express and store the result in the variable app
var app = express();

var counter = 0;

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    counter++;
    response.render('index', {count: counter});   
})

app.get('/add2', function(request, response) {
    counter++;
    response.redirect('/');
})

app.get('/reset', function(request, response) {
    counter = 0;
    response.redirect('/');
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
    console.log("listening on port 8000");
})