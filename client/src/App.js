import React from 'react';
import './App.css';
import User from './containers/User'
import Account from './containers/Account'

function App(props) {
  return (
    <React.Fragment>
      <Account />
      <User />
    </React.Fragment>
  );
}

export default App;