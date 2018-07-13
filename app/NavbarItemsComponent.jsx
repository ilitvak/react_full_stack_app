import React from 'react';

class NavbarItemsComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className='navbar-items'>
        <li>FAQ</li>
        <li>PokeDex</li>
        <li>Pokemon</li>
      </ul>
    )
  }
}

export default NavbarItemsComponent;