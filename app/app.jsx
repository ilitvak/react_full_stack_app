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

  render(){
    return (
      <div>
        <NavbarComponent handleUserFavoriteClick={this.handleUserFavoriteClick}/>
        <HeaderComponent />
        <PokemonChartComponent 
          handleUserFavoriteClick={this.state.handleUserFavoriteClick}
          renderFavoritesComponent={this.state.renderFavoritesComponent}
          favoritePokemonArr={this.state.favorites}/>
      </div>
    ) 
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;