import React from 'react';
import './App.css';
import User from './containers/User'
import Account from './containers/Account'
import LogInForm from './containers/LogInForm';

function App(props) {
  return (
    <div className="App">
    <Account store={this.props.store}/>
    <User />
    <LogInForm />
    </div>
  );
}

export default App;