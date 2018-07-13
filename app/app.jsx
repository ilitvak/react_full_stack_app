import React from 'react';
import ReactDOM from 'react-dom';
import NavbarComponent from './NavbarComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import PokemonChartComponent from './PokemonChartComponent.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
  
    }
    // write bindings for methods
    this.handleUserNavItemClick = this.handleUserNavItemClick.bind(this);
  }

  // methods go here
  handleUserNavItemClick(e) {
   
  }

  render(){
    return (
      <div>
        <NavbarComponent />
        <HeaderComponent />
        <PokemonChartComponent />
      </div>
    ) 
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;