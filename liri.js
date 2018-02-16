require('dotenv').config();
var inquirer = require('inquirer');
var getTweets = require('./twitter');
var getSpotify = require('./spotify');
var getMovie = require('./omdb');
var getRandom = require('./random');
var fs = require('fs');

var userInput = process.argv;

var runApp = function() {
  if (userInput[2] === 'my-tweets') {
    getTweets(runApp);
  } else if (userInput[2] === 'spotify-this-song') {
    getSpotify(runApp);
  } else if (userInput[2] === 'movie-this') {
    getMovie(runApp);
  } else if (userInput[2] === 'do-what-it-says') {
    getRandom(runApp);
  } else {
    console.log('Please choose a LIRI command.');
  }
};

runApp();
