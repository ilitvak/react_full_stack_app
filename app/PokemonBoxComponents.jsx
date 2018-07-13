import React from 'react';

class PokemonBoxComponent extends React.Component {
  constructor(props){
    console.log('Props being passed down: ', props);
    super(props);

  }

  render(){
    return(
      <div className='pokemon-grid-container'>
        <div className='grid-2'>
          <h2 className='title'>{this.props.currentPokemon}</h2>
          <img 
            src={`${this.props.currentPokemonUrl}`} 
            alt="" 
            onClick={(e) => this.props.favoritePokemon(e)}/>
        </div>
        <div className='grid-2'>
          <h2 className='title'>Pokemon Stats</h2>
          <div className='pokemon-attributes'>
            <ul>
              <li>HP: {this.props.currentPokemonHp}</li>
              <li>ATK: {this.props.currentPokemonAtk}</li>
              <li>DEF: {this.props.currentPokemonDef}</li>
            </ul>
          </div>
        </div>
      </div>
      
    )
  }
}

export default PokemonBoxComponent;