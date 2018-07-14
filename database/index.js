// import mongoose module
var mongoose = require('mongoose');

// Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/';

// set up mongoose connection to the mongoDB 
mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB IS WORKING');
});

let pokemonSchema = mongoose.Schema({
  nameOfPokemon: String,
  urlOfImage: String
})

let save = (pokemon, callback) => {
  let newFav = new pokemonSchema({
    nameOfPokemon: pokemon.currentfavPokemon,
    urlOfImage: pokemon.favPokemonUrl
  })
  newFav.save();
}
let fetch = () => {

}

var Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports.save = save;
module.exports.fetch = fetch;




