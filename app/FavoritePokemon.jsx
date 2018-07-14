import React from 'react';

const FavoritePokemon = ( {favoritePokemonArr} ) => {
  console.log('Favorite Pokemon are: ', favoritePokemonArr);
  return(
    <div>
      <ul>
        {favoritePokemonArr.map((pokemon, i) => 
            <li key={i}>
              <p>{pokemon.nameOfPokemon}</p>
              <img src={`${pokemon.urlOfImage}`} alt=""/>
            </li>
        )}
      </ul>
    </div>
  )
}

export default FavoritePokemon;