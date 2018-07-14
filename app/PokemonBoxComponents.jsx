import React from 'react';

class PokemonBoxComponent extends React.Component {
  constructor(props){
    super(props);
    console.log('PokemonBox Props: ', props);
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
    if(this.props.renderPokemonBoxComponent){
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
                <li>Hp: {this.props.currentPokemonHp}</li>
                <li>Atk: {this.props.currentPokemonAtk}</li>
                <li>Def: {this.props.currentPokemonDef}</li>
                {this.props.currentPokemonAbilities.map((ability) => {
                  return <li>Skill: {ability.ability.name} </li>
                })}
              </ul>
            </div>
          </div>
        </div>
      )
    } else return null;
  }
}

export default PokemonBoxComponent;