console.log('mongoose.js works');

const mongoose = require('mongoose'),
          path = require('path'),
            fs = require('fs');

module.exports = function(db_uri){
    mongoose.connect(`mongodb://localhost:27017/${db_uri}`, { useNewUrlParser: true });
    
    var models_path = path.join(__dirname, './../models');
    
    fs.readdirSync(models_path).forEach(function(file) {
        if(file.endsWith('.js')) {
            require(models_path + '/' + file);
        }
    });
}