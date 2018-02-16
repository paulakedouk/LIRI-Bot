// Hidden API keys
require('dotenv').config();
var inquirer = require('inquirer');
var getTweets = require('./twitter');

var runApp = function() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'input',
        message: 'Choose one of these:',
        choices: ['my-tweets', 'spotify-this-song', 'do-what-it-says', 'movie-this']
      }
    ])
    .then(function(value) {
      console.log(value.input);

      if (value.input === 'my-tweets') {
        getTweets(runApp);
      }
    });
};
runApp();

function getSong() {
  spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    console.log(data);
    if (err) {
      console.log('Error occurred: ' + err);
      return;
    }

    // Do something with 'data'
  });
}
