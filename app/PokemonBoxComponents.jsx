import React from 'react';

class PokemonBoxComponent extends React.Component {
  constructor(props){
    console.log('Props being passed down: ', props);
    super(props);
    // state goes here if any
    this.state = {
      clicked: false
    }
    // bind methods here
  }

  // write methods here

  render(){
    return(
      <div className='pokemon-grid-container'>
        <div className='grid-2'>
          <h2 className='title'>{this.props.currentPokemon}</h2>
          <img src={`${this.props.currentPokemonUrl}`} alt=""/>
        </div>
        <div className='grid-2'>
          <h2 className='title'>Pokemon Stats</h2>
        </div>
      </div>
      
    )
  }
}

export default PokemonBoxComponent;