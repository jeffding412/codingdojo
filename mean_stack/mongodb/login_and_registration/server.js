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
    name: String
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
    res.render('index', {errors: errors});
})

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateDate(date) {
    var date_regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if(!(date_regex.test(date)))
        return false;
    else 
        return true;
}

function validateRegistration(form_input) {
    err = {};
    if (!validateEmail(form_input.email)) {
        err.email = "Email is not valid";
    }
    if (form_input.first.replace(/ /g, '') == "") {
        err.first = "First name is a required field";
    }
    if (form_input.last.replace(/ /g, '') == "") {
        err.last = "Last name is a required field";
    }
    if (form_input.password.replace(/ /g, '') == "") {
        err.password = "Password is a required field";
    }
    if (!validateDate(form_input.birthday)) {
        err.birthday = "Invalid Birthday";
    }
    console.log(form_input);
    return err;
}

// Register Request 
app.post('/register', function(req, res) {
    console.log("POST DATA", req.body);
    var errors = validateRegistration(req.body);

    console.log(errors);
    if (!(Object.keys(errors).length === 0 && errors.constructor === Object)) {
        req.session.errors = errors;
        res.redirect('/');
    }
    else {
        User.findOne({email: req.body.email}, function(err, user){
            if (user) {
                var error = {
                    email: "Email Already in Use"
                }
                req.session.errors = error;
                res.redirect('/');
            }
            else {
                req.session.errors = errors;
                bcrypt.hash(req.body.password, 10)
                .then(hashed_password => {
                    console.log(hashed_password);
                    // This is where we would add the user from req.body to the database.
                    // create a new User with the name and age corresponding to those from req.body
                    var user = new User({email: req.body.email, firstName: req.body.first, lastName: req.body.last, passwordHash: hashed_password, date: req.body.birthday});
                    user.save(function(err) {
                        res.redirect('/');
                    })
                })
                .catch(error => {
                    
                });
            }
        })
    }
})

// Login Request 
app.post('/login', function(req, res) {
    console.log("POST DATA", req.body);
    User.findOne({email: req.body.email}, function(err, user){
        if (!user) {
            var error = {
                login: "Invalid Login"
            }
            req.session.errors = error;
            res.redirect('/');
        }
        else {
            bcrypt.compare(req.body.password, user.passwordHash)
            .then( result => {
                if (result) {
                    console.log("success");
                }
                else {
                    var error = {
                        login: "Invalid Login"
                    }
                    req.session.errors = error;
                }
                res.redirect('/')
            })
            .catch( error => {
                
            })
        }
    })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})