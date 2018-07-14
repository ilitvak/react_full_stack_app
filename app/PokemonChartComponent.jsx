import React from 'react';
import UserInputComponent from './UserInputComponent.jsx';
import PokemonBoxComponent from './PokemonBoxComponents.jsx';
import FavoritePokemon from './FavoritePokemon.jsx'
import axios from 'axios';

class PokemonChartComponent extends React.Component {
  constructor(props){
    super(props);
    console.log('PokemonChart Props: ', props);

    this.state = {
      PokemonArr: [],
      currentPokemon: '',
      currentPokemonUrl: '',
      currentPokemonAtk: '',
      currentPokemonDef:'',
      currentPokemonhp: '',
      currentPokemonAbilities: [],
      renderPokemonBoxComponent: false
    }
    
    this.makeAxiosCall = this.makeAxiosCall.bind(this);
    this.favoritePokemon = this.favoritePokemon.bind(this);
  }

  favoritePokemon(e){
    e.preventDefault();

    let currentfavPokemon = this.state.currentPokemon;
    let favPokemonUrl = this.state.currentPokemonUrl;

    axios.post('/favorite', {currentfavPokemon, favPokemonUrl})
    .then((res) => {
      console.log('sending your favorite pokemon to express: ', res );
      console.log('sending your favorite pokemons url to express' );

    })
    .catch((res) => {
      console.log('ERROR sending your favorite pokemon to express ', res);
    })
    console.log('You have selected your favorite pokemon: ', this.state.currentPokemon);
  }


  makeAxiosCall(userInput){
    axios.post('/', { userInput })
    .then((response) => {
      console.log('Pokemon Name: ', response.data.name);
      console.log('Response data: ', response.data);

      // makes copy of original array to not cause issues with state
      let searchPokemon = this.state.PokemonArr.slice();
      let currentPokemonImageUrl = response.data.sprites.front_default;
      let pokemonAtk = response.data.stats[4].base_stat;
      let pokemonDef = response.data.stats[3].base_stat;
      let pokemonHP = response.data.stats[5].base_stat;
      let pokemonAbilities = response.data.abilities;
      console.log('POKEMON ABILITIES BITCH: ', pokemonAbilities);
      // pushes currently searched pokemon into copied array
      searchPokemon.push(response.data.name);
      console.log('SearchPokemonArr: ', searchPokemon);

      this.setState({
        PokemonArr: searchPokemon,
        currentPokemon: searchPokemon[searchPokemon.length - 1],
        currentPokemonUrl: currentPokemonImageUrl,
        currentPokemonAtk: pokemonAtk,
        currentPokemonDef: pokemonDef,
        currentPokemonhp: pokemonHP,
        currentPokemonAbilities: pokemonAbilities,
        renderPokemonBoxComponent: true
      }, () => console.log(
      `Curr Pokemon: ${this.state.currentPokemon}
      | ArrOfPokemon: ${this.state.PokemonArr} | CurrPokemonUrl: ${this.state.currentPokemonUrl}`)) 

    })
    .catch((err) => {
      console.log('Err in post request ', err);
    })
  }
  
  render(){
    return(
      <section className='main-pokemon-container'>
        <UserInputComponent 
          makeAxiosCall={this.makeAxiosCall} />
        <PokemonBoxComponent
          renderPokemonBoxComponent={this.state.renderPokemonBoxComponent}
          favoritePokemonArr={this.props.favoritePokemonArr}
          favoritePokemon={this.favoritePokemon}
          currentPokemon={this.state.currentPokemon}
          currentPokemonAbilities={this.state.currentPokemonAbilities}
          currentPokemonUrl={this.state.currentPokemonUrl}
          currentPokemonAtk={this.state.currentPokemonAtk}
          currentPokemonDef={this.state.currentPokemonDef}
          currentPokemonHp={this.state.currentPokemonhp}/>
        <FavoritePokemon 
          deletePokemon={this.props.deletePokemon}
          renderFavoritesComponent={this.props.renderFavoritesComponent}
          favoritePokemonArr={this.props.favoritePokemonArr} />
      </section>
    )
  }
 
}

export default PokemonChartComponent;