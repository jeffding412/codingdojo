console.log('server.js works');

const express = require('express'),
           bp = require('body-parser'),
          app = express(),
         port = 3333;

app.use(express.static(__dirname + "/client/tasks/dist/tasks"));
app.use(bp.json());

require('./server/config/mongoose.js')('bettertasks');
require('./server/config/routes.js')(app);

app.listen(port, function(){
    console.log(`running on port ${port}`);
});