var keys = require('./keys.js');
var request = require('request');

var userInput = process.argv;
var movie;

function getMovie() {
  movie = userInput[3];
  if (movie === undefined) {
    movie = 'Mr.Nobody,';
  } else {
    if (userInput.length > 4) {
      var queryArr = [];
      for (var i = 3; i < userInput.length; i++) {
        queryArr.push(userInput[i]);
        console.log(queryArr);
      }
    }
  }
  // Request to the OMDB API
  request('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=2d344418', function(error, response, body) {
    // If the request is successful
    if (!error && response.statusCode === 200) {
      // Parse the body of the site and recover
      console.log('Title: ' + JSON.parse(body).Title);
      console.log('Release date: ' + JSON.parse(body).Released);
      console.log('IMDB rating: ' + JSON.parse(body).imdbRating);
      console.log('Rotten Tomatoes rating: ' + JSON.parse(body).Ratings[1]['Value']);
      console.log('Country origin: ' + JSON.parse(body).Country);
      console.log('Language: ' + JSON.parse(body).Language);
      console.log('Plot: ' + JSON.parse(body).Plot);
      console.log('Actors: ' + JSON.parse(body).Actors);
    } else {
      return console.log(error, ' ', response.statusCode);
    }
  });
}

module.exports = getMovie;
