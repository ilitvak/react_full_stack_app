import React from 'react';
import UserInputComponent from './UserInputComponent.jsx';
import PokemonBoxComponent from './PokemonBoxComponents.jsx';
import axios from 'axios';

class PokemonChartComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      PokemonArr: [],
      currentPokemon: '',
      currentPokemonUrl: ''
    }
    
    this.makeAxiosCall = this.makeAxiosCall.bind(this);
  }


  makeAxiosCall(userInput){
    axios.post('/', { userInput })
    .then((response) => {
      console.log('Pokemon Name: ', response.data.name);
      console.log('Response data: ', response.data);

      // makes copy of original array to not cause issues with state
      let searchPokemon = this.state.PokemonArr.slice();
      let currentPokemonImageUrl = response.data.sprites.front_default;

      // pushes currently searched pokemon into copied array
      searchPokemon.push(response.data.name);
      console.log('SearchPokemonArr: ', searchPokemon);

      this.setState({
        PokemonArr: searchPokemon,
        currentPokemon: searchPokemon[searchPokemon.length - 1],
        currentPokemonUrl: currentPokemonImageUrl
      }, () => console.log(
      `Curr Pokemon: ${this.state.currentPokemon}
      | ArrOfPokemon: ${this.state.PokemonArr} | CurrPokemonUrl: ${this.state.currentPokemonUrl}`)) 

    })
    .catch((err) => {
      console.log('Err in post request ', err);
    })
  }
  //methods go here
  
  render(){
    return(
      <section className='main-pokemon-container'>
        <UserInputComponent makeAxiosCall={this.makeAxiosCall} />
        <PokemonBoxComponent 
          currentPokemon={this.state.currentPokemon}
          currentPokemonUrl={this.state.currentPokemonUrl}/>
      </section>
    )
  }
 
}

export default PokemonChartComponent;