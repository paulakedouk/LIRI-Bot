// Hidden API keys
require('dotenv').config();
var inquirer = require('inquirer');
var getTweets = require('./twitter');
var getSpotify = require('./spotify');

var userInput = process.argv;

var runApp = function() {
  if (userInput[2] === 'my-tweets') {
    console.log('my-tweets');
    getTweets(runApp);
  } else if (userInput[2] === 'spotify-this-song') {
    console.log('spotify-this-song');
    getSpotify(runApp);
  } else if (userInput[2] === 'movie-this') {
    console.log('movie-this');
  } else if (userInput[2] === 'do-what-it-says') {
    console.log('do-what-it-says');
  } else {
    console.log('try again');
  }
};
runApp();
