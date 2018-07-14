import React from 'react';
import NavbarItemsComponent from './NavbarItemsComponent.jsx';
// class based component
class NavbarComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='navbar-container'>
        <NavbarItemsComponent handleUserFavoriteClick = {this.props.handleUserFavoriteClick} />
      </div>
    )
  }
}

export default NavbarComponent;