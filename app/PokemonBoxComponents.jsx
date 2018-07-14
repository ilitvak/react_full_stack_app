import React from 'react';
import FavoritePokemon from './FavoritePokemon.jsx';

class PokemonBoxComponent extends React.Component {
  constructor(props){
    console.log('PokemonBox Props: ', props);
    super(props);
    this.state = {
      active: false
    }
    this.selectPokemonAndFavoritePokemon = this.selectPokemonAndFavoritePokemon.bind(this);
  }

  selectPokemonAndFavoritePokemon(e){
    e.preventDefault();
    this.setState({
      active: !this.state.active
    })
    this.props.favoritePokemon(e);
  }

  render(){
    return(
      <div className='pokemon-grid-container'>
        <div className='grid-2'>
          <h2 className='title'>{this.props.currentPokemon}</h2>
          <img 
            className={ this.state.active ? 'item-favorited' : '' }
            src={`${this.props.currentPokemonUrl}`} 
            alt="" 
            onClick={(e) => this.selectPokemonAndFavoritePokemon(e)}/>
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
        <FavoritePokemon favoritePokemonArr={this.props.favoritePokemonArr} />
      </div>
    )
  }
}

export default PokemonBoxComponent;