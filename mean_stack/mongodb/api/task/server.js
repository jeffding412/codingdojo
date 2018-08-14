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
mongoose.connect('mongodb://localhost:/tasks');
// Use native promises
// mongoose.Promise = global.Promise;

var TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
}, {timestamps: true});
mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task');

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());

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
app.get('/tasks', function(req, res) {
    Task.find({}, function(err, tasks) {
        if(err){
            console.log("Returned error", err);
            // respond with JSON
            res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
            res.json(tasks)
        }
    })
})

app.get('/tasks/:id', function(req,res) {
    Task.findOne({_id: req.params.id}, function(err, task) {
        res.json(task);
    })
})

app.post('/tasks', function(req,res) {
    var task = new Task({title: req.body.title, description: req.body.description, completed: req.body.completed});
    task.save(function(err) {
        res.redirect('/tasks');
    })
})

app.put('/tasks/:id', function(req,res) {
    Task.findOne({_id: req.body.id}, function(err, task){
        task.title = req.body.title;
        task.description = req.body.description;
        task.completed = req.body.completed;
        task.save(function(err){
            // if save was successful awesome!
            res.json(task);
        })
    })
})

app.delete('/tasks/:id', function(req,res) {
    Task.remove({_id: req.params.id}, function(err) {
        res.redirect('/tasks');
    })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})