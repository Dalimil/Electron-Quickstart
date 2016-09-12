"use strict";

const express = require('express');
const app = express();

let counter = 0;

app.get('/', function (req, res) {
  res.send('Hello World - Express.js<br>' + counter +
  	"<br><a href='/counter'>Increment</a>");
});

app.get('/counter', function (req, res) {
	counter += 1;
	console.log(counter);
	res.redirect('/');
});

module.exports = app;
