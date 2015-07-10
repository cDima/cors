console.log("starting server")
var express = require('express')
var app = express();
var http = require('http');

var request = require('request');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Welcome.')
})

app.get('/api*', function(req, res) {
  //response.send('Welcome to api');
  //modify the url in any way you want
  var newurl = 'http://colourlovers.com' + req.url;
  //console.log("requesting " + newurl);//ex: http://colourlovers.com/api/palettes/top
  request(newurl).pipe(res);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
