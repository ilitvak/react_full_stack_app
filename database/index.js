// import mongoose module
var mongoose = require('mongoose');

// Set up default mongoose connection
//mongodb://<dbuser>:<dbpassword>@ds135421.mlab.com:35421/mvp-pokemon
//var mongoDB = 'mongodb://127.0.0.1/pokemon';
var mongoDB = 'mongodb://user:supermariokart24@ds135421.mlab.com:35421/mvp-pokemon';

// set up mongoose connection to the mongoDB 
mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB IS WORKING');
});

let pokemonSchema = mongoose.Schema({
  nameOfPokemon: {type: String, unique: true},
  urlOfImage: String
})

var Pokemon = mongoose.model('Pokemon', pokemonSchema);

let save = (pokemon) => {
  // save a new instance / collection

  let newFav = new Pokemon({
    nameOfPokemon: pokemon.currentfavPokemon,
    urlOfImage: pokemon.favPokemonUrl
  })
  newFav.save();
}

let deletePokemonItem = (pokemonToDelete) => {
  Pokemon.find(pokemonToDelete).remove().exec();
}

let fetch = (callback) => {
  Pokemon.find().sort({nameOfPokemon: -1}).limit(10).exec( (err, data) =>  {
    if(err) callback(err);
    else {
      callback(null, data)
    }
  })
}


module.exports.save = save;
module.exports.fetch = fetch;
module.exports.deletePokemonItem = deletePokemonItem;




