var http = require('http');
var request = require('request');

function handleError(err) {
  console.error("Caught exception:", err, err.stack);
  this.end();
  this.emit("cleanup");
}

console.log("Node app is running at localhost:" + (process.env.PORT || 5000));

http.createServer(function (req, res) {
  
  // Error handling:
  var errorHandler = handleError.bind(res)
  process.on("uncaughtException", errorHandler);
  res.on("cleanup", function() { process.removeListener("uncaughtException", errorHandler); });

  // all requests with argument 'path': http://localhost:5000/?path=http://quotesonslides.com/images/Innovation.jpg
  if(req.url.match(/path=(.*)/)) {
    res.setHeader("access-control-allow-origin", "*"); 
    request.get(req.url.match(/path=(.*)/)[1]).pipe(res);
  }else{
    res.statusCode = 404;

    res.end("More info at https://github.com/cDima/cors");
  }
}).listen(process.env.PORT || 5000);
