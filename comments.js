// Create web server
var express = require('express');
var app = express();

// Create a route for the application
app.get('/', function(req, res) {
    res.send('Hello world');
});

// Listen for incoming requests
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});