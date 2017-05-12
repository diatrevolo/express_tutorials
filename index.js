'use strict';
var http = require('http');
var express = require('express');
var app = express();

app.use(function(req, res, next) {
    var minute = (new Date() ).getMinutes();
    if ( (minute % 2) === 0 ) {
        next();
    } else {
        res.statusCode = 403;
        res.end("Not authorized.");
    }
});

app.use(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end('Secret info: the password is "swordfish!');
});

http.createServer(app).listen(3000);