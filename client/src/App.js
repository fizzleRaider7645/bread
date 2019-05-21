/* THIS FILE HANDLES LOGIN/LOGOUT/REGISTRATION OF USER  - OUTTER SECURITY LAYER */

import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './containers/Login';
import Register from './containers/Register';
import User from './containers/User'
import Auth from './modules/Auth';
import { unsetUser } from './actions/User'
import { API_URL } from './actions/ApiUrl';
import Navbar from './material-ui/Navbar'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated()
    };
  }
/* Login/Logout/Register/ fetching START */
  handleRegistrationSubmit = (event, data) => {
    event.preventDefault()
    fetch(`${API_URL}/users`, {
      method: 'POST',
      body: JSON.stringify({
        user: data
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      if(res.token === null) {
        alert('Enter Valid Email & Password')
        return
      }
      Auth.authenticateToken(res.token)
      this.setState({
        auth: Auth.isUserAuthenticated()
      })
    }).catch(err => console.log(err))
  }

  handleLoginSubmit = (event, data) => {
    event.preventDefault()
    fetch(`${API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        user: data
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      Auth.authenticateToken(res.token)
      this.setState({
        auth: Auth.isUserAuthenticated()
      })
    }).catch(err => console.log(err))

  }

  handleLogOut = () => {
    fetch(`${ API_URL }/logout`, {
      method: 'DELETE',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${ Auth.getToken() }`
      }
    }).then( res => {
      Auth.deauthenticateToken()
      this.setState({
        auth: Auth.isUserAuthenticated()
      })
      this.props.unsetUser()
    }).catch(err => console.log(err))
  }
/* Login/Logout/Register/ fetching END */

  render() {
    return (
      <Router>
        <React.Fragment>
        <Navbar handleLogOut={ this.handleLogOut } userAuth={this.state.auth}/>
          <Route 
            exact path="/register" 
            render={ () => (this.state.auth) ? <Redirect to="/account" /> : 
            <Register handleRegistrationSubmit={this.handleRegistrationSubmit} /> }
          />
          <Route 
            exact path="/login" 
            render={ () => (this.state.auth) ? <Redirect to="/account" /> :
            <Login handleLoginSubmit={this.handleLoginSubmit} /> }
          />
          <Route exact path="/account" render={ () => (!this.state.auth) ? <Redirect to="/login" /> :
            <User/>  }/>
        </React.Fragment>
      </Router>
    ); 
  }
}

export default connect(null, { unsetUser })(App)
