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

// Require Mongoose
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost:/message_board');
// Use native promises
// mongoose.Promise = global.Promise;

var MessageBoardSchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true},
    comments: [],
}, {timestamps: true});
mongoose.model('MessageBoard', MessageBoardSchema);
var MessageBoard = mongoose.model('MessageBoard');

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
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    MessageBoard.find(function (err, messageBoard) {
        if (err) 
            return console.error(err);
        console.log(messageBoard);
        res.render('index', {messageBoard: messageBoard});
    })
})

// Add Message Request 
app.post('/postMessage', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    // create a new User with the name and age corresponding to those from req.body
    var messageBoard = new MessageBoard({name: req.body.name, message: req.body.message});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    messageBoard.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
            for(var key in err.errors){
                req.flash('MessageBoard', err.errors[key].message);
            }
            res.redirect('/');
        } else { 
            // else redirect to the root route
            res.redirect('/');
        }
    })
})

// Add Comment Request 
app.post('/postComment', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    // create a new User with the name and age corresponding to those from req.body
    var comment = {
        name: req.body.name, 
        comment: req.body.comment
    };
    console.log(comment);
    console.log(req.body.postID);
    MessageBoard.findOne({_id: req.body.postID}, function(err, message){
        message.comments.push(comment);
        message.save(function(err){
            console.log("successful");
            // if save was successful awesome!
        })
    })
    res.redirect('/')
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})