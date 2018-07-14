import React from 'react';
import ReactDOM from 'react-dom';
import NavbarComponent from './NavbarComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import PokemonChartComponent from './PokemonChartComponent.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favorites: [],
      renderFavoritesComponent: false,
    }
    this.handleUserFavoriteClick = this.handleUserFavoriteClick.bind(this);
    this.deletePokemon = this.deletePokemon.bind(this);
  }

  handleUserFavoriteClick(e) {
    e.preventDefault();

    axios.get('/favorite', {})
    .then( (res) => {
      this.setState({
        favorites: res.data,
        renderFavoritesComponent: true,
      })
    })
    .catch( (res) => {
      console.log('sending ERR for GET req to express');
    })
  }

  deletePokemon(e, index){
    console.log('Pokemon Selected for Deletion: ', e.target);

    let copyOfFavoriteArrays = this.state.favorites.slice();
    let name = copyOfFavoriteArrays[index].nameOfPokemon;    
    
    copyOfFavoriteArrays.splice(index, 1);
    this.setState({
      favorites: copyOfFavoriteArrays
    })

      axios.post('/delete', { nameOfPokemon: name } )
      .then( (res) => {
        console.log('Axios post req to express, ', res);
      })
      .catch( (res) => {
        console.log('Axios post req to delete ERR ', res);
      })
  }

  

  render(){
    return (
      <div>
        <NavbarComponent handleUserFavoriteClick={this.handleUserFavoriteClick}/>
        <HeaderComponent />
        <PokemonChartComponent
          deletePokemon={this.deletePokemon} 
          handleUserFavoriteClick={this.state.handleUserFavoriteClick}
          renderFavoritesComponent={this.state.renderFavoritesComponent}
          favoritePokemonArr={this.state.favorites}/>
      </div>
    ) 
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;