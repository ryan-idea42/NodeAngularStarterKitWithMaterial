var express = require('express');
var path = require('path');
var app = express();
var api = require('./api/api');
var appMiddleware = require('./middleware/appMiddleware')(app);

// Configure the API
app.use('/api', api);

// Configure the bundles
app.get("/dist/js", function (req, res){
    res.sendFile(path.resolve(__dirname + '/../dist/js/code.js'));
})
app.get("/dist/css", function (req, res){
    res.sendFile(path.resolve(__dirname + '/../dist/style/site.min.css'));
})

// Return the angular app
app.use(express.static(path.resolve(__dirname + '/../public')));
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

// Start the app
app.listen(8080);
console.log('Application started on port 8080');