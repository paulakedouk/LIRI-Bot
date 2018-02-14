// Hidden API keys
require('dotenv').config();

// required to import and store it in a variable
var keys = require('./keys.js');
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

var userInput = process.argv[2];
