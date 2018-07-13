import React from 'react';
import NavbarItemsComponent from './NavbarItemsComponent.jsx';
// class based component
class NavbarComponent extends React.Component {
  constructor(props){
    super(props);

    // bind here
  }

  // methods here

  render(){
    return(
      <div className='navbar-container'>
        <NavbarItemsComponent />
      </div>
    )
  }
}

export default NavbarComponent;