// require express module
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const axios = require('axios');

// app is an instance of express
var app = express();

app.use(bodyparser.json());

// we will now add a route and the '/' is the endpoint and how to respond
// to client requests aka GET or POST requests etc...
app.use(express.static(__dirname + '/../build/'));

app.post('/', (req, res) => {
  let userSearch = req.body.userInput;
  console.log('Express: Post Req has input: ', userSearch);

  // send a get request using axios to the api
  axios.get(`http://pokeapi.co/api/v2/pokemon/${userSearch}`, {})
  .then((responseFromApi) => {
    console.log('GET AXIOS: ', responseFromApi.data);
    res.send(responseFromApi.data)
    //console.log('The response from Pokemon Api: ', res);
  })
  .catch((err) => {
    console.log('Error sending GET req to Pokemon Api', err);
  })
})

// use a post method to send the users query to an API.
// http://pokeapi.co/api/v2/pokemon/1/
// app.post 


// use app.get later

// listen to port 5000
app.listen(5000, () => {
  console.log('Dev app listening on port: 5000');
})

