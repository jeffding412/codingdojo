// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

// new code:
var session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
// more new code:
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

// Require Mongoose
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost:/1955');
// Use native promises
// mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    name: String,
}, {timestamps: true});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

const flash = require('express-flash');
app.use(flash());

const bcrypt = require('bcryptjs');

// Require path
var path = require('path');
// Setting our Static Folder Directory

app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory

app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Routes
// Root Request
app.get('/', function(req, res) {
    User.find({}, function(err, users) {
        if(err){
            console.log("Returned error", err);
            // respond with JSON
            res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
            res.json(users)
        }
    })
})

app.get('/new/:name/', function(req,res) {
    var user = new User();
    user.name = req.params.name

    var user = new User({name: req.params.name});
    user.save(function(err) {
        res.redirect('/');
    })
})

app.get('/remove/:name/', function(req,res) {
    User.remove({name: req.params.name}, function(err) {
        res.redirect('/');
    })
})

app.get('/:name/', function(req,res) {
    User.findOne({name: req.params.name}, function(err, user) {
        res.json(user)
    })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})