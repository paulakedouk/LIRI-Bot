// required to import and store it in a variable
var keys = require('./keys.js');
var request = require('request');
var Twitter = require('twitter');

var client = new Twitter(keys.twitter);

var userInput = process.argv;

if (userInput[2] === 'my-tweets') {
  getTweets();
  //create a function to get tweets
} else if (userInput[2] === 'spotify-this-song') {
  console.log('spotify-this-song');
} else if (userInput[2] === 'movie-this') {
  console.log('movie-this');
} else if (userInput[2] === 'do-what-it-says') {
  console.log('do-what-it-says');
} else {
  console.log('try again');
}

function getTweets() {
  var handle = '';

  if (userInput.length > 4) {
    var queryArr = [];
    for (var i = 3; i < userInput.length; i++) {
      queryArr.push(userInput[i]);
      handle = queryArr.join('');
      console.log(handle);
    }
  } else {
    handle += userInput[3];
  }

  var params = { screen_name: userInput[3] };
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      if (tweets.length > 20) {
        for (var i = 0; i < 20; i++) {
          console.log(tweets[i].created_at);
          console.log(tweets[i].text);
        }
      } else if (tweets.length === 0) {
        console.log('There is no tweets to show you!');
      } else {
        for (var i = 0; i < tweets.length; i++) {
          console.log(tweets[i].created_at);
          console.log(tweets[i].text);
        }
      }
    } else {
      console.log('Sorry, please try again!');
    }
  });
}

module.exports = getTweets;
