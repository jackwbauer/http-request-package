var request = require('request');
var fs = require('fs');

var requestOptions = {
  host : 'sytantris.github.io',
  path : '/http-examples/future.jpg'
};

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    console.log('Status Message:', response.statusCode);
    console.log('Content Type:', response.headers['content-type']);
    console.log('Downloading image...');
  })
  .on('end', () => console.log('Download complete.'))
  .pipe(fs.createWriteStream('./future.jpg'));