import React from 'react';

class UserInputComponent extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      userInput: '',
    }

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
    // bind methods here.
  };

  handleUserInput(input){
    this.setState({
      userInput: input
    }, () => console.log('User input: ', this.state.userInput))
  }

  handleUserSubmit(e, userInput){
    if(e.key === 'Enter'){      
      e.preventDefault();
      // place axios request here
      // makeAxiosCall
      this.props.makeAxiosCall(userInput);
    }
  }

  render(){
    return(
      <form action=""
        onKeyDown={(e) => this.handleUserSubmit(e, this.state.userInput)}>
        <input 
          onChange={(e) => this.handleUserInput(e.target.value)}
          className='pokemon-input' 
          type="text" 
          placeholder='Search pokemon'/>
      </form>
    )
  }
}

export default UserInputComponent;