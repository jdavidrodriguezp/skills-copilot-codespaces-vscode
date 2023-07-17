// Create web server
var express = require('express');
// Create app
var app = express();
// Create port
var port = process.env.PORT || 3000;
// Create middleware
app.use(express.static(__dirname + '/public'));
// Start server
app.listen(port, function() {
    console.log('Server started on port ' + port);
});
// Create routes
app.get('/', function(req, res) {
    res.send('Hello Express');
});
app.get('/about', function(req, res) {
    res.send('About page');
});
app.get('/bad', function(req, res) {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});
// Create middleware
app.use(function(req, res, next) {
    res.render('maintenance.hbs');
});
// Create helper
hbs.registerHelper('getCurrentYear', function() {
    return new Date().getFullYear();
});
// Create helper
hbs.registerHelper('screamIt', function(text) {
    return text.toUpperCase();
});
// Create route
app.get('/', function(req, res) {
    res.render('home.hbs', {
        pageTitle: 'Home Page', 
        welcomeMessage: 'Welcome to my website'
    });
});
// Create route
app.get('/about', function(req, res) {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});
// Create route
app.get('/projects', function(req, res) {
    res.render('projects.hbs', {
        pageTitle: 'Projects'
    });
});
// Create route
app.get('/bad', function(req, res) {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});
// Create helper
hbs.registerHelper('getCurrentYear', function() {
    return new Date().getFullYear();
});
// Create helper
hbs.registerHelper('screamIt', function(text) {
    return text.toUpperCase();
});
// Create app
var app = express();
// Create port
var port = process.env.PORT || 3000;
// Create middleware
app.use(express.static(__dirname + '/public'));
// Start server
app.listen(port, function() {
    console.log('Server started on port ' + port);
});
// Create route
app.get('/', function(req, res) {
    res.render('home.hbs', {
        pageTitle: 'Home Page', 
        welcomeMessage: 'Welcome to my website'
    });
});

// Create route
app.get('/about', function(req, res) {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});
// Create route
app.get('/projects', function(req, res) {
    res.render('projects.hbs', {
        pageTitle: 'Projects'
    });
});

// Create route
app.get('/bad', function(req, res) {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});
// Create helper
hbs.registerHelper('getCurrentYear', function() {
    return new Date().getFullYear();
});
// Create helper
hbs.registerHelper('screamIt', function(text) {
    return text.toUpperCase();
});


