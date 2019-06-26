  // Node.js notation for importing packages
var express = require('express');

// Spin up a server
var app = express();

// Serve static files from the main build directory
//app.use(express.static(__dirname + '/htdocs/es6-bundled'));
app.use(express.static(__dirname + '/htdocs/ionic'));

// Weather Fullscreen Page
app.get('/weather', function(req, res){
    //res.sendFile("/htdocs/es6-bundled/src/space-weather.html", {root: '.'});
    res.sendFile("/htdocs/space-weather.html", {root: '.'});
}); 

// Render index.html on the main page, specify the root
app.get('*', function(req, res){
    //res.sendFile("/htdocs/es6-bundled/index.html", {root: '.'});
    res.sendFile("/htdocs/ionic/index.html", {root: '.'});
});



app.listen(process.env.PORT);

console.log('Listening for contact on Space Port: ');
console.log(process.env.PORT);