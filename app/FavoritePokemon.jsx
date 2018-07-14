import React from 'react';

const FavoritePokemon = ( {favoritePokemonArr, renderFavoritesComponent} ) => {
  console.log('Favorite Pokemon are: ', favoritePokemonArr, renderFavoritesComponent);
  if(renderFavoritesComponent){
    return(
      <div className='favorite-pokemon-container'>
        <h2>Favorite Pokemon</h2>
        <ul>
          {favoritePokemonArr.map((pokemon, i) => 
              <li key={i} className='fav-pokemon-li'>
                <p>{pokemon.nameOfPokemon}</p>
                <img src={`${pokemon.urlOfImage}`} alt=""/>
              </li>
          )}
        </ul>
      </div>
    )
  } else {
    return null;
  }
}

export default FavoritePokemon;