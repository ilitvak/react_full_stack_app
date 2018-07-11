import React from 'react';
import ReactDOM from 'react-dom';
import NavbarComponent from './NavbarComponent.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
    // write bindings for methods
    this.handleUserNavItemClick = this.handleUserNavItemClick.bind(this);
  }

  // methods go here
  handleUserNavItemClick(e) {
    e.preventDefualt();
    console.log("Nav Item was clicked");
  }

  render(){
    return (
      <div>
        <h2>HELLO THERE</h2>
        <NavbarComponent />
      </div>
    ) 
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;