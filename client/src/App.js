import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
// import User from './containers/User'
// import Account from './containers/Account'
import Login from './containers/Login';
import Register from './containers/Register';
import Account from './containers/Account';
import { login } from './actions/App'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoginOpen: true, isRegisterOpen: true
    };
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="AppTitle" >Bread Expense Tracker</h1>
          {/* {this.props.login.login ? 
          <div>
            <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Account}/>
            </Switch>
            </BrowserRouter>
          </div> : 
          <div>
            <BrowserRouter>
            <Switch>
            <Route exact path="*" component={Login}/>
            </Switch>
            </BrowserRouter>
          </div>} */}
          <Register />
          <Login />
      </React.Fragment>
    ); 
  }
}

const mapStatetoProps = (state) => {
  return ({
    login: state.login
  })
}

export default connect(mapStatetoProps, null)(App)