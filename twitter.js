// required to import and store it in a variable
var keys = require('./keys.js');
var request = require('request');
var Twitter = require('twitter');

var client = new Twitter(keys.twitter);

var userInput = process.argv;

function getTweets() {
  var handle = '';

  if (userInput.length > 4) {
    var queryArr = [];
    for (var i = 3; i < userInput.length; i++) {
      queryArr.push(userInput[i]);
      handle = queryArr.join('');
      //   console.log(handle);
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
