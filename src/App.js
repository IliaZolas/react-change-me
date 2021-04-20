import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput'
import UserInput from './User/UserInput'

// InputOnChange = (event) => {
//   this.setState({
//     UserInput: [
//       {name: event.target.value}
//     ]
//   })
// };

class App extends Component {
  state = {
    username: "Change me please!"
  }

  changeUsernameHandler = (event) => {
    this.setState({username: event.target.value});
  }


  render() {
    return (
      <div className="App">
        <h1>My First React Application</h1>
        <p>Type something to manipulate the DOM</p>
        <UserInput 
          changed={this.changeUsernameHandler}
          currentName={this.state.username}></UserInput>
        <UserOutput userName={this.state.username}></UserOutput>
      </div>
    );
  }
}

export default App;
