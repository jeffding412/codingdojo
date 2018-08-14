module.exports = function() {
    // Require Mongoose
    var mongoose = require('mongoose');
    // This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
    //   our db in mongodb -- this should match the name of the db you are going to use for your project.
    mongoose.connect('mongodb://localhost:/quoting_dojo');
    // Use native promises
    // mongoose.Promise = global.Promise;
    return mongoose;
}