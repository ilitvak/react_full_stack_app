// require express module
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const axios = require('axios');
const save= require('../database/');
const fetch = require('../database/')

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

app.post('/favorite', (req, res) => {
  let pokemon = req.body;
  console.log('Posting to Express from client for favs ', pokemon);

  save.save(pokemon);
  res.send();
})


// if my app gets a get request for favorites
app.get('/favorite', (req, res) => {
  fetch.fetch((err, dataRecieved) => {
    if(err) res.send(err)
    else {
      console.log('Data RECIEVED: ', dataRecieved);
      res.send(dataRecieved)
    }
  });
})


// use app.get later

// listen to port 5000
app.listen(5000, () => {
  console.log('Dev app listening on port: 5000');
})

