'use strict';
var http = require('http');
var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger("short"));

app.use(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world!");
})

http.createServer(app).listen(3000);