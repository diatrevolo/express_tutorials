'use strict';
var http = require('http');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var app = express();

var EVIL_IP = "123.45.67.89";

app.use(logger("short"));

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use(function(req, res) {
    if (req.ip === EVIL_IP) {
        res.status(401).send('Not allowed!');
    } else {
        next();
    }
});

app.get("/", function(req, res) {
    res.end("Welcome to my homepage!");
});

app.get("/about", function(req, res) {
    res.end("Welcome to the about page!");
});

app.get("/weather", function(req, res) {
    res.end("The current weather is NICE!");
});

app.get("/hello/:who", function(req, res) {
    res.end("Hello, " + req.params.who + ".");
});

app.get("/expressjs", function(req, res) {
    res.redirect("http://expressjs.com");
});

app.get("/getPdf", function(req, res) {
    res.sendFile("/Users/rogoenaga/Downloads/Claire_Ortiz_Hill_and_Guillermo_E._Rosad.pdf");
});

app.use(function(req, res) {
    res.statusCode = 404;
    res.end("FOE OH FOE");
});

http.createServer(app).listen(3000);