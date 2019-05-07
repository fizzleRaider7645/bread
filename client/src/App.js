import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Switch, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Login from './containers/Login';
import Register from './containers/Register';
import Account from './containers/Account'
import Auth from './modules/Auth'
import { API_URL } from './actions/ApiUrl'

class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated()
    };
  }

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

  render() {
    return (
      <Router>
        <Link to="/login">Login </Link>
        <Link to="/register">Register </Link>
        <Link to="/account">Account </Link>
        <React.Fragment>
        <h1 className="AppTitle" >Bread Expense Tracker</h1>
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
            < Account/>  }/>
        </React.Fragment>
      </Router>
    ); 
  }
}

const mapStatetoProps = (state) => {
  return ({
    login: state.login
  })
}

export default connect(mapStatetoProps, null)(App)