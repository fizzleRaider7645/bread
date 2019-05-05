import React, { Component } from 'react';
import './App.css';
// import User from './containers/User'
// import Account from './containers/Account'
import Login from './containers/Login';
import Register from './containers/Register';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoginOpen: true, isRegisterOpen: false
    };
  }
  render() {
    return (
      <React.Fragment>
        {this.state.isLoginOpen && <Login />}
        {this.state.isRegisterOpen && <Register />}
      </React.Fragment>
    ); 
  }
}

export default App;