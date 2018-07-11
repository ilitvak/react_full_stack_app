// require express module
var express = require('express');
var path = require('path');
// app is an instance of express
var app = express();

// we will now add a route and the '/' is the endpoint and how to respond
// to client requests aka GET or POST requests etc...
app.use(express.static(__dirname + '/../build/'));

// app.get('/', (req, res)=>{
//   res.sendFile(path.resolve(__dirname + '/../index.html'));
// })

// listen to port 5000
app.listen(5000, () => {
  console.log('Dev app listening on port: 5000');
})

