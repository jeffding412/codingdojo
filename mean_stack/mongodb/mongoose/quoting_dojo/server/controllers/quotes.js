const mongoose = require('mongoose'),
Quote = mongoose.model('Quote')
// All necessary requires, such as the Quote model.
module.exports = {
    index: function(r3eq, res) {
    	res.render('index');
    },
    create: function(req, res) {
    	console.log("POST DATA", req.body);
        // This is where we would add the user from req.body to the database.
        // create a new User with the name and age corresponding to those from req.body
        var quote = new Quote({name: req.body.name, quote: req.body.quote});
        // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        quote.save(function(err) {
            // if there is an error console.log that something went wrong!
            if(err) {
                for(var key in err.errors){
                    req.flash('quotes', err.errors[key].message);
                }
                res.redirect('/');
            } else { 
                // else redirect to the quotes route
                res.redirect('/quotes');
            }
        })
    },
    destroy: function(req, res) {
    	// This is where we will retrieve the quotes from the database and include them in the view page we will be rendering.
        Quote.find(function (err, quotes) {
            if (err) 
                return console.error(err);
            console.log(quotes);
            res.render('quotes', {quotes: quotes});
        })
    }
};