import React from 'react';
import axios from 'axios';

class NavbarItemsComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className='navbar-items'>
        <li>FAQ</li>
        <li onClick={(e) => this.props.handleUserFavoriteClick(e)}>Favorites</li>
        <li>Pokemon</li>
      </ul>
    )
  }
}

export default NavbarItemsComponent;