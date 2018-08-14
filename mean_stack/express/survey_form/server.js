// Load the express module and store it in the variable express
var express = require("express");
// invoke express and store the result in the variable app
var app = express();

// new code:
var session = require('express-session');
// original code:
var app = express();
// more new code:
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    response.render('index');   
})

// route to process new user form data:
app.post('/submitForm', function (request, response){
    request.session.body = request.body;
    //code to add user to db goes here!
    // redirect the user back to the root route.  
    response.redirect('/result')
});

app.get('/result', function(request, response) {
    var data = request.session.body;
    response.render('result', {data: data});   
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
    console.log("listening on port 8000");
})