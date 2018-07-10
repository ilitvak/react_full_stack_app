// import react is a webpack feature
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);

    // write bindings for methods
  }
  // methods go here

  render(){
    return(
      <div>
        {hello}
      </div>
    )
  }
}
//..


ReactDOM.render(<App />, document.getElementById("app"));