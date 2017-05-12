'use strict';
var http = require('http');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var app = express();

app.use(logger("short"));

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", function(req, res) {
    res.end("Welcome to my homepage!");
});

app.get("/about", function(req, res) {
    res.end("Welcome to the about page!");
});

app.get("/weather", function(req, res) {
    res.end("The current weather is NICE!");
});

app.use(function(req, res) {
    res.statusCode = 404;
    res.end("FOE OH FOE");
});

http.createServer(app).listen(3000);