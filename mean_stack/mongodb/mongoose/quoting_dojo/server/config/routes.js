module.exports = function(app){
    var quotes = require('../controllers/quotes.js')
    // Root Request
    app.get('/', function(req, res) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        quotes.index(req, res);
    })

    // Add User Request 
    app.post('/quotes', function(req, res) {
        quotes.create(req, res);
    })

    app.get('/quotes', function(req, res) {
        quotes.destroy(req, res);
    })
}  