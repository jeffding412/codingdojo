// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

// new code:
var session = require('express-session');
// more new code:
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

var mongoose = require('./server/config/mongoose.js')();

require('./server/models/quote.js')(mongoose)
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quote'

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

const flash = require('express-flash');
app.use(flash());

// Require path
var path = require('path');
// Setting our Static Folder Directory

app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory

app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Routes
require('./server/config/routes.js')(app)

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})