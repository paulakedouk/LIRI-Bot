var fs = require('fs');

var getRandom = function() {
  fs.readFile('random.txt', 'utf8', function(error, data) {
    if (error) {
      return console.log(error);
    }
    console.log(data);
  });
};

module.exports = getRandom;
